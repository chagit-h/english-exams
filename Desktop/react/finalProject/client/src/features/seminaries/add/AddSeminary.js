import "./addSeminary.css"
import TextField from '@mui/material/TextField'
import { useAddSeminaryMutation } from "../seminariesApiSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const AddSeminary = () => {
  const [addSeminary,{data,isError,error,isSuccess,isLoading}]=useAddSeminaryMutation()
  const navigate=useNavigate()
  useEffect(()=>{
    if(isSuccess){
      navigate("/seminaries")
    }
  },[isSuccess])
  const formSubmit=(e)=>{
    e.preventDefault()
    const data=new FormData(e.target)
    const seminaryObject=Object.fromEntries(data.entries())
    console.log(seminaryObject);

    addSeminary(seminaryObject)
  }
  return (
    <div className="add-seminary-container">
        <form onSubmit={formSubmit} className="add-seminary-form">
        {/* <TextField type='text' label=' שם סמינר' variant='filled'   /> */}
            
            <input type="text" placeholder="שם הסמינר" required name="name" /> 
        <select  required  name="type" id="type">
            <option value="">בחר סוג:</option>
            <option value="OM">עוסק מורשה</option>
            <option value="OP">בחר</option>
            <option value="AM">בחר</option>
            <option value="CM">בחר</option>
            <option value="SYS">בחר</option>

        </select>
        <select    name="active" id="active">
            <option value={true}>פעיל?</option>
            <option value={false}>לא פעיל</option>
            <option value={true}> פעיל</option>

        </select>
        <input type="file" name="logo"/>
        <button type="submit" >שלח</button>
        </form>
        hgfjhgjkkk
    </div>
  )
}

export default AddSeminary