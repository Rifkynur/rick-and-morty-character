import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
