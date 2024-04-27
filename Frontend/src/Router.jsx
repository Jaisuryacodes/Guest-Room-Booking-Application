import { createBrowserRouter,} from "react-router-dom";
import Loginpage from './components/Loginpage.jsx'
import Error from './components/Error.jsx';
import SignupPage from './components/SignupPage.jsx';
import ForgetPage from './components/ForgetPage.jsx';
import Layout from './Layout/Layoutpage.jsx'
import Menu from "./components/Menu.jsx";
import Homepage from "./Layout/Homepage.jsx";

const Router = createBrowserRouter([{
        
            path:"/",
            element: <Homepage/>,
         errorElement:<Error/>,
        },
        {
            path:"/Login",
            element:<Loginpage/>
        },
        {
            path:"/Signup",
            element:<SignupPage/>
        },
        {
            path:"/forgetpassword",
            element:<ForgetPage/> 
        },
    
  
  
  
  
  ])
  export default Router