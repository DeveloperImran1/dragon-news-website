import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import HomePost from "../Components/HomePost";
import Swipe from "../Pages/Swipe.jsx/Swipe";
  
  
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
                loader: ()=> fetch("./data/news.json")
              }
            ]
        },
        {
          path: "/swipe",
          element: <Swipe></Swipe>
        }
      ]
    },
  ]);
  export default router;