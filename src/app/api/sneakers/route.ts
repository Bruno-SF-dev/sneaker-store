import data from '@/api/data/fake-db/sneakers-data.json';
import { Sneaker } from '@/api/data/types/sneakers';
import { NextRequest } from 'next/server';
import { filterByBrand } from './helpers/filter-by-brand';
import { filterByCategory } from './helpers/filter-by-category';
import { filterByGender } from './helpers/filter-by-gender';

export async function GET(request: NextRequest) {
  console.log('request.nextUrl.searchParams', request.nextUrl.searchParams);

  const searchParams = request.nextUrl.searchParams;

  let sneakerData: Sneaker[] = data.sneakers;

  const categoryQuery = searchParams.get('category');
  const brandQuery = searchParams.get('brand');
  const genderQuery = searchParams.get('gender');

  if (categoryQuery) {
    const categories = categoryQuery.split(',');
    sneakerData = filterByCategory(sneakerData, categories);
  }

  if (brandQuery) {
    const brands = brandQuery.split(',');
    sneakerData = filterByBrand(sneakerData, brands);
  }

  if (genderQuery) {
    const genres = genderQuery.split(',');
    sneakerData = filterByGender(sneakerData, genres);
  }

  return Response.json(sneakerData);
}
