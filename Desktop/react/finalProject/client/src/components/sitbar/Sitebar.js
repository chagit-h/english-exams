// import "./sitebar.css";
// import { NavLink } from "react-router-dom";
// import {
//   MdDashboard,
//   MdSupervisedUserCircle,
//   MdPendingActions,
//   MdOutlineSettings,
//   MdHelpCenter,
//   MdOutlineBusinessCenter,
//   MdLogout,
// } from "react-icons/md";
// // import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// // import useAuth from "../../hooks/useAuth";
// const SiteBar = () => {
//   // const {username,fullname,company,roles}=useAuth()
// //   const [logout, { isSuccess, isError }] = useSendLogoutMutation();
//   const navigate = useNavigate();
//   const menuItems = [
//     {
//       title: "דפים",
//       list: [
//         {
//           title: "ראשי",
//           path: "/dash",
//           icon: <MdDashboard />,
//         },
//         {
//           title: "משתמשים",
//           path: "users",
//           icon: <MdSupervisedUserCircle />,
//         },
//         {
//           title: "חברות",
//           path: "companies",
//           icon: <MdOutlineBusinessCenter />,
//         },
//         {
//           title: "פעולות",
//           path: "actions",
//           icon: <MdPendingActions />,
//         },
//       ],
//     },
//     {
//       title: "משתמש",
//       list: [
//         {
//           title: "הגדרות",
//           path: "settings",
//           icon: <MdOutlineSettings />,
//         },
//         {
//           title: "עזרה",
//           path: "help",
//           icon: <MdHelpCenter />,
//         },
//       ],
//     },
//   ];

//   const user = {
//     username: "username",
//     fullname: "שם מלא ",
//     company: "שם חברה ",
//     image: "",
//   };
//   useEffect(() => {
//     // if (isSuccess) navigate("/login");
// //   }, [isSuccess]);
//   const logoutClick = () => {
//     // logout();
//   };
// //   return (
// //     <div className="side-bar">
// //       <div className="side-bar-user">
// //         {/* <img src={company?.image || "/logo612.jpg"} alt="" width="50" height="50" /> */}
// //         <img src={user.image || "/3.png"} alt="" width="50" height="50" />

// //         <div className="side-bar-user-details">
// //           {/* <span className="side-car-user-username">{fullname} </span> */}
// //           <span className="side-car-user-username">{user.fullname} </span>
// //           {/* <span className="side-car-user-title">{company?.name} </span> */}
// //           <span className="side-car-user-title">{user.company} </span>
// //           {/* <span className="side-car-user-title">{roles} </span> */}


// //         </div>
// //       </div>
// //       <ul className="side-bar-menu-list">
// //         {menuItems.map((cat) => (
// //           <li key={cat.title}>
// //             <span className="side-bar-menu-cat"> {cat.title} </span>
// //             {cat.list.map((itme) => (
// //               <NenuLink itme={itme} key={itme.title} />
// //             ))}
// //           </li>
// //         ))}
// //       </ul>
// //       <button onClick={logoutClick} className="side-bar-logout">
// //         <MdLogout />
// //         יציאה
// //       </button>
//     // </div>

// //   );
// // };
// return (
// <h1>sss</h1>
//   }
// export default SiteBar;
import MenuLink from "./MenuLink";
import "./sitebar.css";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdPendingActions,
  MdOutlineSettings,
  MdHelpCenter,
  MdOutlineBusinessCenter,
  MdLogout,
} from "react-icons/md";
const SiteBar=()=>{
const menuItems = [
      {
        title: "דפים",
        list: [
          {
            title: "ראשי",
            path: "/dash",
            icon: <MdDashboard />,
          },
          {
            title: "משתמשים",
            path: "users",
            icon: <MdSupervisedUserCircle />,
          },
          {
            title: "חברות",
            path: "seminaries",
            icon: <MdOutlineBusinessCenter />,
          },
          {
            title: "פעולות",
            path: "actions",
            icon: <MdPendingActions />,
          },
        ],
      },
      {
        title: "משתמש",
        list: [
          {
            title: "הגדרות",
            path: "settings",
            icon: <MdOutlineSettings />,
          },
          {
            title: "עזרה",
            path: "help",
            icon: <MdHelpCenter />,
          },
        ],
      },
    ];
  
    const user = {
      username: "username",
      fullname: "שם מלא ",
      seminary: "שם חברה ",
      image: "",
    };

  return (

      <div className="sitebar">

     <div className="sitebar-user">
      <img src={user.image||"/novatat.png"}
      alt=""
      width={50}
      height={50}
      className="sitebar-user-image"
      />
      <div className="sitebar-user-details">
      <div className="sitebar-user-username">{user.fullname}</div>
      <div className="sitebar-user-seminary">{user.seminary}</div>
      </div>
      </div>
<ul className="sitebar-menu-list">
  {/* {menuItems.map(cat=>(
    <li key={cat.title}>
      <span className="sitebar-menu-cat">{cat.title}</span>
      {cat.list.map(item=>(
        <MenuLink item={item} key={item.title}/>
      ))}
    </li>
  ))} */}


{menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="side-bar-menu-cat"> {cat.title} </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      

</ul>
   <button className="sitebar-logout">
    <MdLogout/>
    יציאה
   </button>

     </div>
      )
}
export default SiteBar
