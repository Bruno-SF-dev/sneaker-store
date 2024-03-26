import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { CartWidget } from './cart-widget';
import { SearchForm } from './search-form';

export function Header() {
  return (
    <div className="relative pb-28 flex">
      <div className="fixed z-10 flex w-full bg-zinc-950">
        <div className="absolute inset-0 rounded-md bg-gradient-to-r to-sky-500 from-transparent opacity-[0.05]"></div>

        <div className="relative flex w-full max-w-[1580px] mx-auto items-center justify-between p-8">
          <div className="flex items-center gap-5">
            <Link href="/" className="text-2xl font-extrabold text-white">
              <Image
                src="/logo-snkrs.svg"
                alt=""
                width={135}
                height={100}
                className="w-[94px]"
              />
            </Link>

            <Suspense>
              <SearchForm />
            </Suspense>
          </div>

          <div className="flex items-center gap-4">
            <CartWidget />

            <div className="w-px h-4 bg-zinc-700"></div>

            <Link href="/" className="flex items-center gap-2 hover:underline">
              <span className="text-sm">Minha conta</span>
              <Image
                src="https://github.com/Bruno-SF-dev.png"
                className="size-6 border border-zinc-800 rounded-full"
                width={24}
                height={24}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
