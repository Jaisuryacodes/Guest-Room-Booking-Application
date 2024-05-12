import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  const [allPlaces,setAllplace]=useState()
  useEffect(()=>{
  axios.get('/allPlace').then(({data})=>{
   setAllplace(data)
  })
  },[])
  return ( 
<><div className=" ContainerBox grid grid-cols-5 m-3  ">
  {
    allPlaces?.map((place,index)=>{
      return(
        <div key={index} className="  w-[280px] h-96 cardBox  bg-[#bababa] flex flex-col justify-center align-middle items-center p-2  border-[1px] rounded border-[#7250aa] gap-2 ">

          <img className=" w-[250px] h-[150px]   border-[1px] rounded border-[#7250aa] object-cover " src={"http://localhost:4000/uploads/"+place.Photos[0]} alt="" />
          <div className="" >  
           <h1 className='font-bold text-[18px]'>{place.title}</h1>
            <h2 className=" ">🗺 {place.address}</h2>
         </div>
         <div className=" flex justify-between align-middle gap-6 ">
        <div className=" flex  justify-center align-middle items-center"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
    </svg>

        <p>{place.price} /day</p>
        </div>
       <div className=" flex justify-center align-middle items-center">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

       <p>{place.maxGuest}</p>
       </div>
         </div>
          <div className="">
           <Link to={'/Seemore'} className='p-1  text-white underline decoration-white flex  justify-center border-[#d9d8dc] border-[2px] bg-[#7250aa] '> See more</Link>
              </div>
        </div>
    
      )
    })
  }
  </div>
</>
  )
}

export default Content
