import React from 'react'
import { CartProvider } from './contexts/CartContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element:
                <div>
                    <Home/>
                </div>
        },
        {
            path:'/cart',
            element:
            <div>
               <Cart/> 
            </div>
        }
    ])
    return (
        <CartProvider>
            <div>
            <RouterProvider router={router} />
            </div>
                
        </CartProvider>
    )
}

export default App