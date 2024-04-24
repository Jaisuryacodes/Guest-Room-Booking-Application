import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='flex justify-around font-normal py-4 bg-[#7250aa] text-white'>
      <div className=" flex gap-2 text-[24px]  ">
        <h1> SUMMER HOLIDAYS </h1>
      </div>
      <div className=" flex gap-4 text-[24px]  px-4 rounded-sm  " >
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm' to="/Buy"  >Buy</Link>
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm' to="/Rooms"  >Rooms</Link>
      <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm' to="/Sell"  >Sell</Link>
      </div>
      <div className=" flex gap-4 text-[24px]">
        <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4 rounded-sm' to="/Login"  >Login</Link>
        <Link className='bg-none transition-[10s] hover:bg-[#5c3897] px-4  rounded-sm' to="/Login"  >Signup</Link>
      </div>
    </div>
  )
}

export default Menu
