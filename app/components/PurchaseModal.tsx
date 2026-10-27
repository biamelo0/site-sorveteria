"use client";

import React, { useState } from "react";
import { FLAVORS, Flavor } from "../data/flavors";
import { ScoopVisual } from "./ScoopVisual";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFlavor?: Flavor | null;
}

export function PurchaseModal({ isOpen, onClose, initialFlavor }: PurchaseModalProps) {
  const [packSize, setPackSize] = useState<4 | 6>(4);
  const [selectedPints, setSelectedPints] = useState<string[]>(() => {
    const init = initialFlavor ? [initialFlavor.id] : ["coconut-stracciatella"];
    while (init.length < 4) {
      const next = FLAVORS[init.length % FLAVORS.length].id;
      init.push(next);
    }
    return init;
  });

  if (!isOpen) return null;

  const togglePint = (id: string) => {
    if (selectedPints.length < packSize) {
      setSelectedPints([...selectedPints, id]);
    } else {
      const updated = [...selectedPints];
      updated[updated.length - 1] = id;
      setSelectedPints(updated);
    }
  };

  const removePintAt = (index: number) => {
    setSelectedPints(selectedPints.filter((_, idx) => idx !== index));
  };

  const price = packSize === 4 ? "R$ 149,90" : "R$ 199,90";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fbf9f5] border border-[#d8cebe] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] flex flex-col overflow-y-auto">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 text-[#60493b] hover:text-[#2d1810] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cabeçalho */}
        <div className="text-center mb-6">
          <div className="inline-block border-b border-[#a89584] pb-1 mb-2">
            <span className="text-[10px] tracking-[0.28em] font-semibold text-[#7c6353] uppercase font-serif-title">
              Exclusivo Online via Goldbelly®
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[0.14em] text-[#331c13] font-serif-title">
            PEÇA SEUS POTES ARTESANAIS
          </h3>
          <p className="text-xs text-[#705b4e] mt-1 max-w-md mx-auto">
            Embalado cuidadosamente com gelo seco e entregue em sua casa com qualidade e textura impecáveis.
          </p>
        </div>

        {/* Seletor de Tamanho da Caixa */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => {
              setPackSize(4);
              if (selectedPints.length > 4) setSelectedPints(selectedPints.slice(0, 4));
            }}
            className={`p-3 border text-center transition-all ${
              packSize === 4
                ? "border-[#422c20] bg-white shadow-sm"
                : "border-[#d8cebe] bg-[#f4ede3] opacity-75"
            }`}
          >
            <span className="block text-xs font-bold tracking-widest uppercase text-[#351e14]">
              Caixa com 4 Potes
            </span>
            <span className="text-sm font-semibold text-[#8b5a2b]">{price}</span>
          </button>

          <button
            onClick={() => setPackSize(6)}
            className={`p-3 border text-center transition-all ${
              packSize === 6
                ? "border-[#422c20] bg-white shadow-sm"
                : "border-[#d8cebe] bg-[#f4ede3] opacity-75"
            }`}
          >
            <span className="block text-xs font-bold tracking-widest uppercase text-[#351e14]">
              Caixa com 6 Potes (Melhor Valor)
            </span>
            <span className="text-sm font-semibold text-[#8b5a2b]">R$ 199,90</span>
          </button>
        </div>

        {/* Espaços Selecionados na Caixa */}
        <div className="mb-6 bg-white p-4 border border-[#e5ded4]">
          <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#574235] uppercase tracking-wider">
            <span>Sua Caixa ({selectedPints.length} de {packSize} potes)</span>
            <span className="text-[#8b5a2b] font-bold">{price}</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {Array.from({ length: packSize }).map((_, idx) => {
              const flavorId = selectedPints[idx];
              const flavor = FLAVORS.find((f) => f.id === flavorId);

              return (
                <div
                  key={idx}
                  className="aspect-square border border-dashed border-[#cbbdaf] bg-[#faf7f2] flex flex-col items-center justify-center relative p-1 text-center"
                >
                  {flavor ? (
                    <>
                      <div className="w-8 h-8 relative mb-1">
                        <ScoopVisual id={flavor.id} name={flavor.name} size={32} />
                      </div>
                      <span className="text-[8px] font-bold tracking-tight text-[#3b251a] line-clamp-1 uppercase">
                        {flavor.name}
                      </span>
                      <button
                        onClick={() => removePintAt(idx)}
                        className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#8c3232] text-white text-[10px] flex items-center justify-center leading-none shadow-sm"
                        title="Remover pote"
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <span className="text-[10px] text-[#a49384] italic font-editorial">+ Adicionar</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lista de Sabores para Escolher */}
        <div className="mb-6 flex-1">
          <span className="block text-xs font-bold tracking-widest uppercase text-[#5a4437] mb-3">
            Toque nos sabores para adicionar:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-1">
            {FLAVORS.map((flavor) => (
              <button
                key={flavor.id}
                onClick={() => togglePint(flavor.id)}
                className="flex items-center gap-2 p-2 bg-white border border-[#dfd6c8] hover:border-[#6b5547] transition-colors text-left"
              >
                <div className="w-7 h-7 flex-shrink-0">
                  <ScoopVisual id={flavor.id} name={flavor.name} size={28} />
                </div>
                <div className="overflow-hidden">
                  <h6 className="text-[10px] font-bold tracking-tight uppercase text-[#351e14] truncate">
                    {flavor.name}
                  </h6>
                  <span className="text-[8px] text-[#867365] uppercase tracking-wider">
                    {flavor.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Botão de Finalização */}
        <a
          href="https://www.goldbelly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-[#3b261b] hover:bg-[#523727] text-white text-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-colors shadow-md flex items-center justify-center gap-2"
        >
          <span>CONTINUAR PARA O CHECKOUT GOLDBELLY</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
