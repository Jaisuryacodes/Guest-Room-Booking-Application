import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const SignupPage = () => {
  const handleclick = () => {
    alert("Thank you for signing up")
    axios.get("/").then(response=>console.log(response))
  }
  return (
    <>
<div className="FooterBox flex justify-around align-middle  font-bold  py-4 bg-[#7250aa] text-white">
SUMMER HOLIDAYS
</div>
<div className=" h-[100vh] flex  flex-col justify-between  items-center text-[#1f6bb888] font-normal text-[24px] ">

<div className=" h-[100vh] flex   justify-center align-middle items-center ">
<div className="login page flex flex-col  justify-center align-middle items-center font-semibold  text-[#090918] rounded-md py-10 px-10 border-[1px] backdrop-blur-sm bg-white/30 border-[#c6bebe] w-[400px] "> 
      <h1 className=' text-[24px] text-[#090918] '>Signup </h1>
    <form action="" className=' flex flex-col gap-[12px] items-center  text-[16px] text-[#f1f4f1]  '>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c] placeholder:text-[#111111]' type="email" placeholder="Full Name"  required/>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#0a0a0a]'   type="text" placeholder='Age' required maxLength='2'/>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#0c0c0c]'   type="text" placeholder='Moblie Number' required maxLength='10'/>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#070707]'   type="text" placeholder='Address' required maxLength='2'/>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#111111]'  type="password" placeholder="Password"  required minLength='8'/>
      <div className=" text-[12px] font-medium">
      <div className=" flex gap-4 font-medium mt-4">
      <h1>have Account <Link className='text-[#090918]' to="/Login"> Login</Link> </h1></div> 
      <button className=' text-[24px] text-[#090918] mt-4' type="submit" onClick={()=>handleclick()}>Register</button>
      </div>
    </form>
   
</div>
</div>

   </div>
   
   </>
  )
}

export default SignupPage
