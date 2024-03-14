import { Gender } from '@/data/types/sneakers';

export const genderMap: { [key in Gender]: string } = {
  men: 'Masculino',
  youth: 'Juvenil',
  women: 'Feminino',
};

export const translateGender = (gender: Gender) => {
  return genderMap[gender];
};
