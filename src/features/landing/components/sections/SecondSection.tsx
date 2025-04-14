"use client";

import { useState } from "react";
import clsx from "clsx";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import { CardProps } from "@/components/Card";
import { motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState<"houses" | "apartments">("houses");
  const { variants, defaultViewport, splitTextIntoWords } = useAnimation();

  const mockData: CardProps[] = [
    {
      id: 1,
      price: "$2,140",
      title: "Tarpon Bay",
      address: "103 Lake Shores, Michigan, IN",
      type: "apartment" as const,
      image: "/images/apartment-1.jpg",
    },
    {
      id: 2,
      price: "$1,450",
      title: "Cove Red",
      address: "243 Curlew Road, Palm Harbor, TX",
      type: "apartment" as const,
      image: "/images/apartment-2.jpg",
    },
    {
      id: 3,
      price: "$3,850",
      title: "Beverly Springfield",
      address: "2821 Lake Sevilla, Palm Harbor, TX",
      type: "apartment" as const,
      image: "/images/apartment-3.jpg",
    },
    {
      id: 4,
      price: "$3,440",
      title: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
      type: "house" as const,
      image: "/images/house-1.jpg",
    },
    {
      id: 5,
      price: "$6,550",
      title: "St. Crystal",
      address: "210 US Highway, Highland Lake, FL",
      type: "house" as const,
      image: "/images/house-2.jpg",
    },
    {
      id: 6,
      price: "$4,950",
      title: "Faulkner Ave",
      address: "909 Woodland St, Michigan, IN",
      image: "/images/house-3.jpg",
      type: "house" as const,
    },
  ];

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
          {mockData
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
          <Carousel activeTab={activeTab} data={mockData} />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
