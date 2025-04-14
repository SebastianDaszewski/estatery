"use client";
import { useState, useEffect } from "react";

import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import { Topbar, Footer } from "@/features/signOutLayout/components";
import Button from "@/components/Button";
import { XIcon } from "@/icons";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["Rent", "Buy", "Sell", "Manage Properties", "Resources"];

  // Dodaj efekt, który wyłącza przewijanie gdy menu jest otwarte
  useEffect(() => {
    if (isMenuOpen) {
      // Wyłącz przewijanie
      document.body.style.overflow = "hidden";
    } else {
      // Włącz przewijanie z powrotem
      document.body.style.overflow = "auto";
    }

    // Sprzątanie przy odmontowaniu (na wszelki wypadek)
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

    // Dodaj nasłuchiwanie na zmianę rozmiaru okna
    window.addEventListener("resize", handleResize);

    // Wywołaj funkcję raz przy montowaniu, żeby sprawdzić początkowy rozmiar
    handleResize();

    // Sprzątanie po odmontowaniu komponentu
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className={isMenuOpen ? "blur-lg bg-white" : ""}>
        <Topbar
          links={links}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 pt-24 space-y-8 px-5 overflow-hidden">
          <button
            className="absolute top-10 right-7"
            onClick={() => setIsMenuOpen(false)}
          >
            <XIcon />
          </button>
          {links.map((link) => (
            <div
              className="text-2xl leading-1.5 font-medium text-black p-4"
              key={link}
            >
              {link}
            </div>
          ))}
          <div className="flex flex-col items-center gap-4 p-4 w-full mt-auto">
            <Button className="w-full" variant="secondary">
              Login
            </Button>
            <Button className="w-full" variant="primary">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
