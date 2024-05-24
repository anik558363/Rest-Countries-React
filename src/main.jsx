import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Countries from './components/Countries/Countries.jsx';
import Show from './components/Show/Show.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/countries',
        loader: () => fetch('https://restcountries.com/v3.1/all'),
        element: <Countries></Countries>
      },
      {
        path: '/country/:cca3',
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.cca3}`),
        element: <Show></Show>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
