'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

const basePath = ''

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header - Sticky */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <div
          className={`relative w-full max-w-[1552px] h-24 transition-all duration-500 ease-out pointer-events-auto`}
        >
          {/* Extended background for scrolled state */}
          {isScrolled && (
            <div
              className="absolute inset-0 backdrop-blur-xl backdrop-saturate-150 rounded-[20px]"
              style={{
                left: '-110px',
                right: '-110px',
                background: 'rgba(238, 233, 252, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
              }}
            />
          )}
          {/* Logo */}
          <div className="absolute left-4 top-4 sm:left-8 sm:top-8 lg:left-[0px] lg:top-[20px]">
            <Link href="/">
              <span className="sr-only">Purpose</span>
              <div className="scale-75 sm:scale-90 lg:scale-100 origin-left">
                <PurposeLogo />
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <a
            href="/#individuals"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '267px',
              top: '30px'
            }}
          >
            Individuals
          </a>
          <a
            href="/#companies"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '450px',
              top: '30px'
            }}
          >
            Companies
          </a>
          <a
            href="/#about"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '640px',
              top: '30px'
            }}
          >
            About us
          </a>

          {/* CTA Button */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: '20px',
              right: '0px'
            }}
          >
            <CTAButton href="/cta">Transform your hiring</CTAButton>
          </div>
        </div>
      </div>

      {/* About Us Content Section */}
      <section className="relative w-full flex items-center justify-center px-4 sm:px-8" style={{ paddingTop: '140px', paddingBottom: '40px', background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)' }}>
        <div className="relative w-full max-w-[1552px] flex justify-center">

          {/* MOBILE Content Box - only shows on screens < 1024px */}
          <div
            className="lg:hidden w-full flex flex-col items-center px-4 sm:px-8 py-12 rounded-[30px] border border-white overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)',
              backdropFilter: 'blur(5px)'
            }}
          >
            {/* Mobile Title */}
            <h1
              className="text-center font-poppins text-2xl sm:text-3xl md:text-4xl font-bold leading-[120%] text-[#454545] px-4"
            >
              <span
                style={{
                  background: 'linear-gradient(180deg, #574AFF 0%, #508FFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Beyond
              </span>
              {' outdated hiring, '}
              <span
                style={{
                  background: 'linear-gradient(180deg, #574AFF 0%, #508FFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                built
              </span>
              {' for '}
              <span
                style={{
                  background: 'radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                intelligent recruiting
              </span>
              .
            </h1>

            {/* Mobile About us heading */}
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#454545] text-center mt-12">
              About us
            </h2>

            {/* Mobile About us description */}
            <p className="font-poppins text-base sm:text-lg md:text-xl font-medium text-[#454545] leading-normal text-center mt-6 px-4 max-w-2xl">
              At Purpose, we&apos;re building the future of hiring.
              Munich-based, globally minded - we&apos;re creating a world where talent discovery happens instantly, applications are effortless, and great careers begin with a single tap.
            </p>

            {/* Mobile Contact button */}
            <a
              href="mailto:hello@purpose.hr"
              className="hover:scale-[1.02] transition-transform duration-300 cursor-pointer flex items-center justify-center px-8 py-3 rounded-[18px] border border-white mt-8 no-underline"
              style={{
                background: 'linear-gradient(90deg, #213D83 0%, #4F647D 100%)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <span className="font-poppins text-white text-xl sm:text-2xl font-medium">
                Contact us
              </span>
            </a>

            {/* Mobile Founding Team heading */}
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#454545] text-center mt-16">
              Founding Team
            </h2>

            {/* Mobile Team members - Lukas at top */}
            <div className="flex flex-col items-center mt-8">
              {/* Lukas - Top center */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#D9D9D9] overflow-hidden">
                  <img src={`${basePath}/images/team/lf.jpeg`} alt="Lukas Faber" className="w-full h-full object-cover" />
                </div>
                <div className="font-inter text-lg sm:text-xl font-bold text-[#454545] text-center mt-3">
                  Lukas Faber
                </div>
                <div className="font-inter text-sm sm:text-base font-medium text-[#454545] text-center mt-1">
                  Founder & CEO
                </div>
              </div>

              {/* Bottom row - 3 team members */}
              <div className="flex flex-row items-start justify-center gap-6 sm:gap-10">
                {/* Wael */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D9D9D9] overflow-hidden">
                    <img src={`${basePath}/images/team/wf.jpeg`} alt="Wael Feriz" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-inter text-base sm:text-lg font-bold text-[#454545] text-center mt-3">
                    Wael Feriz
                  </div>
                  <div className="font-inter text-xs sm:text-sm font-medium text-[#454545] text-center mt-1">
                    ML & AI Engineer
                  </div>
                </div>

                {/* Polina */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D9D9D9] overflow-hidden">
                    <img src={`${basePath}/images/team/ps.jpeg`} alt="Polina Shnaider" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-inter text-base sm:text-lg font-bold text-[#454545] text-center mt-3">
                    Polina Shnaider
                  </div>
                  <div className="font-inter text-xs sm:text-sm font-medium text-[#454545] text-center mt-1">
                    Web & Frontend Dev
                  </div>
                </div>

                {/* Mieszko */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D9D9D9] overflow-hidden">
                    <img src={`${basePath}/images/team/mc.jpeg`} alt="Mieszko Chowaniec" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-inter text-base sm:text-lg font-bold text-[#454545] text-center mt-3">
                    Mieszko Chowaniec
                  </div>
                  <div className="font-inter text-xs sm:text-sm font-medium text-[#454545] text-center mt-1">
                    Backend Developer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP Content Box - only shows on screens >= 1024px (unchanged from original) */}
          <div
            className="hidden lg:flex flex-shrink-0 flex-col items-center px-12"
            style={{
              width: '1760px',
              minHeight: '1750px',
              borderRadius: '50px',
              paddingTop: '86px',
              paddingBottom: '80px'
            }}
          >
          {/* Upper right circle */}
          <div
            className="hidden xl:block absolute w-[420px] xl:w-[500px] 2xl:w-[580px] h-[420px] xl:h-[500px] 2xl:h-[580px] rounded-full bg-circle-gradient flex-shrink-0"
            style={{
              top: '-500px',
              left: '1200px',
              transform: 'rotate(134.213deg)',
              zIndex: 0
            }}
          />
          {/* Mid right circle */}
          <div
            className="hidden xl:block absolute w-[420px] xl:w-[500px] 2xl:w-[580px] h-[420px] xl:h-[500px] 2xl:h-[580px] rounded-full bg-circle-gradient flex-shrink-0"
            style={{
              top: '-250px',
              left: '1400px',
              transform: 'rotate(134.213deg)',
              zIndex: 0
            }}
          />
          {/* Lower right circle */}
          <div
            className="hidden xl:block absolute w-[420px] xl:w-[500px] 2xl:w-[580px] h-[420px] xl:h-[500px] 2xl:h-[580px] rounded-full bg-circle-gradient flex-shrink-0"
            style={{
              top: '1100px',
              left: '1500px',
              transform: 'rotate(134.213deg)',
              zIndex: 0
            }}
          />
          {/* Lowest right circle */}
          <div
            className="hidden xl:block absolute w-[420px] xl:w-[500px] 2xl:w-[580px] h-[420px] xl:h-[500px] 2xl:h-[580px] rounded-full bg-circle-gradient flex-shrink-0"
            style={{
              top: '1400px',
              left: '1300px',
              transform: 'rotate(134.213deg)',
              zIndex: 0
            }}
          />
          {/* Upper left  circle */}
          <div
            className="hidden xl:block absolute w-[420px] xl:w-[500px] 2xl:w-[580px] h-[420px] xl:h-[500px] 2xl:h-[580px] rounded-full bg-circle-gradient flex-shrink-0"
            style={{
              top: '1000px',
              left: '-400px',
              transform: 'rotate(134.213deg)',
              zIndex: 0
            }}
          />
          {/* Lower left  circle */}
          <div
            className="hidden xl:block absolute w-[420px] xl:w-[500px] 2xl:w-[580px] h-[420px] xl:h-[500px] 2xl:h-[580px] rounded-full bg-circle-gradient flex-shrink-0"
            style={{
              top: '1150px',
              left: '-300px',
              transform: 'rotate(134.213deg)',
              zIndex: 0
            }}
          />
            {/* Title */}
            <h1
              className="text-center font-helvetica"
              style={{
                width: '1100px',
                height: '131px',
                flexShrink: 0,
                color: '#454545',
                textAlign: 'center',
                fontSize: '64px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%',
                marginTop: '25px'
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(180deg, #574AFF 0%, #508FFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Beyond
              </span>
              {' outdated hiring, '}
              <span
                style={{
                  background: 'linear-gradient(180deg, #574AFF 0%, #508FFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                built
              </span>
              {' for '}
              <span
                style={{
                  background: 'radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                intelligent recruiting
              </span>
              .
            </h1>

           

            {/* About us description */}
            <p
              className="font-helvetica"
              style={{
                position: 'absolute',
                left: '25px',
                top: '400px',
                width: '1500px',
                height: '240px',
                flexShrink: 0,
                color: '#454545',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              At Purpose, we&apos;re building intelligent infrastructure for the future of work.<br /><br />
Munich-based and globally minded, our deep tech platform combines proprietary matching algorithms, AI-powered candidate screening, and automated application technology to create a world where talent discovery is instant, hiring decisions are data-driven, and great careers begin through a single intelligent system.
            </p>

            {/* Button/CTA element */}
            <a
              href="mailto:l.faber@purpos3.de"
              className="hover:scale-[1.02] transition-transform duration-300 cursor-pointer no-underline"
              style={{
                position: 'absolute',
                left: '650px',
                top: '1000px',
                display: 'flex',
                width: '327px',
                height: '68px',
                padding: '9px 73.753px 8.754px 75px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                borderRadius: '18px',
                border: '1px solid #FFF',
                background: 'linear-gradient(102deg, #E307DB 10.53%, #10C5F2 81.23%)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <span
                className="font-helvetica"
                style={{
                  width: '178.247px',
                  height: '50.246px',
                  flexShrink: 0,
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}
              >
                Contact us
              </span>
            </a>
                

            {/* Founding Team Title */}
            <div
              className="font-helvetica"
              style={{
                position: 'absolute',
                left: '-850px',
                right: '0',
                top: '1100px',
                color: '#454545',
                textAlign: 'center',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              Founding Team
            </div>
            {/* Arrow icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width= '100px'
              height= '100px'
              viewBox='0 0 40 38'
              fill='none'
              style={{
                position: 'absolute',
                top: '1000px',
                left: '525px'
              }}
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M23.5269 0.610194C24.3405 -0.203398 25.6595 -0.203398 26.4731 0.610194L38.9731 13.1102C39.3638 13.5009 39.5833 14.0308 39.5833 14.5833C39.5833 15.1359 39.3638 15.6658 38.9731 16.0565L26.4731 28.5565C25.6595 29.3701 24.3405 29.3701 23.5269 28.5565C22.7133 27.7429 22.7133 26.4238 23.5269 25.6102L32.4704 16.6667H14.5833C8.83037 16.6667 4.16667 21.3304 4.16667 27.0833L4.16667 35.4167C4.16667 36.5673 3.23393 37.5 2.08333 37.5C0.932741 37.5 3.72529e-07 36.5673 3.72529e-07 35.4167L0 27.0833C-2.48353e-07 19.0292 6.52918 12.5 14.5833 12.5H32.4704L23.5269 3.55647C22.7133 2.74288 22.7133 1.42379 23.5269 0.610194Z" fill="url(#paint0_radial_4195_7157)"/>
              <defs>
                <radialGradient id="paint0_radial_4195_7157" cx="0" cy="0" r="1" gradientTransform="matrix(36.6611 37.5 -40.6632 50.3762 7.03999 -3.58777e-07)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5323E5"/>
                    <stop offset="0.381279" stopColor="#5472FF"/>
                    <stop offset="0.812697" stopColor="#6DC9D8"/>
                    <stop offset="0.921022" stopColor="#72E0DA"/>
                    <stop offset="1" stopColor="#6DECD3"/>
                </radialGradient>
              </defs>
            </svg>

            {/* Team member - Lukas (Top Center) */}
            <div
              style={{
                position: 'absolute',
                left: '250px',
                transform: 'translateX(-50%)',
                top: '1300px',
                width: '180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  width: '165px',
                  height: '165px',
                  borderRadius: '50%',
                  background: '#D9D9D9',
                  overflow: 'hidden'
                }}
              >
                <img src={`${basePath}/images/team/lf.jpeg`} alt="Lukas Faber" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: '24px',
                  marginTop: '12px'
                }}
              >
                Lukas Faber
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  marginTop: '2px'
                }}
              >
                Founder & CEO
              </div>
            </div>

            {/* Team member - Wael (Bottom Left) */}
            <div
              style={{
                position: 'absolute',
                left: '550px',
                top: '1300px',
                width: '180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  width: '165px',
                  height: '165px',
                  borderRadius: '50%',
                  background: '#D9D9D9',
                  overflow: 'hidden'
                }}
              >
                <img src={`${basePath}/images/team/wf.jpeg`} alt="Wael Feriz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: '24px',
                  marginTop: '12px'
                }}
              >
                Wael Feriz
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  marginTop: '2px'
                }}
              >
                ML & AI Engineer
              </div>
            </div>

            {/* Team member - Polina (Bottom Center) */}
            <div
              style={{
                position: 'absolute',
                left: '1000px',
                transform: 'translateX(-50%)',
                top: '1300px',
                width: '180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  width: '165px',
                  height: '165px',
                  borderRadius: '50%',
                  background: '#D9D9D9',
                  overflow: 'hidden'
                }}
              >
                <img src={`${basePath}/images/team/ps.jpeg`} alt="Polina Shnaider" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: '24px',
                  marginTop: '12px'
                }}
              >
                Polina Shnaider
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  marginTop: '2px'
                }}
              >
                Web & Frontend Dev
              </div>
            </div>

            {/* Team member - Mieszko (Bottom Right) */}
            <div
              style={{
                position: 'absolute',
                left: '1300px',
                top: '1300px',
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  width: '165px',
                  height: '165px',
                  borderRadius: '50%',
                  background: '#D9D9D9',
                  overflow: 'hidden'
                }}
              >
                <img src={`${basePath}/images/team/mc.jpeg`} alt="Mieszko Chowaniec" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: '24px',
                  marginTop: '12px'
                }}
              >
                Mieszko Chowaniec
              </div>
              <div
                className="font-inter"
                style={{
                  color: '#454545',
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  marginTop: '2px'
                }}
              >
                Backend & Infra Engineer
              </div>
            </div>

            {/* Content Box */}
            <div
              style={{
                width: '1256px',
                flexShrink: 0,
                marginTop: '198px',
                color: '#454545',
                fontFamily: 'Helvetica',
                fontSize: '20px',
                lineHeight: 'normal'
              }}
            >
              {/* Add About Us content here */}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
