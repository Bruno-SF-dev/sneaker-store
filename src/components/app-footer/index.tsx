import Image from 'next/image';

export function AppFooter() {
  return (
    <div className="relative w-full h-[240px] bg-zinc-950">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r to-sky-500 from-transparent opacity-[0.035]"></div>
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.1]" />

      <div className="relative max-w-[1580px] mx-auto py-8 px-12 flex justify-between">
        <div className="flex flex-col gap-6">
          <p className="text-sm max-w-[380px]">
            SNKRS é um projeto de estudo, desenvolvido para aplicar os avanços
            mais recentes do Next.js 13.
          </p>

          <div className="text-sm">
            <p className="text-zinc-400">Referência para construção da API:</p>
            <a
              href="https://github.com/Stupidism/goat-sneakers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600"
            >
              Stupidism/goat-sneakers
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pr-12 text-sm">
          <span className="text-zinc-400">Desenvolvedor</span>

          <div className="space-y-3">
            <a
              href="https://github.com/Bruno-SF-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center"
            >
              <Image
                src="/icon _github_.svg"
                className="size-5"
                width={24}
                height={24}
                alt="Github Bruno-SF-dev"
              />
              <span>Bruno-SF-dev</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-farias-987633211/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center"
            >
              <Image
                src="/icon _linkedin_.svg"
                className="size-5"
                width={24}
                height={24}
                alt="Github Bruno-SF-dev"
              />
              <span>Bruno Farias</span>
            </a>
            <a
              href="mailto:brunosantosfarias2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center"
            >
              <Image
                src="/icon _gmail_.svg"
                className="size-5"
                width={24}
                height={24}
                alt="Github Bruno-SF-dev"
              />
              <span>Bruno Farias</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
