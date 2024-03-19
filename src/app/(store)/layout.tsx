import { Header } from '@/components/global-layout/header';
import { CartProvider } from '@/contexts/cart-context';
import { ReactNode } from 'react';

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full grid-rows-store-page">
        <Header />

        {children}
      </div>
    </CartProvider>
  );
}
