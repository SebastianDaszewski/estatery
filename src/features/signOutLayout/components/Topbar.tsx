"use client";
import FrameIcon from "@/icons/FrameIcon";
import Button from "@/components/Button";

import clsx from "clsx";

const links = ["Rent", "Buy", "Sell", "Manage Properties", "Resources"];

const Topbar = () => {
  return (
    <div className="bg-white flex items-center px-10 py-4 h-24">
      <div className="flex items-center text-xl leading-logo font-bold text-black">
        <FrameIcon />
        Estatery
      </div>
      <div className="flex flex-grow items-center justify-center gap-14 max-lg:gap-2">
        {links.map((link) => (
          <div className="text-base font-medium text-black" key={link}>
            {link}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-4">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </div>
  );
};

export default Topbar;
