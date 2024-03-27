'use client';

import { useHomeLayout } from '@/contexts/home-layout-context';

export function ItemsButton({ quantity }: { quantity: number }) {
  const { itemsPerRow, setItemsPerRow } = useHomeLayout();

  const getColorClass = () => {
    return itemsPerRow === quantity ? 'border-zinc-400' : 'border-zinc-700';
  };

  const handleClick = () => {
    setItemsPerRow(quantity);
  };

  return (
    <button
      className="py-1 px-1 flex items-center gap-1"
      onClick={handleClick}
      title={`Exibir de ${quantity} em ${quantity}`}
    >
      {Array.from({ length: quantity }).map((_, idx) => (
        <div
          key={idx}
          className={`w-4 h-5 border rounded ${getColorClass()}`}
        />
      ))}
    </button>
  );
}
