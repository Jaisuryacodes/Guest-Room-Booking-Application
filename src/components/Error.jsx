import React from 'react'
import { Link } from 'react-router-dom'
import errorgif from "../assets/error-page-design gif.gif"
const Error = () => {
  return (
    <div className=' flex flex-col justify-center align-middle items-center'>
        <h1 className=" font-extrabold text-[#ff0404]  text-[100px]">404 <span className='font-extrabold text-[#6237a8]  text-[100px]'> Page Not Found</span> </h1>
      <img className=' w-[850px] h-[500px]' src={errorgif} alt="" />
       <div className=" font-extrabold text-[#6237a8] outline-0 text-[30px]">
       <Link to="/">Back to Home</Link>
       </div>
    </div>
  )
}

export default Error
