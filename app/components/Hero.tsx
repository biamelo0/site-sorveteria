"use client";

import React from "react";

export function Hero() {
  return (
    <section className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden bg-[#e8ded3] border-b border-[#ded2c3]">
      {/* Imagem de fundo com bowls de gelato artesanal */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=1800&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e1d15]/50 via-[#f5efe6]/40 to-[#faf6ef]/90"></div>
      </div>

      {/* Banner decorativo com tipografia elegante */}
      <div className="relative max-w-6xl mx-auto h-full px-6 flex items-center justify-end sm:justify-center">
        <div className="text-center sm:text-left bg-white/80 backdrop-blur-sm px-6 py-4 rounded-sm border border-white/60 shadow-sm">
          <span className="block text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold text-[#6d5445] font-serif-title">
            COLEÇÃO EXCLUSIVA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.18em] font-bold text-[#321c13] font-serif-title mt-0.5">
            SABORES
          </h2>
        </div>
      </div>
    </section>
  );
}

