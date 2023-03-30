import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main.jsx';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Register from '../components/Register/Register.jsx';
import Courses from '../components/Courses/Courses.jsx';
import Details from '../components/Details/Details';
import Login from '../components/Login/Login.jsx';
import UserDashboard from '../components/UserDashboard/UserDashboard.jsx';
import Checkout from '../components/Checkout/Checkout';
import PrivateRoute from './PrivateRoute.jsx';
import Blog from '../components/Blog/Blog.jsx';
import Home from '../layouts/Home.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/courses', element: <Courses /> },
      { path: '/details/:courseId', element: <Details /> },
      { path: '/f&q', element: <h1>f&q</h1> },
      {
        path: '/blog',
        element: <Blog />,
      },
      { path: '/dashboard', element: <UserDashboard /> },
      {
        path: '/checkout/:courseId',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },

  { path: '*', element: <ErrorPage /> },
]);
