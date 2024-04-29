import React from 'react'
import Samplepic from "../assets/GhsamplePic1.jpg"
const Cards = () => {
  return (
    <>
    <div className="  p-3 mb-3 mt-3 backdrop-blur-md  bg-white/10  border-[1px] rounded border-[#7250aa] ">
        <div className="flex flex-col gap-4">
        <div className="">
          <img className='w-[400px]' src={Samplepic} alt="" />
        </div>
        <div className=" text-white  border-[#d9d8dc] border-[2px] bg-[#7250aa]  p-1">
        <h1>Serenity Paradise 2BR in Marina</h1>
        <h3>Dubai Marina, Dubai</h3>
        </div>
        <div className="">

        </div>
            <div className="text-white flex  justify-center border-[#d9d8dc] border-[2px] bg-[#7250aa]  p-1">
               <button>Reserve this guest house</button>
             </div>    
        </div>
    </div>
    </>
  )
}

export default Cards
