import React from "react";

import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = ({ children }) => (
  <div className="flex justify-center bg-black items-center px-4 h-800 relative">
    {children}
  </div>
);

export const HeroBg = ({ children }) => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    {children}
  </div>
);

export const VideoBg = (props) => (
  <video {...props} className="w-full h-full object-cover bg-gray-900" />
);

export const HeroContent = ({ children }) => (
  <div className="z-3 max-w-screen-xl absolute py-2 px-6 flex flex-col items-center">
    {children}
  </div>
);

export const HeroH1 = ({ children }) => (
  <h1 className="text-white text-center font-bold text-5xl md:text-4xl sm:text-3xl">
    {children}
  </h1>
);

export const HeroP = ({ children }) => (
  <p className="mt-6 text-white text-2xl sm:text-xl text-center max-w-screen-sm">
    {children}
  </p>
);

export const HeroBtnWrapper = ({ children }) => (
  <div className="mt-8 flex flex-col items-center">{children}</div>
);

export const ArrowForward = () => <MdArrowForward className="ml-2 text-xl" />;

export const ArrowRight = () => (
  <MdKeyboardArrowRight className="ml-2 text-xl" />
);
