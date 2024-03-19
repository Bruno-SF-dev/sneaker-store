import { Brand } from '@/data/types/sneakers';

export const brandMap: { [key in Brand]: string } = {
  'Air Jordan': 'Air Jordan',
  adidas: 'adidas',
  Champion: 'Champion',
  Converse: 'Converse',
  Gucci: 'Gucci',
  Nike: 'Nike',
  Vans: 'Vans',
};

export const translateBrand = (brand: Brand) => {
  return brandMap[brand];
};
