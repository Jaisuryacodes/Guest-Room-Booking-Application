import React from 'react'
import { Link } from 'react-router-dom'
const Loginpage = () => {
  return (
 
<>
<div className="FooterBox flex justify-around align-middle  font-bold  py-4 bg-[#7250aa] text-white">
SUMMER HOLIDAYS
</div>
<div className=" h-[81.9vh] flex  flex-col justify-between  items-center text-[#1f6bb888] font-normal text-[24px] ">

<div className="login page flex flex-col mt-[15%] justify-center align-middle items-center font-semibold  text-[#0c0c0c] rounded-md py-10 px-10 border-[1px] backdrop-blur-sm bg-white/30 border-[#c6bebe] w-[400px] "> 
      <h1>Welcome</h1>
    <form action="/customerLogin" className=' flex flex-col gap-[12px] items-center  text-[16px] text-[#0c0c0c]  '>
    <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#111111]' type="email" placeholder="Email / Phone no.."  required/>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#111111]'  type="password" placeholder="Password" required/>
      <div className=" text-[12px] font-medium">
      <div className=" flex gap-4 font-medium mt-4"> <Link to="/forgetpassword">Forget Password?</Link>
      <h1>No Account ? <Link to="/Signup">Signup</Link> </h1></div>
      <button className=' text-[24px] mt-4' type="submit">Login</button>
      </div>
    </form>
   
</div>
  
      
    
   </div>
  
   </>


    
  
 
  )
}

export default Loginpage
