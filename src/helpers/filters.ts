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
    name: 'Categoria',
    options: categories,
    translateOption: translateCategory,
  },
  {
    name: 'Marca',
    options: brands,
    translateOption: translateBrand,
  },
  {
    name: 'Gênero',
    options: genders,
    translateOption: translateGender,
  },
];
