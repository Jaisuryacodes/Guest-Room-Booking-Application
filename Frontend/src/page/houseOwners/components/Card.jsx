import React, { useState } from "react";
import { Link } from "react-router-dom";
import Perks from "./Perks";
import axios from "axios";
const Card = () => {
  const [title, setTitle] = useState('');
  const [address, setaddress] = useState('');
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [photoLink, setPhotoLink] = useState([]);
  const [maxGuest, setmaxGuest] = useState(1);
  const [contactInfo, setcontactInfo] = useState('');
  const [price, setprice] = useState('');
   const [addedPhoto,setaddedPhoto]=useState([]);
async function addPhotosByUrl(ev){
   ev.preventDefault();
  const {data:filename} = await axios.post('/uploadsByLink',{link:photoLink});
  setaddedPhoto(prev=>{
   return [...prev,filename];
  });
  setPhotoLink('');
}
  return (
    <>
      <div className=" flex  justify-center align-middle items-center mt-10  ">
        <form className="  flex flex-col justify-center align-middle  border-[1px] border-black p-5 bg-[#d5d5d5] rounded-md  gap-4 ">
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

          <h1>Photos</h1>
          <div className=" flex    gap-3">
            <input
              className=" border-[1px] border-black p-1  "
              type="text"
              placeholder="Past Link"
              value={photoLink}
              onChange={ev => setPhotoLink(ev.target.value)}
            />

            <button onClick={addPhotosByUrl} className=" border-[1px] border-[#8b8686] p-2 bg-[#009933] text-white rounded ">
              Add Photo
            </button>
          </div>
          <div className=" w-[500px] flex flex-wrap gap-3">
             {
               addedPhoto.length >0 && addedPhoto.map(link=>(
                
                     <img className="w-20 h-20  border-[1px] rounded-sm border-[#9d4040]" src={'http://localhost:4000/Uploads/'+link} alt="fffffffg" />
            
               ))
             }
          </div>
          <div className="flex  items-center ">
            <button className=" cursor-pointer border-[1px] border-[#8b8686]    rounded ">
              <input type="file" className="hidden" />
              Upload
            </button>
          </div>
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

          <div className=" flex  justify-center align-middle items-center gap-1">
            <h1>Capcity of room : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Capcity of room"
              value={maxGuest}
              onChange={ev=>setmaxGuest(ev.target.value)}
            />
            <h1>Amount : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Price"
              value={price}
              onChange={ev=>setprice(ev.target.value)}
            />
          </div>
          <button> submit</button>
        </form>
      </div>
    </>
  );
};

export default Card;
