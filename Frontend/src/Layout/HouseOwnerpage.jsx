import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'

import HouseOwnerMenu from '../page/houseOwners/components/HouseOwnerMenu'
const HouseOwnerpage = () => {
  return (
    <>
    
  
    <HouseOwnerMenu/>
   <Outlet/>
    
   <div className=" bottom-0 w-full mt-6 ">
   <Footer/>
   </div>
   </>
  )
}

export default HouseOwnerpage
