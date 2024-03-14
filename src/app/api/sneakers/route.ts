import data from '@/data/sneakers-data.json';

export async function GET() {
  return Response.json(data.sneakers);
}
