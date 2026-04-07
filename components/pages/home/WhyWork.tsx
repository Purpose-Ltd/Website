"use client";
import React, { useState } from "react";
import InnovativeLeader from "./InnovativeLeader";

export default function WhyWork() {
  const [diskRotation, setDiskRotation] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);

  const handleDiskRotation = () => {
    const next = (diskRotation + 1) % 4;
    setIsExpanding(true);
    setTimeout(() => {
      setDiskRotation(next);
    }, 350);
    setTimeout(() => {
      setIsExpanding(false);
    }, 700);
  };

  const getDiskStyle = (index: number) => {
    const pos = (diskRotation + index) % 4;

    // Normal layout
    const topNormal = ["top-0", "top-[15%]", "top-[30%]", "top-[15%]"];
    const leftNormal = ["left-[50%]", "left-[29%]", "left-[50%]", "left-[70%]"];

    // Expanded layout
    const topExpanded = ["top-[-10%]", "top-[20%]", "top-[45%]", "top-[20%]"];
    const leftExpanded = [
      "left-[50%]",
      "left-[15%]",
      "left-[50%]",
      "left-[85%]",
    ];

    const zMap = [0, 1, 3, 1];

    return {
      top: isExpanding ? topExpanded[pos] : topNormal[pos],
      left: isExpanding ? leftExpanded[pos] : leftNormal[pos],
      zIndex: zMap[pos],
    };
  };

  const disks = [
    {
      value: "10x",
      description: (
        <>
          faster than the <br />
          current application <br />
          process through job <br />
          boards and other <br />
          career sites.
        </>
      ),
    },
    {
      value: "5x",
      description: (
        <>
          better <br />
          application- <br />
          to-hire and <br />
          interview <br />
          conversion.
        </>
      ),
    },
    {
      value: ">20",
      description: (
        <>
          B2B beta <br />
          customers <br />
          already <br />
          onboarded.
        </>
      ),
    },
    {
      value: ">90%",
      description: (
        <>
          of job seekers <br />
          would use <br />
          Purpose to find <br />
          fitting <br />
          opportunities.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 xl:pt-36.25 xl:pb-30.75  w-full  overflow-hidden relative">
      <div className="relative z-5">
        <div className="container  ">
          <div className="flex flex-col gap-12 lg:gap-25 ">
            <h2 className=" max-sm:px-8 lg:pt-5 text-center text-xl sm:text-3xl md:text-[32px] lg:text-[42px] xl:text-[64px] font-bold text-[#454545] leading-[120%] z-1 relative font-dm-sans">
              Why Purpose{" "}
              <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] text-transparent bg-clip-text ">
                works
              </span>
              .
            </h2>
            <div className="relative max-sm:max-w-100 w-full max-lg:max-w-200 xl:h-170 lg:h-110 grid grid-cols-1 sm:grid-cols-2 items-center mx-auto sm:gap-8 max-lg:px-4 max-sm:pt-10 ">
              {disks.map((disk, index) => {
                const style = getDiskStyle(index);

                return (
                  <div
                    key={index}
                    className={`lg:absolute cursor-pointer xl:size-120 lg:size-75 aspect-square flex flex-col items-center justify-center 
           rounded-full border-2 border-white/90 
           bg-[linear-gradient(90deg,#3783AC_45%,#1D0A6F_100%)] 
           shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
           lg:-translate-x-1/2 transition-[top,left] duration-350 ease-in-out ${style.left} ${style.top} max-sm:-mt-12 max-sm:size-70 max-sm:mx-auto`}
                    style={{ zIndex: style.zIndex }}
                    onClick={handleDiskRotation}
                  >
                    <div className="flex flex-col xl:gap-15.75 gap-6 items-center">
                      {/* Number */}

                      <div className="lg:h-12.75 h-10 flex items-center">
                        <svg>
                          <defs>
                            {/* Glass fill gradient - 146deg */}
                            <linearGradient
                              id="glassFill"
                              x1="-84.14%"
                              y1="0%"
                              x2="122.33%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#FFFFFF"
                                stopOpacity="1"
                              />
                              <stop
                                offset="100%"
                                stopColor="#FFFFFF"
                                stopOpacity="0"
                              />
                            </linearGradient>
                            {/* Glass stroke gradient - 137deg */}
                            <linearGradient
                              id="glassStroke"
                              x1="7.48%"
                              y1="0%"
                              x2="94.06%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#FFFFFF"
                                stopOpacity="1"
                              />
                              <stop
                                offset="100%"
                                stopColor="#FFFFFF"
                                stopOpacity="0"
                              />
                            </linearGradient>
                            {/* Drop shadow filter */}
                            <filter
                              id="textShadow"
                              x="-50%"
                              y="-50%"
                              width="200%"
                              height="200%"
                            >
                              <feDropShadow
                                dx="0"
                                dy="4"
                                stdDeviation="4"
                                floodColor="rgba(0, 0, 0, 0.25)"
                              />
                            </filter>
                          </defs>
                          <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontFamily="Helvetica"
                            // fontSize="70"
                            fontWeight="700"
                            fill="url(#glassFill)"
                            stroke="url(#glassStroke)"
                            strokeWidth="1"
                            filter="url(#textShadow)"
                            className="xl:text-[70px] lg:text-[48px] text-[40px]"
                          >
                            {disk.value}
                          </text>
                        </svg>
                      </div>

                      {/* Description */}
                      <div
                        className="font-dm-sans text-white/80 text-lg lg:text-xl xl:text-[32px] leading-[120%] font-normal text-center"
                        style={{ textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
                      >
                        {disk.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <InnovativeLeader />
      </div>
      {/* circle top right 1  */}
      <div className="absolute top-0 right-0 xl:size-167 sm:size-65 size-45 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[60%] -translate-y-[1%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg]" />
      {/* circle top right 2  */}
      <div className="absolute top-0 right-0 xl:size-167 sm:size-62 size-40 md:size-103 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[70%] md:-translate-y-[4%] -translate-y-[3.5%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] " />

      {/* circle bottom left 1  */}
      <div className="absolute left-0 bottom-0 xl:size-154.75 sm:size-65 size-40 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[75vh] 2xl:max-h-[75vh] rounded-full -translate-x-[30%] -translate-y-[8%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[304.213deg] " />
      {/* circle bottom left 2  */}
      <div className="absolute left-0 bottom-0 xl:size-167 size-65 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[65vh] 2xl:max-h-[65vh] rounded-full -translate-x-[68%] -translate-y-[28%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[304.213deg] z-4" />
      {/* circle bottom left 3  */}
      <div className="absolute left-0 bottom-0 xl:size-215.5 size-65 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[75vh] 2xl:max-h-[75vh] rounded-full -translate-x-[72%] -translate-y-[48%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[304.213deg] z-3" />
    </section>
  );
}
