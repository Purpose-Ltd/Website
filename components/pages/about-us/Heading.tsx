import React from "react";

export default function AboutHeadingContent() {
  return (
    <div className="flex flex-col xl:gap-22.5 sm:gap-10 gap-8 items-center max-w-316 mx-auto">
      <h1 className="text-[#454545] text-center font-bold leading-[120%] font-dm-sans text-3xl  md:text-[32px] lg:text-[42px] xl:text-[48px] max-w-223.75 mx-auto w-[90%]">
        <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] bg-clip-text text-transparent">
          <span className="text-[#5323E5]">Beyond</span>{" "}
          <span className="text-[#454545]">outdated hiring,</span> built{" "}
          <span className="text-[#454545]">for</span> intelligent recruiting
          <span className="text-[#454545]">.</span>
        </span>
      </h1>

      <p className="text-[#454545] font-dm-sans text-lg md:text-2xl xl:text-[32px] font-medium leading-[120%]">
        At Purpose, we&apos;re building the future of hiring. <br />
        Munich-based, globally minded - we&apos;re creating a world where talent
        discovery happens instantly, applications are effortless, and great
        careers begin with a single tap.
      </p>
    </div>
  );
}
