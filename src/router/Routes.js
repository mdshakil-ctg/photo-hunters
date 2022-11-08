import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Services from "../components/services/Services";
import Main from "../layout/Main";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path:'/services',
            element: <Services></Services>,
            loader: ()=> fetch('http://localhost:5000/services')
         },
         {
            path:'/login',
            element: <Login></Login>
         },
         {
            path:'/register',
            element: <Register></Register>
         }
      ]
   },
])
