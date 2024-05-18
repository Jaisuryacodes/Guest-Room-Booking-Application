import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
const BookingReq = () => {
    const [bookings,setBookings]=useState([]);
  
    useEffect(()=>{
      axios.get('/bookingsReq').then(res=>{
         setBookings(res.data);
      
    });
  },[]);

  function cancelBooking (id){    
      axios.delete('/deletebooking/'+id).then(()=>{
       window.location.reload(false);
      
      });
  
  }
  
  
    return (
      <div className=' mt-5  flex flex-col gap-6 px-[300px]  '>
        <Link className="text-[24px] bg-[#ff3737] hover:bg-[#888889] rounded-md px-3 text-white w-fit " to={'/Customer'}>Back</Link>
        {bookings?.length > 0 && bookings.map(booking=>(
        <>
         <div className=" border-[1px] border-[#6a6767] p-4 flex gap-2  bg-[#bdbaba] rounded-lg align-middle justify-center  ">
          <div className=" object-cover">
         <img title={booking.place.title} className = " w-[200px] h-full cursor-pointer border-[1px] rounded border-[#757476]  " src={"http://localhost:4000/uploads/"+booking.place.Photos[0]} alt="" />
  
          </div>
        <div className="  border-[1px] border-[#6a6767] w-full p-2 bg-[#bababa]  rounded-md  flex flex-col align-middle justify-center  gap-2">
          <h1 className=' font-medium text-xl underline'>{booking.place.title}</h1>
          <div className=" flex gap-3">
            <h1 className=' font-medium bg-[#2f1541] text-white p-1 rounded-md '> From Date : <span className=' font-normal'> {booking.fromdate}</span></h1>
            <h1 className='  font-medium bg-[#2f1541] text-white p-1 rounded-md'> To Date : <span className=' font-normal'> {booking.todate}</span></h1>
          </div>
  <div className="  flex    gap-2 ">
  <h1 className='  font-medium bg-[#572a77] text-white  rounded-md w-fit p-2'> No of Days Booked :<span className=' font-normal'> {booking.noofdays}</span></h1>
  <h1 className='  font-medium bg-[#7c4e9e] text-white  rounded-md w-fit p-2'> House Owner 📞 :<span className=' font-normal'> {booking.place.contactInfo}</span></h1>
  <h1 className='  font-medium flex gap-1 justify-center items-center bg-[#52d737] p-1 rounded-md'> Amount :<span className=' font-normal bg-[#7c4e9e] text-white p-1 rounded-md'>₹ {booking.prices}</span></h1>
    
    </div> 
    <button className="text-[24px] bg-[#ff3737] hover:bg-[#888889] rounded-md px-3 text-white w-fit  flex justify-center align-middle items-center gap-2" onClick={(ev)=>cancelBooking(booking._id)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
  
  
              Cancel request</button>     
        </div>
         </div>
          </>))}
        
      </div>
    )
}

export default BookingReq
