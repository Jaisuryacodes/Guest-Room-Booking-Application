import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'

const Layoutpage = () => {
  return (
    <>
    
    <Outlet/>
    <SearchBox/>
   
    <Footer/>
   </>
  )
}

export default Layoutpage
