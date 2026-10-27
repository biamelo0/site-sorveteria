"use client";

import React from "react";

interface StoreLocatorSectionProps {
  onOpenLocator: () => void;
}

export function StoreLocatorSection({ onOpenLocator }: StoreLocatorSectionProps) {
  return (
    <section className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] overflow-hidden my-8 sm:my-12">
      {/* Imagem de fundo com close-up de gelatos artesanais */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1800&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#440d1f]/40 via-black/20 to-[#230f09]/50" />
      </div>

      {/* Placa Vintage Central */}
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-4 flex items-center justify-center">
        <div className="bg-[#f8f4ec] px-8 sm:px-14 py-7 sm:py-10 text-center shadow-2xl vintage-frame max-w-md w-full mx-4">
          {/* Filigrana Decorativa Superior */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <svg viewBox="0 0 40 10" className="w-8 sm:w-12 h-3 stroke-[#8c7361] fill-none">
              <path d="M 0,5 Q 20,0 40,5" strokeWidth="1" />
              <circle cx="20" cy="5" r="1.5" fill="#8c7361" />
            </svg>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#634e40] uppercase font-serif-title">
              ENCONTRE UM POTE
            </span>
            <svg viewBox="0 0 40 10" className="w-8 sm:w-12 h-3 stroke-[#8c7361] fill-none">
              <path d="M 0,5 Q 20,0 40,5" strokeWidth="1" />
              <circle cx="20" cy="5" r="1.5" fill="#8c7361" />
            </svg>
          </div>

          {/* Título Principal */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.16em] text-[#2c170e] font-serif-title uppercase mb-3">
            PERTO DE VOCÊ
          </h2>

          {/* Botão de Localização */}
          <button
            onClick={onOpenLocator}
            className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#473024] hover:text-[#8b5a2b] transition-colors border-b-2 border-[#8c7361] pb-1 hover:border-[#8b5a2b]"
          >
            VER PONTOS DE VENDA
          </button>
        </div>
      </div>
    </section>
  );
}
