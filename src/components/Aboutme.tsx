/// <reference types="react" />
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
import { map, mapface } from "../../public/assets/index.js";

const Aboutme = () => {
  const techstacks = [
    { name: "JavaScript", icon: jsicon },
    { name: "TypeScript", icon: typescript },
    { name: "CSS", icon: css },
    { name: "React JS", icon: react },
    { name: "Next JS", icon: nextjs },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Github", icon: github },
    { name: "Node JS", icon: NodeJsIcon },
    { name: "Express JS", icon: ExpressJsIcon },
    { name: "PostgreSQL", icon: PostgreSqlIcon },
    { name: "MongoDB", icon: MongoDbIcon },
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-8 px-4 py-16"
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="uppercase font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          About Me
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center">
          A Glimpse Into My World
        </h2>

        <p className="max-w-2xl text-center text-sm md:text-lg lg:text-xl text-white/60">
          Learn more about who I am, what I do, and what inspires me to build.
        </p>

        {/* Toolbox Card */}
        <div
          className="
            relative
            w-full
            max-w-[1200px]
            overflow-hidden
            rounded-3xl
            border border-white/5
            bg-gray-800/90
            backdrop-blur-md
            p-6 md:p-8 lg:p-10
            flex flex-col gap-8
            after:absolute
            after:inset-0
            after:content-['']
            after:rounded-3xl
            after:outline
            after:-outline-offset-2
            after:outline-white/15
            after:pointer-events-none
          "
        >
          {/* Card Header */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl">
              My Toolbox
            </h3>

            <p className="mt-2 max-w-2xl text-sm md:text-base text-white/60">
              The cutting-edge technology and tools I use to craft
              high-performance digital experiences.
            </p>
          </div>

          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="flex flex-none gap-4 md:gap-6 py-2 pr-6 animate-marquee hover:[animation-play-state:paused]">
              {techstacks.map((techstack) => {
                const Icon = techstack.icon;

                return (
                  <div
                    key={techstack.name}
                    className="
                      flex
                      items-center
                      gap-3
                      shrink-0
                      min-w-fit
                      rounded-xl
                      border border-white/5
                      bg-white/5
                      backdrop-blur-md
                      px-4
                      py-3
                      transition-all
                      duration-500
                      hover:bg-white/10
                      hover:border-white/20
                      cursor-default
                    "
                  >
                    {Icon && (
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-emerald-300" />
                    )}

                    <span className="whitespace-nowrap text-sm md:text-base">
                      {techstack.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;