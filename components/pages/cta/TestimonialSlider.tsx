import React from "react";
import Marquee from "react-fast-marquee";

export default function TestimonialSlider() {
  const data = [
    {
      reviewText:
        "“We’ve tried Purpose for entry positions and it works perfect. We were able to reduce manual screening as well as active sourcing. All transfered candidates fit our set criteria.”",
      position: "HR Manager, IT-Consultancy",
    },
    {
      reviewText:
        "“This system helps us tremendously with our hiring efficiency. We can allocate our personnel resources towards more important things than screening and reading CVs now.”",
      position: "Senior Recruiter, Tech Startup",
    },
    {
      reviewText:
        "“With entry-mid level talent being scarce these days, Purpose really helped us get exactly what we search for in candidates without huge administration effort”",
      position: "Head of HR, Automotive Supplier",
    },
    {
      reviewText:
        "“The candidate transfer to our ATS really helps our recruiters to stay focused and skip juggling multiple platforms at once.”",
      position: "Recruiter, Marketing Agency",
    },
    {
      reviewText:
        "“It’s fair to say that in our opinion Purpose focuses on quality over quantity. We’ve managed to increase our hiring ration significantly.”",
      position: "Recruiting Lead, Banking Sector",
    },
    {
      reviewText:
        "“Even though we primarily focus on senior level roles, this system helped us with our more mid-level vacancies.”",
      position: "Junior Recruiter, Cybersecurity",
    },
    {
      reviewText:
        "“In times of uncertainty and doubt in the labor market platforms like Purpose leave job seekers as well as companies encouraged for the future.”",
      position: "TA Specialist, Manufacturing",
    },
    {
      reviewText:
        "“Our requirements are generally quite high due to the field we operate in. The automated screening based on our criteria is a huge game-changer for our hiring performance.”",
      position: "Recruiter, Healthcare & Pharma",
    },
  ];
  return (
    <section className="relative z-2">
      <Marquee>
        {" "}
        <div className="flex items-stretch pb-7.5">
          {[...data, ...data].map((it, idx) => (
            <div
              className="px-4.5 pt-5.75 pb-3.75 border border-white rounded-[18px]  bg-[linear-gradient(180deg,rgba(255,255,255,0.20)_0%,rgba(153,153,153,0.20)_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[5px] w-69.75 min-w-69.75 flex flex-col justify-between xl:gap-11.75 gap-6 xl:mx-6 mx-2 sm:mx-3"
              key={idx}
            >
              <p className="text-[#120C2B] text-base font-medium leading-[150%]">
                {it.reviewText}
              </p>
              <p className="text-sm text-[#454545] font-medium">
                {it.position}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
