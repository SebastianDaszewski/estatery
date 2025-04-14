"use client";

import React, { createContext, useContext, ReactNode } from "react";

const animationVariants = {
  text: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },

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

  statsContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

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

type AnimationContextType = {
  variants: typeof animationVariants;
  defaultViewport: { once: boolean; amount: number };
  splitTextIntoWords: (text: string) => string[];
};

const AnimationContext = createContext<AnimationContextType | null>(null);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const splitTextIntoWords = (text: string): string[] => {
    return text.split(" ");
  };

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

export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
