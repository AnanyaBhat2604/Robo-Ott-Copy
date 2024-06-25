import React from "react";
import Image from "next/image";
import strings from "@/assets/strings/strings.json";
import Link from "next/link";

const Logo = ({ logo }: { logo: string }) => {
  return (
    <Link href={"/"} className="my-[10px]">
      {logo && (
        <Image
          unoptimized
          src={logo}
          alt={"logo"}
          width={0}
          height={0}
          className="w-auto max-h-[42px]"
        />
      )}
    </Link>
  );
};

export default Logo;
