import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminHomePage from "../Pages/AdminHomePage";

const Router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App></App>
    // }
    {
        path: '/admin',
        element: <AdminHomePage></AdminHomePage>
    }
])

export default Router