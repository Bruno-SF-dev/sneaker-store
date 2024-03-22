import { getAllSneakers } from '@/api/services/get-all-sneakers';
import { ProdutCard } from '@/components/product-card';
import { FilterId } from '@/helpers/types/filters';
import { Grid } from '../grid';

interface ProductListProps {
  searchParams: { [key in FilterId]: string };
}

export async function ProductList({ searchParams }: ProductListProps) {
  const search = new URLSearchParams(searchParams);
  const searchString = search.toString();

  const sneakers = await getAllSneakers({
    queryParams: `?${searchString}`,
  });

  return (
    <Grid>
      {sneakers.map((sneaker) => (
        <ProdutCard product={sneaker} key={sneaker.id} />
      ))}
    </Grid>
  );
}
