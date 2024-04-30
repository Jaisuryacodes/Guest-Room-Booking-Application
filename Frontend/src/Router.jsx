import { createBrowserRouter,} from "react-router-dom";
import Loginpage from './components/Loginpage.jsx'
import Error from './components/Error.jsx';
import SignupPage from './components/SignupPage.jsx';
import ForgetPage from './components/ForgetPage.jsx';
import Layout from './Layout/Layoutpage.jsx'
import CustomerMenu from "./page/customer/components/CustomerMenu.jsx";
import Homepage from "./Layout/Homepage.jsx";
import Customerpage from "./Layout/Customerpage.jsx";
import Content from "./page/customer/components/Content.jsx";
import HouseOwnerpage from "./Layout/HouseOwnerpage.jsx";
const Router = createBrowserRouter([
    {    
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
        {
            path:"/Layout",
            element:<Layout/>
        },
        {
            path:"/Customer",
            element:<Customerpage/>,
            // children:[ 
            //     {
            //         path:"/Customer",
            //         element:<CustomerMenu/>,
            //     },
                
            // ]
        },
      {
        path:"/HouseOwner",
        element:<HouseOwnerpage/>
      }
  
  
  
  
  ])
  export default Router