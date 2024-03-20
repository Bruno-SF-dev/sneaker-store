import { getAllSneakers } from '@/api/services/get-all-sneakers';
import { ProdutCard } from '@/components/product-card';
import { Grid } from '../grid';

export async function ProductList() {
  const sneakers = await getAllSneakers();

  return (
    <Grid>
      {sneakers.map((sneaker) => (
        <ProdutCard product={sneaker} key={sneaker.id} />
      ))}
    </Grid>
  );
}
