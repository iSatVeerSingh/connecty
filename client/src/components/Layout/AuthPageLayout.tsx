'use client';

import React, { FC } from "react";

interface AuthPageLayoutProps {
  children: React.ReactNode
}

const AuthPageLayout: FC<AuthPageLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-mid-white py-7">
      <div className="border p-3 bg-white max-w-[600px] rounded-md shadow-md">
        {children}
      </div>
    </div>
  )
};

export default AuthPageLayout;