import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Loginpage from './components/Loginpage.jsx';
import Error from './components/Error.jsx';
import SignupPage from './components/SignupPage.jsx';
import ForgetPage from './components/ForgetPage.jsx';
import Hero from './page/customer/Hero.jsx';
const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement:<Error/>,
},
{
  path:"/Login",
  element:<Loginpage/>,
},
{
  path:"/Signup",
  element:<SignupPage/>,
},
{
  path:"/forgetpassword",
  element:<ForgetPage/>
},
{
  path:"/customerLogin",
  element:<Hero/>,
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
