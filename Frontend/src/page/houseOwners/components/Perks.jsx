export  default function Perks({selected, onchange}){
    return (
        <>
        <div className="grid grid-cols-4 gap-2 ">
            <label className='border-[1px] border-[#666262] p-2 rounded-xl bg-[#888] cursor-pointer     ' >
               <input type="checkbox" /> 
               <span>Wifi</span>
            </label>
            <label className='border-[1px] border-[#111] p-2 rounded-xl bg-[#888] cursor-pointer   ' >
               <input type="checkbox" /> 
               <span>parking</span>
            </label>
            <label className='border-[1px] border-[#111] p-2 rounded-xl bg-[#888] cursor-pointer   ' >
               <input type="checkbox" /> 
               <span>TV</span>
            </label>
            <label className='border-[1px] border-[#111] p-2 rounded-xl bg-[#888] cursor-pointer   ' >
               <input type="checkbox" /> 
               <span>Playground</span>
            </label>
          </div>
        </>
    )
}