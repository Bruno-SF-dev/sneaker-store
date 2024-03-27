import { translateBrand } from '@/helpers/map-translations/translate-sneaker-brand';
import { translateCategory } from '@/helpers/map-translations/translate-sneaker-category';
import { translateGender } from '@/helpers/map-translations/translate-sneaker-gender';
import { CheckboxFilters, ColorFilters } from './@types/filters';
import { brandOptions } from './filter-options/brand-options';
import { categoryOptions } from './filter-options/category-options';
import { colorOptions } from './filter-options/color-options';
import { genderOptions } from './filter-options/gender-options';

export const checkboxFilters: CheckboxFilters[] = [
  {
    id: 'category',
    name: 'Categoria',
    options: categoryOptions.map((opt) => ({
      value: opt,
      label: translateCategory(opt),
    })),
  },
  {
    id: 'brand',
    name: 'Marca',
    options: brandOptions.map((opt) => ({
      value: opt,
      label: translateBrand(opt),
    })),
  },
  {
    id: 'gender',
    name: 'Gênero',
    options: genderOptions.map((opt) => ({
      value: opt,
      label: translateGender(opt),
    })),
  },
];

export const colorFilters: ColorFilters[] = [
  {
    id: 'color',
    name: 'Cor',
    options: colorOptions.map((opt) => ({
      value: opt,
    })),
  },
];
