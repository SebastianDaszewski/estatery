import clsx from "clsx";
import { ApartmentsIcon, HousesIcon } from "@/icons";
import Heart from "@/components/Heart";
import Image from "next/image";

export type CardProps = {
  id: number;
  image: string;
  title: string;
  price: string;
  address: string;
  width?: string;
  height?: string;
  variant?: "house" | "apartment" | "mapView";
  type?: "house" | "apartment";
};

const Card = ({
  image,
  title,
  price,
  address,
  width = "w-90",
  height = "h-90",
  variant = "mapView",
}: CardProps) => {
  return (
    <div
      className={clsx(
        "card hover:shadow-md bg-white border-borderLight border-1 relative",
        width,
        height
      )}
    >
      <figure>
        <Image
          src={image}
          alt="house"
          className={clsx(
            variant !== "mapView" &&
              "w-full h-[200px] object-cover rounded-t-lg",
            variant === "mapView" &&
              "h-[100px] 0.5sm:h-[125px] sm:h-[150px] md:h-[200px]"
          )}
          width={360}
          height={200}
        />
        {variant !== "mapView" && (
          <div className="absolute -left-2 top-[49%] sm:top-[50%] md:top-[51%] xl:top-[49%]">
            {variant === "house" ? <HousesIcon /> : <ApartmentsIcon />}
          </div>
        )}
      </figure>
      <div
        className={clsx(
          variant !== "mapView" && "card-body",
          variant === "mapView" && "p-1.5 xs:p-2 0.5sm:p-3 sm:p-4 md:card-body"
        )}
      >
        <div
          className={clsx(
            "flex flex-col",
            variant !== "mapView" && " gap-y-5",
            variant === "mapView" &&
              "gap-y-0.5 0.5sm:gap-y-1 sm:gap-y-3 md:gap-y-5"
          )}
        >
          <h2 className="flex items-center gap-0.5 justify-between">
            <div className="flex">
              <span
                className={clsx(
                  "card-title text-2xl leading-1.5 font-bold text-primary tracking--1",
                  variant === "mapView" && "text-xs sm:text-lg md:text-2xl"
                )}
              >
                {price}
              </span>
              <span
                className={clsx(
                  "text-sm leading-1.4 text-black opacity-50",
                  variant === "mapView" && "text-2xs sm:text-xs md:text-sm"
                )}
              >
                /month
              </span>
            </div>
            <div className={clsx(variant === "mapView" && "hidden")}>
              <Heart />
            </div>
          </h2>
          <span
            className={clsx(
              "text-2xl leading-4.5 md:leading-1.5 font-bold text-black tracking--1",
              variant === "mapView" && "text-xs sm:text-lg md:text-2xl"
            )}
          >
            {title}
          </span>
          <span
            className={clsx(
              "font-medium text-black opacity-50",
              variant !== "mapView" &&
                "max-0.5sm:text-xs lg:text-sm xl:text-base",
              variant === "mapView" &&
                "text-4xs xs:text-3xs sm:text-xs md:text-base"
            )}
          >
            {address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
