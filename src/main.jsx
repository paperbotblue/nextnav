import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App.jsx';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { 
  About, Services, Catalog, Career, Contact, Achievement, Login, 
  NextAdmin, Navbar, AuthLayout, Completed, Ongoing, CardTemplate, Footer, 
  PathNotFound,Ourproject 
} from './Components';
import Verification from './Components/adminFirstPage/Verification.jsx';
import ChangePassword from './Components/adminFirstPage/ChangePassword.jsx';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <App /> },
        { path: '/about', element: <About /> },
        { path: '/service', element: <Services /> },
        { path: '/catalog', element: <Catalog /> },
        { path: '/achievement', element: <Achievement /> },
        { path: '/contact', element: <Contact /> },
        { path: '/career', element: <Career /> },
        { path: '/completed', element: <Completed /> },
        { path: '/Ongoing', element: <Ongoing /> },
        { path: '/cardtemplate', element: <CardTemplate /> },
        { path: '/ourproject', element: <Ourproject /> },
      ],
    },
    {
      path: '/admin',
      element: (
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: '/forgate',
      element: <Verification />,
    },
    {
      path: '/ChangePassword',
      element: <ChangePassword />,
    },
    {
      path: '/adminhome',
      element: (
        <AuthLayout authentication>
          <NextAdmin />
        </AuthLayout>
      ),
    },
    {
      path: '*',
      element: <PathNotFound />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Add the future flag here
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
