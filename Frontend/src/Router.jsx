import { createBrowserRouter,} from "react-router-dom";
import Loginpage from './components/Loginpage.jsx'
import Error from './components/Error.jsx';
import SignupPage from './components/SignupPage.jsx';
import ForgetPage from './components/ForgetPage.jsx';
// import Layout from './Layout/Layoutpage.jsx'
import Homepage from "./Layout/Homepage.jsx";
import Customerpage from "./Layout/Customerpage.jsx";
import HouseOwnerpage from "./Layout/HouseOwnerpage.jsx";
import OwnerContent from './page/houseOwners/components/Content.jsx'
import NewForm from './page/houseOwners/components/Card.jsx'
import SeeMore from "./components/SeeMore.jsx";
import Placedetails from "./page/customer/components/Placedetails.jsx";
import Content from "./page/customer/components/Content.jsx";

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
            path:'/Seemore/:id',
            element:<SeeMore/>,

        },
       
        {
            path:"/Customer",
            element:<Customerpage/>,
            children:[
                {
                    path:'/Customer',
                    element:<Content/>
                },
                {
                    path:'/Customer/Placedetails/:id',
                    element:<Placedetails/>
                },
            ]
           
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
              },
            {
                path:'/HouseOwner/NewForm/:id',
                element:<NewForm/>,
              },
            ]
         },
      
      
  
  
  
  
  ])
  export default Router