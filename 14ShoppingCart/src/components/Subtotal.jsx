import React from 'react';
import { UseCartContext } from '../contexts/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

function Subtotal() {
  const { state: { cart } } = UseCartContext();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.qty * parseFloat(item.price), 0);

  return (
    <div className='h-screen bg-slate-600 mt-2 mr-3 w-1/4 rounded-sm pt-3 pl-3 float-end'>
      <div className='text-2xl text-white font-semibold mb-5'>
        Subtotal ({totalItems}) Items
      </div>
      <div className='ml-3 mb-3 text-white font-semibold'>
        <p>
          Total: <FontAwesomeIcon icon={faIndianRupeeSign} /> {Math.floor(totalPrice)}
        </p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-blue-600 text-white px-5 py-2 w-11/12 rounded-md font-semibold'>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
