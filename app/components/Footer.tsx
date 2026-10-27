"use client";

import React from "react";

interface FooterProps {
  onOpenNewsletter: () => void;
  onOpenLocator: () => void;
  onOpenPurchase: () => void;
  onOpenContact: () => void;
  onOpenStory: () => void;
}

export function Footer({
  onOpenNewsletter,
  onOpenLocator,
  onOpenPurchase,
  onOpenContact,
  onOpenStory,
}: FooterProps) {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#eee7de] border-t border-[#ded4c7] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Navegação Esquerda e Atalhos */}
          <div className="flex items-center gap-5 sm:gap-7 order-2 md:order-1 text-[#4f3a2d]">
            {/* Ícone de E-mail */}
            <button
              onClick={onOpenNewsletter}
              aria-label="Inscrever-se na newsletter"
              className="p-1 hover:text-[#8b5a2b] transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>

            {/* Ícone de Mapa / Lojas */}
            <button
              onClick={onOpenLocator}
              aria-label="Encontrar lojas"
              className="p-1 hover:text-[#8b5a2b] transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <button
              onClick={scrollToTop}
              className="text-[10px] sm:text-xs tracking-[0.22em] uppercase font-bold hover:text-[#8b5a2b] transition-colors"
            >
              SABORES
            </button>

            <button
              onClick={onOpenStory}
              className="text-[10px] sm:text-xs tracking-[0.22em] uppercase font-bold hover:text-[#8b5a2b] transition-colors"
            >
              A NOSSA HISTÓRIA
            </button>
          </div>

          {/* Brasão Monograma Central */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              {/* Losango externo */}
              <div className="absolute inset-2 rotate-45 border border-[#856e5f] bg-[#f8f4ed] shadow-xs" />
              {/* Losango interno fino */}
              <div className="absolute inset-3 rotate-45 border border-[#c1b1a4]" />
              {/* Monograma central */}
              <div className="relative z-10 flex items-center justify-center font-serif-title font-extrabold text-[#3a2217] text-base sm:text-lg select-none">
                <span>N</span>
                <span className="text-xs sm:text-sm text-[#8a6a54] mx-0.5">✝</span>
                <span>F</span>
              </div>
            </div>
          </div>

          {/* Navegação Direita e Redes Sociais */}
          <div className="flex items-center gap-5 sm:gap-7 order-3 text-[#4f3a2d]">
            <button
              onClick={onOpenPurchase}
              className="text-[10px] sm:text-xs tracking-[0.22em] uppercase font-bold hover:text-[#8b5a2b] transition-colors"
            >
              COMPRAR
            </button>

            <button
              onClick={onOpenContact}
              className="text-[10px] sm:text-xs tracking-[0.22em] uppercase font-bold hover:text-[#8b5a2b] transition-colors"
            >
              CONTATO
            </button>

            {/* Ícone Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nancy's Fancy no Facebook"
              className="p-1 hover:text-[#8b5a2b] transition-colors"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Ícone Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nancy's Fancy no Instagram"
              className="p-1 hover:text-[#8b5a2b] transition-colors"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Rodapé com Direitos Autorais */}
        <div className="mt-6 pt-4 border-t border-[#dfd4c7] text-center text-[10px] text-[#786457]">
          © {year || "2026"} Nancy&apos;s Fancy Gelato e Sorbetto. Produzido com ingredientes puros e artesanais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
