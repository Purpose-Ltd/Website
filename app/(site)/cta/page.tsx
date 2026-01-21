import Link from 'next/link'

export default function CTAPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Back to homepage link */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-[#454545] hover:text-[#5323E5] transition-colors duration-200 font-medium"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to homepage
      </Link>

      {/* Top left decorative circle - left one */}
      <div
        className="hidden md:block absolute rounded-full opacity-0 animate-fade-in-slow-1"
        style={{
          width: '668.371px',
          height: '668.371px',
          top: '-280px',
          left: '-450px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Top left decorative circle - right one */}
      <div
        className="hidden md:block absolute rounded-full opacity-0 animate-fade-in-slow"
        style={{
          width: '668.371px',
          height: '668.371px',
          top: '-300px',
          left: '0px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Top right decorative circle - left one */}
      <div
        className="hidden lg:block absolute rounded-full opacity-0 animate-fade-in-slow-2"
        style={{
          width: '668.371px',
          height: '668.371px',
          top: '-400px',
          right: '-200px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Top right decorative circle - right one (larger) */}
      <div
        className="hidden lg:block absolute rounded-full opacity-0 animate-fade-in-slow-3"
        style={{
          width: '783.367px',
          height: '783.367px',
          top: '-80px',
          right: '-580px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Bottom left decorative circle */}
      <div
        className="hidden md:block absolute rounded-full opacity-0 animate-fade-in-slow-4"
        style={{
          width: '668.371px',
          height: '668.371px',
          bottom: '-400px',
          left: '-350px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(118, 244, 220, 0.60) 0%, rgba(83, 124, 255, 0.60) 51%, rgba(83, 35, 229, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Mobile decorative circles */}
      <div
        className="md:hidden absolute rounded-full opacity-40"
        style={{
          width: '300px',
          height: '300px',
          top: '-100px',
          right: '-100px',
          transform: 'rotate(134.213deg)',
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10
        }}
      />
      <div
        className="md:hidden absolute rounded-full opacity-40"
        style={{
          width: '250px',
          height: '250px',
          bottom: '-80px',
          left: '-80px',
          transform: 'rotate(134.213deg)',
          background: 'linear-gradient(90deg, rgba(118, 244, 220, 0.60) 0%, rgba(83, 124, 255, 0.60) 51%, rgba(83, 35, 229, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10
        }}
      />

      {/* Main content container */}
      <div className="flex flex-col items-center px-4 sm:px-8 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24">
        {/* Heading */}
        <h1
          className="font-dm-sans text-center w-full max-w-[1281px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-bold leading-[120%]"
        >
          <span style={{ color: '#454545' }}>Experience </span>
          <span
            style={{
              background: 'var(--radial-1, radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            effortless recruiting
          </span>
          .
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 sm:mt-16">
          <div
            className="transition-all duration-300 cursor-pointer hover:scale-[1.02] flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-[18px] border border-white"
            style={{
              background: 'linear-gradient(90deg, #213D83 0%, #4F647D 100%)',
              boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="w-6 h-6 sm:w-[30px] sm:h-[30px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.8295 22.1705C8.26884 22.6098 8.98116 22.6098 9.4205 22.1705L20.25 11.341V19.875C20.25 20.4963 20.7537 21 21.375 21C21.9963 21 22.5 20.4963 22.5 19.875V8.625C22.5 8.00368 21.9963 7.5 21.375 7.5H10.125C9.50368 7.5 9 8.00368 9 8.625C9 9.24632 9.50368 9.75 10.125 9.75H18.659L7.8295 20.5795C7.39017 21.0188 7.39017 21.7312 7.8295 22.1705Z" fill="white"/>
            </svg>
            <span
              className="font-poppins text-white text-lg sm:text-xl lg:text-2xl font-medium"
            >
              Get Demo
            </span>
          </div>

          <div
            className="transition-all duration-300 cursor-pointer hover:scale-[1.02] flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-[18px] border border-white"
            style={{
              background: 'linear-gradient(90deg, #213D83 0%, #4F647D 100%)',
              boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="w-6 h-6 sm:w-[30px] sm:h-[30px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.8295 22.1705C8.26884 22.6098 8.98116 22.6098 9.4205 22.1705L20.25 11.341V19.875C20.25 20.4963 20.7537 21 21.375 21C21.9963 21 22.5 20.4963 22.5 19.875V8.625C22.5 8.00368 21.9963 7.5 21.375 7.5H10.125C9.50368 7.5 9 8.00368 9 8.625C9 9.24632 9.50368 9.75 10.125 9.75H18.659L7.8295 20.5795C7.39017 21.0188 7.39017 21.7312 7.8295 22.1705Z" fill="white"/>
            </svg>
            <span
              className="font-poppins text-white text-lg sm:text-xl lg:text-2xl font-medium"
            >
              Join Beta
            </span>
          </div>
        </div>
      </div>

      {/* Testimonial cards container */}
      <div
        className="w-full overflow-hidden pb-8 sm:pb-12"
      >
        <div
          className="flex gap-4 sm:gap-8 lg:gap-[47px] pl-4 sm:pl-[100px] pause-on-hover cursor-default"
          style={{
            animation: 'testimonialScroll 40s linear infinite',
            willChange: 'transform'
          }}
        >
          {/* Testimonial cards - first set */}
          {[
            { quote: "We've tried Purpose for entry positions and it works perfect. We were able to reduce manual screening as well as active sourcing. All transfered candidates fit our set criteria.", author: "HR Manager, IT-Consultancy" },
            { quote: "With entry-mid level talent being scarce these days, Purpose really helped us get exactly what we search for in candidates without huge administration effort.", author: "Head of HR, Automotive Supplier" },
            { quote: "The candidate transfer to our ATS really helps our recruiters to stay focused and skip juggling multiple platforms at once.", author: "Recruiter, Marketing Agency" },
            { quote: "It's fair to say that in our opinion Purpose focuses on quality over quantity. We've managed to increase our hiring ration significantly.", author: "Recruiting Lead, Banking Sector" },
            { quote: "Even though we primarily focus on senior level roles, this system helped us with our more mid-level vacancies.", author: "Junior Recruiter, Cybersecurity" },
            { quote: "In times of uncertainty and doubt in the labor market platforms like Purpose leave job seekers as well as companies encouraged for the future.", author: "TA Specialist, Manufacturing" },
            { quote: "Our requirements are generally quite high due to the field we operate in. The automated screening based on our criteria is a huge game-changer for our hiring performance.", author: "Recruiter, Healthcare & Pharma" },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[240px] sm:w-[279px] min-w-[240px] sm:min-w-[279px] h-[220px] sm:h-[267px] p-4 sm:p-[23px_18px_15px_19px] flex flex-col justify-between rounded-[18px] border border-white"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="text-sm sm:text-base">&quot;{testimonial.quote}&quot;</div>
              <div className="font-poppins text-[#454545] text-xs sm:text-sm font-medium">
                {testimonial.author}
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless infinite scroll */}
          {[
            { quote: "We've tried Purpose for entry positions and it works perfect. We were able to reduce manual screening as well as active sourcing. All transfered candidates fit our set criteria.", author: "HR Manager, IT-Consultancy" },
            { quote: "With entry-mid level talent being scarce these days, Purpose really helped us get exactly what we search for in candidates without huge administration effort.", author: "Head of HR, Automotive Supplier" },
            { quote: "The candidate transfer to our ATS really helps our recruiters to stay focused and skip juggling multiple platforms at once.", author: "Recruiter, Marketing Agency" },
            { quote: "It's fair to say that in our opinion Purpose focuses on quality over quantity. We've managed to increase our hiring ration significantly.", author: "Recruiting Lead, Banking Sector" },
            { quote: "Even though we primarily focus on senior level roles, this system helped us with our more mid-level vacancies.", author: "Junior Recruiter, Cybersecurity" },
            { quote: "In times of uncertainty and doubt in the labor market platforms like Purpose leave job seekers as well as companies encouraged for the future.", author: "TA Specialist, Manufacturing" },
            { quote: "Our requirements are generally quite high due to the field we operate in. The automated screening based on our criteria is a huge game-changer for our hiring performance.", author: "Recruiter, Healthcare & Pharma" },
          ].map((testimonial, index) => (
            <div
              key={`dup-${index}`}
              className="flex-shrink-0 w-[240px] sm:w-[279px] min-w-[240px] sm:min-w-[279px] h-[220px] sm:h-[267px] p-4 sm:p-[23px_18px_15px_19px] flex flex-col justify-between rounded-[18px] border border-white"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="text-sm sm:text-base">&quot;{testimonial.quote}&quot;</div>
              <div className="font-poppins text-[#454545] text-xs sm:text-sm font-medium">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
