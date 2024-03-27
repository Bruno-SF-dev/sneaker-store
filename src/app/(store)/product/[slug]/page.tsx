import Image from 'next/image';
import { Suspense } from 'react';
import { ProductView } from './components/product-view';
import { ProductViewLoading } from './components/product-view-loading';

export interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({
  params: { slug },
}: ProductPageProps) {
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

        <div className="relative w-full flex max-w-[1300px] mx-auto px-8 pt-12 pb-60">
          <Suspense key={slug} fallback={<ProductViewLoading />}>
            <ProductView slug={slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
