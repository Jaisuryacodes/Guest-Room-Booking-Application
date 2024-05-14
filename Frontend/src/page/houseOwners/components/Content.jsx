import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

import { Link, Outlet, useParams } from 'react-router-dom'
// import { UserContext } from '../../../components/UserContext'

const Content = () => {
const [places,setPlaces]=useState();
 
  useEffect(()=>{
    
    if(!places){
  axios.get('/places').then(({data})=>{
    
        setPlaces(data);
})

    }
},[])

   function deleteplace(id){
    
     axios.delete('/deletePlace/'+id).then(()=>{
      window.location.reload(false);
     });


   }
  return (
    <div className='  relative top-12 flex flex-col justify-center align-middle items-center'>
      <Link className='bg-purple-700 flex w-60 rounded-md text-white p-4 '  to={'NewForm'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


        Add new place
        </Link>
        <div className="w-[800px] ">
    {
      places?.map((place,index)=>{
        return <div key={index} className="Place container  bg-[#bababa]  border-[1px] rounded border-[#7250aa] flex  align-middle items-center gap-3 mt-3 p-3  h-full">
      
       <img   className="border-[1px] border-[#a4a1a1] w-[200px] h-[170px] object-cover  bg-slate-400 rounded-md  " src={"http://localhost:4000/uploads/"+place.Photos[0]} alt="" />
     
        <div className="border-[1px] border-[#a4a1a1] w-full bg-slate-400  h-auto p-1  rounded-sm flex flex-col gap-2 ">
     
          <div className=" text-white  border-[#d9d8dc] border-[2px] bg-[#7250aa]  p-1">
          <h1>{place.title}</h1>
        <p>{place.address}</p>
          </div>
         
            <div className=" flex gap-2 items-center p-3 bg-gray-600 text-white w-[150px] rounded-2xl  ">
            <div className=" flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
               </svg>
            {place.price}
            </div>
           <div className=" flex">|
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
             </svg>
              {place.maxGuest}
           </div>
            </div>    
           <div className=" flex gap-2">
      
              
           <Link className="text-[24px] bg-[#009933] hover:bg-[#0039e6] rounded-sm px-3 text-white w-fit flex justify-center align-middle items-center gap-2" to={'/HouseOwner/NewForm/'+place._id}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

            Edit</Link>

            
           <button className="text-[24px] bg-[#ff3737] hover:bg-[#888889] rounded-sm px-3 text-white w-fit  flex justify-center align-middle items-center gap-2" onClick={()=>deleteplace(place._id)}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

            Delete</button>
            
            </div>   
        </div>
       </div>
      })
    }
     </div>
     <Outlet/>
    </div>
  )
}

export default Content
