import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const SignupPage = () => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [mobile,setmobile]=useState('');
  const [address,setaddress]=useState('');
  const [password,setpassword]=useState('');
   function signup(ev){
    ev.preventDefault();
   axios.post('http://localhost:4000/Signup',{
      name,
      email,
      mobile,
      address,
      password,  
    }).then(
      res=>console.log(res)
    ).catch(err=>console.log(err))
    // alert('Signup successful');
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
    <form onSubmit={signup} className=' flex flex-col gap-[12px] items-center  text-[16px]   '>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c] placeholder:text-[#111111]' 
      type="text" placeholder="Full Name"  required
      value={name} 
      onChange={ev=>setname(ev.target.value)}
      />
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#0a0a0a]'  
       type="mail" placeholder='Mail id' required
       value={email} 
      onChange={ev=>setemail(ev.target.value)}
       />
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#0c0c0c]'  
       type="text" placeholder='Moblie Number' required maxLength='10'
       value={mobile} 
      onChange={ev=>setmobile(ev.target.value)}
       />
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#070707]' 
        type="text" placeholder='Address' required  
        value={address} 
      onChange={ev=>setaddress(ev.target.value)}
        />
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#111111]' 
       type="password" placeholder="Password"  required minLength='8'
       value={password} 
      onChange={ev=>setpassword(ev.target.value)}
       />
      <div className=" text-[12px] font-medium">
      <div className=" flex gap-4 font-medium mt-4">
      <h1>have Account <Link className='text-[#090918] underline decoration-white text-xl ml-2' to="/Login"> Login</Link> </h1></div> 
      <button className=' text-[24px] text-[#090918] mt-4' >Register</button>
      </div>
    </form>
   
</div>
</div>

   </div>
   
   </>
  )
}

export default SignupPage
