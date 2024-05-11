import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer'
import Content from '../page/houseOwners/components/Content.jsx'
import HouseOwnerMenu from '../page/houseOwners/components/HouseOwnerMenu'
const HouseOwnerpage = () => {
  return (
    <>
    
  
    <HouseOwnerMenu/>
   <Outlet/>
    
   <div className=" bottom-0 w-full">
   <Footer/>
   </div>
   </>
  )
}

export default HouseOwnerpage
