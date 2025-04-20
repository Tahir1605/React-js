import { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';

const CartContext = createContext();

function Context({ children }) {
  faker.seed(100); // optional: makes data consistent on every reload

  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlPicsumPhotos(), // updated image generator
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
  }));

  // console.log(products);

  const [state,dispatch] = useReducer(cartReducer,{
       products:products,
       cart: []
  })

  const [productState,productDispatch] = useReducer(productReducer,{
    byStock:false,
    byFastDelivery:false,
    byRatings:0,
    searchQuery:"",
  })

  return (
    <CartContext.Provider value={{state,dispatch,productState,productDispatch}}>
      {children}
    </CartContext.Provider>
  );
}

export default Context;

export const UseCartContext = () =>{
  return useContext(CartContext)
}