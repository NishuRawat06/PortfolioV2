import Image from 'next/image'
import React from 'react'
import {grain, heroimg} from "../../public/assets/index.js"
import Heroorbit from './Heroorbit'
import { ORBITSETTINGS } from '@/utils'
import Link from 'next/link'
const Herosection = () => {
  return (
    <div className="relative flex justify-center items-center  gap-4">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grain.src})` }}
      ></div>
      <div className="relative inset-0">
        <div
          className="absolute inset-0 h-250 animate-spin "
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
        <div className="relative flex items-center justify-center -top-50 z-10">
          <div className="size-150 rounded-full absolute shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5"></div>
          <div className="size-200 rounded-full absolute shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5"></div>
          <div className="size-250 rounded-full absolute shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5"></div>
          <div className="size-300 rounded-full shadow-[0_0_80px_inset] border-emerald-300/5 shadow-emerald-300/5"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center absolute top-50">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image src={heroimg} alt="logo" width={120} height={102} />
          </div>
          <div className="flex bg-black/60 w-58 h-8.5 justify-center items-center">
            <div className="relative px-2">
              <div className="text-green-500 font-bold text-5xl ">•</div>
              <span className="text-green-500 text-5xl animate-ping font-bold absolute top-0">
                •
              </span>
            </div>
            <div>Available for new projects</div>
          </div>
        </div>

        <div className="font-bold text-5xl">Nishu Rawat</div>
        <div className="text-2xl opacity-50">i m full stack developer </div>
        <div className="flex gap-5">
          <button className="border w-51.25 h-12 rounded-2xl font-bold">
            Explore my work
          </button>
          <button className="bg-white text-black w-51.25 h-12 rounded-2xl font-bold">
            <Link href="mailto:rawatnishu2005@gmail.com"> Lets connect</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;