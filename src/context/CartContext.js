import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (item) => {
    const itemExists = cart.find(cartItem => cartItem.id === item.id);

    if (itemExists) {
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    }

    setMessage('Item adicionado ao carrinho');
    setTimeout(() => setMessage(''), 2000);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0); // Remove o item se a quantidade for 0

    setCart(updatedCart);
    setMessage('Item removido do carrinho');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, message }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
