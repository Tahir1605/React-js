import React from 'react';
import { UseCartContext } from '../contexts/Context';
import SingleProducts from './SingleProducts';
import FilterProducts from './FilterProducts';

function Home() {
  const { state: { products }, productState } = UseCartContext();
  const {
    sort,
    byStock,
    byFastDelivery,
    byRating,
    searchQuery,
  } = productState;

  const transformProducts = () => {
    let sortedProducts = [...products];

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  return (
    <div className='flex'>
      <FilterProducts />
      <div className='w-3/4 p-4 flex flex-wrap'>
        {transformProducts().map((prod) => (
          <SingleProducts key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default Home;
