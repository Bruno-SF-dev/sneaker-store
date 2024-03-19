import { getAllSneakers } from '@/api/services/get-all-sneakers';
import { ButtonItemsPerRow } from '@/components/button-items-per-row';
import { ProdutCard } from '@/components/product-card';
import { ProductGrid } from '@/components/product-grid';
import { SideFilter } from '@/components/side-filter';
import { HomeLayoutProvider } from '@/contexts/home-layout-context';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default async function Home() {
  const sneakers = await getAllSneakers();

  return (
    <div className="flex flex-col gap-8 relative">
      <div className="fixed left-0 right-0 h-64 overflow-hidden flex items-center">
        <Image
          src="/nike-air-jordan-blue-home.png"
          width={1000}
          height={800}
          alt=""
          className="w-full mx-auto mb-[180px] brightness-[0.15]"
        />
        <h1 className="absolute w-full text-center font-ghotic text-8xl text-zinc-200">
          <span className="">Elevate </span>
          <span>Your </span>
          <span className="">Style</span>
        </h1>
      </div>

      <HomeLayoutProvider>
        <div className="relative mt-64 bg-zinc-950">
          <div className="absolute inset-0 rounded-md bg-gradient-to-r to-sky-500 from-transparent opacity-[0.05]"></div>

          <div className="relative flex flex-col gap-6 max-w-[1580px] mx-auto px-8 py-12">
            <div className="flex items-center justify-between gap-6 py-2">
              <h2 className="text-3xl font-semibold">Todos os Produtos</h2>

              <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                  <ButtonItemsPerRow quantity={4} />
                  <ButtonItemsPerRow quantity={3} />
                  <ButtonItemsPerRow quantity={2} />
                </div>

                <button className="flex items-center gap-2">
                  Ordernar por
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-9 gap-4">
              <div className="col-span-2">
                <div className="sticky top-28">
                  <SideFilter />
                </div>
              </div>

              <div className="col-span-7">
                <ProductGrid>
                  {sneakers.map((sneaker) => (
                    <ProdutCard product={sneaker} key={sneaker.id} />
                  ))}
                </ProductGrid>
              </div>
            </div>
          </div>
        </div>
      </HomeLayoutProvider>
    </div>
  );
}
