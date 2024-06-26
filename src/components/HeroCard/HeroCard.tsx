"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import Title from "../Title/Title";
import { HeroDataProps } from "@/interfaces/interfaces";

const HeroCard: FC<{ heroData: HeroDataProps[] }> = ({ heroData }) => {
  const [error, setError] = useState(false);

  console.log(heroData);

  return (
    <>
      {heroData.map((heroElement: any, index) => {
        const src = heroElement.image;
        return (
          <div
            className={`flex px-32 py-24 gap-5 justify-center items-center border-b-[2px] border-dark-grey max-w-[1800px] mx-auto max-sm:flex-col max-sm:px-[40px] bg-cover backdrop-blur-sm relative ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } }
      `}
            key={index}
          >
            <div
              className={`basis-1/2 ${
                index % 2 !== 0 ? "flex justify-end" : ""
              }`}
            >
              <Image
                src={
                  error
                    ? "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1714637808~exp=1714638408~hmac=565aff2bd3609247db95a239bf7f4b2530fe714e77b8c8854fb2ea1199facc20"
                    : src
                }
                alt={heroElement.title}
                loader={() => src}
                width={400}
                height={300}
                onError={() => setError(true)}
                unoptimized
                className="h-[300px] w-[400px] object-contain"
              />
            </div>
            <div className="text-white basis-1/2">
              <Title title={heroElement.title} />
              <div className="mt-6">{heroElement.description}</div>
            </div>
            <div
              className="absolute inset-0 -z-10 bg-cover blur-[2px] brightness-[0.75]"
              style={{ backgroundImage: `url(${heroElement.backgroundImage})` }}
            ></div>
          </div>
        );
      })}
    </>
  );
};

export default HeroCard;
