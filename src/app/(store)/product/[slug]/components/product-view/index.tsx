import { getSneaker } from '@/api/services/get-sneaker';
import { translateCategory } from '@/helpers/convert-sneaker-category';
import { translateGender } from '@/helpers/convert-sneaker-gender';
import Image from 'next/image';
import { ProductInfoToBuy } from '../product-info-to-buy';

export async function ProductView({ slug }: { slug: string }) {
  const sneaker = await getSneaker(slug);

  return (
    <div className="flex-1 flex flex-col gap-24">
      <div className="grid grid-cols-5 gap-12">
        <div className="relative col-span-3 overflow-hidden flex justify-center bg-zinc-900/30 rounded-lg px-12 border border-zinc-800/40">
          {!!sneaker.brand_logo && (
            <Image
              src={sneaker.brand_logo}
              width={48}
              height={48}
              alt=""
              className="absolute w-12 top-6 right-6 invert opacity-15"
            />
          )}

          <div className="relative flex flex-1">
            <Image
              src={sneaker.original_picture_url}
              alt=""
              width={1000}
              height={1000}
              quality={100}
              className="object-contain drop-shadow-sneaker-card"
            />
            <div className="absolute bottom-[100px] left-[50%] translate-x-[-50%] w-[70%] h-3 rounded-[50%] blur-md bg-black/50" />
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold leading-tight">{sneaker.name}</h1>

          <div className="mt-4 flex gap-3 text-zinc-400 text-sm">
            <span>
              {sneaker.gender
                .map((gender) => translateGender(gender))
                .join(' / ')}
            </span>
            {' / '}
            <span>
              {sneaker.category
                .map((category) => translateCategory(category))
                .join(' / ')}
            </span>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="inline-block rounded-full bg-zinc-50 px-5 py-2.5 text-zinc-900 font-semibold">
              {((sneaker.retail_price_cents ?? 0) / 100).toLocaleString(
                'pt-BR',
                {
                  style: 'currency',
                  currency: 'USD',
                }
              )}
            </span>
            <span className="text-sm text-zinc-400">
              Ou em 12x s/ juros de{' '}
              {((sneaker.retail_price_cents ?? 0) / 100 / 12).toLocaleString(
                'pt-BR',
                {
                  style: 'currency',
                  currency: 'USD',
                }
              )}
            </span>
          </div>

          <ProductInfoToBuy sneaker={sneaker} />
        </div>
      </div>

      <div className="flex flex-col gap-6 text-zinc-300">
        <h2 className="text-2xl">{sneaker.name}</h2>

        {!!sneaker.description ? (
          <div
            dangerouslySetInnerHTML={{ __html: sneaker.description }}
            className="max-w-[920px] leading-7"
          />
        ) : (
          <div className="text-center py-8 px-2">
            <p className="text-xl text-zinc-400">
              Não há descrição para este produto.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
