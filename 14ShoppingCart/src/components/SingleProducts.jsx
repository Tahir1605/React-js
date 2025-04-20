import React from 'react';
import { UseCartContext } from '../contexts/Context';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function SingleProducts({ prod }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  const { state: { cart }, dispatch, } = UseCartContext()

  

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <div className='border rounded-lg p-4 shadow h-full'>
        <img src={prod.image} className='w-full h-52 object-cover rounded' alt={prod.name} />
        <div className='mt-2'>
          <p className='font-semibold'>{prod.name}</p>
          <p>₹{prod.price.split(".")[0]}</p>
          <p>{prod.fastDelivery ? "Fast Delivery" : "Delivery in 3 days"}</p>
          <div className='flex items-center gap-1'>
            {renderStars(prod.ratings)}
          </div>
        </div>
        {
          cart.some((p) => p.id === prod.id) ? (
            <div className='mt-2'>
              <button className='bg-red-600 text-white px-4 py-1 rounded' onClick={() => {dispatch({type:"REMOVE_FROM_CART",payload:prod,})}}>Remove From Cart</button>
            </div>
          ) : (<div className='mt-2'>
            <button className='bg-blue-500 text-white px-4 py-1 rounded' disabled={!prod.inStock} onClick={() => {dispatch({type:"ADD_TO_CART",payload:prod,})}} >{!prod.inStock ? "Out Of Stock" : "Add To Cart"}</button>
          </div>)
        }
      </div>
    </div>
  );
}

export default SingleProducts;
