import React from "react";
import HeroDashedBorder from "./HeroDashedBorder";
import ScrollTo from "./ScrollTo";
import TypingText from "@/components/common/TypingText";

export default function Hero() {
  return (
    <section className="min-h-dvh  w-full  flex items-center relative py-25 md:py-40 overflow-hidden">
      <div className="container relative z-2">
        <div className="flex flex-col xl:gap-8.25 gap-4 items-center">
          <div className="w-full  relative max-w-331.75 mx-auto flex items-center justify-center ">
            {/* shape  */}
            <div className="w-full">
              <HeroDashedBorder />
            </div>
            <div className="absolute w-full  top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2">
              <h1 className="xl:pt-10 max-sm:px-8 lg:pt-5 text-center text-xl sm:text-3xl md:text-[32px] lg:text-[42px] xl:text-[64px] font-bold text-[#454545] leading-[120%] z-1 relative font-dm-sans">
                Discover{" "}
                <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] text-transparent bg-clip-text ">
                  next-generation recruiting
                </span>{" "}
                technology.
              </h1>
            </div>
          </div>

          <TypingText
            text="Automated job search for candidates, intelligent pre-screening for
            companies."
            className="text-[#454545]/80 text-xs sm:text-sm xl:text-base font-semibold text-center"
          />
        </div>
      </div>

      {/* scroll to next section indicator  */}
      <ScrollTo />

      {/* circle top-right corner 1  */}
      <div className="absolute top-0 right-0 xl:size-167 sm:size-102 size-60 md:size-145 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[60%] -translate-y-[61%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg]" />
      {/* circle top-right corner 2  */}
      <div className="absolute top-0 right-0 xl:size-167 sm:size-80 size-40 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[67.5%] -translate-y-[7%] opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg]" />
      {/* circle bottom-right corner 1  */}
      {/* <div className="absolute bottom-0 right-0 xl:size-167 size-102 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] md:size-145 rounded-full translate-x-[60%] translate-y-[61%]  opacity-60 bg-[linear-gradient(90deg,#5323E5_0%,#537CFF_49%,#76F4DC_100%)] rotate-[134.213deg]" /> */}
      {/* circle bottom-right corner 2  */}
      {/* <div className="absolute bottom-0 right-0 xl:size-153.75 size-80 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[82.5%] translate-y-[15%] opacity-60 bg-[linear-gradient(90deg,#76F4DC_0%,#537CFF_49%,#5323E5_100%)] rotate-[134.213deg]" /> */}
      {/* circle bottom-left corner 1  */}
      <div className="absolute bottom-0 left-0 xl:size-215.5 sm:size-80 size-60 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[65vh] 2xl:max-h-[65vh] rounded-full translate-x-[-82.5%] translate-y-[12%] opacity-60 bg-[linear-gradient(90deg,#76F4DC_0%,#537CFF_49%,#5323E5_100%)] rotate-[134.213deg]" />
      {/* circle bottom-left corner 2  */}
      <div className="absolute bottom-0 left-0 xl:size-153.75 sm:size-80 size-60 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[65vh] 2xl:max-h-[65vh] rounded-full -translate-x-[70.5%] translate-y-[5%] opacity-60 bg-[linear-gradient(90deg,#76F4DC_0%,#537CFF_49%,#5323E5_100%)] rotate-[134.213deg]" />
    </section>
  );
}
