import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { CurrentSearchTerm } from './components/current-search-term';
import GridLoading from './components/grid-loading';
import { ProductList } from './components/product-list';

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

  return (
    <div className="flex flex-col gap-12 px-8 py-12 w-full max-w-[1580px] mx-auto">
      <Suspense>
        <CurrentSearchTerm />
      </Suspense>

      <Suspense key={query} fallback={<GridLoading />}>
        <ProductList query={query} />
      </Suspense>
    </div>
  );
}
