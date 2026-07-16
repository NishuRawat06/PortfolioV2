'use client'
import React, { Fragment } from 'react'
import {motion} from 'motion/react'
import { StarIcon } from './icons';
const Tape = () => {
  const WORDS = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];
  return (
    <div className="py-16 lg:py-24 overflow-hidden my-8">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 -rotate-3 -mx-1 relative overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.15)]">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-3 md:py-4">
          <motion.div 
            className="flex flex-none gap-6 md:gap-10 pr-6 md:pr-10"
            animate={{ x: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: "default" }}
          >
                {[...new Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {WORDS.map((word) => (
                  <div key={word} className="inline-flex gap-4 md:gap-6 items-center group">
                    <span className="text-gray-950 uppercase font-black text-xs md:text-sm tracking-[0.2em] select-none group-hover:text-white transition-colors duration-300">
                      {word}
                    </span>
       
                  </div>
                ))}
              </Fragment>
            ))}
   
        </motion.div>
        </div>
  
        </div>
        </div>
  

  );
};

export default Tape;

//bg-gradient-to-r from-cyber-emerald via-cyber-sky to-cyber-emerald
