import React from "react";
import { Link } from "react-scroll";

export const Button = ({ children, primary, big, dark, fontBig, ...rest }) => {
  const background = primary ? "bg-green-500" : "bg-black";
  const padding = big ? "py-3.5 px-12 " : "py-3 px-7";
  const color = dark ? "text-black" : "text-white";
  const fontSize = fontBig ? "text-xl" : "text-base";
  const hoverBg = primary ? "bg-white" : "bg-green-500";
  return (
    <Link
      {...rest}
      className={`rounded-3xl whitespace-nowrap ${background} ${padding} ${color} ${fontSize} border-none outline-none cursor-pointer flex justify-center items-center transition-all ease-in-out duration-200 hover:${hoverBg}`}
    >
      {children}
    </Link>
  );
};
