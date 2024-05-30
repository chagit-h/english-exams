import Input from  "@mui/material/Input"
import Button from  "@mui/material/Button"
import "./navbar.css"
import{
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md"
const Navbar=()=>{
    return (
        <div className="navbar">
            <div className="navbar-title">
                ראשי
            </div>
            <div className="navbar-menu">
                <div className="navbar-search">
                    <MdSearch/>
                    <Input variant="contained" color="secondary" type="text" placeholder="Search..." className="navbar-input"/>
                    {/* <input color="secondary"  type="text" placeholder="Search..." className="navbar-input"/> */}
                    {/* <Button variant="contained" color="secondary"  className="ww">gujhkhk</Button> */}
                </div>
                <div className="navbar-icons">
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>

                </div>
            </div>
        </div>
    )
}
export default Navbar