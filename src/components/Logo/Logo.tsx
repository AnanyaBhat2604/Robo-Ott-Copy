import React from "react";
import Image from "next/image"
import strings from "@/assets/strings/strings.json";
import Link from "next/link";


const Logo = ({logo}) => {
  return (
    <Link
      href={"/"}
      className="my-[10px]"
    >
{logo&&<Image
          unoptimized
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${logo}`}
          alt={"logo"}
          width={0}
          height={0}
          className="w-auto max-h-[42px]"
        />}
    </Link>
  );
};

export default Logo;
