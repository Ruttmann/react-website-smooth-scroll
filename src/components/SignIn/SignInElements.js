import React from "react";

import { Link } from "react-router-dom";

export const Container = ({ children }) => (
  <div className="min-h-692 fixed bottom-0 left-0 right-0 top-0 z-0 overflow-hidden bg-gradient-to-r from-green-500 to-green-200">
    {children}
  </div>
);

export const FormWrap = ({ children }) => (
  <div className="h-full flex flex-col justify-center sm:h-4/5">{children}</div>
);

export const Icon = ({ children, ...rest }) => (
  <Link
    {...rest}
    className="ml-8 mt-8 no-underline text-white font-bold text-3xl sm:ml-4 sm:mt-2"
  >
    {children}
  </Link>
);

export const FormContent = ({ children }) => (
  <div className="h-full flex flex-col justify-center sm:p-2.5">{children}</div>
);

export const Form = ({ children, ...rest }) => (
  <form
    {...rest}
    className="bg-black max-w-sm h-auto w-full z-10 grid my-0 mx-auto py-20 px-8 rounded-2xl shadow-lg sm:p-8"
  >
    {children}
  </form>
);

export const FormH1 = ({ children }) => (
  <h1 className="mb-10 text-white text-xl font-normal text-center">
    {children}
  </h1>
);

export const FormLabel = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="mb-2 text-xs text-white">
    {children}
  </label>
);

export const FormInput = ({ type }) => (
  <input type={type} className="p-4 mb-8 border-none rounded-md xsm:w-60" />
);

export const FormButton = ({ children }) => (
  <button className="bg-green-500 py-4 px-0 border-none rounded-md text-white text-xl cursor-pointer">
    {children}
  </button>
);

export const Text = ({ children }) => (
  <span className="text-center mt-6 text-white text-base">{children}</span>
);
