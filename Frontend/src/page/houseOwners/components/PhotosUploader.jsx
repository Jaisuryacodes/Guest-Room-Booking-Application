import { useState } from "react";
import axios from "axios";

 
export default function PhotosUploader( {Photos,onChange}){
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
      function removePhoto(photoName){
        onChange([...Photos.filter(photo=>photo !== photoName)]);
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

            <button onClick={addPhotosByUrl} className=" border-[1px] border-[#8b8686] p-2 bg-[#009933] hover:bg-[#0039e6] text-white rounded ">
              Add Photo
            </button>
          </div>
          <div className=" flex flex-wrap gap-3 object-cover">
             {
               Photos.length >0 && Photos.map(link=>(
                <div key={link} className="relative rounded-sm">
                     <img  className="w-[150px] h-[120px]  border-[1px] rounded-md border-[#7f5cda]" key={link} src={'http://localhost:4000/Uploads/'+link} alt="not found" />
                  
                     <button onClick={()=>removePhoto(link)} className=" cursor-pointer absolute bottom-1 right-1 text-white bg-[#009933] hover:bg-[#e61b00] p-1 rounded-xl">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                     </button>
                </div>            
               ))
             }
               
             <label className="flex  items-center cursor-pointer border-[1px] bg-[#898585] border-[#8b8686] w-[100px] h-[120px]  p-3 rounded font-extrabold text-[16px] ">
              <input type="file" multiple className="hidden"  onChange={uploadPhoto}/>
              ☁ Upload
            </label>
          </div>
         
        
    </>

);
}