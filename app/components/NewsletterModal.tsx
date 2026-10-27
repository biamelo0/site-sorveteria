"use client";

import React, { useState } from "react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fbf9f5] border border-[#d8cebe] shadow-2xl max-w-md w-full p-6 sm:p-8 relative text-center">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 text-[#60493b] hover:text-[#2d1810]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-12 h-12 rounded-full border border-[#8b6f5d] mx-auto mb-4 flex items-center justify-center text-[#523b2e]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <span className="text-[10px] tracking-[0.28em] font-semibold text-[#806857] uppercase font-serif-title">
          Clube Exclusivo de Degustação
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-[0.14em] text-[#331c13] font-serif-title mt-1 mb-2">
          RECEBA NOVIDADES DA NANCY
        </h3>
        <p className="text-xs text-[#6e5849] leading-relaxed mb-6">
          Seja o primeiro a saber dos lançamentos sazonais, edições especiais limitadas e receitas exclusivas da Chef Nancy Silverton.
        </p>

        {joined ? (
          <div className="p-4 bg-[#f3ede3] border border-[#d8cebe] text-xs font-semibold text-[#3b251a]">
            Bem-vindo ao clube! Em breve você receberá nossos comunicados exclusivos no seu e-mail.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
            }}
            className="space-y-3"
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail..."
              className="w-full bg-white border border-[#c5b7a7] px-4 py-2.5 text-xs text-[#2d1810] focus:outline-none focus:border-[#543b2d]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#3b251a] hover:bg-[#523727] text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
            >
              INSCREVER-SE
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
