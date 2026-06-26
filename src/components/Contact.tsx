import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center" id="contact">
      <div className="bg-linear-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 md:py-10 px-5 md:px-10 rounded-3xl text-center md:text-left relative overflow-hidden w-65 sm:w-180 md:250 mt-30 mb-20 flex flex-col md:flex-row justify-between items-center gap-5 md:">
        <div className="font-serif text-2xl md:text-3xl font-bold">
          Let's create something amazing together
        </div>
        <a href="mailto:rawatnishu2005@gmail.com">
          <button className="text-white  bg-gray-900  px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
            Contact me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
