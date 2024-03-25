'use client';

import { ShoppingCart } from 'lucide-react';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const addToCart = useCallback(
    (productId: number) => {
      const productInCart = cartItems.some(
        (item) => item.productId === productId
      );

      if (productInCart) {
        return;
      }

      setCartItems((prev) => {
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

      toast(
        <div className="flex gap-3">
          <ShoppingCart className="size-4" />
          <span className="text-sm">Produto adicionado ao carrinho.</span>
        </div>
      );
    },
    [cartItems]
  );

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="dark"
        progressStyle={{
          height: '4px',
          backgroundColor: '#0ea5e9',
        }}
      />
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
