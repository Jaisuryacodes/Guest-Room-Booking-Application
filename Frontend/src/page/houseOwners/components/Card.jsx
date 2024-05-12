import React, { useEffect, useState } from "react";
import { Link,Navigate, useParams } from "react-router-dom";
import Perks from "./Perks";
import axios from "axios";
import PhotosUploader from "./PhotosUploader";
const Card = () => {
  const {id}=useParams();
 console.log({id});
   const [redirect,setredirect] =useState(false)
  const [title, setTitle] = useState('');
  const [address, setaddress] = useState(''); 
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [maxGuest, setmaxGuest] = useState(1);
  const [contactInfo, setcontactInfo] = useState('');
  const [price, setprice] = useState('');
  const [MinimumDays, setMinimumDays]= useState(1);
  const [MaximumDays, setMaximumDays]= useState(1);
  const [Photos,setPhotos]=useState([]);
  const [bets,setBets]=useState(1);
  const [rooms,setRooms]=useState(1);
  async function saveplace(ev){
   ev.preventDefault();
   const placesData={ title,
    address,
    Photos,
    description,
    perks,
    maxGuest,
    contactInfo,
    price,
    bets,
    rooms,
    MinimumDays,
    MaximumDays};
   if(id){
    await axios.put('/place',{
      id,  ...placesData,});
   setredirect(true);
   }
   else{
    await axios.post('/place',placesData);
     setredirect(true);
   }
 };

 useEffect(()=>{
  if(!id){
    return;
  }
  else{
    axios.get('/places/'+id).then(response=>{
      const {data}=response;
      setTitle(data.title);
      setaddress(data.address);
      setDescription(data.description);
      setPerks(data.perks);
      setmaxGuest(data.maxGuest);
      setcontactInfo(data.contactInfo);
      setprice(data.price);
      setBets(data.bets);
      setRooms(data.rooms);
      setMinimumDays(data.MinimumDays);
      setMaximumDays(data.MaximumDays);
      setPhotos(data.Photos);
      
    })
  }
},[id]) ;

if(redirect){
  return <Navigate to={'/HouseOwner'}/>;
}
  return (
    <>
      <div className=" flex  justify-center align-middle items-center mt-10  ">
        <form onSubmit={saveplace} className="  flex flex-col justify-center align-middle  border-[1px] border-black p-5 bg-[#d5d5d5] rounded-md  gap-4 ">
          <h1>Name of the place :</h1>
          <input
            className=" border-[1px] border-black p-1 "
            type="text"
            placeholder="Name of the place if(Landmark)"
            value={title}
            onChange={ev => setTitle(ev.target.value)}/>
          <h1>Location :</h1>
          <input
            className=" border-[1px] border-black p-1"
            type="text"
            placeholder="Oddanchatram ,Tamilnadu"
            value={address}
            onChange={ev => setaddress(ev.target.value)}
          />
          <PhotosUploader  Photos={Photos} onChange={setPhotos}/>
          
          <h1>Description</h1>

          <textarea className=" border-[1px] h-[100px] border-black p-1 "
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

          <div className=" grid grid-cols-1 gap-5 ">
           <div className=" flex gap-1 justify-evenly align-middle items-center">
           <h1>No of Guest : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Capcity of room"
              value={maxGuest}
              onChange={ev=>setmaxGuest(ev.target.value)}
            />
            <h1>No of rooms : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="No of room"
              value={rooms}
              onChange={ev=>setRooms(ev.target.value)}
            />
            
             <h1> Minimum No of Days : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="1(no of days)"
              value={MinimumDays}
              onChange={ev=>setMinimumDays(ev.target.value)}
            />
           </div>
        <div className=" flex ml-6 justify-evenly align-middle items-center ">
        <h1>Amount : </h1>
     <input
       className=" border-[1px] border-black p-1"
       type="text"
       placeholder="Price per/day"
       value={price}
       onChange={ev=>setprice(ev.target.value)}
     />
       <h1>No of Bets : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="no of bets"
              value={bets}
              onChange={ev=>setBets(ev.target.value)}
            />
            <h1>Maximum No of Days : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Maximum No of Days"
              value={MaximumDays}
              onChange={ev=>setMaximumDays(ev.target.value)}
            />
        </div>
         
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
