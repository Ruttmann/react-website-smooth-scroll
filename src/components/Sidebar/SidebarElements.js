import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

export const SidebarContainer = ({ children, isOpen }) => {
  const opacity = isOpen ? "opacity-100" : "opacity-0 hidden";
  const top = isOpen ? "top-0" : "-top-50";
  const zIndex = isOpen ? "z-50" : "z-0";

  return (
    <aside
      className={`fixed ${zIndex} w-full h-full bg-black grid items-center top-0 left-0 ${opacity} ${top}`}
    >
      {children}
    </aside>
  );
};

export const CloseIcon = () => <FaTimes color="white" />;

export const Icon = ({ children, ...rest }) => (
  <div
    {...rest}
    className="absolute top-5 right-6 bg-transparent text-3xl cursor-pointer outline-none"
  >
    {children}
  </div>
);

export const SidebarWrapper = ({ children }) => (
  <div className="text-white">{children}</div>
);

export const SidebarMenu = ({ children }) => (
  <ul className="grid grid-cols-1 grid-rows-6 gap-y-12 text-center">
    {children}
  </ul>
);

export const SidebarLink = ({ children, ...rest }) => (
  <LinkScroll
    {...rest}
    className="flex items-center justify-center text-2xl text-white hover:text-green-500 cursor-pointer no-underline list-none transition ease-in-out duration-200"
  >
    {children}
  </LinkScroll>
);

export const SideBtnWrap = ({ children }) => (
  <div className="flex justify-center">{children}</div>
);

export const SidebarRoute = ({ children, ...rest }) => (
  <LinkRouter {...rest} className="btn-green">
    {children}
  </LinkRouter>
);
