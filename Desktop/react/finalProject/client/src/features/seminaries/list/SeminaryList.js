// import { Link } from "react-router-dom"
// import { useGetAllSeminariesQuery } from "../seminariesApiSlice"
// import Search from "../../../components/search/Search"
// import './seminaryList.css'
// const SeminaryList=()=>{
// const {data:seminariesObject,isError,error,isLoading,isSuccess}=useGetAllSeminariesQuery()
// if(isLoading) return <h1>Loading</h1>
// if(isError) return <h1>JSON.stringify (error)</h1>

//    // const seminaries=[{
//      //  id:1, name:"Seminary name",type:"OP",active:true,
//     //}]
//     return (
    
        
        
//     <div className="seminaryList">
//         <div className="seminaryList-top">
//             <Search placeholder="חיפוש לפי שם סמינר"/>
//             <Link to="/seminaries/add" className="seminaryList-add-button">
            
//                 הוספת סמינר
//             </Link>
//         </div>
//         <table className="seminaryList-table">
//             <thead>
//                 <tr>
//                     <td>שם סמינר</td>
//                     <td>נוצר ב</td>
//                     <td>סוג</td>
//                     <td>פעיל</td>
//                     <td>פעולות</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {/* {seminaries.map(seminary=( */}
//                     {seminariesObject.map(seminary => (

//                     <tr key={seminary._id} >
//                         <td>
//                         <div className="seminaryList-seminary">
//                             <img
//                             src={seminary.image||"/noavatar.png"}
//                             alt=""
//                             width={40}
//                             height={40}
//                             className="seminaryList-seminary-image"/>
//                             {seminary.name}
//                             </div>
//                             </td>
//                             <td>
//                                 {seminary.createdAt?.toString().slice(4,16)}
//                             </td>
//                             <td>
//                                 {seminary.type}
//                             </td>
//                             <td>
//                                 {seminary.active?"פעיל":"לא פעיל"}
//                             </td>
//                             <td>
//                                 <div className="seminaries-list-buttons">
//                                 <Link to={'/seminaries/${seminary._id}'} className="seminaries-list-button seminary-list-view">
//                                     צפיה</Link>
//                             {/* </td>
//                             <td> */}
//                                 <button to={'/seminaries/${seminary._id}'} className="seminaries-list-button seminary-list-delete">
//                                  מחיקה</button></div>
                                    
//                             </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
//     )
// }
// export default SeminaryList









import { Link } from "react-router-dom";
import { useGetAllSeminariesQuery } from "../seminariesApiSlice";
import Search from "../../../components/search/Search";
import './seminaryList.css';

const SeminaryList = () => {
  const { data: seminariesObject, isError, error, isLoading, isSuccess } = useGetAllSeminariesQuery();

  if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h1>{JSON.stringify(error)}</h1>
    // console.error("Error:", error);
    // return <h1>{error.message}  </h1>; // או כל מגמה אחרת שתחליטי
    
  // const seminariesObject=[{
  //   _id:1,name:"seminary name",type:"op"
  // }]

  return (
    <div className="seminaryList">
      <div className="seminaryList-top">
        <Search placeholder="חיפוש לפי שם סמינר"/>
        <Link to="/seminaries/add" className="seminaryList-add-button">
          הוספת סמינר
        </Link>
      
      </div>
      <table className="seminaryList-table">
        <thead>
          <tr>
            <td>שם סמינר</td>
            <td>נוצר ב</td>
            <td>סוג</td>
            <td>פעיל</td>
            <td>פעולות</td>
          </tr>
        </thead>
        <tbody>
          {seminariesObject.data?.map(seminary => (
            <tr key={seminary._id}>
              <td>
                <div className="seminaryList-seminary">
                  <img
                    src={seminary.image || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="seminaryList-seminary-image"
                  />
                  {seminary.name}
                </div>
              </td>
              <td>{seminary.createdAt?.toString().slice(4,16)}</td>
              <td>{seminary.type}</td>
              <td>{seminary.active ? "פעיל" : "לא פעיל"}</td>
              <td>
                <div className="seminaries-list-buttons">
                  <Link to={`/seminaries/${seminary._id}`} className="seminaries-list-button seminary-list-view">
                    צפיה
                  </Link>
                  {/* <button to={`/seminaries/${seminary._id}`} className="seminaries-list-button seminary-list-delete"> */}
                  <button className="seminaries-list-button seminaries-list-delete">
                    מחיקה
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default SeminaryList;
