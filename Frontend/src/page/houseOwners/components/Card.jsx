import React from 'react'
import Samplepic from "../assets/GhsamplePic1.jpg"
import editicon from "../assets/edit.png"
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <>
    <div className="  relative p-3 mb-3 mt-3 backdrop-blur-md  bg-white/10  border-[1px] rounded border-[#7250aa] ">
       
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
        
    <Link to="/">  <div className=" w-10 right-0 top-0 absolute z-40 bg-[#0b0a13] ">
       <img className='' src={editicon} alt="" />
       </div></Link>
    </div>
    </>
  )
}

export default Card
