import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image.png"
import location from "../assets/icons8-location.gif"
const Menu = () => {
  return (
    <div className=' w-auto  flex justify-around align-middle items-center font-normal py-4 bg-[#7250aa] text-[#e6e6ea]'>
      <div className=" flex gap-2 text-[24px]  ">
         <img  className=" w-10" src={logo} alt="" />
        <h1 className='text-white'> SUMMER HOLIDAYS </h1>
      </div>
      <div className=" flex gap-4 text-[16px]  px-4 rounded-sm  " >
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm hover:text-[#f7f1f1]' to="/Buy"  >Buy</Link>
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm hover:text-[#f7f1f1]' to="/Rooms"  >Rooms</Link>
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm hover:text-[#fbf3f3]' to="/Sell"  >Sell</Link>
      </div>
   
    <div className=" flex font-medium justify-center align-middle items-center gap-4"> <img  className=" w-10 rounded-md hover:rotate-180" src={location} alt="" />{"Oddanchatram"} </div>
   
   
      <div className=" flex gap-4 text-[20px]">
        <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm hover:text-[#f8efef]' to="/Login"  >Register</Link>
        <Link className='bg-none transition-[10s]  hover:bg-[#5c3897] px-4  rounded-sm hover:text-[#f5ecec]' to="/Signup"  >Sign in</Link>
      </div>
    </div>
  )
}

export default Menu
