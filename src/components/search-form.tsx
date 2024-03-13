'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const existingQueryParams = searchParams.get('q');

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q;

    if (!query) {
      return null;
    }

    router.push(`/search?q=${query}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-2 pl-4 rounded-full bg-zinc-900"
    >
      <Search className="size-5 text-zinc-500" />

      <input
        name="q"
        required
        defaultValue={existingQueryParams ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 py-3 px-2 rounded-full bg-transparent text-sm placeholder:text-zinc-500 outline-none focus-visible:ring-1 focus-visible:ring-zinc-800"
      />
    </form>
  );
}
