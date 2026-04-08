import React from "react";
import logo from "../../public/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Imprint", href: "/imprint" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];
  return (
    <footer className="sm:pb-12 pb-6">
      <div className="max-w-360 2xl:max-w-full w-full mx-auto px-3 sm:px-5">
        <div className="bg-[#5323E5] w-full h-1 rounded-full"></div>
        <div className=" pt-14.5 grid xl:flex justify-between xl:pr-11.25 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 gap-y-8">
          {/* left  - logo and copyright   */}
          <div className="flex flex-col gap-3 sm:gap-4.5 max-md:col-span-2 max-sm:col-span-1 max-md:items-center max-md:text-center">
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-24 sm:w-33.5" />
            </Link>

            <p className="text-[#120C2B] text-base xl:text-lg font-medium leading-[120%] font-dm-sans">
              Purpose Technologies UG (haftungsbeschränkt) <br /> Ansprengerstraße 8 <br />
              80803 München <br />
              Germany
            </p>
          </div>

          {/* registered office  */}
          <div className="flex flex-col gap-3 sm:gap-4.5 text-center md:pt-3">
            <h3 className="text-[#120C2B] text-lg xl:text-xl font-bold leading-[120%] font-dm-sans">
              Registered Office
            </h3>
            <p className="text-[#120C2B] text-base xl:text-lg font-medium leading-[120%] font-dm-sans">
              München - HRB ... <br />
              Tax number: ... <br />
              VAT ID No.: ...
            </p>
          </div>

          {/* legal links   */}
          <div className="flex flex-col gap-3 sm:gap-4.5 text-center md:pt-3">
            <h3 className="text-[#120C2B] text-lg xl:text-xl font-bold leading-[120%] font-dm-sans ">
              Legal
            </h3>
            <div className="flex flex-col gap-1.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#120C2B] text-base xl:text-lg font-medium leading-[120%] font-dm-sans hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="max-md:text-center text-[#454545] text-[10px] font-normal leading-[120%] md:mt-3 mt-5">
          © Purpose, 2026
        </p>
      </div>
    </footer>
  );
}
