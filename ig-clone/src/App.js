import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Login from "./pages/Login";
import LoginForm from './component/LoginForm';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout/>,
      children:[
        {
          path:"/",
          element: <div>welcome to Ig</div>,
        },
        {
          path:"login",
          element: <Login/>
        }
      ]
    },
    {
      path: "login",
      element: <Login/>
    }
  ]
)

export default function App(){
  return(
    <RouterProvider router={router} className="container mx-auto"/>
  )
}



