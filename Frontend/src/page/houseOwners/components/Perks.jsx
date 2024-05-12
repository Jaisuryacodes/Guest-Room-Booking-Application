 import react from 'react';
export  default function Perks({selected, onChange}){
    function handleCheckboxClick(ev){
     const {checked,name}=ev.target;
     if(checked){
         onChange([...selected,name]);
     }
     else{
         onChange([...selected.filter(selectedName=> selectedName!==name)]);
     }
   
        
    }
    return (
        <>
        <div className="grid grid-cols-4 gap-2 ">
            <label className='border-[1px] border-[#666262] p-2 rounded-xl bg-[#888] cursor-pointer     ' >
               <input type="checkbox"  checked={selected.includes(" wifi ") } name=" wifi " onChange={handleCheckboxClick} /> 
               <span>Wifi</span>
            </label>
            <label className='border-[1px] border-[#111] p-2 rounded-xl bg-[#888] cursor-pointer   ' >
               <input type="checkbox" checked={selected.includes( " Parking ")} name=" Parking " onChange={ handleCheckboxClick} /> 
               <span>parking</span>
            </label>
            <label className='border-[1px] border-[#111] p-2 rounded-xl bg-[#888] cursor-pointer   ' >
               <input type="checkbox" checked={selected.includes(" Tv ")} name=" Tv " onChange={ handleCheckboxClick} /> 
               <span>TV</span>
            </label>
            <label className='border-[1px] border-[#111] p-2 rounded-xl bg-[#888] cursor-pointer   ' >
               <input type="checkbox" checked={selected.includes(" Playground")} name=" Playground" onChange={ handleCheckboxClick} /> 
               <span>Playground</span>
            </label>
          </div>
        </>
    )
}    