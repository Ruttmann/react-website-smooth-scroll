import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = ({ children }) => (
  <nav className="bg-black h-20 flex justify-center items-center text-base sticky top-0 z-10 lg:transition-all duration-800">
    {children}
  </nav>
);

export const NavbarContainer = ({ children }) => (
  <div className="flex justify-between h-80 z-1 w-full px-24 max-w-screen-lg">
    {children}
  </div>
);

export const NavLogo = ({ children, ...rest }) => (
  <LinkRouter
    {...rest}
    className="text-red-700 justify-self-start cursor-pointer text-2xl flex items-center ml-0.5 font-bold no-underline"
  >
    {children}
  </LinkRouter>
);
