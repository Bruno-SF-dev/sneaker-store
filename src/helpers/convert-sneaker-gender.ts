export const genderMap: { [key: string]: string } = {
  men: 'Masculino',
  youth: 'Juvenil',
  women: 'Feminino',
};

export const translateGender = (gender: string) => {
  return genderMap[gender];
};
