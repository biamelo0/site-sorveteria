"use client";

import React from "react";

interface DietaryBadgeProps {
  label: string;
  sublabel: string;
  icon: "glutenFree" | "nonGmo" | "kosher" | "dairyFree" | "treeNut" | "vegan";
}

export function DietaryBadge({ label, sublabel, icon }: DietaryBadgeProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center group cursor-default">
      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#8c7a6b] flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105 group-hover:border-[#533b2e]">
        {icon === "glutenFree" && (
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#533b2e] fill-none" strokeWidth="1.6" strokeLinecap="round">
            {/* Wheat stalk with strike-through */}
            <path d="M12 2v20" />
            <path d="M12 7c-2-2-4 0-4 2s2 2 4 0" />
            <path d="M12 7c2-2 4 0 4 2s-2 2-4 0" />
            <path d="M12 12c-2-2-4 0-4 2s2 2 4 0" />
            <path d="M12 12c2-2 4 0 4 2s-2 2-4 0" />
            <path d="M4 4l16 16" stroke="#8c2e2e" strokeWidth="1.8" />
          </svg>
        )}
        {icon === "nonGmo" && (
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#533b2e] fill-none" strokeWidth="1.6" strokeLinecap="round">
            {/* Sprout / leaf */}
            <path d="M12 21V11" />
            <path d="M12 13C8 13 6 8 8 5c4 0 4 5 4 8z" />
            <path d="M12 16c3-1 5-4 5-7-3 0-5 3-5 7z" />
          </svg>
        )}
        {icon === "kosher" && (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#533b2e]">
            {/* Kosher K in circle */}
            <text x="12" y="16" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="serif">K</text>
          </svg>
        )}
        {icon === "treeNut" && (
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#533b2e] fill-none" strokeWidth="1.6" strokeLinecap="round">
            {/* Acorn / Nut */}
            <path d="M12 3v3" />
            <path d="M7 6h10a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a3 3 0 0 1 3-3z" />
            <path d="M5 12c0 5 7 9 7 9s7-4 7-9" />
          </svg>
        )}
        {icon === "dairyFree" && (
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#533b2e] fill-none" strokeWidth="1.6" strokeLinecap="round">
            {/* Milk bottle with strike-through */}
            <path d="M9 2h6v2H9z" />
            <path d="M9 4v3l-2 3v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10l-2-3V4" />
            <line x1="4" y1="4" x2="20" y2="20" stroke="#8c2e2e" strokeWidth="1.8" />
          </svg>
        )}
        {icon === "vegan" && (
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#533b2e] fill-none" strokeWidth="1.6" strokeLinecap="round">
            {/* Plant leaf */}
            <path d="M12 21s-6-5-6-11a6 6 0 0 1 12 0c0 6-6 11-6 11z" />
            <path d="M12 21V10" />
          </svg>
        )}
      </div>
      <div className="mt-1 flex flex-col items-center leading-none">
        <span className="text-[9px] uppercase tracking-wider text-[#634e40] font-semibold">{label}</span>
        <span className="text-[8px] uppercase tracking-wider text-[#7e695a] font-medium">{sublabel}</span>
      </div>
    </div>
  );
}

