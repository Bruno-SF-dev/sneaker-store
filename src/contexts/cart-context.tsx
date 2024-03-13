'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface CartItemType {
  productId: number;
  quantity: number;
}

interface CartContextType {
  items: CartItemType[];
  addToCart: (productId: number) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  function addToCart(productId: number) {
    setCartItems((prev) => {
      const productInCart = prev.some((item) => item.productId === productId);

      if (productInCart) {
        return prev.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prev, { productId, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
