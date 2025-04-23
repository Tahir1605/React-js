import React, { createContext, useContext, useEffect, useState } from "react";


export const ShoppingCart = createContext();


export const CartProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const [cartItems,setCartItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')  
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch(error => console.error("Fetch error:", error));
    }, []);

    // const addToCart = (product) =>{
    //     setCartItems((prevItem) => [...prevItem, product])
    // }

    const addToCart = (product) => {
        setCartItems(prevItems => {
          const existingItem = prevItems.find(item => item.id === product.id);
          if (existingItem) {
            return prevItems.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...prevItems, { ...product, quantity: 1 }];
        });
      };
      
      const updateQuantity = (id, newQuantity) => {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      };
      

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    return (
        <ShoppingCart.Provider value={{ data, addToCart , removeFromCart , updateQuantity, cartItems }}>
            {children}
        </ShoppingCart.Provider>
    );
};


export const useShoppingCart = () => {
    return useContext(ShoppingCart);
};
