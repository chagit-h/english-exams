//import { Navigate, useParams } from 'react-router-dom'
import './singleSeminary.css'
import { useNavigate ,useParams} from "react-router-dom"

import { useGetAllSeminariesQuery,useUpdateSeminaryMutation } from '../seminariesApiSlice'
import { useEffect } from 'react'
const SingleSeminary = () => {
    const {seminaryId}=useParams()
    const {data:seminariesObject,isError,error,isLoading,osSuccess}=useGetAllSeminariesQuery()
   const [updateSeminary,{isSuccess:isUpdateSuccess}]=useUpdateSeminaryMutation()
   const navigate=useNavigate()
   useEffect(()=>{
    if(isUpdateSuccess){
        navigate("/seminaries")
        
    }
   },[isUpdateSuccess])
   
   
   
   
   const formSubmit=(e)=>{
    e.preventDefault()
    const data=new FormData(e.target)
    const seminaryObject=Object.fromEntries(data.entries())
    console.log(seminaryObject);

    updateSeminary(seminaryObject)
   }
   
   
   
   
   
   
   if (isLoading) return <h1>Loading</h1>;

    if (isError) return <h1>{JSON.stringify(error)}</h1>
   const seminary=seminariesObject.data.find(sem=> sem._id===seminaryId)
if(!seminary) return <h1>{"not found"}</h1>
  return (
    <div className='single-seminary-container'>
        <div className='single-seminary-info'>
            <div className='single-seminary-img-container'></div>
       <img src={seminary.image||"/novatat.png"}/>
        </div>
        {seminary.name}
        <div className='single-semiary-form-container'>
            <form onSubmit={formSubmit} className='single-seminary-form'>
                <input name='_id' defaultValue={seminary._id} type='hidden'/>
                <label>שם סמינר</label>
                <input defaultValue={seminary.name} type='text' name='name' placeholder='הכנס שם חברה'/>
                <label>סוג החברה</label>
                <select  required  name="type" id="type">
            <option selected={seminary.type==='OM'} value="OM">עוסק מורשה</option>
            <option  selected={seminary.type==='OP'} value="OP">עוסק פטור</option>
            <option selected={seminary.type==='AM'} value="AM">בחר</option>
            <option selected={seminary.type==='CM'}  value="CM">בחר</option>
            <option selected={seminary.type==='SYS'} value="SYS">בחר</option>

        </select>
        <label>פעיל</label>
        <select    name="active" id="active">
            <option selected={!seminary.active} value={false}>לא פעיל</option>
            <option  selected={seminary.active}  value={true}> פעיל</option>

        </select>
        <button>עדכן</button>
            </form>
        </div>
    </div>
  )
}

export default SingleSeminary