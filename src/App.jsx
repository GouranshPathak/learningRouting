import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, 
RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard';
import About from './components/about';
import Home from './components/home';
import ParamComp from './components/ParamComp';
import Reports from './components/Reports';
import MockTest from './components/MockTest';
import Courses from './components/Courses';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {path:"/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children: [
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-tests',
          element:<MockTest/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]
);
function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
