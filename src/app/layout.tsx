import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar'
import VLibrasWidget from '@/components/VLibrasWidget'


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DuoLibras - Aprenda Libras",
  description: "Plataforma interativa para aprendizado da Língua Brasileira de Sinais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <NavBar/>
        <VLibrasWidget />
        {children}
      </body>
    </html>
  );
}

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
  });
}
