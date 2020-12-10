import React from "react";

export const ServicesContainer = ({ children, ...rest }) => (
  <div
    {...rest}
    className="h-800 md:h-1100 sm:h-1300 flex flex-col justify-center items-center bg-black"
  >
    {children}
  </div>
);

export const ServicesWrapper = ({ children }) => (
  <div className="max-w-5xl my-0 mx-auto grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 items-center py-0 px-12 md:py-0 md:px-6">
    {children}
  </div>
);

export const ServicesCard = ({ children }) => (
  <div className="bg-white flex flex-col justify-start items-center rounded-xl max-h-80 p-8 shadow-lg transition-all ease-in-out duration-200 cursor-pointer hover:transform-gpu hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-200">
    {children}
  </div>
);

export const ServicesIcon = ({ src, alt, ...rest }) => (
  <img src={src} alt={alt} {...rest} className="h-40 w-40 mb-3" />
);

export const ServicesH1 = ({ children }) => (
  <h1 className="text-4xl text-white font-black mb-16 sm:text-3xl">
    {children}
  </h1>
);

export const ServicesH2 = ({ children }) => (
  <h2 className="text-base font-black mb-3">{children}</h2>
);

export const ServicesP = ({ children }) => (
  <p className="text-base text-center">{children}</p>
);
