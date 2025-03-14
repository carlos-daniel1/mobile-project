import React, { createContext, useState, ReactNode, useContext } from 'react';

type CartContextType = {
  cart: any[];
  adicionarAoCarrinho: (item: any) => void;
  removerDoCarrinho: (itemId: string) => void; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<any[]>([]);

  const adicionarAoCarrinho = (item: any) => {
    
    const newItem = { ...item, cartId: `${item.id}-${cart.length}` };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removerDoCarrinho = (itemCartId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== itemCartId)); // Remove o item com base no cartId
  };

  return (
    <CartContext.Provider value={{ cart, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};