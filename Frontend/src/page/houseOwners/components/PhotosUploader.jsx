import { useState } from "react";
import axios from "axios";

 
export default function PhotosUploader( {addedPhoto,onChange}){
  const [photoLink, setPhotoLink] = useState([]);

    async function addPhotosByUrl(ev){
        ev.preventDefault();
       const {data:filename} = await axios.post('/uploadsByLink',{link:photoLink});
       onChange(prev=>{
        return [...prev,filename];
       });
       setPhotoLink('');
     }  
      function uploadPhoto(ev){
        ev.preventDefault();
         const files =ev.target.files;
         const data=new FormData();
         for (let i=0; i<files.length; i++){
           data.append('photo',files[i]);
         }
        
         axios.post('/upload',data,{
           headers:{
             'Content-Type':'multipart/form-data'
           }
         }).then(res=>{
           const { data:filename}=res;
           
           onChange(prev=>{
              return [...prev,...filename];
             });
         })
      }
    return (
    <>
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
          <div className=" w-[500px] flex flex-wrap gap-3 object-cover">
             {
               addedPhoto.length >0 && addedPhoto.map(link=>(
                
                     <img  className="w-20 h-20  border-[1px] rounded-sm border-[#9d4040]" key={link} src={'http://localhost:4000/Uploads/'+link} alt="not found" />
            
               ))
             }
          </div>
          <div className="flex  items-center ">
            <label className=" cursor-pointer border-[1px] border-[#8b8686]  p-3 rounded ">
              <input type="file" multiple className="hidden"  onChange={uploadPhoto}/>
              Upload
            </label>
          </div>
    </>

);
}