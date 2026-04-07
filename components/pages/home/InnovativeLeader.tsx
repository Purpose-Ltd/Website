import React from "react";
import jll from "../../../public/assets/img/innovate-logo/jll.svg";
import hmgu from "../../../public/assets/img/innovate-logo/hmgu.svg";
import munich from "../../../public/assets/img/innovate-logo/munich.svg";
import colliers from "../../../public/assets/img/innovate-logo/colliers.svg";
import frankfurter from "../../../public/assets/img/innovate-logo/frankfurter.svg";
import commerzbank from "../../../public/assets/img/innovate-logo/commerzbank.svg";
import telecom from "../../../public/assets/img/innovate-logo/telekom.svg";
import clariant from "../../../public/assets/img/innovate-logo/clariant.svg";
import bilfinger from "../../../public/assets/img/innovate-logo/bilfinger.svg";
import stellantis from "../../../public/assets/img/innovate-logo/stellantis.svg";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function InnovativeLeader() {
  const logos = [
    jll,
    hmgu,
    munich,
    colliers,
    frankfurter,
    commerzbank,
    telecom,
    clariant,
    bilfinger,
    stellantis,
  ];
  return (
    <div className="xl:mt-25 md:mt-16 mt-12 flex flex-col xl:gap-20 gap-10 w-full overflow-hidden">
      <div className="container">
        {" "}
        <h3 className="text-center text-[#454545] font-bold leading-[120%] md:text-2xl text-xl font-dm-sans">
          Endorsed by{" "}
          <span className="bg-[radial-gradient(169.11%_136.3%_at_17.79%_0%,#5323E5_0%,#5472FF_38.13%,#6DC9D8_81.27%,#72E0DA_92.1%,#6DECD3_100%)] text-transparent bg-clip-text ">
            innovative leaders
          </span>{" "}
          from
        </h3>
      </div>

      <div className="max-w-full overflow-hidden">
        <Marquee className="w-full overflow-hidden!">
          <div className="flex items-center">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="px-4 md:px-6">
                <Image src={logo} alt="" className="" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
