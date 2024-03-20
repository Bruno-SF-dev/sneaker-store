import { getSearchSneakers } from '@/api/services/get-search-sneakers';
import { ProdutCard } from '@/components/product-card';
import { PackageSearch } from 'lucide-react';
import { Grid } from '../grid';

export async function ProductList({ query }: { query: string }) {
  const sneakers = await getSearchSneakers(query);

  if (!sneakers.length) {
    return (
      <div className="py-24 px-8 flex flex-col items-center justify-center gap-4 opacity-50">
        <PackageSearch size={64} strokeWidth={1.5} />
        <h2 className="text-2xl">Não encontramos produtos para esta busca.</h2>
      </div>
    );
  }

  return (
    <Grid>
      {!!sneakers.length &&
        sneakers.map((sneaker) => (
          <ProdutCard product={sneaker} key={sneaker.id} />
        ))}
    </Grid>
  );
}
