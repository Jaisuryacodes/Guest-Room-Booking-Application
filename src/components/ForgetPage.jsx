import React from 'react'
import Footer from './Footer'
import Menu from './Menu'

const ForgetPage = () => {
  return (
<>
<Menu/>
<div className=" flex justify-center align-middle items-center h-[80vh]  backdrop-blur-sm bg-white/5 " >

<form className='flex  flex-col gap-4 justify-center align-middle items-center  backdrop-blur-sm bg-white/15 rounded-md border-[1px]  border-[#878181] p-[80px]  ' action="">
  <h1 className='text-[24px] mb-[32px]  text-white bg-[#7250aa] p-2 rounded-sm'>Forget Password</h1>
  <input className='bg-transparent outline-none p-2 border-[1px] text-white bg-[#7250aa]  placeholder:text-[#dcd9d9]' type="email" placeholder="Email / Phone no.."  required/>

<div className=" flex  gap-10   "> 
 <button className=' text-[16px] mt-4  text-white bg-[#7250aa] rounded-md p-2 hover:text-[#7250aa] hover:bg-white' type="submit">Reset</button>
  <button className=' text-[16px] mt-4 text-white bg-[#7250aa] rounded-md p-2 hover:text-[#7250aa] hover:bg-white' type="submit">Resend</button>
  </div>
</form>

</div>
<Footer/>
</>
   
  )
}

export default ForgetPage
