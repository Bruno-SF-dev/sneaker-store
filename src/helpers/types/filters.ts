import { Brand, Category, Color, Gender } from '../../api/data/types/sneakers';

export type FilterId = 'category' | 'brand' | 'gender' | 'color';
export type OptionValue = Category | Brand | Gender | Color;

export interface Filters {
  id: FilterId;
  name: 'Categoria' | 'Marca' | 'Gênero';
  options: {
    value: OptionValue;
    label: string;
  }[];
}

export interface ColorFilters {
  id: 'color';
  name: 'Cor';
  options: {
    value: Color;
  }[];
}
