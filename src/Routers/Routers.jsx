import { createBrowserRouter } from "react-router-dom";
import ManegerHomePage from '../Pages/ManagerHomePage'
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
       path: '/Maneger',
       element: <ManegerHomePage/>
}



])

export default Router