import React from 'react'

import Footer from '../components/Footer'
import Content from '../components/Content.jsx'
import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'
const Homepage = () => {
  return (
    <>
   <Menu/>
   <div className="px-[40px] py-5">
   <Outlet/>

    
   <Content/>

   </div>
    
    <Footer/>
   </>
  )
}

export default Homepage
