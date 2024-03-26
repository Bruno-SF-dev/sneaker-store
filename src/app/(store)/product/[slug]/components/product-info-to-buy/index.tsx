'use client';
import { Sneaker } from '@/api/data/types/sneakers';

import { useState } from 'react';
import { ProductAddToCartButton } from '../product-add-to-cart-button';

export function ProductInfoToBuy({ sneaker }: { sneaker: Sneaker }) {
  const [sizeSelected, setSizeSelected] = useState(0);

  const getSizeButtonClass = (size: number) => {
    return size === sizeSelected
      ? 'bg-zinc-50 text-zinc-900 border-zinc-50'
      : 'border-zinc-800 hover:bg-zinc-900';
  };

  return (
    <>
      <div className="mt-8 space-y-4">
        <span className="block font-semibold">Tamanhos</span>

        <div className="flex flex-wrap gap-2">
          {sneaker.size_range
            .sort((a, b) => a - b)
            .map((size) => (
              <button
                key={size}
                type="button"
                data-testid="btn-size"
                className={`flex h-9 min-w-14 items-center justify-center rounded-full border text-sm font-semibold ${getSizeButtonClass(
                  size
                )}`}
                onClick={() => setSizeSelected(size)}
              >
                {size}
              </button>
            ))}
        </div>
      </div>

      <ProductAddToCartButton productId={sneaker.id} size={sizeSelected} />
    </>
  );
}
