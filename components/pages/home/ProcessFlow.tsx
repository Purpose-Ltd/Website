import React from "react";
import processFlowImg from "../../../public/assets/img/process-flowpng.png";
import Image from "next/image";
import srCompanyLogo from "../../../public/assets/img/smart-recruiters-logo.svg";

export default function ProcessFlow() {
  return (
    <div className="flex flex-col gap-10 xl:gap-20 sm:gap-12 items-center">
      <div className="max-w-[90%] mx-auto">
        <Image src={processFlowImg} alt="" className="w-full" />
      </div>

      <div className="flex flex-col gap-2.5 items-center">
        <h6 className="text-[#454545] text-sm sm:font-base font-bold leading-[120%] text-center">
          Official Partner of
        </h6>
        <Image className="max-w-58.5 w-[80%]" alt="" src={srCompanyLogo} />
      </div>
    </div>
  );
}
