import { getAllSneakers } from '@/api/services/get-all-sneakers';
import { ProdutCard } from '@/components/product-card';
import { FilterId } from '@/helpers/filters/@types/filters';
import { HomeGrid } from '../home-grid';
import { HomePagination } from '../home-pagination';

interface HomeProductListProps {
  searchParams: { [key in FilterId]: string };
}

export async function HomeProductList({ searchParams }: HomeProductListProps) {
  const search = new URLSearchParams(searchParams);

  const { data: sneakers, pagination } = await getAllSneakers({
    queryParams: `?${search}`,
  });

  return (
    <div className="flex-1 flex flex-col gap-8 justify-between">
      <HomeGrid>
        {sneakers.map((sneaker) => (
          <ProdutCard product={sneaker} key={sneaker.id} />
        ))}
      </HomeGrid>

      <HomePagination pagination={pagination} />
    </div>
  );
}
