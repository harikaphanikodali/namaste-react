
import { useState } from "react";
import { lOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus()

  const[btnName, setBtnName] = useState("Login");
    return (
      <div className="flex justify-between bg-green-100 ">
        <div className="logo-container">
          <img className="w-40" src={lOGO_URL} />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4 jus ">
            <li className="px-4">Online Status :{onlineStatus ? "✅" :"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={()=>{
             btnName ==="Login" ? 
             setBtnName("Logout") :
             setBtnName("Login")
             

            }}> {btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;