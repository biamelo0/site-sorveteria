"use client";

import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fbf9f5] border border-[#d8cebe] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] flex flex-col">
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
            Fale Conosco
          </span>
          <h3 className="text-2xl font-extrabold tracking-[0.14em] text-[#331c13] font-serif-title mt-1">
            CONTATO & EMPÓRIOS
          </h3>
          <p className="text-xs text-[#705b4e] mt-1">
            Para distribuição em empórios, parcerias gastronômicas, eventos e atendimento ao cliente.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center">
            <h4 className="text-lg font-bold text-[#351e14] font-serif-title mb-2">
              Mensagem Enviada com Sucesso
            </h4>
            <p className="text-xs text-[#6e5849]">
              Nossa equipe entrará em contato com você o mais breve possível.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-[#3b251a] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#523727] transition-colors"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#5a4437] mb-1">
                Seu Nome Completo
              </label>
              <input
                required
                type="text"
                placeholder="Ex.: João Silva"
                className="w-full bg-white border border-[#c5b7a7] px-3.5 py-2.5 text-xs text-[#2d1810] focus:outline-none focus:border-[#543b2d]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#5a4437] mb-1">
                E-mail para Retorno
              </label>
              <input
                required
                type="email"
                placeholder="seuemail@empresa.com"
                className="w-full bg-white border border-[#c5b7a7] px-3.5 py-2.5 text-xs text-[#2d1810] focus:outline-none focus:border-[#543b2d]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#5a4437] mb-1">
                Assunto do Contato
              </label>
              <select className="w-full bg-white border border-[#c5b7a7] px-3.5 py-2.5 text-xs text-[#2d1810] focus:outline-none focus:border-[#543b2d]">
                <option>Quero revender no meu empório ou mercado</option>
                <option>Restaurantes e Foodservice</option>
                <option>Imprensa e Comunicação</option>
                <option>Dúvidas e Atendimento Geral</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#5a4437] mb-1">
                Mensagem
              </label>
              <textarea
                required
                rows={3}
                placeholder="Conte-nos sobre o seu negócio, estabelecimento ou dúvida..."
                className="w-full bg-white border border-[#c5b7a7] px-3.5 py-2.5 text-xs text-[#2d1810] focus:outline-none focus:border-[#543b2d]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#3b251a] hover:bg-[#523727] text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
            >
              ENVIAR MENSAGEM
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
