"use client";

import { useState } from "react";
import clsx from "clsx";
import { Card, Carousel } from "@/components";
import { motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";
import { housesData } from "../data";

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState<"houses" | "apartments">("houses");
  const { variants, defaultViewport, splitTextIntoWords } = useAnimation();

  const headingWords = splitTextIntoWords(
    "We make it easy for houses and apartments."
  );

  const descriptionWords = splitTextIntoWords(
    "Whether it's selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you'll save a bunch of money and time with our services."
  );

  return (
    <div className="bg-white h-full p-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center p-3 mx-auto rounded-md bg-lavenderLight w-fit tracking--0.5 text-lg/6">
          <button
            onClick={() => setActiveTab("houses")}
            className={clsx(
              "px-8 py-3 rounded-md font-bold transition-colors duration-200 w-1/2",
              {
                "bg-white text-primary font-bold": activeTab === "houses",
                "bg-transparent text-customGray font-medium cursor-pointer":
                  activeTab !== "houses",
              }
            )}
          >
            Houses
          </button>
          <button
            onClick={() => setActiveTab("apartments")}
            className={clsx(
              "px-8 py-3 rounded-md transition-colors duration-200 w-1/2",
              {
                "bg-white text-primary font-bold": activeTab === "apartments",
                "bg-transparent text-customGray font-medium cursor-pointer":
                  activeTab !== "apartments",
              }
            )}
          >
            apartments
          </button>
        </div>
        <motion.h2
          className="text-4xl font-bold text-black flex flex-wrap justify-center items-center text-center w-full md:w-2/3 lg:w-1/2 mx-auto tracking--1"
          variants={variants.text}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {headingWords.map((word, index) => (
            <motion.span
              key={index}
              variants={variants.word}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        <motion.div
          className="text-base leading-1.6 text-customGray font-medium text-center w-full md:w-2/3 lg:w-1/2 mx-auto"
          variants={variants.text}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.1 }}
        >
          {descriptionWords.map((word, index) => (
            <motion.span
              key={index}
              variants={variants.word}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <div className="max-lg:hidden flex items-center justify-center gap-6">
          {housesData
            .filter((item) =>
              activeTab === "houses"
                ? item.type === "house"
                : item.type === "apartment"
            )
            .map((item) => (
              <Card
                variant={item.type as "house" | "apartment" | "mapView"}
                key={item.id}
                {...item}
              />
            ))}
        </div>
        <div className="lg:hidden flex items-center justify-center">
          <Carousel activeTab={activeTab} data={housesData} />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
