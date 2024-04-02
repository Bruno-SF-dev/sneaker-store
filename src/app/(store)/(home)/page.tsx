import { HomeLayoutProvider } from '@/contexts/home-layout-context';
import { FilterId } from '@/helpers/filters/@types/filters';
import Image from 'next/image';
import { Suspense } from 'react';
import { HomeGridLoading } from './components/home-grid-loading';
import { HomeItemsPerRow } from './components/home-items-per-row';
import { HomeProductList } from './components/home-product-list';
import { HomeSideFilter } from './components/home-sidebar-filter';
import { HomeSortBy } from './components/home-sort-by';

interface HomeProps {
  searchParams: { [key in FilterId]: string };
}

export default function Home({ searchParams }: HomeProps) {
  const suspenseKey = JSON.stringify(searchParams);

  return (
    <div className="flex flex-col gap-8 relative">
      <div className="fixed left-0 right-0 h-32 md:h-48 lg:h-64 overflow-hidden flex items-center">
        <Image
          src="/nike-air-jordan-blue-home.png"
          width={1000}
          height={800}
          alt=""
          className="w-full mx-auto mb-[80px] md:mb-[180px] brightness-[0.15]"
        />
        <h1 className="absolute w-full text-center font-ghotic text-5xl md:text-6xl lg:text-8xl text-zinc-200">
          <span className="">Elevate </span>
          <span>Your </span>
          <span className="">Style</span>
        </h1>
      </div>

      <HomeLayoutProvider>
        <div className="relative mt-32 md:mt-48 lg:mt-64 bg-zinc-950">
          <div className="absolute inset-0 bg-gradient-to-r to-sky-500 from-transparent opacity-[0.05]"></div>

          <div className="relative flex flex-col gap-6 w-full max-w-[1580px] mx-auto px-8 pt-12 pb-24">
            <div className="flex items-center justify-between gap-6 py-2">
              <h2 className="text-3xl font-semibold">Todos os Produtos</h2>

              <div className="flex gap-6 items-center">
                <div className="hidden lg:block">
                  <HomeItemsPerRow />
                </div>
                <HomeSortBy />
              </div>
            </div>

            <div className="grid grid-cols-9 gap-4">
              <div className="col-span-2 hidden lg:block">
                <div className="sticky top-28">
                  <HomeSideFilter />
                </div>
              </div>

              <div className="flex flex-col col-span-9 lg:col-span-7">
                <Suspense fallback={<HomeGridLoading />} key={suspenseKey}>
                  <HomeProductList searchParams={searchParams} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </HomeLayoutProvider>
    </div>
  );
}
