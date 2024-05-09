import React, { useState } from "react";
import { Link } from "react-router-dom";
import Perks from "./Perks";
const Card = () => {
  const [title, setTitle] = useState("");
  const [address, setaddress] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [photoLink, setPhotoLink] = useState([]);
  const [maxGuest, setmaxGuest] = useState(1);
  const [contactInfo, setcontactInfo] = useState("");
  const [price, setprice] = useState("");

function addPhotosByUrl(){
   
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
            onchange={(ev) => setTitle(ev.target.value)}
          />
          <h1>Address :</h1>
          <input
            className=" border-[1px] border-black p-1"
            type="text"
            placeholder="Address"
            value={address}
            onchange={(ev) => setaddress(ev.target.value)}
          />

          <h1>Photos</h1>
          <div className=" flex    gap-3">
            <input
              className=" border-[1px] border-black p-1  "
              type="text"
              placeholder="Past Link"
              value={photoLink}
              onchange={(ev) => setPhotoLink(ev.target.value)}
            />

            <button className=" border-[1px] border-[#8b8686] p-2 bg-[#009933] text-white rounded ">
              Add Photo
            </button>
          </div>
          <div className=" ">
            <button className=" border-[1px] border-[#8b8686] p-3  flex flex-col items-center rounded ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
              Upload
            </button>
          </div>
          <h1>Description</h1>

          <textarea className=" border-[1px] border-black p-1 "
           value={description}
           onchange={ev=>setDescription(ev.target.value)}
          />
          <h1>Perks</h1>
          <Perks selected={perks} onchange={setPerks} />
          <h1>Contact Info</h1>
          <input
            className=" border-[1px] border-black p-1"
            type="tel"
            placeholder=' "Mobile no"'
            maxLength="10"
            value={contactInfo}
            onchange={ev=>setcontactInfo(ev.target.value)}
          />

          <div className=" flex  justify-center align-middle items-center gap-1">
            <h1>Capcity of room : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Capcity of room"
              value={maxGuest}
              onchange={ev=>setmaxGuest(ev.target.value)}
            />
            <h1>Amount : </h1>
            <input
              className=" border-[1px] border-black p-1"
              type="text"
              placeholder="Price"
              value={price}
              onchange={ev=>setprice(ev.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
