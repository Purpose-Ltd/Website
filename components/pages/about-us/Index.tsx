import React from "react";
import AboutHeadingContent from "./Heading";
import FoundingTeam from "./FoundingTeam";

export default function AboutUs() {
  return (
    <section className="xl:pt-53.25 lg:pt-45 pt-30 sm:pt-40 pb-20 sm:pb-27.75 relative overflow-hidden min-h-dvh">
      <div className="container flex flex-col gap-13.5 relative z-2">
        <AboutHeadingContent />
        <FoundingTeam />
      </div>
      {/* circle top right 1  */}
      <div className="absolute top-0 right-0 xl:size-167 size-52 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[60%] -translate-y-[60%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] " />
      {/* circle top right 2  */}
      <div className="absolute top-0 right-0 xl:size-167 sm:size-62 size-45 md:size-115 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[70%] -translate-y-[10%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] " />
      {/* circle bottom right 1  */}
      <div className="absolute bottom-0 right-0 xl:size-167 size-52 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[60%] translate-y-[60%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[134.213deg] " />
      {/* circle bottom right 2  */}
      <div className="absolute bottom-0 right-0 xl:size-167 size-52 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full translate-x-[85%] translate-y-[10%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[314.213deg] " />
      {/* circle bottom left 1  */}
      <div className="absolute bottom-0 left-0 xl:size-154.75 size-52 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full -translate-x-[75%] translate-y-[2%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[314.213deg] " />
      {/* circle bottom left 2  */}
      <div className="absolute bottom-0 left-0 xl:size-167 size-52 md:size-105 max-w-[63vh] max-h-[63vh] 2xl:max-w-[45vh] 2xl:max-h-[45vh] rounded-full -translate-x-[85%] translate-y-[10%]  opacity-60 bg-[linear-gradient(90deg,rgba(83,35,229,0.60)_0%,rgba(83,124,255,0.60)_49%,rgba(118,244,220,0.60)_100%)] rotate-[314.213deg] " />
    </section>
  );
}
