import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Pages/Home/Home";
import AddProduct from "../Components/Pages/AddProduct/AddProduct";
import Phone from "../Components/Pages/Home/PhoneCard/Phone";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import MyCart from "../Components/Pages/MyCart/MyCart";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:5000/product")
        },
        {
          path: "/:brand",
          element:<PrivateRoute><Phone></Phone></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.brand}`)
     
        }
        ,
        {
            path:"/addProduct",
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        }
        ,
        {
          path:"/myCart",
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
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