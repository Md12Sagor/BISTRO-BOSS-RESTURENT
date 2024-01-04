import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import Hom from "../Pages/Home/Home/Hom";
import Order from "../Pages/Order/Order";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Hom></Hom>
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
      {
        path: "order/:category",
        element: <Order></Order>
      
      }

      ]

    },
  ]);