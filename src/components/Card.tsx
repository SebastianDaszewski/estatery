import clsx from "clsx";
import { ApartmentsIcon, HousesIcon } from "@/icons";

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
    <div className={clsx("card bg-white relative", width, height, "shadow-sm")}>
      <figure className="pb-6 overflow-visible">
        <img
          src={image}
          alt="house"
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
        {variant !== "mapView" && (
          <div className="absolute -left-2 top-[51%]">
            {variant === "house" ? <HousesIcon /> : <ApartmentsIcon />}
          </div>
        )}
      </figure>
      <div
        className={clsx(
          variant !== "mapView" ? "p-2" : "card-body",
          variant === "mapView" && "p-2 md:card-body"
        )}
      >
        <div
          className={clsx(
            "flex flex-col",
            variant !== "mapView" && " gap-y-5",
            variant === "mapView" && "gap-y-2 md:gap-y-5"
          )}
        >
          <h2 className="flex items-center gap-0.5">
            <span
              className={clsx(
                "card-title text-2xl leading-1.5 font-bold text-primary tracking--1",
                variant === "mapView" && "text-sm sm:text-lg md:text-2xl"
              )}
            >
              {price}
            </span>
            <span
              className={clsx(
                "text-sm leading-1.4 text-black opacity-50",
                variant === "mapView" && "text-xs md:text-sm"
              )}
            >
              /month
            </span>
          </h2>
          <span
            className={clsx(
              "text-2xl leading-4.5 md:leading-1.5 font-bold text-black tracking--1",
              variant === "mapView" && "text-sm sm:text-lg md:text-2xl"
            )}
          >
            {title}
          </span>
          <span
            className={clsx(
              " font-medium text-black opacity-50",
              variant !== "mapView" && "max-md:text-sm max-sm:mb-4 text-base",
              variant === "mapView" && "text-2xs sm:text-xs md:text-base"
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
