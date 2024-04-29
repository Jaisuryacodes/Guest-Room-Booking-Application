import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer'
import Content from '../page/customer/components/Content'
import CustomerMenu from '../page/customer/components/CustomerMenu'
const Customerpage = () => {
  return (
    <>
    
    <Outlet/>
    <CustomerMenu/>
    <SearchBox/>
    <h1 className=' text-[32px] text-white font-normal bg-[#7250aa] w-fit p-3 rounded ml-3'>We love these guest houses in Dubai</h1>
   <Content/>
   <h1 className=' text-[32px] text-white font-normal bg-[#7250aa] w-fit p-3 rounded ml-3'>Find the perfect guest house in Eilat</h1>
   <Content/>
    <Footer/>
   </>
  )
}

export default Customerpage
