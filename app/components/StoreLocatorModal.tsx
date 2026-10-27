"use client";

import React, { useState } from "react";

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORES = [
  {
    name: "Empório Santa Maria - Jardins",
    address: "Av. Cidade Jardim, 790 - Jardim Paulistano, São Paulo - SP",
    phone: "(11) 3706-5211",
    distance: "1,2 km",
    flavorsStocked: "Coco Stracciatella, Butterscotch Budino, Frutas do Bosque",
  },
  {
    name: "Eataly Brasil - Itaim Bibi",
    address: "Av. Pres. Juscelino Kubitschek, 1489 - Itaim Bibi, São Paulo - SP",
    phone: "(11) 3279-3300",
    distance: "2,5 km",
    flavorsStocked: "Todos os 11 Sabores Assinados da Linha Nancy's Fancy",
  },
  {
    name: "Casa Santa Luzia - Cerqueira César",
    address: "Alameda Lorena, 1471 - Cerqueira César, São Paulo - SP",
    phone: "(11) 3897-5000",
    distance: "3,4 km",
    flavorsStocked: "Abóbora com Brandy, Chocolate Fondente, Cereja Amarena",
  },
  {
    name: "St. Marche - Higienópolis",
    address: "R. Maria Antonia, 241 - Higienópolis, São Paulo - SP",
    phone: "(11) 3159-2045",
    distance: "4,8 km",
    flavorsStocked: "Amendoim com Flor de Sal, Café Stumptown, Rum com Passas",
  },
  {
    name: "Zona Sul Gourmet - Leblon",
    address: "R. Dias Ferreira, 290 - Leblon, Rio de Janeiro - RJ",
    phone: "(21) 3114-6000",
    distance: "Envio Expresso",
    flavorsStocked: "Linha Completa de Gelatos e Sorbettos",
  },
];

export function StoreLocatorModal({ isOpen, onClose }: StoreLocatorModalProps) {
  const [zipQuery, setZipQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fbf9f5] border border-[#d8cebe] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] flex flex-col">
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
          <span className="text-[10px] tracking-[0.28em] font-semibold text-[#806857] uppercase font-serif-title">
            Onde Encontrar
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[0.14em] text-[#331c13] font-serif-title mt-1">
            ENCONTRE UM POTE PERTO DE VOCÊ
          </h3>
          <p className="text-xs text-[#705b4e] mt-1">
            Disponível nos principais empórios, delicatessens e mercados gourmet parceiros.
          </p>
        </div>

        {/* Campo de Busca */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={zipQuery}
            onChange={(e) => setZipQuery(e.target.value)}
            placeholder="Digite seu CEP, cidade ou bairro..."
            className="flex-1 bg-white border border-[#c5b7a7] px-4 py-2.5 text-sm text-[#2d1810] placeholder-[#a29283] focus:outline-none focus:border-[#543b2d]"
          />
          <button className="px-6 py-2.5 bg-[#422c20] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#2b1b13] transition-colors">
            Buscar
          </button>
        </div>

        {/* Lista de Lojas */}
        <div className="overflow-y-auto flex-1 divide-y divide-[#ebe3d8] pr-2">
          {STORES.map((store, idx) => (
            <div key={idx} className="py-4 hover:bg-[#f5efe5] px-2 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#351e14] font-serif-title">
                    {store.name}
                  </h4>
                  <p className="text-xs text-[#624e41] mt-0.5">{store.address}</p>
                  <p className="text-xs text-[#7d6758] mt-0.5 font-medium">{store.phone}</p>
                </div>
                <span className="text-[11px] font-bold text-[#8b5a2b] bg-white border border-[#dec5b0] px-2 py-0.5 whitespace-nowrap">
                  {store.distance}
                </span>
              </div>
              <div className="mt-2 text-[11px] text-[#786151] italic">
                <span className="font-semibold not-italic text-[#4a3427]">Sabores em estoque: </span>
                {store.flavorsStocked}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
