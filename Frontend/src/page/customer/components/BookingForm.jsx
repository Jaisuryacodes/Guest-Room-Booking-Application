import React from 'react'

const BookingForm = () => {
  return (
   <>
    <div className=" flex  justify-center align-middle items-center p-8">
        <form className=" flex  flex-col justify-center align-middle  gap-4">
            <h1>Name :</h1>
            <input className='border-[2px] border-[#000] p-1' type="text"placeholder='Name' />
            <h1>Email :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='Email' />
            <h1>Phone :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='Phone' />
            <h1>Address :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='Address' />
            <h1>No of days :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="Number"placeholder='No of days' />
            <h1> Booking Date : </h1>
            <div className="flex gap-2 justify-center align-middle items-center">
            <h1> From Date :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="Date"placeholder='From Date' />
            <h1> To Date :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="Date"placeholder='To Date' />
            </div>
            <h1>Id Proof</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='Aadar no' />
        </form>
    </div>
   </>
  )
}

export default BookingForm
