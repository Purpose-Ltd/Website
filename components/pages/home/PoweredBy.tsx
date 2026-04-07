"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import primaryIcon from "../../../public/assets/icons/primary.svg";
import cubeIcon from "../../../public/assets/icons/cube.svg";
import fileCodeIcon from "../../../public/assets/icons/file-code.svg";
import Image from "next/image";

export default function PoweredBy() {
  const [hovered, setHovered] = useState(null as number | null);
  const features = [
    {
      icon: primaryIcon,
      title: "AI Matching Engine",
      description:
        "Deep learning algorithms connect job seekers with relevant opportunities and employers with qualified candidates.",
    },
    {
      icon: cubeIcon,
      title: "Automated System",
      description:
        "Candidates apply to perfect-fit positions with one click. Employers receive pre-screened applications automatically.",
    },
    {
      icon: fileCodeIcon,
      title: "CV Intelligence",
      description:
        "AI extracts and interprets all relevant information from resumes and other documents without manual form-filling.",
    },
  ];
  return (
    <section className="min-h-dvh relative flex flex-col justify-center items-center py-25 md:py-40  ">
      <div className="container relative z-2">
        <div className="flex flex-col lg:gap-23.25 sm:gap-16 gap-10 items-center">
          <h2 className="text-[#454545] text-center text-xl sm:text-3xl md:text-[32px] lg:text-[42px] xl:text-[48px] font-bold leading-[120%] z-1 relative font-dm-sans px-5">
            Powered by{" "}
            <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] text-transparent bg-clip-text ">
              intelligent automation
            </span>
            .
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12.5 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
                // onClick={() => setHovered(index)}
                animate={{
                  scale: hovered === index ? 1.06 : 1,
                  y: hovered === index ? "-7%" : 0,
                  opacity: hovered === null ? 1 : hovered === index ? 1 : 0.6,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1], // premium smooth
                }}
                className="xl:rounded-[50px] rounded-[30px] border-2 border-white bg-[linear-gradient(180deg,#3783AC_0%,#1D0A6F_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.5)] backdrop-blur-[2px]  flex flex-col items-center gap-5 sm:gap-8 xl:gap-11.25 text-center xl:pb-18.5 xl:p-11.25 xl:px-9 p-8 py-11.25"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-15 xl:w-20"
                />

                <h3 className="sm:text-2xl text-xl xl:leading-4.25 font-dm-sans font-bold text-white">
                  {feature.title}
                </h3>

                <p className="text-white/80 text-base sm:text-lg xl:text-[22px] font-medium leading-[120%] font-dm-sans">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* circle top-right corner 1  */}
      <div className="absolute top-0 right-0 xl:size-167 sm:size-102 size-50 md:size-145 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[60%] -translate-y-[61%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg]" />
      {/* circle top-right corner 2  */}
      <div className="absolute top-0 right-0 xl:size-167 sm:size-80 size-50 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[67.5%] -translate-y-[7%] opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg]" />

      {/* circle bottom-left corner 1  */}
      <div className="absolute bottom-0 left-0 xl:size-215.5 size-80 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[65vh] 2xl:max-h-[65vh] rounded-full translate-x-[-82.5%] translate-y-[12%] opacity-60 bg-[linear-gradient(90deg,#76F4DC_0%,#537CFF_49%,#5323E5_100%)] rotate-[134.213deg]" />
      {/* circle bottom-left corner 2  */}
      <div className="absolute bottom-0 left-0 xl:size-153.75 sm:size-80 size-60 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[65vh] 2xl:max-h-[65vh] rounded-full -translate-x-[70.5%] translate-y-[5%] opacity-60 bg-[linear-gradient(90deg,#76F4DC_0%,#537CFF_49%,#5323E5_100%)] rotate-[134.213deg]" />
    </section>
  );
}
