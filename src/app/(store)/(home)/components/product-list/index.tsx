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

  const { data: sneakers, pagination } = await getAllSneakers({
    queryParams: `?${search}`,
  });

  return (
    <div className="flex-1 flex flex-col gap-8 justify-between">
      <Grid>
        {sneakers.map((sneaker) => (
          <ProdutCard product={sneaker} key={sneaker.id} />
        ))}
      </Grid>

      <Pagination pagination={pagination} />
    </div>
  );
}
