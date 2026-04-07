import React from "react";

export default function SectionHeading({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-[#454545] text-center font-bold leading-[120%] font-dm-sans text-3xl  md:text-[32px] lg:text-[42px] xl:text-[48px] ${className}`}
    >
      {children}
    </h1>
  );
}
