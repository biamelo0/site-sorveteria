"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ScoopVisualProps {
  id: string;
  name: string;
  size?: number;
  className?: string;
  isLarge?: boolean;
}

export function ScoopVisual({
  id,
  name,
  size,
  className = "",
  isLarge = true,
}: ScoopVisualProps) {
  const [useFallbackPng, setUseFallbackPng] = useState(false);
  const [imageError, setImageError] = useState(false);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Fast WebP by default (~40KB), fallback to optimized PNG (~90KB)
  const imageSrc = useFallbackPng ? `${basePath}/${id}.png` : `${basePath}/${id}.webp`;

  const sizeClasses = isLarge
    ? "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
    : "w-12 h-12";

  return (
    <div
      style={size ? { width: size, height: size } : undefined}
      className={`relative flex items-center justify-center select-none transform-gpu will-change-transform ${
        size ? "" : sizeClasses
      } ${className}`}
    >
      {!imageError ? (
        <div className="relative w-full h-full transition-transform duration-250 ease-out group-hover:scale-108 group-hover:-translate-y-2 transform-gpu will-change-transform">
          <Image
            src={imageSrc}
            alt={`Artisanal gelato scoop of ${name}`}
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
            className="object-contain pointer-events-none filter drop-shadow-[0_12px_14px_rgba(45,24,16,0.18)] drop-shadow-[0_3px_5px_rgba(0,0,0,0.08)]"
            onError={() => {
              if (!useFallbackPng) {
                setUseFallbackPng(true);
              } else {
                setImageError(true);
              }
            }}
            priority={id === "coconut-stracciatella" || id === "pumpkin-brandy" || id === "butterscotch-budino"}
          />
        </div>
      ) : (
        <div className="w-full h-full rounded-full bg-[#ece4d8] flex items-center justify-center text-[10px] text-[#7d6859] p-2 text-center font-medium">
          {name}
        </div>
      )}
    </div>
  );
}
