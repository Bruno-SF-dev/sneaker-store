import { Sneaker } from '@/api/data/types/sneakers';
import { translateCategory } from '@/helpers/map-translations/translate-sneaker-category';
import { translateGender } from '@/helpers/map-translations/translate-sneaker-gender';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCardType } from '../@types/product-card';

export function ProductCard({ product }: { product: ProductCardType }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative rounded-lg flex flex-col items-center bg-zinc-900/30 hover:scale-[1.01] transition-transform duration-300"
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.025]"></div>

      {!!product.brand_logo && (
        <Image
          src={product.brand_logo}
          width={24}
          height={24}
          alt=""
          className="absolute w-[7.5%] top-1 invert opacity-15"
        />
      )}

      <div className="relative px-4">
        <Image
          src={product.original_picture_url}
          width={640}
          height={640}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500 flex-1 drop-shadow-sneaker-card"
        />
        <div className="absolute bottom-[40px] left-[50%] translate-x-[-50%] w-[70%] h-3 rounded-[50%] blur-md bg-black/50" />
      </div>

      <div className="relative p-3 pt-4 h-48 bg-zinc-900/30 w-full rounded-b-lg">
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.015]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.1]" />

        <strong className="font-semibold">{product.name}</strong>

        <div className="mt-3 flex flex-col gap-1">
          <span className="text-zinc-400 text-sm">
            {product.gender
              .map((gender) => translateGender(gender))
              .join(' / ')}
          </span>
          <span className="text-zinc-400 text-sm">
            {product.category
              .map((category) => translateCategory(category))
              .join(' / ')}
          </span>

          <strong className="mt-4 font-normal">
            {((product.retail_price_cents ?? 0) / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'USD',
            })}
          </strong>
        </div>
      </div>
    </Link>
  );
}
