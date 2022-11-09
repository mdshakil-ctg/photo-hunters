import { createBrowserRouter } from "react-router-dom";
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
            loader: ()=> fetch('http://localhost:5000/services')
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
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
         },
         {
            path: '/reviews',
            element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute>
         }
         // {
         //    path:'/reviews/:email',
         //    element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute>,
         //    loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.email}`)
         // }
      ]
   },
])
