import { Category } from '@/data/types/sneakers';

export const categoryMap: { [key in Category]: string } = {
  basketball: 'Basquete',
  lifestyle: 'Lifestyle',
  running: 'Corrida',
  skateboarding: 'Skate',
};

export const translateCategory = (category: Category) => {
  return categoryMap[category];
};
