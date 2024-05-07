import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const SignupPage = () => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [mobile,setmobile]=useState('');
  const [Type,setType]=useState('');
  const [password,setpassword]=useState('');
   var status=''
   function signup(ev){
    ev.preventDefault();
   axios.post('/Signup',{
      name,
      email,
      mobile,
      Type,
      password,  
    }).then((res)=>{
      status=res.data.msg;
      alert(status);
    })
   
   }
 
  return (
    <>

<div className="  flex  flex-col justify-between  items-center text-[#1f6bb888] font-normal text-[24px] ">
<Link to='/'> <div className=" absolute z-40 ml-[-15px]  text-[24px] mt-4 bg-[#009933] hover:bg-[#cc0700] rounded-sm px-3 text-white ">
X 
  </div></Link>
<div className="  relative mt-4  flex   justify-center align-middle items-center ">

<div className="login page flex flex-col  justify-center align-middle items-center font-semibold  text-[#090918] rounded-md py-10 px-10 border-[1px]  border-[#c6bebe] w-[400px] "> 
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
   
           <div className=" bg-transparent outline-none  p-2 border-[1px] border-[#0c0c0c] flex gap-2  ">     
            <label htmlFor="Type" >Customer Type:</label>
          <select className='bg-[#009933] rounded-sm text-white outline-none' name="Type" 
           value={Type} 
           onChange={ev=>setType(ev.target.value)}>
           <option value=""></option>
           <option value="customer">Customer</option>
            <option value="HouseOwner">HouseOwner</option>
    </ select></div>
      <input className='bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#111111]' 
       type="password" placeholder="Password"  required minLength='8'
       value={password} 
      onChange={ev=>setpassword(ev.target.value)}
       />
      <div className=" text-[12px] font-medium">
      <div className=" flex gap-4 font-medium mt-4">
      <h1>have Account <Link className='text-[#090918] underline decoration-violet-700 text-xl ml-2' to="/Login"> Login</Link> </h1></div> 
      <button className=' text-[24px] mt-4 bg-[#009933] hover:bg-[#00cc44] rounded-sm p-1 text-white' >Register</button>
      </div>
      
    </form>
   
</div>
   
</div>

   </div>
   
   </>
  )
}

export default SignupPage
