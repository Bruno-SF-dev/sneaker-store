import { api } from '@/api/api';
import { Sneaker } from '@/api/data/types/sneakers';

export async function getSearchSneakers(query: string): Promise<Sneaker[]> {
  const response = await api(`/sneakers/search?q=${query}`);
  const sneakers = await response.json();

  return sneakers;
}
