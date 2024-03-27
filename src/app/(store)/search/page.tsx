import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { SearchCurrentTerm } from './components/search-current-term';
import { SearchGridLoading } from './components/search-grid-loading';
import { SearchProductList } from './components/search-product-list';

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
        <SearchCurrentTerm />
      </Suspense>

      <Suspense key={query} fallback={<SearchGridLoading />}>
        <SearchProductList query={query} />
      </Suspense>
    </div>
  );
}
