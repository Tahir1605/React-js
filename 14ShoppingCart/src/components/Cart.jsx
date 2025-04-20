import React from 'react';
import { UseCartContext } from '../contexts/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Cart() {
  const { state: { cart }, dispatch } = UseCartContext();

  const handleQuantityChange = (id, value) => {
    const qty = parseInt(value);
    if (qty >= 1) {
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id,
          qty,
        },
      });
    }
  };

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

  return (
    <div className="mt-2 ml-2 w-3/4">
      <div className="w-full">
        {cart.length > 0 ? (
          <>
            {cart.map((prod) => (
              <li
                className="px-3 py-5 border-b flex items-center gap-4 cursor-pointer w-full"
                key={prod.id}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="object-cover h-20 w-20 rounded-md"
                />

                <div className="flex flex-1 items-center justify-between">
                  <p className="w-1/4">{prod.name}</p>
                  <p className="w-1/4">₹{prod.price.split('.')[0]}</p>
                  <p className="w-1/4 flex items-center gap-1">
                    {renderStars(prod.ratings)}
                  </p>

                  <input
                    type="number"
                    min="1"
                    className="w-24 border mx-2 px-2 py-1 outline-none"
                    value={prod.qty}
                    onChange={(e) => handleQuantityChange(prod.id, e.target.value)}
                  />

                  <p
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: prod,
                      })
                    }
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </p>
                </div>
              </li>
            ))}
          </>
        ) : (
          <li className="p-3 border-b">No items in cart</li>
        )}
      </div>
    </div>
  );
}

export default Cart;
