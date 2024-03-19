import type { Metadata } from 'next';
import { Inter, League_Gothic } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const leagueGothic = League_Gothic({
  subsets: ['latin'],
  variable: '--font-gothic',
});

export const metadata: Metadata = {
  title: {
    template: '%s | DevStore',
    default: 'DevStore',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${leagueGothic.variable}`}>
      <body className="relative bg-zinc-950 text-zinc-50 antialiased">
        <div className="absolute inset-0 rounded-md bg-gradient-to-r to-sky-500 from-transparent opacity-[0.05]"></div>
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
