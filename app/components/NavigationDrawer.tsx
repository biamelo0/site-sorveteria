"use client";

import React from "react";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLocator: () => void;
  onOpenPurchase: () => void;
  onOpenStory: () => void;
  onOpenContact: () => void;
}

export function NavigationDrawer({
  isOpen,
  onClose,
  onOpenLocator,
  onOpenPurchase,
  onOpenStory,
  onOpenContact,
}: NavigationDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop overlay dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Menu Panel */}
      <div className="bg-[#fbf9f5] w-full max-w-md h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-[#dcd3c7] relative animate-slide-left overflow-y-auto z-10">
        <div>
          {/* Botão Fechar no topo */}
          <div className="flex items-center justify-between border-b border-[#ebd7c6] pb-5 mb-6">
            <span className="text-[10px] tracking-[0.25em] font-semibold text-[#806757] uppercase font-serif-title">
              Menu Principal
            </span>
            <button
              onClick={onClose}
              aria-label="Fechar menu de navegação"
              className="p-1.5 text-[#60493b] hover:text-[#2d1810] hover:bg-[#efe6da] rounded-full transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
            >
              <span>Fechar</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logotipo no Menu */}
          <div className="text-center mb-8">
            <span className="text-[9px] tracking-[0.25em] font-semibold text-[#806757] uppercase font-serif-title block">
              Nancy Silverton
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-[0.16em] text-[#331c13] font-serif-title mt-0.5">
              NANCY&apos;S FANCY
            </h3>
            <span className="text-[8.5px] tracking-[0.25em] uppercase text-[#7c6657] font-medium block mt-1">
              GELATO E SORBETTO ARTESANAL
            </span>
          </div>

          {/* Links de Navegação com ícones e subtítulos em português */}
          <nav className="flex flex-col divide-y divide-[#eee5da] text-left">
            <button
              onClick={() => {
                onClose();
                window.scrollTo({ top: 320, behavior: "smooth" });
              }}
              className="py-3.5 group flex items-center justify-between text-left transition-colors hover:pl-1.5"
            >
              <div>
                <span className="block text-base font-bold tracking-[0.14em] uppercase text-[#351e14] group-hover:text-[#8b5a2b] font-serif-title">
                  Nossos Sabores
                </span>
                <span className="text-[11px] text-[#7a6456]">
                  Conheça a linha completa de 11 gelatos e sorbettos
                </span>
              </div>
              <span className="text-xs text-[#a49182] group-hover:text-[#8b5a2b] transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenStory();
              }}
              className="py-3.5 group flex items-center justify-between text-left transition-colors hover:pl-1.5"
            >
              <div>
                <span className="block text-base font-bold tracking-[0.14em] uppercase text-[#351e14] group-hover:text-[#8b5a2b] font-serif-title">
                  Sobre Nancy Silverton
                </span>
                <span className="text-[11px] text-[#7a6456]">
                  A premiada trajetória da fundadora da Osteria Mozza
                </span>
              </div>
              <span className="text-xs text-[#a49182] group-hover:text-[#8b5a2b] transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenPurchase();
              }}
              className="py-3.5 group flex items-center justify-between text-left transition-colors hover:pl-1.5"
            >
              <div>
                <span className="block text-base font-bold tracking-[0.14em] uppercase text-[#351e14] group-hover:text-[#8b5a2b] font-serif-title">
                  Comprar Online (Entrega em Casa)
                </span>
                <span className="text-[11px] text-[#7a6456]">
                  Caixas de 4 ou 6 potes enviadas com gelo seco
                </span>
              </div>
              <span className="text-xs text-[#a49182] group-hover:text-[#8b5a2b] transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenLocator();
              }}
              className="py-3.5 group flex items-center justify-between text-left transition-colors hover:pl-1.5"
            >
              <div>
                <span className="block text-base font-bold tracking-[0.14em] uppercase text-[#351e14] group-hover:text-[#8b5a2b] font-serif-title">
                  Pontos de Venda & Lojas
                </span>
                <span className="text-[11px] text-[#7a6456]">
                  Encontre os empórios gourmet e mercados mais próximos
                </span>
              </div>
              <span className="text-xs text-[#a49182] group-hover:text-[#8b5a2b] transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="py-3.5 group flex items-center justify-between text-left transition-colors hover:pl-1.5"
            >
              <div>
                <span className="block text-base font-bold tracking-[0.14em] uppercase text-[#351e14] group-hover:text-[#8b5a2b] font-serif-title">
                  Contato & Parcerias
                </span>
                <span className="text-[11px] text-[#7a6456]">
                  Revenda no seu empório ou fale com a nossa equipe
                </span>
              </div>
              <span className="text-xs text-[#a49182] group-hover:text-[#8b5a2b] transition-transform group-hover:translate-x-1">→</span>
            </button>
          </nav>
        </div>

        {/* Rodapé do Menu Lateral */}
        <div className="pt-6 border-t border-[#ebd7c6] text-center">
          <p className="font-editorial italic text-xs text-[#6e584a] leading-relaxed">
            &ldquo;Não fazemos sorvete pegando atalhos. Nós produzimos verdadeira arte culinária com os melhores ingredientes da natureza.&rdquo;
          </p>
          <p className="mt-1.5 font-bold text-[10px] tracking-widest uppercase text-[#543b2d]">
            — Chef Nancy Silverton
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#7d6859]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b251a] transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b251a] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
