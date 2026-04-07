"use client";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import loginGif from "../../../public/assets/gif/login.gif";
import uploadGif from "../../../public/assets/gif/upload.gif";
import preferencesGif from "../../../public/assets/gif/preferences.gif";
import manageGif from "../../../public/assets/gif/manage.gif";
import Image from "next/image";
import PlayStoreIcon from "@/components/Icons/PlayStoreIcon";
import AppleStore from "@/components/Icons/AppleStore";

export default function Individuals() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const data = [
    {
      title: "Upload CV",
      des: "Purpose analyses & interprets all the necessary information directly from your resume.",
      media: uploadGif,
    },
    {
      title: "Tweak Preferences",
      des: "Purpose adapts to your specific job criteria and location preferences for targeted matching.",
      media: preferencesGif,
    },
    {
      title: "Apply & Manage",
      des: "Purpose finds perfect matches, apply with one tap, manage everything centrally.",
      media: manageGif,
    },
  ];

  const handleClick = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  const currentImage =
    activeIndex !== null ? data[activeIndex].media : loginGif;

  return (
    <section
      className="sm:py-12 py-8 scroll-mt-20"
      id="individuals"
      style={{
        // background:
        //   "radial-gradient(169.11% 136.3% at 17.79% 0%, #DDFCF6 19%, #5472FF 62%, #5323E5 100%)",
        background:
          "radial-gradient(169.11% 136.3% at 17.79% 0%, #DDFCF6 0%, #DDFCF6 7.9%, #DDFCF6 43.72%, #5472FF 58.42%, #5323E5 100%)",
      }}
    >
      <div className="container">
        <div
          className="xl:rounded-[134px] sm:rounded-[50px] rounded-[33px] xl:pt-15 sm:pt-10 pt-6 pb-5.75 flex flex-col sm:gap-11.5 gap-6 border-3 sm:border-5 border-white/50"
          style={{
            background:
              "linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <h3 className="text-[#454545] font-dm-sans leading-[120%] font-bold text-2xl lg:text-[30px] xl:pr-14 xl:pl-23.75 px-8 sm:px-12">
            Individuals
          </h3>
          <div className="grid max-lg:flex flex-col-reverse grid-cols-1 items-center lg:grid-cols-[47%_1fr] gap-10 xl:px-14 px-6">
            {/* gif image  */}
            <div className="flex items-center flex-col gap-4.75">
              <Image
                src={currentImage}
                alt=""
                className="max-w-81.5 w-full sm:rounded-[50px] rounded-[45px] max-sm:w-[80%]"
                style={{
                  boxShadow: "-7px 19px 39px 0 rgba(88, 89, 92, 0.30)",
                }}
              />

              <div className="flex flex-col gap-2.75 items-center">
                <h5 className="text-[#454545] text-base sm:text-lg xl:text-[21px] font-semibold leading-[120%]">
                  Download here
                </h5>
                <div className="flex items-center sm:gap-8.5 gap-3 flex-wrap justify-center ">
                  <button className="bg-black rounded-[30px] px-5 sm:py-3 py-2.5 flex items-center gap-3.25 text-white sm:text-lg text-base leading-[100%] tracking-[-0.47px] font-medium">
                    <PlayStoreIcon className="h-auto sm:w-5 w-4" />
                    Google Play
                  </button>
                  <button className="bg-black rounded-[30px] px-5 sm:py-3 py-2.5 flex items-center gap-3.25 text-white sm:text-lg text-base  leading-[100%] tracking-[-0.47px] font-medium">
                    <AppleStore className="h-auto sm:w-5 w-4" />
                    App Store
                  </button>
                </div>
              </div>
            </div>
            {/* accrodion side  */}
            <div className="flex flex-col gap-9">
              <div className="flex flex-col xl:gap-12 sm:gap-6 gap-3">
                <h2 className="text-[#454545] font-bold leading-[120%] font-dm-sans text-3xl  md:text-[32px] lg:text-[42px] xl:text-[64px] xl:-mr-3 max-lg:text-center">
                  <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] bg-clip-text text-transparent">
                    <span className="text-[#5323E5]">Automated</span>{" "}
                    <span className="text-[#454545]">job search,</span>{" "}
                    centralized
                  </span>
                  .
                </h2>
                <p className="text-[#808080] text-base sm:text-lg xl:text-[21px] font-medium leading-[120%]">
                  Our CV interpretation and matching technology reduces the time
                  needed to apply significantly and connects you to suitable
                  positions instantly.
                </p>
              </div>

              <div className="flex flex-col xl:gap-8.75 gap-6">
                {data.map((item, idx) => (
                  <div key={idx} className="flex flex-col xl:gap-8.75 gap-6">
                    <button
                      onClick={() => handleClick(idx)}
                      className="w-full flex items-center justify-between rounded-[30px] border-2 border-white/60 bg-[linear-gradient(102deg,#373369_10.53%,#6D8CC1_81.23%)] px-5 py-3 sm:pl-8 pl-7 text-white leading-[120%] font-bold font-dm-sans xl:text-[28px] text-lg sm:text-2xl"
                      style={{
                        filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))",
                      }}
                    >
                      <span className="xl:text-2xl text-xl">{idx + 1}</span>
                      {item.title}

                      <motion.span
                        animate={{ rotate: activeIndex !== idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowIcon className="h-auto w-4.5 sm:w-5.75" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeIndex === idx && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="text-[#808080] text-base sm:text-lg xl:text-[21px] font-medium text-center overflow-hidden"
                        >
                          {item.des}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ArrowIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="13"
      viewBox="0 0 23 13"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1339 12.1339C21.6457 12.622 20.8543 12.622 20.3661 12.1339L11.25 3.01777L2.13388 12.1339C1.64573 12.622 0.854273 12.622 0.366116 12.1339C-0.122039 11.6457 -0.122039 10.8543 0.366116 10.3661L10.3661 0.366117C10.8543 -0.122039 11.6457 -0.122039 12.1339 0.366117L22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339Z"
        fill="white"
      />
    </svg>
  );
};
