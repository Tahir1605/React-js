import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Navbar from './components/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          {/* <Navbar /> */}
          <Profile/>
        </div>
      ),
    },
    {
      path: '/signup',
      element: (
        <div>
          <Navbar />
          <Signup/>
        </div>
      ),
    },
    {
      path: '/login',
      element: (
        <div>
          <Navbar />
          <Login/>
        </div>
      ),
    },
    // {
    //   path: '/profile',
    //   element: (
    //     <div>
    //       <Navbar />
    //       <Profile/>
    //     </div>
    //   ),
    // },
    {
      path: '/logout',
      element: (
        <div>
          <Navbar />
          <Logout/>
        </div>
      ),
    },
    {
      path: '*', // Catch-all for invalid routes
      element: <div>Page not found</div>, // Custom 404 page
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
