import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <CartContext.Provider
      value={{ cart: [cartItems, setCartItems], isOpen: [open, setOpen] }}
    >
      {children}
    </CartContext.Provider>
  );
};
