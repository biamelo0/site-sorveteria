"use client";

import React from "react";

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenPurchase: () => void;
}

export function Header({ onOpenSearch, onOpenMenu, onOpenPurchase }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#ffffff] border-b border-[#e8dfd5] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Left: Search Trigger */}
        <button
          onClick={onOpenSearch}
          aria-label="Buscar Sabores"
          className="p-2 -ml-2 text-[#463126] hover:text-[#8b5a2b] transition-colors focus:outline-none"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Center: Nancy's Fancy Official Brand Logo */}
        <a href="#" className="flex flex-col items-center group cursor-pointer text-center select-none py-1">
          {/* Top Arc / Tag */}
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-5 sm:w-8 h-[1px] bg-[#9e8b7c]"></span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-semibold text-[#665042] font-serif-title">
              Nancy Silverton
            </span>
            <span className="w-5 sm:w-8 h-[1px] bg-[#9e8b7c]"></span>
          </div>

          {/* Main Logo Typography */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <span className="w-3 sm:w-5 h-[1.5px] bg-[#3b2318] hidden xs:inline-block"></span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.14em] text-[#331c13] font-serif-title transition-colors group-hover:text-[#6a3c1c]">
              NANCY&apos;S FANCY
            </h1>
            <span className="w-3 sm:w-5 h-[1.5px] bg-[#3b2318] hidden xs:inline-block"></span>
          </div>

          {/* Bottom Sub-tagline */}
          <div className="mt-0.5">
            <span className="text-[7.5px] sm:text-[9px] tracking-[0.25em] uppercase text-[#7a6455] font-medium">
              GELATO E SORBETTO · GELATO ARTESANAL
            </span>
          </div>
        </a>

        {/* Right: Hamburger Menu & Quick Purchase */}
        <div className="flex items-center gap-2 sm:gap-3 -mr-2">
          <button
            onClick={onOpenPurchase}
            className="hidden md:inline-flex text-[11px] font-semibold tracking-widest uppercase border border-[#6b5547] text-[#422c20] px-3.5 py-1.5 hover:bg-[#422c20] hover:text-[#fff] transition-colors"
          >
            Pedir Potes
          </button>
          <button
            onClick={onOpenMenu}
            aria-label="Abrir Menu de Navegação"
            className="p-2 text-[#463126] hover:text-[#8b5a2b] transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
