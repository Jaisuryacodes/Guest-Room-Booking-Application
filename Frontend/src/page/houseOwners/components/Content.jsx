import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link, Outlet } from 'react-router-dom'
const Content = () => {
const [place,setPlace]=useState([])
  // async function addnewplace(ev){
  //   ev.preventDefault();
  //   await axios.post('/place',(Response)=>{
  //     const {data}=Response.data;
  //     console.log(data);
  //   });
  //   setredirect('/HouseOwner');
 
  // }
  useEffect(()=>{
    axios.get('/places').then(({data})=>{
     
     setPlace(data);
     console.log(place.address);    
    });
   },[])
  
  return (
    <div className=' relative top-12 px-28 flex flex-col justify-center align-middle items-center'>
      <Link className='bg-purple-700 flex w-60 rounded-md text-white p-4 '  to={'NewForm'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


        Add new place
        </Link>
     <div className="Place container border-[1px] border-[#a4a1a1] flex justify-center align-middle items-center gap-4 mt-3 p-3 ">
      <div className="border-[1px] border-[#a4a1a1] w-[400px] h-[125px] bg-slate-400 ">
    
      </div>
      <div className="">
        <h1 className=' font-bold text-xl'>{place[0].title}</h1>
        <p>{place[0].description}</p>
        <h3>${place[0].price}</h3>
      </div>
     </div>
     
     <Outlet/>
    </div>
  )
}

export default Content
