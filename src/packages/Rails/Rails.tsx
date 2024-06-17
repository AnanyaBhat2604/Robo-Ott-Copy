import Title from "@/components/Title/Title";
import CarouselItems from "../../components/Carousel/CarouselItems";
import { RailsProps } from "@/interfaces/interfaces";

const Rails = ({ data, title }: RailsProps) => {
  return (
    <div className=" flex flex-col gap-[20px] carousel-custom  relative py-[40px] px-[20px] ">
      {title && <Title title={title} />}
      <CarouselItems movieData={data} />
    </div>
  );
};

export default Rails;
