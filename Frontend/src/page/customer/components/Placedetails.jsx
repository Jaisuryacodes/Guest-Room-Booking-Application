import React, { useEffect, useState } from 'react'
import Menu from './CustomerMenu.jsx'
import { Link, Navigate, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import Calendar from './Calendarc.jsx';
import BookingForm from './BookingForm.jsx';

const Placedetails = () => {
    const [redirect, setRedirect]=useState(false);
    const {id} =useParams();
    const [place,setPlace]=useState(null);
    const [Booking,setBooking]=useState(false);
    const [BookingsRes,setBookingsRes]=useState([]);
     console.log(BookingsRes);

 
  
    useEffect(()=>{
      if(!id) {
        return;
        
      }
      else{
        axios.get('/places/'+id).then(response=>{
          setPlace(response.data);
          
        })
        axios.get('/availability/'+id).then(response=>{
          setBookingsRes(response.data);
          
        })
      }
    },[id]);
    if(!place){
      return '';
    }
     if(redirect){
     return  (
     <>
         
         <button onClick={()=>setRedirect(false)}  className="text-xl   font-medium  p-3 mt-2 text-[#000000] hover:text-[#fff] fixed  bg-[#ffffff] hover:bg-[#3e3b3b] flex right-3 justify-center align-middle gap-1 items-center border-[1px] border-[#8b8b8b] rounded-xl"> 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          close</button>
          <h1 className="text-2xl font-medium   mt-0 p-4  h-fit s   w-full bg-[#7250aa] flex justify-center text-white">
         All Photos
         </h1>
        <div className=" p-[80px] ">
     <div className="  flex flex-col gap-4 p-[50px] justify-center align-middle items-center">
        {
            place?.Photos.length > 0 && place.Photos.map(photo=>(
                       
              <img title={place.title} className=" w-full h-[600px]  cursor-pointer border-[1px] rounded border-[#757476] object-cover " src={"http://localhost:4000/uploads/"+photo} alt="" />
             

            ))
        }
     </div>
     
     </div>
     </>
     );
     };
    
     if(Booking){
     return <>
     <button onClick={()=>setBooking(false)} className=' bg-[#ff3636] rounded-xl p-3 font-medium text-white fixed ml-8 w-fit flex gap-2'  >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      Back</button>

   <div className="">     <BookingForm/></div>

     </> 
     }
    return (
      <>
        <div className=" px-[40px] mt-[32px]  rounded-lg ">
          <div className="   bg-slate-300 rounded-lg  ">
            <div className=" flex  gap-5 align-middle items-center justify-between px-[40px] ">
              <div className=" mt-8 p-5">
                <h1 className=" font-black  "> {place.title}</h1>
                <h2 className=" font-normal flex underline ">
                  🗺{" " + place.address}
                </h2>
              </div>
              <div
                title=" Mobile no"
                className="flex gap-2 cursor-pointer px-[30px] bg-gray-400 rounded-xl w-fit p-3 justify-center align-middle items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6  hover:rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <h1>+91{place.contactInfo}</h1>
              </div>
            </div>

            <hr className="  bg-slate-500  " />
            <div className="flex flex-col md:flex md:flex-row px-[40px]  gap-8   py-5">
              <div className=" flex flex-col md:flex md:flex-row    gap-2 ">
                <img
                  onClick={() => setRedirect(true)}
                  className="  h-[400px]  rounded border-[1px] cursor-pointer border-[#89878c] object-cover "
                  src={"http://localhost:4000/uploads/" + place.Photos[0]}
                  alt=""
                />

                <div className="   flex flex-col   gap-2 ">
                  <img
                    onClick={() => setRedirect(true)}
                    className="  h-[190px]  cursor-pointer border-[1px] rounded border-[#89878c] object-cover "
                    src={"http://localhost:4000/uploads/" + place.Photos[1]}
                    alt=""
                  />
                  <div className="relative ">
                    <img
                      onClick={() => setRedirect(true)}
                      className="  h-[200px] cursor-pointer border-[1px] rounded border-[#89878c] object-cover "
                      src={"http://localhost:4000/uploads/" + place.Photos[2]}
                      alt=""
                    />
                    <button
                      onClick={() => setRedirect(true)}
                      className=" absolute  bottom-2 left-10  text-[24px] flex align-middle items-center justify-center bg-[#3d2da7] hover:bg-[#0039e6] rounded-lg  px-3  text-white "
                    >
                      3+more..
                    </button>
                  </div>
                </div>
              </div>

              <div className=" w-[1px] bg-slate-500  ">&nbsp;</div>
              <div>
                <div className=" flex flex-col gap-3  ">
                  <h1 className="  font-semibold underline  text-xl">
                    Details
                  </h1>

                  <div className=" flex gap-2 bg-gray-400 rounded-xl w-fit p-3">
                    <div className="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h1> {place.price}/day</h1>
                    </div>
                    <div className="flex gap-1" title="Maximum no of Guest">
                      |
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <h1>{place.maxGuest}</h1>
                    </div>
                  </div>
                  <div className="flex gap-2 bg-gray-400 rounded-xl w-fit p-3  justify-center align-middle items-center ">
                    <div className=" flex gap-1 ">
                      {" "}
                      🛌
                      <h1>{place.bets}</h1>
                    </div>
                    <div className="flex gap-1  ">
                      | 🏠
                      <h1>{place.rooms}</h1>
                    </div>
                    <div className="flex gap-1  ">
                      |<button>🔴More</button>
                    </div>
                  </div>
                  <div className="flex  flex-col  gap-3 justify-between ">
                    <div className=" gap-2 bg-gray-400 rounded-xl w-fit p-3  justify-center align-middle items-center">
                      <h1>{place.perks}</h1>
                    </div>
                    <div className=" flex  bg-gray-400 rounded-xl w-fit p-3  justify-center align-middle items-center">
                      <h1> Minimum Days : {place.MinimumDays}</h1>|
                      <h1> Maximum Days : {place.MaximumDays}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="p-9 flex  gap-3 justify-evenly align-middle items-center">
              <div className=" flex flex-col">
                <h1 className="  font-semibold underline ">About the Place</h1>
                <div className="w-[500px] text-[16px] ">
                  {" "}
                  {place.description}
                </div>
              </div>

              <Calendar bookings={BookingsRes} />
              <div className=" flex  gap-3 justify-center align-middle items-center">
                <Link
                  className=" bg-[#ff3636] rounded-xl py-3 px-2  font-medium text-white mb-3 flex gap-2 justify-center align-middle items-center"
                  to={"/Customer"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Back
                </Link>
                <button
                  onClick={() => setBooking(true)}
                  className=" bg-[#ff3636] rounded-xl p-3 font-medium text-white mb-3"
                >
                  Booknow
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  

export default Placedetails
