import { createBrowserRouter } from "react-router-dom";
import ManegerHomePage from '../Pages/ManagerHomePage'
import App from "../App";

const Router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App></App>
// }//    
 {
       path: '/Maneger',
       element: <ManegerHomePage/>
}
])

export default Router