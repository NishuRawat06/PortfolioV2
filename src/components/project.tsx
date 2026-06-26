import React from "react";
import Image from "next/image";
import { grain } from "../../public/assets/index";
import { PROJECT_DATA } from "@/lib/index";

const Project = () => {
  return (
    <section id="projects" className="py-16">
      {/* Heading */}
      <div className="flex flex-col items-center my-10 md:my-16">
        <div className="bg-linear-to-r from-emerald-300 to-sky-400 bg-clip-text text-center text-transparent font-semibold tracking-[0.3em]">
          PORTFOLIO HIGHLIGHTS
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl font-bold md:text-5xl">
          Recent Projects
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-10 px-4">
  {PROJECT_DATA.map((e, index) => (
    <div
      key={index}
      style={{
        top: `calc(64px + ${index * 40}px)`,
      }}
      className="
        sticky top-16
        w-full
        max-w-[1100px]
        min-h-fit md:min-h-[500px]
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/3
        backdrop-blur-xl
        shadow-[0_30px_120px_rgba(0,0,0,0.35)]
        flex flex-col md:flex-row
        gap-8
        p-6 md:p-8 lg:p-10
      "
    >
      {/* Background Grain */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grain.src})`,
        }}
      />

      {/* Gradient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,231,183,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.16),transparent_30%)]" />

      {/* Top Border Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* Left Side */}
      <div className="flex w-full flex-col items-center md:items-start text-center md:text-left gap-5 md:w-1/2">
        {/* Project Info - Hidden on Mobile */}
        <div className="hidden md:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-gray-950">
            {index + 1}
          </span>

          <span>{e.projectName}</span>

          <span className="size-1 rounded-full bg-emerald-300" />

          <span>{e.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          {e.title}
        </h3>

        {/* Results - Hidden on Mobile */}
        <ul className="hidden md:flex flex-col gap-3 text-white/70 list-disc pl-5">
          {e.results.map((ele, i) => (
            <li key={i}>{ele.title}</li>
          ))}
        </ul>

        {/* Tech Stack - Hidden on Mobile */}
        <div className="hidden md:flex flex-wrap gap-3">
          {e.techStack.split(",").map((tech, i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium text-white/70"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="mt-2 md:mt-auto">
          {e.disable ? (
            <button
              disabled
              className="h-12 w-52 rounded-2xl border border-white/10 bg-white/4 text-white/70"
            >
              Private Project
            </button>
          ) : (
            <a
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-12 w-52 rounded-2xl border border-white/10 bg-white/4 text-white/70 transition hover:bg-white/10">
                Visit
              </button>
            </a>
          )}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-2xl">
          <Image
            src={e.image}
            alt={e.projectName}
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Project;