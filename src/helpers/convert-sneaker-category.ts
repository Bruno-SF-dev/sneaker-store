export const categoryMap: { [key: string]: string } = {
  basketball: 'Basquete',
  lifestyle: 'Lifestyle',
  running: 'Corrida',
  skateboarding: 'Skate',
  other: 'Outros',
};

export const translateCategory = (category: string) => {
  return categoryMap[category];
};
