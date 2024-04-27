import { useState } from 'react'
import './App.css'
import axios from 'axios';
import{ RouterProvider,} from "react-router-dom";
import Router from './Router';
axios.defaults.baseURL = 'http://localhost:4000'
function App() {
  return (
    <>
  <RouterProvider router={Router} />
    </>
  )
}

export default App
