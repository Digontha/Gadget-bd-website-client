import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import AddProduct from "../Components/Pages/AddProduct/AddProduct";
import Phone from "../Components/Pages/Home/PhoneCard/Phone";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:5000/product")
        },
        {
          path: "/:brand",
          element:<Phone></Phone>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.brand}`)
     
        }
        ,
        {
            path:"/addProduct",
            element:<AddProduct></AddProduct>
        }
        ,
        {
            path:"/login",
            element:<Login></Login>
        }
        ,
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;