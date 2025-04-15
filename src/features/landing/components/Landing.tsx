"use client";

import { useState, useEffect } from "react";

import {
  Topbar,
  FirstSection,
  SecondSection,
  ThirdSection,
  Footer,
} from "@/features/landing/components";
import { Menu } from "@/components";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenuDirectly = () => {
    document.body.style.overflow = "auto";
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleXClick = () => {
      const xButton = document.querySelector(".x-button");
      if (xButton) {
        xButton.addEventListener("click", closeMenuDirectly);
      }
    };

    if (isMenuOpen) {
      setTimeout(handleXClick, 100);
    }

    return () => {
      const xButton = document.querySelector(".x-button");
      if (xButton) {
        xButton.removeEventListener("click", closeMenuDirectly);
      }
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <div className={isMenuOpen ? "blur-lg bg-white" : ""}>
        <Topbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
      {isMenuOpen && <Menu />}
    </div>
  );
};

export default Landing;
