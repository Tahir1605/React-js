import React from 'react'
import { useShoppingCart } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

function Total() {
  const {cartItems} = useShoppingCart()
  const navigate = useNavigate()
  return (
    <div className='w-1/4 bg-slate-900 rounded-md min-h-screen text-center py-5'>
     <h1 className='font-bold'>Total products ( {cartItems.reduce((sum, item) => sum + item.quantity, 0)} ) </h1>
     <h1 className='font-bold mt-10'>Total $ ( {cartItems.reduce((sum,item) => Math.round(sum+(item.price)*item.quantity),0) } )</h1>
     {cartItems.length > 0 ? (
        <button className='bg-green-600 px-10 py-2 font-semibold rounded-md mt-5 hover:bg-green-700 transition-all'>Proceed To Pay</button>
     ) : (
        <button className='bg-orange-500 px-10 py-2 font-semibold rounded-md mt-5 hover:bg-orange-600 transition-all' onClick={() => navigate('/')}>Nothing</button>
     )}
    </div>
  )
}

export default Total