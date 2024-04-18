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
import Privateroute from './layout/Privateroute';
import Updateprofile from './Pages/Updateprofile';
import Deatils from './Pages/Deatils';
import Private from './layout/Private';
import Contact from './Pages/Contact';
import { HelmetProvider } from 'react-helmet-async';


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
      },
      {
        path:'/update',
        element:<Privateroute><Updateprofile></Updateprofile></Privateroute>
      },
      {
        path:'/contact',
        element:<Contact></Contact>

      },
      {
        path:'/item/:id',
        element:<Private><Deatils></Deatils></Private>,
        loader:()=>fetch('/data.json')
      }
    ]
  },
  {
    path:'/login',
    element:<Loginpage></Loginpage>,
    
  },
  {
    path:'/register',
    element:<Register></Register>,
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Authprovider>
    <RouterProvider router={router} />

    </Authprovider>

    </HelmetProvider>
    
   
  </React.StrictMode>,
)
