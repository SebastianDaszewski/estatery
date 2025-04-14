import Image from "next/image";
import { useState } from "react";
import Ring from "@/icons/Ring";
import { motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";

const mockData = [
  {
    name: "Mira Culos",
    image: "/images/avatar-1.jpg",
    role: "Renter",
    testimonial:
      "“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”",
  },
  {
    name: "Mark Brown",
    image: "/images/avatar-2.jpg",
    role: "Renter",
    testimonial:
      "“I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”",
  },
  {
    name: "Jake White",
    image: "/images/avatar-3.jpg",
    role: "Renter",
    testimonial:
      "“Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.”",
  },
];

const ThirdSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { variants, defaultViewport, splitTextIntoWords } = useAnimation();

  // Dzielę teksty na słowa
  const titleWords = splitTextIntoWords("Testimonials");
  const subtitleWords = splitTextIntoWords(
    "See what our property managers, landlords, and tenants have to say"
  );
  const testimonialWords = splitTextIntoWords(
    mockData[activeIndex].testimonial
  );

  return (
    <div className="relative h-[570px] sm:h-[510px]">
      <Image
        src="/images/gradient-bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
        <div className="flex flex-col w-full items-center gap-4 mt-12">
          <motion.h2
            className="text-3xl sm:text-5xl leading-1.4 tracking--1 font-bold text-black"
            variants={variants.text}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={variants.word}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.span
            className="text-base leading-1.6 font-normal text-black opacity-70 w-full xl:w-[35%] text-center"
            variants={variants.text}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={{ delay: 0.1 }}
          >
            {subtitleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={variants.word}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </div>
        <div className="text-center flex flex-col gap-8 mt-8">
          <motion.p
            className="text-xl leading-1.6 font-medium text-black w-full sm:w-5/6 lg:w-2/3 xl:w-[42%] text-center mx-auto"
            key={activeIndex}
            variants={variants.text}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            {testimonialWords.map((word, index) => (
              <motion.span
                key={index}
                variants={variants.word}
                style={{ display: "inline-block", marginRight: "0.25em" }}
                transition={{ delay: 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-2"
            key={`name-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <span className="font-bold text-base text-black">
              {mockData[activeIndex].name},
            </span>
            <span className="text-black font-normal opacity-50">
              {mockData[activeIndex].role}
            </span>
          </motion.div>
        </div>

        <div className="absolute bottom-6 flex gap-8">
          {mockData.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => setActiveIndex(index)}
              className="w-[84px] h-[84px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={defaultViewport}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {index === activeIndex ? (
                <Ring>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                </Ring>
              ) : (
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
