import { MoveUpRight } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full  border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40 px-5">© 2025. All rights reserved.</div>
        <div className="flex flex-col md:flex-row items-center gap-8 px-10">
          <a
            className="inline-flex gap-1.5 items-center "
            target="_blank"
            href="https://github.com/NishuRawat06"
          >
            <span className="font-semibold flex">Github<MoveUpRight size={20} className=""/></span>
          </a>
          <a
            className="inline-flex gap-1.5 items-center "
            target="_blank"
            href="https://www.linkedin.com/in/nishu-rawat-7a04622a2?utm_source=share&utm_campaign=share_via&utm_content=profile"
          >
            <span className="font-semibold flex">Linkdin<MoveUpRight size={20} /></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
