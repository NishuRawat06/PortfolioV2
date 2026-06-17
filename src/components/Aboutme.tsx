import React from "react";
import jsicon from "./icons/JavaScriptIcon";
import typescript from "./icons/TypeScript";
import css from "./icons/CssIcon";
import react from "./icons/ReactIcon";
import nextjs from "./icons/NextIcon";
import tailwindcss from "./icons/TailwindCss";
import github from "./icons/GithubIcon";
import NodeJsIcon from "./icons/NodejsIcon";
import ExpressJsIcon from "./icons/ExpressjsIcon";
import PostgreSqlIcon from "./icons/Postgresql";
import MongoDbIcon from "./icons/Mongodb";
import Image from "next/image";
import {map} from "../../public/assets/index.js"
const Aboutme = () => {
  const techstacks = [
    { name: "JavaScript", icon: jsicon },
    { name: "TypeScript", icon: typescript },
    { name: "css", icon: css },
    { name: "React JS", icon: react },
    { name: "Next JS", icon: nextjs },
    { name: "TailwindCss", icon: tailwindcss },
    { name: "Github", icon: github },
    { name: "Node JS", icon: NodeJsIcon },
    { name: "Express JS", icon: ExpressJsIcon },
    { name: "Postgresql", icon: PostgreSqlIcon },
    { name: "Mongodb", icon: MongoDbIcon },
  ];
  const hobbies = ["Movies", "games", "cooking"];
  return (
    <div className=" flex flex-col items-center justify-center gap-8">
      <div className=" flex flex-col items-center justify-center">
        <div className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center text-transparent bg-clip-text">
          Aboutme
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          A Glimpse Into My World
        </h2>
        <div className="text-center md:text-lg lg:text-xl mt-4 max-w-md mx-auto text-white/60">
          Learn more about who I am, what I do, and what inspires me to build.
        </div>
        <div className="w-250 h-auto bg-gray-800/90 backdrop-blur-md rounded-3xl z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/15 after:pointer-events-none h-100 col-span-full relative group overflow-hidden border border-white/5 p-10 flex flex-col gap-10">
          <div>
            <div className="font-serif text-3xl">My Toolbox</div>
            <div className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
              The cutting-edge technology and tools I use to craft
              high-performance digital experiences.
            </div>
          </div>
          <div className="flex flex-none py-2 gap-6 pr-6 animate-marquee hover:[animation-play-state:paused]">
            {techstacks.map((techstack) => {
              const Icon = (techstack as any).icon;
              return (
                <div
                  key={techstack.name}
                  className="inline-flex items-center gap-4 py-2.5 px-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 group cursor-default"
                >
                  <span>
                    {Icon ? (
                      <Icon className="w-10 h-10 text-emerald-300" />
                    ) : null}
                  </span>
                  {techstack.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-start w-250 border-2 border-amber-300">
        <div className="w-150 h-auto bg-gray-800/90 backdrop-blur-md rounded-3xl z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/15 after:pointer-events-none col-span-full relative group overflow-hidden border border-white/5 p-10 flex flex-col gap-10">
          <div className="font-serif text-3xl">Beyond the code</div>
          <div className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
            What fuels my creativity outside the digital realm
          </div>
          <div className="flex items-center justify-between">
            {hobbies.map((hobby) => {
              return (
                <div key={hobby} className="w-30 h-10 flex items-center justify-center rounded-2xl bg-emerald-300 font-bold text-black">
                  {hobby}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-150">
          <Image src={map} alt="logo" width={310} height={310} className="rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
