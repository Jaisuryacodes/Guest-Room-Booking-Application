import { createBrowserRouter,} from "react-router-dom";
import Loginpage from './components/Loginpage.jsx'
import Error from './components/Error.jsx';
import SignupPage from './components/SignupPage.jsx';
import ForgetPage from './components/ForgetPage.jsx';
import Layout from './Layout/Layoutpage.jsx'
import Homepage from "./Layout/Homepage.jsx";
import Customerpage from "./Layout/Customerpage.jsx";
import HouseOwnerpage from "./Layout/HouseOwnerpage.jsx";
import OwnerContent from './page/houseOwners/components/Content.jsx'
import NewForm from './page/houseOwners/components/Card.jsx'

const Router = createBrowserRouter([
    {    
            path:"/",
            element: <Homepage/>,
         errorElement:<Error/>,
         children:[ 
            {
                path:"/Login",
            element:<Loginpage/>  
            },
            {
                path:"/Signup",
                element:<SignupPage/>
            },]
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
        },
      {
        path:"/HouseOwner",
        element:<HouseOwnerpage/>,
        children:[
          
            {
                path:"/HouseOwner",
                element:<OwnerContent/>,
                
            },
            {
              path:'/HouseOwner/NewForm',
              element:<NewForm/>,
            }
        ]
      },
      
  
  
  
  
  ])
  export default Router