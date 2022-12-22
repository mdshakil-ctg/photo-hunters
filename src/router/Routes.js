import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Services from "../components/services/Services";
import UserReviews from "../components/UserReviews/UserReviews";
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
            loader: ()=> fetch('https://photo-hunters-server.vercel.app/services')
         },
         {
            path:'/login',
            element: <Login></Login>
         },
         {
            path:'/register',
            element: <Register></Register>
         },
         {
            path:'/services/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params})=> fetch(`https://photo-hunters-server.vercel.app/services/${params.id}`)
         },
         {
            path: '/reviews',
            element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute>
         },
         {
            path: '/blogs',
            element: <Blogs></Blogs>
         },
         {
            path: '/addServices',
            element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
         }
         
      ]
   },
   {
      path: '*',
      element: <div className="text-center text-red-500 text-5xl mt-10">Sorry Route is not found!!!</div>
   }
])
