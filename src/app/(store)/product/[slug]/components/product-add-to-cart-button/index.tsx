'use client';

import { useCart } from '@/contexts/cart-context';

interface ProductAddToCartButtonProps {
  productId: number;
  size: number;
}

export function ProductAddToCartButton({
  productId,
  size,
}: ProductAddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col gap-4 mt-8">
      <p className="text-center text-sm text-zinc-400">
        Selecione um tamanho para adicionar ao carrinho.
      </p>

      <button
        type="button"
        className="relative overflow-hidden flex h-12 items-center justify-center rounded-full font-semibold text-white hover:scale-[1.025] duration-200"
        onClick={() => addToCart(productId)}
        disabled={!size}
      >
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-500 to-sky-600 opacity-[0.9]"></div>
        <span className="relative">Adicionar ao carrinho</span>
      </button>
    </div>
  );
}
