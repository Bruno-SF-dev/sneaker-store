interface SneakerSortOption {
  label: string;
  value: 'price_asc' | 'price_desc';
}

export const sneakerSortingOptions: SneakerSortOption[] = [
  {
    label: 'Ordenar por Maior Preço',
    value: 'price_desc',
  },
  {
    label: 'Ordenar por Menor Preço',
    value: 'price_asc',
  },
];
