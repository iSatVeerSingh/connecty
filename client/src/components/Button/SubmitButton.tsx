'use client';

import React, { FC } from "react";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ children, className }) => {
  return (
    <button type="submit" className={`bg-blue-500 text-white text-lg text-center px-3 py-2 rounded-md mt-1 hover:bg-blue-400 transition w-full ${className ? className : ""}`}>
      {children}
    </button>
  )
};

export default SubmitButton;