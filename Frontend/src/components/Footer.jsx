import React from 'react'
import icon from "../assets/image.png"
const Footer = () => {
  return (
    <>
    {/* footer Container box */}
    <div className="FooterBox flex justify-around align-middle  font-semibold mt-24   left-0 w-full py-4 bg-[#7250aa] text-white ">
             {/* div Companyinfo  used for-[ CompanyName ,Logo] */}
        <div className="Companyinfo flex gap-3">
           <h1>SUMMER HOLIDAYS</h1>  
           <img className=' w-6 h-6' src={icon} alt="" />
        </div>
        {/* About div is used for -[ customer review, Address and Socialmedia] */}
        <div className="About">
            <h3>
            Arun complex 1st Floor Oddanchatram,Tamil Nadu
            </h3>
            <h3> 9994789654</h3>
        </div>
      
    </div>
    </>
  )
}

export default Footer
