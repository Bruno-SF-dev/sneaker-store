'use client';

import { useCart } from '@/contexts/cart-context';
import { ShoppingCart } from 'lucide-react';

export function CartWidget() {
  const { items } = useCart();

  return (
    <div className="flex items-center gap-2">
      <ShoppingCart className="size-4" />
      <span className="text-sm">Carrinho ({items.length})</span>
    </div>
  );
}
