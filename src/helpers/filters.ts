import { translateBrand } from '@/helpers/convert-sneaker-brand';
import { translateCategory } from '@/helpers/convert-sneaker-category';
import { translateGender } from '@/helpers/convert-sneaker-gender';
import { Brand, Category, Color, Gender } from '../api/data/types/sneakers';
import { ColorFilters, Filters } from './types/filters';

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

export const genres: Gender[] = ['men', 'women', 'youth'];

export const colors: Color[] = [
  'white',
  'black',
  'red',
  'blue',
  'brown',
  'green',
  'pink',
  'purple',
  'cream',
  'multi-color',
  'orange',
  'grey',
  'tan',
  'yellow',
];

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
    options: genres.map((opt) => ({
      value: opt,
      label: translateGender(opt),
    })),
  },
];

export const filterColor: ColorFilters[] = [
  {
    id: 'color',
    name: 'Cor',
    options: colors.map((opt) => ({
      value: opt,
    })),
  },
];
