import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nancy's Fancy | Gelato e Sorbetto Artesanal por Nancy Silverton",
  description: "Gelato e sorbetto artesanais italianos criados pela premiada chef Nancy Silverton com os melhores ingredientes naturais.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#fbf9f5] text-[#2d1810]">
        {children}
      </body>
    </html>
  );
}
