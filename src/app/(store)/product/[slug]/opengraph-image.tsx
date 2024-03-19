import { getSneaker } from '@/api/services/get-sneaker';
import { env } from '@/env';
import { ImageResponse } from 'next/og';
import colors from 'tailwindcss/colors';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getSneaker(params.slug);

  const productImageUrl = new URL(
    product.original_picture_url,
    env.APP_URL
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '24px',
        }}
      >
        <img
          src={productImageUrl}
          alt=""
          style={{
            flex: 1,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
