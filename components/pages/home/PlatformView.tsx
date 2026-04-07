"use client";
import DoubleArrow from "@/components/Icons/DoubleArrow";
import React, { useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import atsIngeration from "../../../public/assets/img/ats-integration.png";
import matchingAutomated from "../../../public/assets/img/matching-automated.png";
import automatedTransfer from "../../../public/assets/img/automated-transfer.png";
import Image from "next/image";

export default function PlatformView() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "ATS Integration",
      des: "Purpose integrates with your existing systems in just a few clicks. Select positions and define criteria.",
      img: atsIngeration,
    },
    {
      title: "Matching & Automated Screening",
      des: "The dual-layer process ensures only the most relevant and qualified candidates reach companies.",
      img: matchingAutomated,
    },
    {
      title: "Automated Transfer",
      des: "Purpose delivers pre-screened candidates directly to your ATS. You can switch between manual or automatical transfer.",
      img: automatedTransfer,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="max-w-170 w-full mx-auto flex flex-col lg:gap-15.5 sm:gap-10 gap-6">
      {/* ================= slider img content =================== */}
      <div className="grid sm:grid-cols-[59px_1fr_59px] grid-cols-[12px_1fr_12px]">
        {/* left */}
        <div className="flex flex-col w-full">
          <div
            className="p-0.5 pr-0 sm:-mr-6 -mr-4 sm:rounded-l-[25px] rounded-l-2xl flex-1 flex flex-col"
            style={{
              background:
                "radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%)",
            }}
          >
            <div className="bg-white/80 sm:rounded-l-[25px] rounded-l-2xl flex-1 flex flex-col">
              <div className="sm:rounded-l-[25px] rounded-l-2xl bg-[linear-gradient(180deg,rgba(127,187,233,0.20)_0%,rgba(153,153,153,0.20)_100%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[25px] flex-1"></div>
            </div>
          </div>
        </div>

        {/* middle */}
        <div
          className="p-0.5 sm:rounded-[25px] rounded-2xl z-2"
          style={{
            background:
              "radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%)",
          }}
        >
          <div className="bg-white/80 sm:rounded-[25px] rounded-2xl">
            <div className="sm:rounded-[25px] rounded-2xl bg-[linear-gradient(180deg,rgba(127,187,233,0.20)_0%,rgba(153,153,153,0.20)_100%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[25px] flex items-start justify-between lg:gap-14.5 sm:gap-10 gap-3 sm:py-6 py-3 lg:pr-5 lg:pl-14.5 sm:px-6 px-3">
              <div className="aspect-389/293 w-full">
                <Image
                  alt=""
                  src={data[activeIndex].img}
                  className="w-full h-full object-cover"
                />
              </div>

              <button onClick={handleNext}>
                <DoubleArrow className="w-5 sm:w-6.75" />
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col w-full">
          <div
            className="p-0.5 pl-0 sm:-ml-6 -ml-4 sm:rounded-r-[25px] rounded-r-2xl flex-1 flex flex-col"
            style={{
              background:
                "radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%)",
            }}
          >
            <div className="bg-white/80 sm:rounded-r-[25px] rounded-r-2xl flex-1 flex flex-col">
              <div className="sm:rounded-r-[25px] rounded-r-2xl bg-[linear-gradient(180deg,rgba(127,187,233,0.20)_0%,rgba(153,153,153,0.20)_100%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[25px] flex-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= slider text content =================== */}
      <div className="flex flex-col lg:gap-10 gap-6">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handlePrev}
            className={`text-black md:text-xl sm:text-base text-sm font-dm-sans leading-[120%] font-normal flex items-center sm:gap-2 gap-0.5 ${activeIndex === 0 ? "invisible" : ""}`}
          >
            <IoArrowBackOutline /> Prev
          </button>

          <h5 className="text-base sm:text-xl lg:text-2xl leading-[120%] font-bold font-dm-sans text-center bg-clip-text text-transparent bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)]">
            {data[activeIndex].title}
          </h5>

          <button
            onClick={handleNext}
            className={`text-black md:text-xl sm:text-base text-sm font-dm-sans leading-[120%] font-normal flex items-center sm:gap-2 gap-0.5 ${activeIndex === data.length - 1 ? "invisible" : ""}`}
          >
            Next <IoArrowForwardOutline />
          </button>
        </div>

        <p className="text-[#454545] text-sm sm:text-lg lg:text-xl font-semibold font-dm-sans leading-[120%] text-center max-w-120 mx-auto">
          {data[activeIndex].des}
        </p>
      </div>
    </div>
  );
}
