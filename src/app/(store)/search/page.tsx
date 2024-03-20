import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import GridLoading from './components/grid-loading';
import { ProductList } from './components/product-list';
import { SearchTerm } from './components/search-term';

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
        <SearchTerm />
      </Suspense>

      <Suspense key={query} fallback={<GridLoading />}>
        <ProductList query={query} />
      </Suspense>
    </div>
  );
}
