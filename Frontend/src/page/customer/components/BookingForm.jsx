import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
 import { differenceInCalendarDays,format, addDays } from 'date-fns';

const BookingForm = () => {
    const {id} =useParams();
    const [err,setErr]=useState('');
    const [place,setPlace] = useState('');
    const [owner ,setOwnerId] = useState('');
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [address,setaddress]=useState('');
    const [dayStatus,setdayStatus]=useState("false");
    const [fromdate,setFromdate]=useState('');
    const [todate,setTodate]=useState('');
    const [idProof,setIdproof]=useState('');
    const [maxdays,setMaxdays]=useState('');
    const [price,setPrice]=useState('');
    const [totalCost,setTotalCost]=useState('');
    const [ bookingId, setbookingId]=useState('');
    var noofdays=1;
    useEffect(()=>{
      
          axios.get('/places/'+id).then(response=>{
              setMaxdays(response.data.MaximumDays);
              setPrice(response.data.price);
            setPlace(response.data._id);
            setOwnerId(response.data.owner);
            
            
          })
        
      },[id]);
async function Booking(ev){
    ev.preventDefault();
    const response = await axios.post('/bookings',{ 
        place,
        owner,
        name,
        email,
        phone,
        address,
        fromdate,
        todate,
        noofdays,
        prices:totalCost,
        idProof,});
         setbookingId (response.data._id);
}
      function totaldaysChecker(){
      if(noofdays>maxdays){
        setErr('Please check maximum days ⚠'+noofdays  )
        setdayStatus('false');
        }
        else {
            setErr('valid ✔'+ noofdays );
            setdayStatus('true');
            setTotalCost(noofdays*price);
        }
      }
      if(fromdate && todate ){
        noofdays= differenceInCalendarDays(new Date(todate),new Date(fromdate));
      }
      if(bookingId){
        return <Navigate to={'/Customer/bookings'}/>
      }
  return (
   <>
    <div className=" flex  justify-center align-middle items-center p-8">
        <form className=" flex  flex-col justify-center align-middle  gap-4" onSubmit={(ev)=>{Booking(ev)}} >
            <h1>Name :</h1>
            <input className='border-[2px] border-[#000] p-1' type="text"placeholder='Name' 
                value={name}
                onChange={ev=>setname(ev.target.value)}
            />
            <h1>Email :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='Email' 
                value={email}
                onChange={ev=>setemail(ev.target.value)}
                />
            <h1>Phone :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='Phone' 
                value={phone}
                onChange={ev=>setphone(ev.target.value)}
            />
            <h1>Address :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='Address' 
                value={address}
                onChange={ev=>setaddress(ev.target.value)}
            />
           
            <h1> Booking Date : </h1>
            <div className="flex gap-2 justify-center align-middle items-center">
            <h1> From Date :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="Date"placeholder='From Date' 
                value={fromdate}
                onChange={ev=>setFromdate(ev.target.value)}
            />
            <h1> To Date :</h1>
            <input  className='border-[2px] border-[#000] p-1' type="Date"placeholder='To Date'
                value={todate}
                onChange={ev=>setTodate(ev.target.value)}
                
           />
            </div>
           <span onClick={totaldaysChecker} className='bg-red-500 text-white p-2 rounded-sm w-fit'>Total Price and total days</span>

            <h1>No of days / <span className='text-[#4658c0] text-lg underline'> Maximum no of days :{maxdays}</span></h1>
            <h3>{dayStatus=='true'? 
            <span  className='text-[#009933] text-lg underline'>{err} </span>:
            <span  className='text-[#ff3636] text-lg underline'>{err} </span>}
            </h3>
          <h1 className='text-xl '>Total Cost : <span className='text-xl text-[#fcfbfc] bg-[#009933] p-2 rounded-md w-fit'>₹  {totalCost}</span></h1>
           
            <h1>Id Proof ( Aadhaar card)</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='1234 1234 1234' maxLength={12} minLength={12}
                value={idProof}
                onChange={ev=>setIdproof(ev.target.value)}
            />
            <button type='submit' >submit</button>
        </form>
    </div>
   </>
  )
}

export default BookingForm
