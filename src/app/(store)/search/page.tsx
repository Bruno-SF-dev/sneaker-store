import { getSearchSneakers } from '@/api/services/get-search-sneakers';
import { ProdutCard } from '@/components/product-card';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { SearchText } from './components/search-text';

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = searchParams;

  if (!query) {
    redirect('/');
  }

  const sneakers = await getSearchSneakers(query);

  return (
    <div className="flex flex-col gap-12 px-8 py-12 max-w-[1580px] mx-auto">
      <Suspense>
        <SearchText />
      </Suspense>

      <div className="grid grid-cols-5 gap-6">
        {sneakers.map((sneaker) => (
          <ProdutCard product={sneaker} key={sneaker.id} />
        ))}
      </div>
    </div>
  );
}
