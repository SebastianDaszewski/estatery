import Image from "next/legacy/image";
import { Card, StatItem } from "@/components";
import { motion } from "framer-motion";
import { useAnimation } from "@/context/AnimationContext";

const FirstSection = () => {
  const { variants, defaultViewport, splitTextIntoWords } = useAnimation();

  const titleWords = splitTextIntoWords(
    "Buy, rent, or sell your property easily"
  );
  const descriptionWords = splitTextIntoWords(
    "A great platform to buy, sell, or even rent your properties without any commisions."
  );

  return (
    <div className="flex flex-col md:flex-row relative bg-white">
      <div className="relative w-full md:w-1/2 h-[750px]">
        <Image
          src="/images/blur-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute max-md:gap-y-10 inset-0 flex flex-col justify-center items-center md:items-start p-4 md:p-12 z-10 w-full">
          <motion.h1
            className="text-4xl md:text-6.5xl tracking--1 leading-1.1 font-bold text-center md:text-left text-black mb-4 w-full"
            variants={variants.text}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {titleWords.map((word: string, index: number) => (
              <motion.span
                key={index}
                variants={variants.word}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            className="text-xl leading-1.6 tracking--0.5 text-black mb-8 w-5/6 md:w-3/4 text-center md:text-left"
            variants={variants.text}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {descriptionWords.map((word: string, index: number) => (
              <motion.span
                key={index}
                variants={variants.word}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="w-2/3 xl:w-1/2 mb-8"
            variants={variants.statsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={{ delay: 0.5 }}
          >
            <div className="flex gap-4">
              <motion.div
                className="flex gap-4 w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <StatItem value="50k+" label="renters" />
                <StatItem value="10k+" label="properties" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative overflow-hidden w-full md:w-1/2 h-[750px]">
        <Image
          src="/images/map-bg.jpg"
          alt="Background Map"
          layout="fill"
          className="max-md:object-contain max-md:object-right-top max-md:scale-90"
        />
        <div className="block md:hidden sticky top-1/5  ml-5 sm:ml-5 z-10">
          <Card
            image="/images/apartment-3.jpg"
            title="Beverly Springfield"
            price="$2,700"
            address="2821 Lake Sevilla, Palm Harbor, TX"
            width="w-2/5"
            height="h-2/5"
            id={1}
          />
        </div>
      </div>
      <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-[12.5%] z-20">
        <Card
          image="/images/apartment-3.jpg"
          title="Beverly Springfield"
          price="$2,700"
          address="2821 Lake Sevilla, Palm Harbor, TX"
          id={1}
        />
      </div>
    </div>
  );
};

export default FirstSection;
