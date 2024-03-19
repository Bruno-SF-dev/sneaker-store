import { Brand, Category, Gender } from '../../api/data/types/sneakers';

export interface Filters {
  name: 'Categoria' | 'Marca' | 'Gênero';
  options: (Category | Brand | Gender)[];
  translateOption: (option: any) => string;
}
