import React, { useContext, useState } from "react";
import avatorIcon from "../assets/UseravatarIcon.png";
import MenuIcon from "../assets/MenuIcon.png";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
const ProfileIcon = () => {
  const [Redirect,setRedirect]=useState(null);
  const [menucard, setmenucard] = useState(false);
  function menufn() {
    setmenucard((previous) => !previous);
  }
  
  const { User } = useContext(UserContext);
  async function logout(){
   await axios.post('/logout' );
   setRedirect('/');
  }
  if(Redirect){
    return <Navigate to ={Redirect}/>
  }
  return (
    <div onClick={menufn}>
      <div className=" flex flex-col  ">
        <div className="bg-[#f5f7f6] flex p-2 gap-2 rounded-full justify-center align-middle items-center text-black">
          <img className="w-[30px]" src={avatorIcon} />
          {<div >{User?.name}</div>}
          <img className="w-[30px]" src={MenuIcon} />
         
        </div>  
        {menucard ? (
          <div className=" px-5 absolute top-16 right-5 bg-[#3cf94f] rounded-md text-black">
            <button onClick={logout} > Logout</button>
          </div>
        ) : (
          <h3></h3>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;
