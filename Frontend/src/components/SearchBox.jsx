import React from 'react'

const SearchBox = () => {
  return (
    <>
<div className="p-3">
       <div className=" py-[100px]  border-x-[3px] border-b-4 border-[#7250aa] rounded flex  flex-col justify-center align-middle items-center gap-6 ">

<div className=" px-8  flex   flex-col justify-center align-middle items-center gap-2 font-semibold  ">
<h1 className='text-[32px] flex justify-center align-middle'>Guest Houses</h1>
 <h3 className='text-[24px] flex justify-center align-middle'> Find the guest houses that appeal to you the most</h3>
 <form className="  flex flex-col md:flex md:flex-row gap-2 md:gap-4   justify-center align-middle items-center p-2 bg-white border-[#4c4fe0] border-[2px]" action="">
 <div className="flex flex-col md:flex md:flex-row mt-2 gap-2">
 <h1> From : <input className='ml-1 border-[4px] rounded-sm  border-[#7250aa] h-[50px] bg-white' type="date"  /></h1>
 <h1>To : <input className=' ml-1  w-auto  p-4 border-[4px] rounded-sm  border-[#7250aa] h-[50px] bg-white' type="date"  /></h1>
  
 </div>
  <div className=" flex flex-col md:flex md:flex-row  gap-2 align-middle justify-center items-center">
   <input className='  w-auto  border-[4px]  rounded-sm  border-[#7250aa] h-[50px] bg-white placeholder:text-black' type="text" placeholder='📍 Place' />
   <button className=' w-[150px] border-[4px]  rounded-sm  border-[#05050a] h-[50px] bg-[#7250aa] text-white font-semibold' type="submit">Search</button>

    </div>
     </form>
</div>

</div></div></>
  )
}

export default SearchBox
