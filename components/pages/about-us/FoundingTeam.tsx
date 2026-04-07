import ArrowTurnRight from "@/components/Icons/ArrowTurnRight";
import Link from "next/link";
import React from "react";

export default function FoundingTeam() {
  const data = [
    {
      name: "Lukas Faber",
      position: "Founder & CEO",
    },

    {
      name: "Polina Shnaider",
      position: "Web & Frontend Dev",
    },
    {
      name: "Mieszko Chowaniec",
      position: "Backend & Infra Engineer",
    },
  ];
  return (
    <div className="max-w-279 mx-auto w-full flex flex-col gap-12.75">
      <div className="w-fit relative">
        <div className=" flex items-center lg:gap-4 sm:gap-3 gap-2">
          <ArrowTurnRight className="h-auto lg:w-10 sm:w-8 w-6" />{" "}
          <Link
            href="mailto:hello@purpose.hr"
            className=" lg:px-13.5 px-4 sm:px-6 lg:py-3.25 py-2 rounded-[20px] text-white lg:text-xl text-base leading-[120%] font-semibold block whitespace-nowrap"
            style={{
              boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
              background:
                "linear-gradient(145deg, #E307DB 10.53%, #10C5F2 81.23%)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center xl:justify-between items-start flex-wrap gap-4 gap-y-10">
        {data.map((it, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 flex-1">
            <Link
              href="https://www.linkedin.com/"
              className="bg-[#D9D9D9] sm:size-41.25 size-35 rounded-full border-2 border-[#5323E5]"
            ></Link>

            <div className="flex flex-col gap-1.5 text-center items-center">
              <h4 className="text-[#454545] font-bold leading-[104.348%] text-lg sm:text-[23px]">
                {it.name}
              </h4>
              <h5 className="text-[#454545] font-bold leading-[104.348%] text-sm sm:text-base">
                {it.position}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
