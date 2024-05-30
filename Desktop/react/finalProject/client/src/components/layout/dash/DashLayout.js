import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"
import Sitebar from "../../sitbar/Sitebar"
import "./dash-layout.css"
const DashLayout=()=>{
    return (
    <div className="container">
        <div className="menu">
            <Sitebar />
        </div>
        <div className="content">
            <Navbar />
            <Outlet />
            <Footer />
            
            
        </div>
    </div>
    )
}
export default DashLayout
// import Sitebar from "../../sitbar/Sitebar"
// const DashLayout = () => {
//   return (
//     <div className='container'>
//       <div className='mane'>
//         <Sitebar/>
//       </div>
//       <div className='contemt'>
//       <Navbar/>
//       <Outlet/>
//       <Footer/> 
//       </div>
//       </div>
//   )
// }

// export default DashLayout