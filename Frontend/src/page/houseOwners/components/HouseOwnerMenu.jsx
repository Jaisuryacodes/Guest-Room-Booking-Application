import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image.png"
import ProfileIcon from '../../../components/ProfileIcon'
const HouseOwnerMenu = () => {
  return (
    <div className='  w-full  flex justify-between align-middle items-center font-normal p-2 bg-[#7250aa] text-[#e6e6ea]'>
    <div className="  gap-2 text-[16px]  flex justify-around align-middle items-center  ">
    <Link className='text-white flex gap-1'  to="/"> <img  className=" w-8" src={logo} alt="" />   SUMMER HOLIDAYS </Link>
     
     </div>
     <ProfileIcon />

 </div>
  )
}

export default HouseOwnerMenu
