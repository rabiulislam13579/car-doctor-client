import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUP from "../Pages/SignUP/SignUP";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"login",
          element:<LogIn></LogIn>
        },
        {
          path:"signup",
          element:<SignUP></SignUP>
        },
        {
          path:"bookService/:_id",
          element:<PrivateRoute><BookService></BookService></PrivateRoute>,
          loader:({params})=>fetch(`https://car-doctor-server-sooty-five.vercel.app/services/${params._id}`)
        },
        {
          path:"bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;