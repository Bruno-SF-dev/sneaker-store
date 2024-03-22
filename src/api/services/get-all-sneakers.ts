import { api } from '@/api/api';
import { Sneaker } from '@/api/data/types/sneakers';

interface GetAllSneakers {
  queryParams: string;
}

export async function getAllSneakers({
  queryParams,
}: GetAllSneakers): Promise<Sneaker[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const endpoint = '/sneakers';
  const path = !!queryParams ? endpoint.concat(queryParams) : endpoint;

  const response = await api(path, {
    cache: 'no-store',
  });
  const sneakers = await response.json();

  return sneakers;
}
