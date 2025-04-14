import Card from "@/components/Card";
import { CardProps } from "@/components/Card";

type CarouselProps = {
  data: CardProps[];
  activeTab: "houses" | "apartments";
};

const Carousel = ({ data, activeTab }: CarouselProps) => {
  return (
    <div className="carousel carousel-center bg-white rounded-box p-4 w-full sm:w-3/4 md:w-2/3 gap-6">
      {data
        .filter((item) =>
          activeTab === "houses"
            ? item.type === "house"
            : item.type === "apartment"
        )
        .map((item) => (
          <div key={item.id} className="carousel-item w-[95%]">
            <Card
              variant={item.type as "house" | "apartment" | "mapView"}
              width="w-full"
              height="h-full"
              {...item}
            />
          </div>
        ))}
    </div>
  );
};

export default Carousel;
