'use client';

import { useCart } from '@/contexts/cart-context';

interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      className="relative overflow-hidden mt-8 flex h-12 items-center justify-center rounded-full font-semibold text-white hover:brightness-90 duration-200"
      onClick={() => addToCart(productId)}
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-500 to-sky-600 opacity-[0.9]"></div>
      <span className="relative">Adicionar ao carrinho</span>
    </button>
  );
}
