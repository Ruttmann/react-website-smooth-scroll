import React from "react";

export const InfoContainer = ({ children, lightBg, ...rest }) => {
  const background = lightBg ? "bg-gray-100" : "bg-black";
  return (
    <div {...rest} className={`text-white ${background} md:py-24 md:px-0 z-10`}>
      {children}
    </div>
  );
};

export const InfoWrapper = ({ children }) => (
  <div className="grid z-10 h-860 w-full max-w-1100 mr-auto ml-auto py-0 px-6 justify-center">
    {children}
  </div>
);

export const InfoRow = ({ children, imgStart }) => {
  const gridAreasXL = imgStart
    ? "grid-areas-xlimgstart"
    : "grid-areas-xlimgend";
  const gridAreasMD = imgStart
    ? "grid-areas-mdimgstart"
    : "grid-areas-mdimgend";
  return (
    <div
      className={`grid auto-cols-1fr ${gridAreasXL} md:${gridAreasMD} xsm:flex items-center`}
    >
      {children}
    </div>
  );
};

export const Column1 = ({ children }) => (
  <div className="mb-4 py-0 px-4 grid-in-col1 xsm:justify-center xsm:items-center">
    {children}
  </div>
);

export const Column2 = ({ children }) => (
  <div className="mb-4 py-0 px-4 grid-in-col2 xsm:hidden">{children}</div>
);

export const TextWrapper = ({ children }) => (
  <div className="max-w-xl pt-0 pb-14">{children}</div>
);

export const TopLine = ({ children }) => (
  <p className="text-green-500 text-base leading-4 font-bold tracking-widest uppercase mb-1">
    {children}
  </p>
);

export const Heading = ({ children, lightText }) => {
  const textColor = lightText ? "text-gray-300" : "text-black";
  return (
    <h1
      className={`mb-6 text-5xl leading-tight font-semibold ${textColor} sm:text-3xl`}
    >
      {children}
    </h1>
  );
};

export const Subtitle = ({ children, darkText }) => {
  const textColor = darkText ? "text-black" : "text-white";
  return (
    <p className={`max-w-md mb-9 text-lg leading-6 ${textColor}`}>{children}</p>
  );
};

export const BtnWrap = ({ children }) => (
  <div className="flex justify-start">{children}</div>
);

export const ImgWrap = ({ children }) => (
  <div className="max-w-xl h-full">{children}</div>
);

export const Img = ({ src, alt, ...rest }) => (
  <img
    {...rest}
    src={src}
    alt={alt}
    className="w-full ml-0 mt-0 mr-1.5 mb-0 pr-0"
  />
);
