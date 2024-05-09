import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image.png"
import location from "../assets/icons8-location.gif"
const Menu = () => {
  return (
    <div className=' fixed  w-full  flex justify-between align-middle items-center font-normal p-3 bg-[#7250aa] text-white '>
      <div className=" flex gap-2 text-[24px]  ">
         <img  className=" w-10" src={logo} alt="" />
         <Link to="/">        <h1 className='text-white'> SUMMER HOLIDAYS </h1></Link>

      </div>   
      <div className=" flex gap-4 text-[20px]">
        <Link className='bg-[#009933] border-[1px] border-[#fff] transition-[10s]  hover:bg-[#7448bb] px-4 rounded-sm hover:text-[#f8efef]' to="/Login"  >Login / Register</Link>
      
      </div>
    </div>
  )
}

export default Menu
