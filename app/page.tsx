"use client";

import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FlavorGrid } from "./components/FlavorGrid";
import { GoldbellyCallout } from "./components/GoldbellyCallout";
import { StoreLocatorSection } from "./components/StoreLocatorSection";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { PurchaseModal } from "./components/PurchaseModal";
import { StoreLocatorModal } from "./components/StoreLocatorModal";
import { NavigationDrawer } from "./components/NavigationDrawer";
import { StoryModal } from "./components/StoryModal";
import { ContactModal } from "./components/ContactModal";
import { NewsletterModal } from "./components/NewsletterModal";
import { Flavor } from "./data/flavors";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isLocatorOpen, setIsLocatorOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [selectedFlavorForPurchase, setSelectedFlavorForPurchase] = useState<Flavor | null>(null);

  const handlePurchase = (flavor?: Flavor) => {
    setSelectedFlavorForPurchase(flavor || null);
    setIsPurchaseOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#2d1810]">
      {/* 1. Header with brand logo, search icon and hamburger menu */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenPurchase={() => handlePurchase()}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section with artisanal ceramic bowls and "FANCY FLAVORS" banner */}
        <Hero />

        {/* 3. The Nancy's Fancy Gelato & Sorbetto Grid with In-Place Flavor Expansion */}
        <FlavorGrid
          selectedCategory="all"
          onPurchase={(flavor) => handlePurchase(flavor)}
        />

        {/* 4. Exclusive Online Goldbelly Partnership Callout */}
        <GoldbellyCallout onOpenPurchase={() => handlePurchase()} />

        {/* 5. "FIND A PINT NEAR YOU" Panoramic Vintage Card Banner */}
        <StoreLocatorSection onOpenLocator={() => setIsLocatorOpen(true)} />
      </main>

      {/* 6. Footer with Monogram Crest, quick links and social icons */}
      <Footer
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
        onOpenLocator={() => setIsLocatorOpen(true)}
        onOpenPurchase={() => handlePurchase()}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenStory={() => setIsStoryOpen(true)}
      />

      {/* Interactive Modals and Flyouts */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectFlavor={(flavor) => {
          handlePurchase(flavor);
        }}
      />

      <PurchaseModal
        isOpen={isPurchaseOpen}
        onClose={() => setIsPurchaseOpen(false)}
        initialFlavor={selectedFlavorForPurchase}
      />

      <StoreLocatorModal
        isOpen={isLocatorOpen}
        onClose={() => setIsLocatorOpen(false)}
      />

      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenLocator={() => setIsLocatorOpen(true)}
        onOpenPurchase={() => handlePurchase()}
        onOpenStory={() => setIsStoryOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </div>
  );
}
