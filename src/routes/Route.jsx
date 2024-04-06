import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import HomePost from "../Components/HomePost";
import Swipe from "../Pages/Swipe.jsx/Swipe";
import Register from "../Pages/Shared/Register/Register";
import Login from "../Pages/Shared/Login/Login";
import PostDetails from "../Components/PostDetails";
import PrivateRoute from "../layouts/PrivateRoute";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            children: [
              {
                path: `/`,
                element: <HomePost></HomePost>,
                loader: ()=> fetch("/data/news.json")
              },
              
            ]
        },
        {
          path: "/swipe",
          element: <Swipe></Swipe>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/post/:id",
          element: <PrivateRoute> <PostDetails></PostDetails></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;