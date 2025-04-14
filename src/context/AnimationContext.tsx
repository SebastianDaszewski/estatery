"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Definicje wariantów animacji
const animationVariants = {
  // Warianty dla tekstu - każde słowo pojawia się po kolei
  text: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },

  // Warianty dla pojedynczego słowa
  word: {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.15,
      },
    },
  },

  // Warianty dla kontenera statystyk
  statsContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  // Warianty dla pojedynczego elementu statystyki
  statItem: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  },

  // Warianty dla elementów pojawiających się od dołu
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

// Typ dla kontekstu
type AnimationContextType = {
  variants: typeof animationVariants;
  defaultViewport: { once: boolean; amount: number };
  splitTextIntoWords: (text: string) => string[];
};

// Tworzenie kontekstu
const AnimationContext = createContext<AnimationContextType | null>(null);

// Provider komponent
export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Pomocnicza funkcja do dzielenia tekstu na słowa
  const splitTextIntoWords = (text: string): string[] => {
    return text.split(" ");
  };

  // Wartość kontekstu
  const value = {
    variants: animationVariants,
    defaultViewport: { once: true, amount: 0.1 },
    splitTextIntoWords,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

// Hook do używania animacji w komponentach
export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
