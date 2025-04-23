import React from 'react'
import Navbar from './Navbar'
import { useShoppingCart } from '../contexts/CartContext'
import { MdDelete } from 'react-icons/md'
import Total from './Total'

function Cart() {
  const { cartItems, removeFromCart,updateQuantity } = useShoppingCart()
  return (
    <div className="flex flex-col min-h-screen bg-slate-700 text-white">
      <Navbar />
      <div className="flex-grow py-20 flex justify-around">
        <div className='w-[70%]'>
          {cartItems.length > 0 ? (
            cartItems.map((prod) => (
              <div key={prod.id} className=' flex justify-around items-center bg-slate-900 rounded-md mb-5 py-3'>
                <img src={prod.image} alt={prod.title} className='h-28 w-28 rounded-md cursor-pointer' />
                <p className='w-52 px-2 py-2 font-bold' >{prod.title}</p>
                <p className='font-semibold text-xl text-green-500'>$ {Math.round(prod.price)}</p>
                <select
                  className='bg-slate-700 px-3 py-1 rounded-md cursor-pointer border-none outline-none text-green-500 font-bold'
                  value={prod.quantity}
                  onChange={(e) => updateQuantity(prod.id, parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <button onClick={() => removeFromCart(prod.id)}> <MdDelete size={24} color="red" /> </button>
              </div>
            ))
          ) : (
            <div className='px-20'>
              Your Cart Is Empty
            </div>
          )}
        </div>
        <Total />
      </div>
    </div>
  )
}

export default Cart