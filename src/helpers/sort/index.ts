interface SneakerSortOption {
  label: string;
  value: 'price_asc' | 'price_desc';
}

export const sneakerSortingOptions: SneakerSortOption[] = [
  {
    label: 'Maior Preço',
    value: 'price_desc',
  },
  {
    label: 'Menor Preço',
    value: 'price_asc',
  },
];
