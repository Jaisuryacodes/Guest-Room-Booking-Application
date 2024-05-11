import React, { useState } from "react";
import { Link,Navigate } from "react-router-dom";
import Perks from "./Perks";
import axios from "axios";
import PhotosUploader from "./PhotosUploader";
const Card = () => {
   const [redirect,setredirect] =useState('')
  const [title, setTitle] = useState('');
  const [address, setaddress] = useState('');
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [maxGuest, setmaxGuest] = useState(1);
  const [contactInfo, setcontactInfo] = useState('');
  const [price, setprice] = useState('');
  const [checkIn, setcheckIn]= useState('');
  const [checkOut, setcheckOut]= useState('');
  const [addedPhoto,setaddedPhoto]=useState([]);
  async function addnewplace(ev){
   ev.preventDefault();
   await axios.post('/place',{
      title,
      address,
      photos:addedPhoto,
      description,
      perks,
      maxGuest,
      contactInfo,
      price,
   
      checkIn,
      checkOut,
   });
   setredirect('/HouseOwner');

 }
 if(redirect){
   return <Navigate to={redirect}/>;
 }

  return (
    <>
      <div className=" flex  justify-center align-middle items-center mt-10  ">
        <form onSubmit={addnewplace} className="  flex flex-col justify-center align-middle  border-[1px] border-black p-5 bg-[#d5d5d5] rounded-md  gap-4 ">
          <h1>Title :</h1>
          <input
            className=" border-[1px] border-black p-1 "
            type="text"
            placeholder="Title"
            value={title}
            onChange={ev => setTitle(ev.target.value)}/>
          <h1>Address :</h1>
          <input
            className=" border-[1px] border-black p-1"
            type="text"
            placeholder="Address"
            value={address}
            onChange={ev => setaddress(ev.target.value)}
          />
          <PhotosUploader  addedPhoto={addedPhoto} onChange={setaddedPhoto}/>
          
          <h1>Description</h1>

          <textarea className=" border-[1px] border-black p-1 "
           value={description}
           onChange={ev=>setDescription(ev.target.value)}
          />
          <h1>Perks</h1>
          <Perks selected={perks} onChange={setPerks} />
          <h1>Contact Info</h1>
          <input
            className=" border-[1px] border-black p-1"
            type="tel"
            placeholder=' "Mobile no"'
            maxLength="10"
            value={contactInfo}
            onChange={ev=>setcontactInfo(ev.target.value)}
          />

          <div className=" flex flex-col justify-center align-middle items-center gap-6">
            <h1>Capcity of room : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Capcity of room"
              value={maxGuest}
              onChange={ev=>setmaxGuest(ev.target.value)}
            />
        <div className=" flex justify-center align-middle items-center gap-2">
        <h1> CheckIn : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="check-in-time"
              value={checkIn}
              onChange={ev=>setcheckIn(ev.target.value)}
            />
            <h1> CheckOut : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="check-out-time"
              value={checkOut}
              onChange={ev=>setcheckOut(ev.target.value)}
            />
        </div>
            <h1>Amount : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Price"
              value={price}
              onChange={ev=>setprice(ev.target.value)}
            />
          </div>
          <div className=" flex gap-10 justify-center align-middle items-center">
          <button className="  text-[24px] bg-[#009933] hover:bg-[#0039e6] rounded-sm px-3 text-white "> submit</button>
          <Link
            className="  text-[24px] bg-[#009933] hover:bg-[#cc0700] rounded-sm px-3 text-white "
            to="/HouseOwner"
          >
            Cancel
          </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
