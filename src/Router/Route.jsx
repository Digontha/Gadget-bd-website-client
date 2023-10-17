import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import AddProduct from "../Components/Pages/AddProduct/AddProduct";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path:"/addProduct",
            element:<AddProduct></AddProduct>
        }
      ]
    },
  ]);
  export default router;