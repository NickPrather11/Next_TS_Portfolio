import React from "react";

const Page = ({ children, className }: any) => {
  return (
    <div
      className={`flex flex-col justify-content-start items-center pt-8 pl-8 text-black dark:text-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default Page;
