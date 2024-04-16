import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './layout/Route';
import Errorpage from './layout/Errorpage';
import Loginpage from './Pages/Loginpage';
import Authprovider from './provider/Authprovider';
import Register from './Pages/Register';
import Homepage from './Pages/Homepage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Route></Route>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>,
        loader:()=>fetch('/data.json')
      }
    ]
  },
  {
    path:'/login',
    element:<Loginpage></Loginpage>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />

    </Authprovider>
   
  </React.StrictMode>,
)
