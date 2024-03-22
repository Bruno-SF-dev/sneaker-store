import { getAllSneakers } from '@/api/services/get-all-sneakers';
import { ProdutCard } from '@/components/product-card';
import { FilterId } from '@/helpers/types/filters';
import { Grid } from '../grid';
import { Pagination } from '../pagination';

interface ProductListProps {
  searchParams: { [key in FilterId]: string };
}

export async function ProductList({ searchParams }: ProductListProps) {
  const search = new URLSearchParams(searchParams);
  const searchString = search.toString();

  const generatePageURL = (page: string) => {
    const currentURL = new URLSearchParams(searchParams);
    currentURL.set('page', page);
    return currentURL.toString();
  };

  const {
    data: sneakers,
    totalPages,
    currentPage,
    nextPage,
    prevPage,
  } = await getAllSneakers({
    queryParams: `?${searchString}`,
  });

  const buttonsPag = Array.from({ length: totalPages }).map((_, idx) => {
    const page = String(idx + 1);

    return {
      href: `?${generatePageURL(page)}`,
      label: page,
      isActive: page === String(currentPage),
    };
  });

  return (
    <div className="flex-1 flex flex-col gap-8 justify-between">
      <Grid>
        {sneakers.map((sneaker) => (
          <ProdutCard product={sneaker} key={sneaker.id} />
        ))}
      </Grid>

      {totalPages > 1 && (
        <div className="relative p-4">
          <div className="absolute inset-0 rounded-md bg-gradient-to-r to-sky-500 from-transparent opacity-[0.05]"></div>

          <Pagination
            pages={buttonsPag}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </div>
      )}
    </div>
  );
}
