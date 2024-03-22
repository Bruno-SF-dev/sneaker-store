import { translateBrand } from '@/helpers/convert-sneaker-brand';
import { translateCategory } from '@/helpers/convert-sneaker-category';
import { translateGender } from '@/helpers/convert-sneaker-gender';
import { Brand, Category, Gender } from '../api/data/types/sneakers';
import { Filters } from './types/filters';

export const categories: Category[] = [
  'basketball',
  'lifestyle',
  'running',
  'skateboarding',
  'other',
];

export const brands: Brand[] = [
  'Air Jordan',
  'Champion',
  'Converse',
  'Gucci',
  'Nike',
  'Vans',
  'adidas',
];

export const genders: Gender[] = ['men', 'women', 'youth'];

export const filters: Filters[] = [
  {
    id: 'category',
    name: 'Categoria',
    options: categories.map((opt) => ({
      value: opt,
      label: translateCategory(opt),
    })),
  },
  {
    id: 'brand',
    name: 'Marca',
    options: brands.map((opt) => ({
      value: opt,
      label: translateBrand(opt),
    })),
  },
  {
    id: 'gender',
    name: 'Gênero',
    options: genders.map((opt) => ({
      value: opt,
      label: translateGender(opt),
    })),
  },
];
