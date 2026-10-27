"use client";

import React from "react";
import Image from "next/image";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoryModal({ isOpen, onClose }: StoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fbf9f5] border border-[#d8cebe] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] flex flex-col overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 text-[#60493b] hover:text-[#2d1810]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] tracking-[0.28em] font-semibold text-[#806857] uppercase font-serif-title">
            A Chef por Trás do Sorvete
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[0.14em] text-[#331c13] font-serif-title mt-1">
            NANCY SILVERTON
          </h3>
          <p className="text-xs text-[#705b4e] mt-0.5">
            Vencedora do Prêmio James Beard de Melhor Chef & Fundadora do Osteria Mozza
          </p>
        </div>

        <div className="relative w-full aspect-video overflow-hidden bg-[#e8ded3] mb-6 border border-[#ded1c2]">
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
            alt="Chef preparando ingredientes nobres"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#4a3528] leading-relaxed font-light">
          <p>
            Nancy Silverton é uma aclamada chef, padeira e autora norte-americana cuja trajetória redefiniu a gastronomia moderna. Fundadora da lendária La Brea Bakery e cofundadora do estrelado Osteria Mozza em Los Angeles, Nancy dedicou toda a sua vida a aperfeiçoar os detalhes mais sutis de cada receita.
          </p>
          <p>
            Com a <strong>Nancy&apos;s Fancy</strong>, ela traz sua paixão intransigente por texturas nobres, frescor e intensidade de sabores para o autêntico gelato e sorbetto italiano. Cada lote é batido lentamente utilizando exclusivamente ingredientes integrais — leite e creme frescos de produtores locais, cerejas Amarena importadas da Emília-Romanha, café artesanal e chocolate 72% Valrhona.
          </p>
          <p className="italic text-[#755d4d] border-l-2 border-[#8c715e] pl-3 py-1">
            &ldquo;Não usamos estabilizantes artificiais nem corantes. Nosso compromisso é entregar a pureza e a intensidade exatas de cada ingrediente natural em cada colherada.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
