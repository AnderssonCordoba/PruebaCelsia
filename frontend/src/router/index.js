import { createBrowserRouter } from "react-router-dom"; 
import PublicLayout from '../layouts/publicLayout/index'
 
import Forms from '../pages/forms/FormsPage' 
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([ 
    {
        path: "/", 
        element: <PublicLayout/>,

        children:[
            { 
                path:'/',
                element: <Forms/>
            },  
            { 
                path:'/registros',
                element: <Dashboard/>
            }, 
        ]
    }
])