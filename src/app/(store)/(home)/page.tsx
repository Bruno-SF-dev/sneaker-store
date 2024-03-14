import { api } from '@/data/api';
import { Sneaker } from '@/data/types/sneakers';
import { translateCategory } from '@/utils/convert-sneaker-category';
import { translateGender } from '@/utils/convert-sneaker-gender';
import Image from 'next/image';
import Link from 'next/link';

async function getFeaturedsneakers(): Promise<Sneaker[]> {
  const response = await api('/sneakers', {
    next: {
      revalidate: 60 * 60, // 1 hora
    },
  });
  const sneakers = await response.json();

  return sneakers;
}

export default async function Home() {
  const sneakers = await getFeaturedsneakers();

  return (
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-2 rounded-md border border-zinc-800"></div>

      <div className="col-span-7 grid grid-cols-4 gap-6">
        {sneakers.map((sneaker) => (
          <Link
            key={sneaker.id}
            href={`/sneaker/${sneaker.slug}`}
            className="group relative rounded-lg flex flex-col items-center bg-zinc-900/80 hover:scale-[1.01] transition-transform duration-300"
          >
            <Image
              src={sneaker.original_picture_url}
              width={640}
              height={640}
              quality={100}
              alt=""
              className="group-hover:scale-105 transition-transform duration-500 flex-1 drop-shadow-sneaker-card"
            />

            <div className="p-3 pt-4 h-48 bg-zinc-950/50 w-full rounded-b-lg border-2 border-zinc-900">
              <strong className="font-semibold">{sneaker.name}</strong>

              <div className="mt-3 flex flex-col gap-1">
                <span className="text-zinc-300 text-sm">
                  {sneaker.gender
                    .map((gender) => translateGender(gender))
                    .join(' / ')}
                </span>
                <span className="text-zinc-300 text-sm">
                  {sneaker.category
                    .map((category) => translateCategory(category))
                    .join(' / ')}
                </span>

                <strong className="mt-4 font-normal">
                  {((sneaker.retail_price_cents ?? 0) / 100).toLocaleString(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'USD',
                    }
                  )}
                </strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
