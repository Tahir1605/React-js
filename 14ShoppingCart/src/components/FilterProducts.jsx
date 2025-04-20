import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { UseCartContext } from '../contexts/Context';

function FilterProducts() {
  const [sortOrder, setSortOrder] = useState('');
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [fastDeliveryOnly, setFastDeliveryOnly] = useState(false);
  const [rating, setRating] = useState(0);

  const { productState, productDispatch } = UseCartContext();

  useEffect(() => {
    // Apply filters when any state changes
    if (sortOrder) {
      productDispatch({ type: 'SORT_BY_PRICE', payload: sortOrder });
    }
    productDispatch({ type: 'FILTER_BY_STOCK' }); // will toggle
    productDispatch({ type: 'FILTER_BY_DELIVERY' }); // will toggle
    productDispatch({ type: 'FILTER_BY_RATING', payload: rating });
  }, [sortOrder, includeOutOfStock, fastDeliveryOnly, rating]);

  const handleClearFilters = () => {
    setSortOrder('');
    setIncludeOutOfStock(false);
    setFastDeliveryOnly(false);
    setRating(0);
    productDispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <div className='h-screen bg-slate-600 mt-2 ml-3 w-1/4 rounded-sm pt-3 pl-3'>
      <div className='text-2xl text-white font-semibold mb-5'>
        Filter Products
      </div>
      <ul>
        {/* Sorting Order */}
        <li className='flex items-center gap-3 mb-2'>
          <input
            type="radio"
            name="sortOrder"
            id="ascending"
            checked={sortOrder === 'asc'}
            onChange={() => setSortOrder('asc')}
          />
          <label htmlFor="ascending" className='text-white font-semibold'>Ascending</label>
        </li>
        <li className='flex items-center gap-3 mb-2'>
          <input
            type="radio"
            name="sortOrder"
            id="descending"
            checked={sortOrder === 'desc'}
            onChange={() => setSortOrder('desc')}
          />
          <label htmlFor="descending" className='text-white font-semibold'>Descending</label>
        </li>

        {/* Stock & Delivery */}
        <li className='flex items-center gap-3 mb-2'>
          <input
            type="checkbox"
            id="outOfStock"
            checked={includeOutOfStock}
            onChange={() => {
              setIncludeOutOfStock(!includeOutOfStock);
              productDispatch({ type: 'FILTER_BY_STOCK' });
            }}
          />
          <label htmlFor="outOfStock" className='text-white font-semibold'>Includes Out Of Stock</label>
        </li>
        <li className='flex items-center gap-3 mb-2'>
          <input
            type="checkbox"
            id="fastDelivery"
            checked={fastDeliveryOnly}
            onChange={() => {
              setFastDeliveryOnly(!fastDeliveryOnly);
              productDispatch({ type: 'FILTER_BY_DELIVERY' });
            }}
          />
          <label htmlFor="fastDelivery" className='text-white font-semibold'>Fast Delivery Only</label>
        </li>

        {/* Rating */}
        <li className='text-white font-semibold mb-2'>
          Rating
        </li>
        <li className='flex gap-1 mb-5'>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => {
                setRating(star);
                productDispatch({ type: 'FILTER_BY_RATING', payload: star });
              }}
              className='focus:outline-none'
            >
              <FaStar
                size={24}
                color={star <= rating ? '#fbbf24' : '#d1d5db'} // yellow-400 or gray-300
              />
            </button>
          ))}
        </li>
      </ul>

      {/* Clear Filters */}
      <div className='flex justify-center'>
        <button
          className='bg-slate-100 px-5 py-2 w-11/12 rounded-md font-semibold'
          onClick={handleClearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterProducts;
