import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import NavBar from '@/components/NavBar/NavBar';
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geom = localFont({
  src: [
    {
      path:'../../public/Geom/static/Geom-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path:'../../public/Geom/static/Geom-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path:'../../public/Geom/static/Geom-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-geom',
})

const dashing = localFont({
  src: [
    {
      path:'../../public/dashing/Dashing-PersonalUse.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-dashing',
})

export const metadata: Metadata = {
  title: "Papel & Ponto",
  description: "Loja de papelaria e material de escritório",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${geom.variable} ${dashing.variable}`}>
        
        <NavBar />

        {children}

      </body>
    </html>
  );
}