// // // import { NavLink } from "react-router-dom"


// // // const MenuLink = ({item}) => {
// // //   return (
// // //     <NavLink to={item.path} className={sitebar-menu-link}>
// // //         {item.icon}
// // //         {item.titel}
// // //     </NavLink>
// // //   )
// // // }

// // // export default MenuLink
// // import React from 'react'
// // import {NavLink} from "react-router-dom"
// // const NenuLink = ({itme}) => {
// //   return (
// // //   <NavLink  to={itme.path} className={"side-bar-menu-link"}>
// // //     {itme.icon}
// // //     {itme.title}
// // //      </NavLink>
// // <></>
// //   )
// // }

// // export default NenuLink




// import React from 'react'
// import {NavLink} from "react-router-dom"
// const MenuLink = ({itme}) => {
//   return (
//   <NavLink  to={itme.path} className={"sitebar-menu-link"}>
//     {item.icon}
//     {item.title}
//      </NavLink>
//   )
// }

// export default MenuLink



import React from 'react'
import { NavLink } from 'react-router-dom'
const MenuLink = ({item}) => {
  return (
    <NavLink to={item.path} className="sitebar-menu-link">
      {item.icon}
      {item.title}
    </NavLink>
  )
}

export default MenuLink