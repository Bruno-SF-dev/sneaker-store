'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CartWidget } from './cart/cart-widget';

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex w-[320px] items-center gap-2 pl-4 rounded-full bg-zinc-900">
          <Search className="size-5 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 py-3 px-2 rounded-full bg-transparent text-sm placeholder:text-zinc-500 outline-none focus-visible:ring-1 focus-visible:ring-zinc-800"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Conta</span>
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
  );
}
