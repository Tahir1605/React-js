import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import { UseCartContext } from '../contexts/Context';
function CartNav() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const { state: { cart }, dispatch } = UseCartContext()
    return (
        <div>
            <div className='bg-slate-600 w-full flex justify-around gap-80 items-center p-3 relative'>
                <div className='text-white font-semibold text-xl'><NavLink to='/'>Shopping Cart</NavLink></div>

                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className='bg-green-500 px-5 py-1 rounded-sm text-white flex items-center gap-2'
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>{cart.length}</span>
                    </button>

                    {isDropdownVisible && (
                        <div className='absolute right-0 mt-2 w-56 bg-white rounded shadow-lg z-10'>
                            <ul className='text-black text-sm'>
                                {cart.length > 0 ? (
                                    <>
                                        {
                                            cart.map((prod) => (
                                                <li className='p-3 border-b flex items-center gap-2 cursor-pointer' key={prod.id}>
                                                    <img src={prod.image} alt={prod.name} className='object-cover h-10 w-10 rounded-full' />
                                                    <div className='flex items-center gap-2'>
                                                        <p>{prod.name}</p>
                                                        <p>₹{prod.price.split(".")[0]}</p>
                                                        <p onClick={() => dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })}><FontAwesomeIcon icon={faTrash} /></p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </>) :
                                    (<li className='p-3 border-b '>No items in cart</li>)}
                                    {cart.length < 1 ? (<NavLink to='/'><li className='p-3 text-center cursor-pointer bg-green-500 rounded-b-md font-semibold text-white'>Go to Shopping Cart</li></NavLink>):(<NavLink to='/cart'><li className='p-3 text-center cursor-pointer bg-blue-600 rounded-b-md font-semibold text-white'>Go to Cart</li></NavLink>)}
                                
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartNav