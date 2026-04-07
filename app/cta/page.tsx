import TestimonialSlider from "@/components/pages/cta/TestimonialSlider";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";

export default function CTAPage() {
  return (
    <>
      <main className="min-h-dvh relative overflow-hidden">
        <section className="relative z-2">
          <div className="container max-w-full!">
            <Link
              href="/"
              className="flex items-center gap-1.5 pt-8 text-black text-base font-dm-sans leading-[120%] font-semibold"
            >
              <IoIosArrowBack size={24} />
              Back to homepage
            </Link>
          </div>
        </section>
        <section className="xl:pt-50 sm:pt-30 sm:pb-28 py-25 relative z-2">
          <div
            className="container flex flex-col sm:gap-14 gap-8
           items-center"
          >
            <h1 className="text-[#454545] text-center font-bold leading-[120%] font-dm-sans text-3xl  md:text-[52px] lg:text-[64px] xl:text-[96px] ">
              <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] bg-clip-text text-transparent">
                <span className="text-[#454545]">Experience </span> effortless{" "}
                <br />
                recruiting
                <span className="text-[#454545]">.</span>
              </span>
            </h1>

            <div className="flex items-center lg:gap-7.75 gap-5 flex-wrap justify-center w-fit mx-auto gap-y-6">
              <Link
                href=""
                className="lg:px-16.5 px-14 py-2.75 text-white xl:text-2xl text-xl leading-[120%] font-medium rounded-[18px] border border-white/25 relative  text-center"
                style={{
                  boxShadow: "0 6px 4px 0 rgba(0, 0, 0, 0.25)",
                  background:
                    "linear-gradient(90deg, #213D83 0%, #4F647D 100%)",
                }}
              >
                <LuArrowUpRight
                  size={24}
                  className="absolute left-6 top-1/2 -translate-y-1/2"
                />
                Get Demo
              </Link>
              <Link
                href=""
                className="lg:px-16.5 px-14 py-2.75 text-white xl:text-2xl text-xl leading-[120%] font-medium rounded-[18px] border border-white/25 relative  text-center"
                style={{
                  boxShadow: "0 6px 4px 0 rgba(0, 0, 0, 0.25)",
                  background:
                    "linear-gradient(90deg, #213D83 0%, #4F647D 100%)",
                }}
              >
                <LuArrowUpRight
                  size={24}
                  className="absolute left-6 top-1/2 -translate-y-1/2"
                />
                Join Beta
              </Link>
            </div>
          </div>
        </section>

        <TestimonialSlider />

        {/* circle top right 1  */}
        <div className="absolute top-0 right-0 xl:size-167 size-52 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[32%] -translate-y-[71%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] blur-[2px]" />
        {/* circle top right 2  */}
        <div className="absolute top-0 right-0 xl:size-167 size-62 md:size-115 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[80%] -translate-y-[17%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] blur-[2px]" />
        {/* circle top left-1 */}
        <div className="absolute top-0 left-0 xl:size-167 size-52 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full -translate-x-[70%] -translate-y-[29%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] blur-[2px]" />
        {/* circle top left-2 */}
        <div className="absolute top-0 left-0 xl:size-167 size-42 md:size-85 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full -translate-x-[5%] -translate-y-[49%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] blur-[2px]" />
        {/* circle bottom left-1 */}
        <div className="absolute bottom-0 left-0 xl:size-167 size-82 md:size-115 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full -translate-x-[50%] translate-y-1/2  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[314.213deg] blur-[2px]" />
      </main>
    </>
  );
}
