import { AppFooter } from '@/components/app-footer';
import { AppHeader } from '@/components/app-header';
import { CartProvider } from '@/contexts/cart-context';
import { ReactNode } from 'react';

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full grid-rows-store-page">
        <AppHeader />

        {children}

        <AppFooter />
      </div>
    </CartProvider>
  );
}
