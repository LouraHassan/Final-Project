import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import ManegerHomePage from '../Pages/ManagerHomePage'
import PositionsPage from "../Pages/PositionsPage";
import App from "../App";
import AdminHomePage from "../Pages/AdminHomePage";

const Router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App></App>

// }
  // {
    //     path: '/admin',
    //     element: <AdminHomePage></AdminHomePage>
    // }
    {
      path: '/Login',
      element: <Login/>
},    {
  path: '/Signup',
  element: <Signup/>
},

 {
       path: '/Maneger',
       element: <ManegerHomePage/>
},
{
  path: '/Position',
  element: <PositionsPage/>
}



])

export default Router