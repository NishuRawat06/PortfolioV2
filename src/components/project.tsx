import React from 'react'
import Image from 'next/image'
import { grain } from '../../public/assets/index';
import { PROJECT_DATA } from '@/lib/index';
const project = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="font-semibold tracking-widest bg-linear-to-r from-emerald-300 to-sky-400  text-center text-transparent bg-clip-text">
          PORTFOLIO HIGHLIGHTS
        </div>
        <div className="font-serif text-3xl md:text-5xl text-center mt-6 font-bold">
          Recent Projects
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 ">
        {PROJECT_DATA.map((e, index) => (
          <div
            className="w-225 h-160 sticky top-16 bg-white/3 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.35)] border-2 border-white/10 overflow-hidden flex px-10 py-10 rounded-3xl z-50 "
            key={index}
            style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
          >
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: `url(${grain.src})` }}
            ></div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,231,183,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.16),transparent_30%)]" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"/>
            <div className="w-1/2 flex flex-col gap-5">
              <div className='mb-4 hidden md:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70'>
                <span className='flex size-7 items-center justify-center rounded-full bg-white text-gray-950 tracking-normal'>{index+1}</span>
                <span>{e.projectName}</span>
                <span className='size-1 rounded-full bg-emerald-300'></span>
                <span>{e.year}</span>
              </div>
              <div className="font-serif text-2xl md:text-4xl leading-tight font-bold">
                {e.title}
              </div>
              <div>
                <ul className="mt-5 hidden md:flex flex-col gap-3 list-disc text-white/70">
                  {e.results.map((ele, index) => (
                    <li key={index}>{ele.title}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-5">
                {e.techStack.split(",").map((element, index) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium text-white/70"
                    key={index}
                  >
                    {element.trim()}
                  </span>
                ))}
              </div>
              <div>
                {e.disable ? (
                  <button className="rounded-2xl border border-white/10 bg-white/4 w-50 h-12.5 text-white/70">
                    private project
                  </button>
                ) : (
                  <a href={e.link}>
                    <button className="rounded-2xl border border-white/10 bg-white/4 w-50 h-12.5 text-white/70">
                    visit
                    </button>
                  </a>
                )}
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-end ">
              <Image
                src={e.image}
                alt="thaiproject"
                width={1800}
                height={873}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;