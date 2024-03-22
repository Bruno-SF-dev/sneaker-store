import { Brand, Category, Gender } from '../../api/data/types/sneakers';

export type FilterId = 'category' | 'brand' | 'gender';
export type OptionValue = Category | Brand | Gender;

export interface Filters {
  id: FilterId;
  name: 'Categoria' | 'Marca' | 'Gênero';
  options: {
    value: OptionValue;
    label: string;
  }[];
}
