import Image from "next/image";
import React from "react";
import { grain, heroimg } from "../../public/assets/index.js";
import Heroorbit from "./Heroorbit";
import { ORBITSETTINGS } from "@/utils";
import Link from "next/link";
const Herosection = () => {
  return (
    <div className="relative flex justify-center items-center  gap-4">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grain.src})` }}
      ></div>
      <div className="relative inset-0 pointer-events-none">
        <div
          className="absolute inset-0 h-250 animate-spin hidden lg:block"
          style={{ animationDuration: "30s" }}
        >
          {ORBITSETTINGS.map((e, index) => (
            <Heroorbit
              key={index}
              size={e.size}
              rotation={e.rotation}
              orbitDuration={e.orbitDuration}
              SpinDuration={e.SpinDuration}
            >
              {e.icon}
            </Heroorbit>
          ))}
        </div>
        <div className="relative lg:flex hidden items-center justify-center -top-50 z-10 pointer-events-none">
          <div className="size-150 rounded-full  absolute shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5 pointer-events-none"></div>
          <div className="size-200 rounded-full   absolute shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5 pointer-events-none"></div>
          <div className="size-250 rounded-full  absolute shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5 pointer-events-none"></div>
          <div className=" size-300 lg:size-300 rounded-full  shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5 pointer-events-none"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center py-8 md: px-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src={heroimg}
            alt="logo"
            width={120}
            height={102}
            className="w-20 sm:w-24 md:w-28"
          />

          <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-md">
            <div className="relative flex items-center justify-center">
              <div className="text-green-500 font-bold text-2xl sm:text-3xl">
                •
              </div>
              <span className="text-green-500 text-2xl sm:text-3xl animate-ping font-bold absolute">
                •
              </span>
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="font-bold text-2xl sm:text-4xl md:text-5xl mt-4">
          Nishu Rawat
        </div>
        <div className="text-sm sm:text-lg md:text-2xl opacity-50 mt-1">
          I am a full stack developer
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
          <a href="#projects">
            <button className="border px-6 py-2 sm:px-8 sm:py-3 rounded-2xl font-bold w-full sm:w-auto">
              Explore my work
            </button>
          </a>

          <button className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-2xl font-bold w-full sm:w-auto">
            <a href="mailto:rawatnishu2005@gmail.com">Let’s connect</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection; 