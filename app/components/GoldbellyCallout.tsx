"use client";

import React from "react";

interface GoldbellyCalloutProps {
  onOpenPurchase: () => void;
}

export function GoldbellyCallout({ onOpenPurchase }: GoldbellyCalloutProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 text-center flex flex-col items-center">
      <p className="text-xs sm:text-sm italic font-editorial text-[#5f493b] max-w-2xl leading-relaxed mb-6">
        *Estes sabores artesanais estão disponíveis para compra online exclusiva através do nosso parceiro oficial{" "}
        <span className="font-semibold not-italic">Goldbelly®</span> — Fornecedores de Alta Gastronomia*
      </p>

      <button
        onClick={onOpenPurchase}
        className="px-8 sm:px-12 py-3 border border-[#6b5547] text-[#3b261b] hover:bg-[#3b261b] hover:text-[#ffffff] text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase transition-all duration-200 active:scale-95 shadow-sm"
      >
        COMPRAR SABORES SELECIONADOS ONLINE
      </button>
    </section>
  );
}
