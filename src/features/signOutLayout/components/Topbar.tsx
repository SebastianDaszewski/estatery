"use client";
import { useState } from "react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import HamburgerIcon from "@/icons/HamburgerIcon";

type TopbarProps = {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
  links: string[];
};

const Topbar: React.FC<TopbarProps> = ({
  setIsMenuOpen,
  isMenuOpen,
  links,
}) => {
  return (
    <div className="bg-white flex max-md:justify-between items-center max-lg:px-5 max-lg:py-2 px-10 py-4 h-24">
      <Logo />
      <div className="flex flex-grow items-center justify-center gap-14 max-lg:gap-3 max-md:hidden">
        {links.map((link) => (
          <div className="text-base font-medium text-black" key={link}>
            {link}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-4 max-md:hidden w-1/4">
        <Button className="w-1/2" variant="secondary">
          Login
        </Button>
        <Button className="w-1/2" variant="primary">
          Sign up
        </Button>
      </div>
      <button
        className="flex items-center justify-center max-md:block md:hidden"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          console.log("Menu toggled:", !isMenuOpen);
        }}
      >
        <HamburgerIcon />
      </button>
    </div>
  );
};

export default Topbar;
