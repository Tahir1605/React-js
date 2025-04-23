import React from 'react'
import Navbar from './Navbar'
import { useShoppingCart } from '../contexts/CartContext'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function Home() {
  const { data, addToCart, removeFromCart, cartItems } = useShoppingCart()

  // ⭐ Helper to render stars based on rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating - fullStars >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />)
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />)
    }

    return stars
  }

  return (
    <div>
      <Navbar />
      <div className='bg-slate-700 w-full min-h-screen text-white'>
        <div className='mx-10'>
          <h1 className='text-center font-bold text-3xl pt-24 pb-10'>Our Products</h1>
          <div className="grid grid-cols-3 gap-10 mx-24">
            {data.map((prod) => (
              <div key={prod.id} className="bg-slate-800 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-40 h-40 mb-4 rounded-md"
                />
                <p className="text-xl font-bold text-green-400">${Math.round(prod.price)}</p>

                <div className="flex items-center gap-1 my-2">
                  {renderStars(prod.rating.rate)}
                  <span className="text-sm text-gray-400 ml-1">({prod.rating.rate})</span>
                </div>

                {
                  cartItems.some((p) => p.id === prod.id) ? (
                    <button
                      className="bg-red-500 rounded-md px-5 py-2 my-5 hover:bg-red-700 transition-all"
                      onClick={() => removeFromCart(prod.id)}
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 rounded-md px-5 py-2 my-5 hover:bg-blue-700 transition-all"
                      onClick={() => addToCart(prod)}
                    >
                      Add to Cart
                    </button>
                  )
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
