import { api } from '@/api/api';
import { Sneaker } from '@/api/data/types/sneakers';

export async function getAllSneakers(): Promise<Sneaker[]> {
  const response = await api('/sneakers', {
    next: {
      revalidate: 60 * 60, // 1 hora
    },
  });
  const sneakers = await response.json();

  return sneakers;
}
