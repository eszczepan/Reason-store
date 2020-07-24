import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ cart: [cartItems, setCartItems], isOpen: [open, setOpen] }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
