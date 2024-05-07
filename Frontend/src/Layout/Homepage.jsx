import React from 'react'

import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer'
import Content from '../page/customer/components/Content.jsx'
import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'
const Homepage = () => {
  return (
    <>
   <Menu/>
   <Outlet/>
    <SearchBox/>
    <div className="">
    <h1 className=' text-[32px] text-white font-normal bg-[#7250aa] w-fit p-3 rounded ml-3'>We love these guest houses in Dubai</h1>
   <Content/>
   <h1 className=' text-[32px] text-white font-normal bg-[#7250aa] w-fit p-3 rounded ml-3'>Find the perfect guest house in Eilat</h1>
   <Content/>

    </div>
    <Footer/>
   </>
  )
}

export default Homepage
