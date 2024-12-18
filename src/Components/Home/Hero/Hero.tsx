/* eslint-disable react/no-unescaped-entities */
import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[600px] flex flex-col gap-2 items-center justify-center">
      <Image
        src={IMAGES.heroBg}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 z-0"
      />
      <h1 className="font-Poppins font-extrabold text-[86px] 2xl:text-[100px] text-white text-center max-w-[1300px] z-10 mx-auto">
        Empowering{" "}
        <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 bg-clip-text text-transparent">
          Your Success
        </span>{" "}
        through Technology
      </h1>
      <p className="font-Inter text-lg text-center max-w-[980px] mx-auto text-[#CACACA] z-10">
        At <span className="font-semibold text-white">Amplogix</span>, we
        empower your success through innovative technology solutions. From
        digital transformation to web development, we turn ideas into impactful
        platforms, driving growth and amplifying your brand's potential.
      </p>
      <div className="flex items-center gap-6 z-10 mt-5">
        <Link
          href={"/"}
          className="border border-purple-500 rounded-md focus:outline-none px-5 py-3 text-white/90 text-lg font-medium flex items-center gap-3 z-10"
        >
          Contact Now
        </Link>
        <Link
          href={"/"}
          className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-3 text-white/90 text-lg font-medium flex items-center gap-3 z-10"
        >
          Start A Project
        </Link>
      </div>
    </div>
  );
};

export default Hero;
