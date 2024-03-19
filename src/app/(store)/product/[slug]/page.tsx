import { getSneaker } from '@/api/services/get-sneaker';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';
import { translateCategory } from '@/helpers/convert-sneaker-category';
import { translateGender } from '@/helpers/convert-sneaker-gender';
import { Metadata } from 'next';
import Image from 'next/image';

interface SneakerPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: SneakerPageProps): Promise<Metadata> {
  const product = await getSneaker(params.slug);

  return {
    title: product.name,
  };
}

// export async function generateStaticParams() {
//   const response = await api('/products/featured');
//   const products: Product[] = await response.json();

//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }

export default async function SneakerPage({ params }: SneakerPageProps) {
  const sneaker = await getSneaker(params.slug);

  return (
    <div className="flex flex-col gap-8 relative">
      <div className="fixed left-0 right-0 h-24 overflow-hidden flex items-center">
        <Image
          src="/nike-air-jordan-blue-home.png"
          width={1000}
          height={800}
          alt=""
          className="w-full mx-auto mb-[180px] brightness-[0.15]"
        />
      </div>

      <div className="relative mt-24 bg-zinc-950">
        <div className="absolute inset-0 rounded-md bg-gradient-to-r to-sky-500 from-transparent opacity-[0.05]"></div>

        <div className="relative flex flex-col gap-24 max-w-[1300px] mx-auto px-8 py-12">
          <div className="grid grid-cols-5 gap-12">
            <div className="relative col-span-3 overflow-hidden flex justify-center bg-zinc-900/40 rounded-lg px-12 border border-zinc-800/40">
              {!!sneaker.brand_logo && (
                <Image
                  src={sneaker.brand_logo}
                  width={48}
                  height={48}
                  alt=""
                  className="absolute w-12 top-6 right-6 invert opacity-15"
                />
              )}

              <div className="flex flex-1">
                <Image
                  src={sneaker.original_picture_url}
                  alt=""
                  width={1000}
                  height={1000}
                  quality={100}
                  className="object-contain drop-shadow-sneaker-card"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col justify-start">
              <h1 className="text-3xl font-bold leading-tight">
                {sneaker.name}
              </h1>

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
                  {(
                    (sneaker.retail_price_cents ?? 0) /
                    100 /
                    12
                  ).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <span className="block font-semibold">Tamanhos</span>

                <div className="flex flex-wrap gap-2">
                  {sneaker.size_range
                    .sort((a, b) => a - b)
                    .map((size) => (
                      <button
                        key={size}
                        type="button"
                        className="flex h-9 min-w-14 items-center justify-center rounded-full border border-zinc-800 text-sm font-semibold hover:bg-zinc-900"
                      >
                        {size}
                      </button>
                    ))}
                </div>
              </div>

              <AddToCartButton productId={sneaker.id} />
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
      </div>
    </div>
  );
}
