import Image from 'next/image';

const brandLogoPaths = [
  '/logo-nike.png',
  '/logo-jordan.png',
  '/logo-vans.png',
  '/logo-adidas.png',
];

export function BrandBar() {
  return (
    <div className="relative overflow-hidden w-full h-8 px-4 items-center justify-center flex bg-zinc-900/80">
      <div className="h-full flex-1 flex justify-center max-w-[680px] py-1">
        {brandLogoPaths.map((logo) => (
          <div key={logo} className="flex flex-1 justify-center min-w-[32px]">
            <Image
              src={logo}
              width={32}
              height={32}
              alt=""
              className="object-contain invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
