import React from 'react'
import logo from '../assets/image.png'
import { Link } from 'react-router-dom'
const CustomerMenu = () => {
  return (
<div className='sticky top-0 z-50 w-auto  flex justify-around align-middle items-center font-normal py-4 bg-[#7250aa] text-[#e6e6ea]'>
      <div className="  gap-2 text-[16px]  flex justify-around align-middle items-center  ">
         <img  className=" w-8" src={logo} alt="" />
        <h1 className='text-white'> SUMMER HOLIDAYS </h1>
      </div>
      <div className=" flex gap-4 text-[16px]  px-4 rounded-sm  " >
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm hover:text-[#f7f1f1]' to="/Buy"  >Buy</Link>
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm hover:text-[#f7f1f1]' to="/Rooms"  >Rooms</Link>
      </div>
   
   
   
      
    </div>
  )
}

export default CustomerMenu
