import { useState } from 'react'
import './App.css'
import axios from 'axios';
import{ RouterProvider,} from "react-router-dom";
import Router from './Router';
import { UserContextProvider } from './components/UserContext.jsx';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials=true;
function App() {
  return (
    <>
    <UserContextProvider>
    <RouterProvider router={Router}/>
    </UserContextProvider>
  
    </>
  )
}

export default App
