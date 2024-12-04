import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Outlet, RouterProvider, createBrowserRouter  } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Services from './Components/Sevices/Services'
import Catalog from './Components/Catalog/Catalog.jsx'
import Achievement from './Components/Achievement/Achievement.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Career from './Components/career/Career.jsx'
import NextAdmin from './Components/admin/NextAdmin.jsx'
import Login from './Components/adminFirstPage/Login.jsx'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
    
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/service',
        element:<Services/>
      },
      {
        path: '/catalog',
        element:<Catalog/>
      },
      {
        path: '/achievement',
        element:<Achievement/>
      },
      {
        path: '/contact',
        element:<Contact/>
      },
      {
        path:'/career',
        element:<Career/>
      },
      
    ]
  },
  {
    path:'/admin',
    element:<Login/>
  },
  {
    path:'/adminhome',
    element:<NextAdmin/>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
