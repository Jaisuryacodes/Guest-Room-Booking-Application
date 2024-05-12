import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SeeMore = () => {
  const {id} =useParams();
  const [place,setPlace]=useState(null);
  useEffect(()=>{
    if(!id) {
      return;
    }
    else{
      axios.get('/places/'+id).then(response=>{
        setPlace(response.data);
        
      })
    }
  },[id]);
  if(!place){
    return '';
  }
  return (
    <div>
      <Menu/>
  <div className=" p-3 flex  gap-4">
   
    <div className=" ">
    <h1 className=' font-black '>  {place.title}</h1>
    <h2>{place.address}</h2>
 <div className=" flex p-2 gap-2 ">
 <img className=" w-[500px] h-[400px]   border-[1px] rounded border-[#7250aa] object-cover " src={"http://localhost:4000/uploads/"+place.Photos[0]} alt="" />
<div className=" flex flex-col p-2 gap-2 ">
<img className=" w-[250px] h-[190px]   border-[1px] rounded border-[#7250aa] object-cover " src={"http://localhost:4000/uploads/"+place.Photos[1]} alt="" />
<div className=" relative">
<img className=" w-[250px] h-[200px]   border-[1px] rounded border-[#7250aa] object-cover " src={"http://localhost:4000/uploads/"+place.Photos[2]} alt="" />
   <div className='absolute bottom-2 left-10 text-[24px] flex align-middle items-center justify-center bg-[#009933] hover:bg-[#0039e6] rounded-sm px-4  text-white '>See More</div>
</div>

</div>
 </div>
    </div>
    <div >
      <div className=" w-[700px] text-wrap flex flex-col gap-3 mt-14" >
        <h1 className="  font-semibold">About the Place</h1>
      {place.description }
      </div>
    {place.price}
    </div>
    </div>        
          
    </div>
  )
}

export default SeeMore
