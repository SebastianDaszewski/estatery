import React from "react";
import Separator from "./Separator";

type StatItemProps = {
  value: string;
  label: string;
};

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="flex gap-2 items-center flex-1">
      <Separator />
      <div className="flex flex-col items-center gap-2">
        <span className="card-title text-3xl leading-1.25 font-bold text-primary tracking--1">
          {value}
        </span>
        <span className="text-base font-medium text-customGray opacity-50">
          {label}
        </span>
      </div>
    </div>
  );
};

export default StatItem;
