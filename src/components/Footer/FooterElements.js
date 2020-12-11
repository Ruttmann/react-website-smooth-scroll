import React from "react";
import { Link } from "react-router-dom";

export const FooterContainer = ({ children }) => (
  <footer className="bg-black">{children}</footer>
);

export const FooterWrap = ({ children }) => (
  <div className="pt-12 pb-6 px-6 flex flex-col justify-center items-center max-w-5xl my-0 mx-auto">
    {children}
  </div>
);

export const FooterLinksContainer = ({ children }) => (
  <div className="flex justify-center md:pt-8">{children}</div>
);

export const FooterLinksWrapper = ({ children }) => (
  <div className="flex md:flex-col">{children}</div>
);

export const FooterLinkItems = ({ children }) => (
  <div className="flex flex-col items-start m-4 text-left w-40 box-border text-white sm:m-0 sm:p-10 sm:w-full">
    {children}
  </div>
);

export const FooterLinkTitle = ({ children }) => (
  <h1 className="text-base font-black mb-4">{children}</h1>
);

export const FooterLink = ({ children, ...rest }) => (
  <Link
    {...rest}
    className="text-white no-underline mb-2 text-sm hover:text-green-500 hover:transition hover:duration-300 hover:ease-out"
  >
    {children}
  </Link>
);

export const SocialMedia = ({ children }) => (
  <section className="max-w-5xl w-full mt-12">{children}</section>
);

export const SocialMediaWrap = ({ children }) => (
  <div className="flex justify-between items-center max-w-5xl ml-6 mt-auto mr-0 mb-auto md:flex-col">
    {children}
  </div>
);

export const SocialLogo = ({ children, ...rest }) => (
  <Link
    {...rest}
    className="text-white justify-self-start cursor-pointer no-underline text-2xl flex items-center mb-4 font-bold"
  >
    {children}
  </Link>
);

export const WebsiteRights = ({ children }) => (
  <small className="text-white mb-4">{children}</small>
);

export const SocialIcons = ({ children }) => (
  <div className="flex justify-between items-center w-60">{children}</div>
);

export const SocialIconLink = ({ children, href, ...rest }) => (
  <a href={href} {...rest} className="text-white text-2xl">
    {children}
  </a>
);
