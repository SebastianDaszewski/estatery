"use client";

import { useState } from "react";

const Heart = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`border-1 hover:border-primary-hover focus:border-primary-hover focus:border-1.5 focus:outline-none ${
        isActive ? "bg-primary" : ""
      } border-borderLight rounded-full w-12 h-12 flex items-center justify-center relative`}
      style={{
        position: "relative",
        zIndex: 1,
        backgroundColor: isActive ? "#6851FF" : "",
      }}
      onFocus={(e) => {
        if (!e.currentTarget.matches(":active")) {
          e.currentTarget.style.backgroundColor = isActive
            ? ""
            : "rgba(61, 30, 254, 0.2)";
        }
      }}
      onBlur={(e) => {
        e.currentTarget.style.backgroundColor = isActive ? "#6851FF" : "";
      }}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill={isActive ? "#6851FF" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.31804 2.31798C1.90017 2.73584 1.5687 3.23192 1.34255 3.77789C1.1164 4.32386 1 4.90903 1 5.49998C1 6.09093 1.1164 6.6761 1.34255 7.22207C1.5687 7.76803 1.90017 8.26411 2.31804 8.68198L10 16.364L17.682 8.68198C18.526 7.83806 19.0001 6.69346 19.0001 5.49998C19.0001 4.3065 18.526 3.1619 17.682 2.31798C16.8381 1.47406 15.6935 0.99995 14.5 0.99995C13.3066 0.99995 12.162 1.47406 11.318 2.31798L10 3.63598L8.68204 2.31798C8.26417 1.90011 7.7681 1.56864 7.22213 1.34249C6.67616 1.11634 6.09099 0.999939 5.50004 0.999939C4.90909 0.999939 4.32392 1.11634 3.77795 1.34249C3.23198 1.56864 2.7359 1.90011 2.31804 2.31798V2.31798Z"
          stroke={isActive ? "white" : "#6851FF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Heart;
