import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BookingForm = () => {
    const {id} =useParams();
    const [err,setErr]=useState('');
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [phone,setphone]=useState('');
    const [address,setaddress]=useState('');
    const [totaldays,setTotaldays]=useState('1');
    const [fromdate,setFromdate]=useState('');
    const [todate,setTodate]=useState('');
    const [idProof,setIdproof]=useState('');
    const [maxdays,setMaxdays]=useState('');
    useEffect(()=>{
      
          axios.get('/places/'+id).then(response=>{
            setMaxdays(response.data.MaximumDays);
            
          })
        
      },[id]);
      function totaldaysChecker(){
        if(totaldays==''){
            setErr('Please enter no of days⚠')
        }
        else if(totaldays>maxdays){
        setErr('Please check maximum days ⚠')
        }
        else {
            setErr('valid');
        }
      }
  return (
   <>
    <div className=" flex  justify-center align-middle items-center p-8">
        <form className=" flex  flex-col justify-center align-middle  gap-4">
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
            <h1>No of days / <span className='text-[#4658c0] text-lg underline'> Maximum no of days :{maxdays}</span></h1>
            <h3>{err=='valid'? 
            <span  className='text-[#009933] text-lg underline'>{err+'✔'} </span>:
            <span  className='text-[#ff3636] text-lg underline'>{err}</span>}
            </h3>
            <input  className='border-[2px] border-[#000] p-1' type="Number"placeholder='No of days' 
            value={totaldays}
            onKeyUp={totaldaysChecker}
            onChange={ev=>setTotaldays(ev.target.value)}
           
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
            <h1>Id Proof ( Aadhaar card)</h1>
            <input  className='border-[2px] border-[#000] p-1' type="text"placeholder='1234 1234 1234' maxLength={12} minLength={12}
                value={idProof}
                onChange={ev=>setIdproof(ev.target.value)}
            />
        </form>
    </div>
   </>
  )
}

export default BookingForm
