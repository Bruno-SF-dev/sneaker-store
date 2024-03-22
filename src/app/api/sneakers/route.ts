import data from '@/api/data/fake-db/sneakers-data.json';
import { Sneaker } from '@/api/data/types/sneakers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('request.nextUrl.searchParams', request.nextUrl.searchParams);

  const searchParams = request.nextUrl.searchParams;

  let sneakerData: Sneaker[] = data.sneakers;

  const queryCategory = searchParams.get('category');
  const queryBrand = searchParams.get('brand');
  const queryGender = searchParams.get('gender');

  if (!!queryCategory) {
    const queriesCategory = queryCategory.split(',');
    sneakerData = sneakerData.filter((snk) =>
      snk.category.some((cat) => queriesCategory.includes(cat))
    );
  }

  if (!!queryBrand) {
    const queriesBrand = queryBrand.split(',');
    sneakerData = sneakerData.filter((snk) =>
      queriesBrand.includes(snk.brand_name)
    );
  }

  if (!!queryGender) {
    const queriesGender = queryGender.split(',');
    sneakerData = sneakerData.filter((snk) =>
      snk.gender.some((gender) => queriesGender.includes(gender))
    );
  }

  return Response.json(sneakerData);
}
