"use client";

import React from "react";
import Image from "next/image";
import { Flavor } from "../data/flavors";
import { DietaryBadge } from "./DietaryBadge";

interface FlavorDetailCardProps {
  flavor: Flavor;
  onPurchase: (flavor: Flavor) => void;
}

export function FlavorDetailCard({ flavor, onPurchase }: FlavorDetailCardProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const rawSrc = flavor.ingredientImage || flavor.detailImage;
  const ingredientSrc = rawSrc.startsWith("/") ? `${basePath}${rawSrc}` : rawSrc;

  return (
    <div className="w-full bg-[#ffffff] border border-[#ded5c8] shadow-md my-8 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 items-center">
        {/* Lado Esquerdo: Fotografia Ilustrativa dos Ingredientes Selecionados */}
        <div className="md:col-span-5 relative w-full aspect-square sm:aspect-[4/3] md:aspect-square overflow-hidden bg-[#f4ede4] border border-[#e8dfd2] group">
          <Image
            key={flavor.id}
            src={ingredientSrc}
            alt={`Ingredientes artesanais de ${flavor.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Categoria do Sorvete */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest uppercase font-semibold text-[#543b2d] shadow-xs">
            {flavor.category}
          </div>

          {/* Rótulo de Ingredientes Naturais */}
          <div className="absolute bottom-3 left-3 bg-[#2d1810]/80 backdrop-blur-sm text-white px-2.5 py-1 text-[9px] sm:text-[10px] tracking-widest uppercase font-medium">
            Ingredientes Selecionados
          </div>
        </div>

        {/* Lado Direito: História do Sabor, Ingredientes, Alérgenos e Compra */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {/* Nome do Sabor */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.14em] text-[#331c13] font-serif-title uppercase">
            {flavor.name}
          </h3>

          {/* Subtítulo / Destaque dos Ingredientes */}
          <p className="text-[11px] sm:text-xs tracking-[0.2em] font-semibold text-[#7a6455] uppercase mt-1 mb-4">
            {flavor.subtitle}
          </p>

          {/* Descrição do Chef */}
          <p className="text-[#4f3c30] text-sm sm:text-base leading-relaxed font-light mb-4 sm:mb-6">
            {flavor.description}
          </p>

          {/* Informações de Alérgenos */}
          <p className="text-xs tracking-wider text-[#6b5547] font-medium italic mb-6">
            {flavor.allergens}
          </p>

          {/* Barra Inferior: Botão Comprar + Selos Dietéticos */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#f0e8de]">
            <button
              onClick={() => onPurchase(flavor)}
              className="px-8 py-2.5 border-2 border-[#543b2d] text-[#3b261b] hover:bg-[#3b261b] hover:text-[#ffffff] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-200 active:scale-95 shadow-sm"
            >
              COMPRAR
            </button>

            {/* Selos Dietéticos Circulares */}
            <div className="flex items-center gap-3 sm:gap-4">
              {flavor.dietaryBadges.map((badge, idx) => (
                <DietaryBadge
                  key={idx}
                  label={badge.label}
                  sublabel={badge.sublabel}
                  icon={badge.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
