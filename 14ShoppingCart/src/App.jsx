import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import FilterProducts from './components/FilterProducts'
import CartNav from './components/CartNav'
import Subtotal from './components/Subtotal'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element:
          <div>
            <Navbar />
            <div className='flex'>
              <Home />
            </div>
          </div>
      },
      {
        path: '/cart',
        element:
          <div>
            <CartNav />
            <div className='flex'>
              <Cart />
              <Subtotal />
            </div>
          </div>
      }
    ]
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
