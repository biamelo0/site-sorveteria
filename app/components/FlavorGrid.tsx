"use client";

import React, { useState } from "react";
import { FLAVORS, Flavor } from "../data/flavors";
import { ScoopVisual } from "./ScoopVisual";
import { FlavorDetailCard } from "./FlavorDetailCard";

interface FlavorGridProps {
  onPurchase: (flavor: Flavor) => void;
  selectedCategory: string;
}

export function FlavorGrid({ onPurchase, selectedCategory }: FlavorGridProps) {
  // Default selected flavor is Coconut Stracciatella (matching the uploaded image)
  const [selectedId, setSelectedId] = useState<string>("coconut-stracciatella");

  const filteredFlavors =
    selectedCategory === "all"
      ? FLAVORS
      : FLAVORS.filter(
          (f) => f.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const activeFlavor =
    FLAVORS.find((f) => f.id === selectedId) || FLAVORS[0];

  // Group flavors into rows of 3 to allow in-place inline expansion
  const rows: Flavor[][] = [];
  for (let i = 0; i < filteredFlavors.length; i += 3) {
    rows.push(filteredFlavors.slice(i, i + 3));
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {rows.map((row, rowIndex) => {
        const isSelectedInThisRow = row.some((f) => f.id === selectedId);

        return (
          <div key={rowIndex} className="mb-8 sm:mb-12">
            {/* 3-Column Scoops Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 md:gap-14 items-start justify-items-center">
              {row.map((flavor) => {
                const isSelected = flavor.id === selectedId;

                return (
                  <div
                    key={flavor.id}
                    onClick={() => setSelectedId(flavor.id)}
                    className="flex flex-col items-center cursor-pointer group w-full text-center select-none"
                  >
                    {/* Big Realistic Scoop with Transparent Cutout and Drop Shadow */}
                    <div className="relative p-1">
                      <ScoopVisual id={flavor.id} name={flavor.name} isLarge={true} />
                    </div>

                    {/* Flavor Name */}
                    <h4
                      className={`mt-4 text-xs sm:text-sm md:text-base tracking-[0.16em] uppercase max-w-[210px] leading-tight transition-colors ${
                        isSelected
                          ? "font-extrabold text-[#2a170f]"
                          : "font-semibold text-[#6e5849] group-hover:text-[#2a170f]"
                      }`}
                    >
                      {flavor.name}
                    </h4>

                    {/* Upward Triangle Pointer for Active Flavor */}
                    <div className="h-5 flex items-center justify-center mt-1">
                      {isSelected ? (
                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[11px] border-b-[#c4b6a6] animate-bounce-short" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#d8cebe] transition-colors" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* In-Place Detail Card appears immediately below the row containing the selected flavor */}
            {isSelectedInThisRow && (
              <div className="animate-fade-in">
                <FlavorDetailCard flavor={activeFlavor} onPurchase={onPurchase} />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

