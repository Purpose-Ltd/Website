"use client";

import React, { useState } from "react";
import PlatformView from "./PlatformView";
import ProcessFlow from "./ProcessFlow";

export default function IntegrationFlow() {
  const [activeTab, setActiveTab] = useState("Process Flow");

  return (
    <section
      className="sm:py-12 py-8 scroll-mt-20"
      id="companies"
      style={{
        background:
          "radial-gradient(150.79% 126.08% at 17.79% 0%, #5472FF 14.25%, #5323E5 62.8%, #DDFCF6 74.63%, #DDFCF6 100%)",
      }}
    >
      <div className="container">
        <div
          className="xl:rounded-[134px] sm:rounded-[50px] rounded-[33px] xl:pt-15 sm:pt-10 pt-6 pb-5.75 flex flex-col  gap-6 border-3 sm:border-5 border-white/50"
          style={{
            background:
              "linear-gradient(180deg, #DDFCF6 0%, #D3E3FF 50%, #EEE9FC 100%)",
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          <h3 className="text-[#454545] font-dm-sans leading-[120%] font-bold text-2xl lg:text-[30px] xl:pr-14 xl:pl-23.75 px-8 sm:px-12">
            Companies
          </h3>

          <div className="px-6 sm:px-12 flex flex-col sm:gap-12.75 gap-8">
            {/* heading + tab  */}
            <div className="flex flex-col md:gap-16 gap-8">
              <h2 className="text-[#454545] font-bold leading-[120%] font-dm-sans text-3xl  md:text-[32px] lg:text-[42px] xl:text-[48px] sm:w-[90%] max-w-202 mx-auto text-center">
                <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] bg-clip-text text-transparent">
                  <span className="text-[#5323E5]">Pre-Screened</span>{" "}
                  <span className="text-[#454545]">talent, </span> seamlessly
                </span>{" "}
                integrated.
              </h2>

              <div
                className="w-[95%] max-w-75.5 mx-auto  p-px rounded-[10px] overflow-hidden"
                style={{
                  background:
                    " radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%)",
                }}
              >
                <div className="grid grid-cols-2 overflow-hidden rounded-[9px]">
                  {" "}
                  {["Process Flow", "Platform View"].map((it, idx) => (
                    <button
                      onClick={() => setActiveTab(it)}
                      className={`p-2.5 text-center text-sm font-dm-sans font-bold leading-[120%] text-white  ${activeTab === it ? "bg-[#595BC9]" : " bg-[#B8D0EF]"} `}
                      key={idx}
                    >
                      {it}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform View  */}
            {activeTab === "Process Flow" ? <ProcessFlow /> : <PlatformView />}
          </div>
        </div>
      </div>
    </section>
  );
}
