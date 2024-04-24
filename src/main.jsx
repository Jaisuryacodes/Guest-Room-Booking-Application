import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Loginpage from './components/Loginpage.jsx';
import Error from './components/Error.jsx';
const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement:<Error/>,
},
{
  path:"/Login",
  element:<Loginpage/>,
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
