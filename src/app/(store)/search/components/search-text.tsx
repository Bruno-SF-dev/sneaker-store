'use client';
import { useSearchParams } from 'next/navigation';

export function SearchText() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <p>
      <span className="text-xl text-zinc-300">Resultados para:</span>
      <span className="ml-4 text-3xl font-semibold">{query}</span>
    </p>
  );
}
