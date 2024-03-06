
import { useState, useContext } from "react";
import { lOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
 import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus()

  const[btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items);

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
             <li className="px-4 font-bold text-xl"><Link to="/cart">Cart-{cartItems.length}</Link></li> 
            <button className="login" onClick={()=>{
             btnName ==="Login" ? 
             setBtnName("Logout") :
             setBtnName("Login")
             

            }}> {btnName}</button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;