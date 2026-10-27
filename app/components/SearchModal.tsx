"use client";

import React, { useState } from "react";
import { FLAVORS, Flavor } from "../data/flavors";
import { ScoopVisual } from "./ScoopVisual";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFlavor: (flavor: Flavor) => void;
}

export function SearchModal({ isOpen, onClose, onSelectFlavor }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  if (!isOpen) return null;

  const filteredFlavors = FLAVORS.filter((flavor) => {
    const matchesQuery =
      flavor.name.toLowerCase().includes(query.toLowerCase()) ||
      flavor.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      flavor.description.toLowerCase().includes(query.toLowerCase()) ||
      flavor.allergens.toLowerCase().includes(query.toLowerCase());

    if (!matchesQuery) return false;

    if (activeFilter === "sem-lactose") {
      return flavor.dietaryBadges.some((b) => b.icon === "dairyFree");
    }
    if (activeFilter === "sorbetto") {
      return flavor.category === "Sorbetto";
    }
    if (activeFilter === "gelato") {
      return flavor.category === "Gelato";
    }

    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fbf9f5] border border-[#d8cebe] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[85vh] flex flex-col">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar busca"
          className="absolute top-4 right-4 p-2 text-[#60493b] hover:text-[#2d1810] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cabeçalho */}
        <div className="text-center mb-6">
          <span className="text-[10px] tracking-[0.25em] font-semibold text-[#806757] uppercase font-serif-title">
            Pesquisar na Coleção
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-[0.14em] text-[#331c13] font-serif-title mt-1">
            ENCONTRE SEU SABOR
          </h3>
        </div>

        {/* Campo de Busca */}
        <div className="relative mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por sabor, chocolate, frutas, caramelo..."
            className="w-full bg-white border border-[#c4b6a5] px-4 py-3 pl-11 text-sm text-[#2d1810] placeholder-[#9f8e7f] focus:outline-none focus:border-[#543b2d]"
            autoFocus
          />
          <svg
            className="w-5 h-5 absolute left-3.5 top-3.5 text-[#8f7d6f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filtros Rápidos */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {[
            { id: "todos", label: "Todos" },
            { id: "gelato", label: "Gelato" },
            { id: "sorbetto", label: "Sorbetto" },
            { id: "sem-lactose", label: "Sem Lactose" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1 text-[11px] font-semibold tracking-wider uppercase transition-colors ${
                activeFilter === filter.id
                  ? "bg-[#422c20] text-white"
                  : "bg-[#eee7dd] text-[#5e493b] hover:bg-[#dfd5c7]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Lista de Resultados */}
        <div className="overflow-y-auto flex-1 divide-y divide-[#ede6dc] pr-1">
          {filteredFlavors.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#8c786a] italic">
              Nenhum sabor artesanal encontrado para &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredFlavors.map((flavor) => (
              <div
                key={flavor.id}
                onClick={() => {
                  onSelectFlavor(flavor);
                  onClose();
                }}
                className="py-3 px-2 flex items-center justify-between hover:bg-[#f3ede3] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <ScoopVisual id={flavor.id} name={flavor.name} size={48} />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold tracking-wider text-[#351e14] group-hover:text-[#6a3c1c]">
                      {flavor.name}
                    </h5>
                    <p className="text-[10px] text-[#7a6456] tracking-wide line-clamp-1">
                      {flavor.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8b6b55] px-2 py-1 bg-white border border-[#dfd6c9]">
                  {flavor.category}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
