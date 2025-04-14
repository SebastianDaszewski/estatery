"use client";
import { useState, useEffect } from "react";

import {
  Topbar,
  FirstSection,
  SecondSection,
  ThirdSection,
  Footer,
} from "@/features/landing/components";
import { Button } from "@/components";
import { XIcon } from "@/icons";
import { landingLinks } from "./data";

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
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 pt-24 space-y-8 px-5 overflow-hidden">
          <div className="absolute top-10 right-7 x-button">
            <XIcon />
          </div>
          {landingLinks.map((link) => (
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
