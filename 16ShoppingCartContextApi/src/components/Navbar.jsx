import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useShoppingCart } from '../contexts/CartContext'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const { cartItems } = useShoppingCart()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const navigate = useNavigate()

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <div className='bg-slate-900 w-full text-white flex items-center justify-around py-3 shadow-md fixed z-50'>
            <div className='text-2xl font-bold'>
                Fake<span className='text-blue-500'>Store</span>
            </div>
            <ul className='flex items-center relative'>
            <NavLink to='/'> <li className='text-xl font-semibold cursor-pointer mr-10'>Home</li></NavLink>
            <NavLink to='/cart'> <li className='text-xl font-semibold cursor-pointer mr-10'>Cart</li></NavLink>

                {/* Cart Icon + Badge */}
                <div className="relative cursor-pointer" onClick={toggleDropdown}>
                    <FaShoppingCart size={24} />
                    <span className='absolute -top-2 -right-3 text-xs px-2 py-1 bg-red-600 rounded-full'>
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                </div>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                    <div className='absolute right-0 top-10 bg-white text-black w-64 shadow-xl rounded-lg p-4 z-50'>
                        <h3 className='font-semibold mb-2 text-center'>Cart Preview</h3>
                        <div className='max-h-40 overflow-y-auto'>
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center mb-2 border-b pb-2'>
                                        <img src={item.image} alt={item.title} className='w-10 h-10 object-contain' />
                                        <span className='text-sm w-32 truncate'>{item.title}</span>
                                        <span className='text-sm font-semibold'>${Math.round(item.price)}</span>
                                    </div>
                                ))
                            ) : (
                                <p className='text-center text-sm text-gray-500'>Your cart is empty</p>
                            )}
                        </div>
                        <button
                            className='w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition'
                            onClick={() => navigate('/cart')}
                        >
                            Go to Cart
                        </button>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Navbar
