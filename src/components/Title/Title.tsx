import { TitleProps } from "@/interfaces/interfaces";
import React from "react";

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="font-sans font-semibold text-24 leading-26.4px text-white -z-10 px-[20px]">
      {title}
    </div>
  );
};

export default Title;
