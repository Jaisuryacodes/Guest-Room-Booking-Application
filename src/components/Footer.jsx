import React from 'react'

const Footer = () => {
  return (
    <>
    {/* footer Container box */}
    <div className="FooterBox flex justify-around align-middle  font-semibold  text-[#f7f7f7] bg-[#979494] px-1 py-1">
             {/* div Companyinfo  used for-[ CompanyName ,Logo] */}
        <div className="Companyinfo">
           <h1>Guest House</h1>  
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
