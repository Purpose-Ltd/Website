'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

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
          <div className="absolute left-4 top-4 sm:left-8 sm:top-8 lg:left-[-80px] lg:top-[20px]">
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
              left: '187px',
              top: '30px'
            }}
          >
            Individuals
          </a>
          <a
            href="/#companies"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '370.94px',
              top: '30px'
            }}
          >
            Companies
          </a>
          <a
            href="/#about"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '559.8px',
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
              right: '-80px'
            }}
          >
            <CTAButton href="/cta">Transform your hiring</CTAButton>
          </div>
        </div>
      </div>

      {/* About Us Content Section */}
      <section className="relative w-full flex items-center justify-center px-4 sm:px-8 bg-white" style={{ paddingTop: '140px', paddingBottom: '40px' }}>
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
            <div
              className="hover:scale-[1.02] transition-transform duration-300 cursor-pointer flex items-center justify-center px-8 py-3 rounded-[18px] border border-white mt-8"
              style={{
                background: 'linear-gradient(90deg, #213D83 0%, #4F647D 100%)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <span className="font-poppins text-white text-xl sm:text-2xl font-medium">
                Contact us
              </span>
            </div>

            {/* Mobile Founding Team heading */}
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#454545] text-center mt-16">
              Founding Team
            </h2>

            {/* Mobile Team members */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mt-8">
              {/* Gregor */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                  <img
                    src="/gregorkobilarov.jpeg"
                    alt="Gregor Kobilarov"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
                  />
                </div>
                <div className="font-inter text-lg sm:text-xl font-bold text-[#454545] text-center mt-4">
                  Gregor Kobilarov
                </div>
                <div className="font-inter text-sm sm:text-base font-medium text-[#454545] text-center mt-1">
                  Chief Technology Officer
                </div>
              </div>

              {/* Lukas */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                  <img
                    src="/lukasfaber.jpeg"
                    alt="Lukas Faber"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
                  />
                </div>
                <div className="font-inter text-lg sm:text-xl font-bold text-[#454545] text-center mt-4">
                  Lukas Faber
                </div>
                <div className="font-inter text-sm sm:text-base font-medium text-[#454545] text-center mt-1">
                  Chief Executive Officer
                </div>
              </div>
            </div>

            {/* Mobile Team description */}
            <p
              className="font-poppins text-sm sm:text-base md:text-lg font-medium text-center max-w-2xl mt-8 px-4 leading-normal"
              style={{
                background: 'linear-gradient(137deg, #11314A 7.48%, #9A76F4 94.06%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Purpose is developed by a diverse team of machine learning engineers, backend and frontend developers, and designers from around the world. Based in Munich but bringing global perspectives, we&apos;re combining technical expertise with international insights to revolutionize recruiting technology for both candidates and employers.
            </p>
          </div>

          {/* DESKTOP Content Box - only shows on screens >= 1024px (unchanged from original) */}
          <div
            className="hidden lg:flex flex-shrink-0 flex-col items-center px-12"
            style={{
              width: '1760px',
              minHeight: '2200px',
              borderRadius: '50px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)',
              backdropFilter: 'blur(5px)',
              paddingTop: '86px',
              paddingBottom: '80px'
            }}
          >
            {/* Title */}
            <h1
              className="text-center font-poppins"
              style={{
                width: '1249px',
                height: '131px',
                flexShrink: 0,
                color: '#454545',
                textAlign: 'center',
                fontSize: '64px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%',
                marginTop: '116px'
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

            {/* Circular element on the right - outer gradient circle */}
            <div
              className="animate-[float_6s_ease-in-out_infinite]"
              style={{
                position: 'absolute',
                right: '-450px',
                top: '116px',
                width: '668.371px',
                height: '668.371px',
                transform: 'rotate(134.213deg)',
                flexShrink: 0,
                borderRadius: '668.371px',
                border: '30px solid transparent',
                background: 'linear-gradient(90deg, #5323E5 0%, #537CFF 49%, #76F4DC 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }}
            />

            {/* Inner circle with gradient border */}
            <div
              className="animate-[float_8s_ease-in-out_infinite]"
              style={{
                position: 'absolute',
                right: '-360px',
                top: '206px',
                width: '488.371px',
                height: '488.371px',
                transform: 'rotate(134.213deg)',
                flexShrink: 0,
                borderRadius: '488.371px',
                border: '30px solid transparent',
                background: 'linear-gradient(90deg, #5323E5 0%, #537CFF 49%, #76F4DC 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }}
            />

            {/* Innermost circle with gradient border */}
            <div
              className="animate-[float_10s_ease-in-out_infinite]"
              style={{
                position: 'absolute',
                right: '-270px',
                top: '296px',
                width: '308.371px',
                height: '308.371px',
                transform: 'rotate(134.213deg)',
                flexShrink: 0,
                borderRadius: '308.371px',
                border: '30px solid transparent',
                background: 'linear-gradient(90deg, #5323E5 0%, #537CFF 49%, #76F4DC 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }}
            />

            {/* About us heading */}
            <h2
              className="font-poppins"
              style={{
                position: 'absolute',
                left: '7px',
                top: '450px',
                width: '413px',
                height: '137px',
                flexShrink: 0,
                color: '#454545',
                textAlign: 'center',
                fontSize: '64px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%'
              }}
            >
              About us
            </h2>

            {/* About us description */}
            <p
              className="font-poppins"
              style={{
                position: 'absolute',
                left: '77px',
                top: '607px',
                width: '1264px',
                height: '240px',
                flexShrink: 0,
                color: '#454545',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              At Purpose, we&apos;re building the future of hiring.
Munich-based, globally minded - we&apos;re creating a world where talent discovery happens instantly, applications are effortless, and great careers begin with a single tap.
            </p>

            {/* Button/CTA element */}
            <div
              className="hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              style={{
                position: 'absolute',
                left: '77px',
                top: '898px',
                display: 'flex',
                width: '327px',
                height: '68px',
                padding: '9px 73.753px 8.754px 75px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                borderRadius: '18px',
                border: '1px solid #FFF',
                background: 'linear-gradient(90deg, #213D83 0%, #4F647D 100%)',
                boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <span
                className="font-poppins"
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
            </div>

            {/* Text below Contact us button */}
            <div
              className="font-poppins"
              style={{
                position: 'absolute',
                left: '77px',
                top: '1058px',
                alignSelf: 'stretch',
                color: '#454545',
                textAlign: 'center',
                fontSize: '64px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal'
              }}
            >
              Founding Team
            </div>

            {/* Left side circular element - outer circle */}
            <div
              className="animate-[float_7s_ease-in-out_infinite]"
              style={{
                position: 'absolute',
                left: '-450px',
                top: '1250px',
                width: '668.371px',
                height: '668.371px',
                transform: 'rotate(134.213deg)',
                flexShrink: 0,
                borderRadius: '668.371px',
                border: '30px solid transparent',
                background: 'linear-gradient(90deg, #5323E5 0%, #537CFF 49%, #76F4DC 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }}
            />

            {/* Left side circular element - middle circle */}
            <div
              className="animate-[float_9s_ease-in-out_infinite]"
              style={{
                position: 'absolute',
                left: '-360px',
                top: '1340px',
                width: '488.371px',
                height: '488.371px',
                transform: 'rotate(134.213deg)',
                flexShrink: 0,
                borderRadius: '488.371px',
                border: '30px solid transparent',
                background: 'linear-gradient(90deg, #5323E5 0%, #537CFF 49%, #76F4DC 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }}
            />

            {/* Left side circular element - innermost circle */}
            <div
              className="animate-[float_11s_ease-in-out_infinite]"
              style={{
                position: 'absolute',
                left: '-270px',
                top: '1430px',
                width: '308.371px',
                height: '308.371px',
                transform: 'rotate(134.213deg)',
                flexShrink: 0,
                borderRadius: '308.371px',
                border: '30px solid transparent',
                background: 'linear-gradient(90deg, #5323E5 0%, #537CFF 49%, #76F4DC 100%) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }}
            />

            {/* Team member circle 1 - Gregor */}
            <div
              style={{
                position: 'absolute',
                left: '400px',
                top: '1250px',
                width: '222px',
                height: '222px',
                flexShrink: 0,
                borderRadius: '50%',
                background: '#D9D9D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src="/gregorkobilarov.jpeg"
                alt="Gregor Kobilarov"
                style={{
                  width: '170px',
                  height: '170px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Name for team member 1 */}
            <div
              className="font-inter"
              style={{
                position: 'absolute',
                left: '400px',
                top: '1505px',
                width: '222px',
                color: '#454545',
                textAlign: 'center',
                fontSize: '23px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px'
              }}
            >
              Gregor Kobilarov
            </div>

            {/* Title for team member 1 */}
            <div
              className="font-inter"
              style={{
                position: 'absolute',
                left: '400px',
                top: '1539px',
                width: '222px',
                alignSelf: 'stretch',
                color: '#454545',
                textAlign: 'center',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px'
              }}
            >
              Chief Technology Officer
            </div>

            {/* Team member circle 2 - Lukas */}
            <div
              style={{
                position: 'absolute',
                left: '950px',
                top: '1250px',
                width: '222px',
                height: '222px',
                flexShrink: 0,
                borderRadius: '50%',
                background: '#D9D9D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src="/lukasfaber.jpeg"
                alt="Lukas Faber"
                style={{
                  width: '170px',
                  height: '170px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Name for team member 2 */}
            <div
              className="font-inter"
              style={{
                position: 'absolute',
                left: '950px',
                top: '1505px',
                width: '222px',
                color: '#454545',
                textAlign: 'center',
                fontSize: '23px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px'
              }}
            >
              Lukas Faber
            </div>

            {/* Title for team member 2 */}
            <div
              className="font-inter"
              style={{
                position: 'absolute',
                left: '950px',
                top: '1539px',
                width: '222px',
                alignSelf: 'stretch',
                color: '#454545',
                textAlign: 'center',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px'
              }}
            >
              Chief Executive Officer
            </div>

            {/* Team description with gradient text */}
            <div
              className="font-poppins"
              style={{
                position: 'absolute',
                left: '365px',
                top: '1750px',
                width: '1031px',
                height: '287px',
                flexShrink: 0,
                textAlign: 'center',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                background: 'linear-gradient(137deg, #11314A 7.48%, #9A76F4 94.06%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Purpose is developed by a diverse team of machine learning engineers, backend and frontend developers, and designers from around the world. Based in Munich but bringing global perspectives, we&apos;re combining technical expertise with international insights to revolutionize recruiting technology for both candidates and employers.
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

      {/* Imprint Section */}
      <section id="imprint" className="relative w-full flex items-center justify-center px-4 sm:px-8 bg-white" style={{ paddingTop: '15px', paddingBottom: '80px' }}>
        <div className="relative w-full max-w-[1552px] flex justify-center">

          {/* MOBILE Imprint Box - only shows on screens < 1024px */}
          <div
            className="lg:hidden w-full flex flex-col items-center gap-8 px-6 py-8 rounded-[30px] border border-white"
            style={{
              background: 'linear-gradient(180deg, rgba(221, 252, 246, 0.80) 0%, rgba(153, 153, 153, 0.80) 100%)',
              backdropFilter: 'blur(5px)',
              color: '#454545'
            }}
          >
            <div className="scale-90">
              <PurposeLogo />
            </div>
            <div className="text-[#454545] font-helvetica text-sm leading-[120%] text-center">
              Purpose UG (haftungsbeschränkt)<br />
              Seidl-Kreuz-Weg 94<br />
              85737 Ismaning<br />
              Germany
            </div>
            <div className="text-[#454545] text-center font-helvetica text-sm leading-[120%]">
              <div className="font-bold">Registered Office</div>
              <div className="mt-2">
                Ismaning - HRB Munich 292052<br />
                Tax number: 143/173/60143<br />
                VAT ID No.: DE368116002
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[#454545] font-helvetica text-base font-bold">Legal</div>
              <a href="/terms-and-conditions" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                Terms & Conditions
              </a>
              <a href="/imprint" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                Imprint
              </a>
              <a href="/privacy-policy" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                Privacy Policy
              </a>
            </div>
            <div className="text-[#454545] font-helvetica text-[10px]">
              © Purpose, 2025
            </div>
          </div>

          {/* DESKTOP Imprint Box - only shows on screens >= 1024px (unchanged from original) */}
          <div
            className="hidden lg:flex flex-shrink-0 items-center justify-between px-12 py-8"
            style={{
              width: '1760px',
              height: '220px',
              borderRadius: '50px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(221, 252, 246, 0.80) 0%, rgba(153, 153, 153, 0.80) 100%)',
              backdropFilter: 'blur(5px)',
              color: '#454545'
            }}
          >
            {/* Left side - Company information */}
            <div className="flex-shrink-0 flex flex-col gap-4">
              {/* Purpose Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121.819"
                height="29.583"
                viewBox="0 0 120 30"
                fill="none"
                style={{
                  transform: 'rotate(0deg)',
                  flexShrink: 0
                }}
              >
                <path d="M18.9836 14.2483C17.9368 18.9753 13.8839 22.3219 9.21178 22.3219L9.04768 22.3219L10.3804 16.3099C10.6142 15.2546 9.84086 14.2483 8.79654 14.2483L1.79462 14.2483L2.14521 12.6718L2.23721 12.246L3.4158 6.94358C3.51277 6.4972 3.90066 6.17725 4.34574 6.17725L12.7923 6.17725C16.8776 6.17725 19.8987 10.1199 18.9836 14.2509" fill="#5323E5"/>
                <path d="M18.9836 14.2483C17.9368 18.9753 13.8839 22.3219 9.21178 22.3219L9.04768 22.3219L10.3804 16.3099C10.6142 15.2546 9.84086 14.2483 8.79654 14.2483L1.79462 14.2483L2.14521 12.6718L2.23721 12.246L3.4158 6.94358C3.51277 6.4972 3.90066 6.17725 4.34574 6.17725L12.7923 6.17725C16.8776 6.17725 19.8987 10.1199 18.9836 14.2509" fill="#5323E5"/>
                <path d="M0 22.3206L7.02928 27.9017C7.34257 28.1442 7.79511 27.9739 7.88214 27.5765L9.0483 22.3206L0 22.3206Z" fill="#76F4DC"/>
                <mask id="mask0_2683_296" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="10" width="14" height="14">
                  <path d="M3.80647 11.105C1.44929 12.2249 1.88442 14.8361 1.88442 17.3518C1.88442 21.0055 3.22961 23.5419 7.40192 23.5419C11.5742 23.5419 14.9583 20.5797 14.9583 16.9261C14.9583 13.2724 11.5742 10.3103 7.40192 10.3103C6.10149 10.3103 4.87566 10.5993 3.80647 11.105Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_2683_296)">
                  <path d="M1.44781 10.3103L1.44781 23.5419L2.96457 23.5419L2.96457 22.2853L9.6159 22.2853L9.6159 22.2285L9.86952 22.2285L9.86952 20.9874L14.9569 20.9874L14.9569 10.3103L1.44781 10.3103Z" fill="url(#paint0_radial_2683_296)"/>
                </g>
                <path d="M1.79524 14.2472L1.44713 15.8237L0.201405 21.4435L0.124324 21.7867L0 22.3182L9.0483 22.3182L10.3811 16.3088C10.6148 15.2535 9.84148 14.2472 8.79716 14.2472L3.35675 14.2472C2.55859 14.2472 1.96681 13.4783 2.14832 12.6707L1.79772 14.2472L1.79524 14.2472Z" fill="url(#paint1_linear_2683_296)"/>
                <path d="M31.738 8.07544C33.4959 8.07544 34.8983 8.57859 35.9401 9.59005C36.982 10.5989 37.5016 11.9768 37.5016 13.7236C37.5016 15.4705 36.977 16.8819 35.9277 17.9165C34.8784 18.9487 33.481 19.4673 31.738 19.4673L28.242 19.4673L28.242 24.8961L24.9325 24.8961L24.9325 8.07802L31.738 8.07802L31.738 8.07544ZM31.5987 16.1955C32.4317 16.1955 33.0658 15.9788 33.4959 15.5479C33.9286 15.1144 34.1449 14.5235 34.1449 13.7701C34.1449 13.0166 33.9286 12.4051 33.4959 11.9794C33.0633 11.5562 32.4317 11.342 31.5987 11.342L28.242 11.342L28.242 16.1955L31.5987 16.1955Z" fill="#120C2B"/>
                <path d="M47.2137 11.6799L50.5257 11.6799L50.5257 24.8934L47.2137 24.8934L47.2137 23.0692C46.2415 24.478 44.9287 25.1824 43.2776 25.1824C41.8728 25.1824 40.7663 24.7128 39.9557 23.7762C39.1451 22.8395 38.7398 21.5701 38.7398 19.9677L38.7398 11.6799L42.0518 11.6799L42.0518 19.2246C42.0518 20.1225 42.2333 20.796 42.5963 21.2424C42.9594 21.6913 43.5561 21.9158 44.3916 21.9158C45.3016 21.9158 46.0003 21.6346 46.4877 21.0747C46.9725 20.5147 47.2162 19.6968 47.2162 18.6234L47.2162 11.6799L47.2137 11.6799Z" fill="#120C2B"/>
                <path d="M59.5238 11.3921C59.7401 11.3921 59.9863 11.4076 60.2648 11.4411L60.2648 14.9735C59.9241 14.9425 59.6556 14.9245 59.4542 14.9245C58.2806 14.9245 57.3357 15.2393 56.6196 15.874C55.901 16.5062 55.5429 17.5512 55.5429 19.009L55.5429 24.8946L52.231 24.8946L52.231 11.6811L55.5429 11.6811L55.5429 13.9878C56.3312 12.2591 57.6565 11.3947 59.5263 11.3947" fill="#120C2B"/>
                <path d="M69.0764 11.3921C70.7274 11.3921 72.1099 12.0372 73.2214 13.3247C74.3328 14.6148 74.8873 16.2688 74.8873 18.2865C74.8873 20.3043 74.3353 21.9583 73.2313 23.2484C72.1273 24.5385 70.7424 25.1836 69.0764 25.1836C67.4105 25.1836 66.0504 24.4946 65.0483 23.1168L65.0483 28.7701L61.7363 30.0009L61.7363 11.6811L65.0483 11.6811L65.0483 13.5311C66.0354 12.1068 67.3782 11.3921 69.0764 11.3921ZM68.3131 21.9144C69.238 21.9144 70.0064 21.579 70.618 20.9055C71.2272 20.2321 71.5331 19.3599 71.5331 18.2865C71.5331 17.2132 71.2322 16.341 70.6305 15.6676C70.0287 14.9941 69.2554 14.6587 68.3156 14.6587C67.3757 14.6587 66.5949 14.9941 65.9783 15.6676C65.3616 16.341 65.0533 17.2132 65.0533 18.2865C65.0533 19.3599 65.3616 20.2321 65.9783 20.9055C66.5949 21.579 67.3757 21.9144 68.3156 21.9144" fill="#120C2B"/>
                <path d="M77.907 13.3632C79.1875 12.0498 80.754 11.3918 82.6064 11.3918C84.4589 11.3918 86.0303 12.0498 87.3183 13.3632C88.6063 14.6765 89.2528 16.3176 89.2528 18.2889C89.2528 20.2602 88.6163 21.9219 87.3432 23.2249C86.0701 24.5305 84.4912 25.1833 82.6089 25.1833C80.7267 25.1833 79.1701 24.5279 77.897 23.212C76.624 21.8987 75.9874 20.2576 75.9874 18.2863C75.9874 16.315 76.6265 14.6739 77.9095 13.3606M84.9586 15.6673C84.3345 14.9939 83.5488 14.6585 82.6089 14.6585C81.669 14.6585 80.8833 14.9939 80.2592 15.6673C79.6326 16.3408 79.3218 17.2129 79.3218 18.2863C79.3218 19.3597 79.6351 20.2318 80.2592 20.9053C80.8833 21.5787 81.6665 21.9141 82.6089 21.9141C83.5513 21.9141 84.3345 21.5787 84.9586 20.9053C85.5828 20.2318 85.896 19.3597 85.896 18.2863C85.896 17.2129 85.5828 16.3408 84.9586 15.6673Z" fill="#120C2B"/>
                <path d="M96.0712 25.1836C94.358 25.1836 92.9308 24.7707 91.7895 23.945C90.6482 23.1194 89.9619 21.9866 89.7282 20.5443L93.085 20.5443C93.3634 21.7286 94.3904 22.3221 96.1657 22.3221C97.6004 22.3221 98.319 21.9608 98.319 21.2409C98.319 21.1455 98.3066 21.0577 98.2842 20.9777C98.2618 20.8978 98.222 20.8255 98.1673 20.761C98.1126 20.6965 98.0554 20.6372 97.9933 20.5804C97.9311 20.5236 97.8416 20.472 97.7272 20.423C97.6104 20.374 97.5084 20.3353 97.4139 20.3043C97.3219 20.2733 97.1852 20.2321 97.0086 20.183C96.8321 20.134 96.6779 20.0953 96.5461 20.0643C96.4144 20.0334 96.2328 19.9921 96.0016 19.9456C95.7704 19.8992 95.569 19.8502 95.3999 19.8012C93.5002 19.3367 92.1774 18.8284 91.429 18.2762C90.6805 17.724 90.3051 16.8958 90.3051 15.7889C90.3051 14.411 90.8098 13.335 91.8218 12.5584C92.8338 11.7817 94.1865 11.3921 95.8847 11.3921C97.583 11.3921 98.9033 11.774 99.8432 12.5326C100.786 13.2937 101.372 14.3233 101.604 15.6211L98.2469 15.6211C97.9684 14.7232 97.1429 14.2742 95.7704 14.2742C94.3978 14.2742 93.6394 14.6432 93.6394 15.3786C93.6394 15.6676 93.7861 15.8766 94.0795 16.003C94.373 16.132 95.0368 16.3152 96.0712 16.5552C97.1056 16.7952 97.9236 17.0171 98.5254 17.2157C99.1271 17.417 99.699 17.675 100.239 17.995C100.778 18.3149 101.164 18.6994 101.397 19.1483C101.628 19.5973 101.745 20.1417 101.745 20.7817C101.745 22.206 101.213 23.2974 100.149 24.0483C99.0848 24.8017 97.7247 25.1784 96.0737 25.1784" fill="#120C2B"/>
                <path d="M109.325 11.3918C111.409 11.3918 113.057 12.1375 114.268 13.6263C115.479 15.1152 116.001 16.9652 115.832 19.1765L106.063 19.1765C106.17 20.2034 106.525 20.9878 107.127 21.5297C107.729 22.0741 108.477 22.3476 109.372 22.3476C110.021 22.3476 110.598 22.2006 111.108 21.9038C111.618 21.6071 111.981 21.2046 112.197 20.6911L115.623 20.6911C115.176 22.1799 114.388 23.3023 113.261 24.0558C112.135 24.8092 110.844 25.1859 109.395 25.1859C107.42 25.1859 105.807 24.5357 104.556 23.2404C103.305 21.9425 102.681 20.3015 102.681 18.3147C102.681 16.3279 103.305 14.6791 104.556 13.3657C105.807 12.0524 107.396 11.397 109.325 11.397M109.303 14.2327C108.517 14.2327 107.858 14.452 107.333 14.8933C106.809 15.3345 106.438 15.9228 106.222 16.6582L112.311 16.6582C112.125 15.9228 111.772 15.3345 111.247 14.8933C110.722 14.452 110.074 14.2327 109.303 14.2327Z" fill="#120C2B"/>
                <defs>
                  <radialGradient id="paint0_radial_2683_296" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.64059 16.9741) scale(7.0532 6.17642)">
                    <stop stopColor="#2806BA"/>
                    <stop offset="1" stopColor="#5323E5"/>
                  </radialGradient>
                  <linearGradient id="paint1_linear_2683_296" x1="1.60378" y1="20.6179" x2="8.89851" y2="15.3247" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#574AFF"/>
                    <stop offset="0.97" stopColor="#508FFF"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Company address text */}
              <div
                className="flex-shrink-0"
                style={{
                  width: '240px',
                  height: '96.975px',
                  color: '#454545',
                  fontFamily: 'Helvetica',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%'
                }}
              >
                Purpose UG (haftungsbeschränkt)<br />
                Seidl-Kreuz-Weg 94<br />
                85737 Ismaning<br />
                Germany
              </div>

              {/* Copyright text */}
              <div
                className="flex-shrink-0"
                style={{
                  width: '82.06px',
                  height: '7.458px',
                  color: '#454545',
                  fontFamily: 'Helvetica',
                  fontSize: '10px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%'
                }}
              >
                © Purpose, 2025
              </div>
            </div>

            {/* Middle - Registered Office */}
            <div
              className="flex-shrink-0"
              style={{
                width: '239.644px',
                height: '70.259px',
                color: '#454545',
                textAlign: 'center',
                fontFamily: 'Helvetica',
                fontSize: '16px',
                fontStyle: 'normal',
                lineHeight: '120%'
              }}
            >
              <div style={{ fontWeight: 700 }}>Registered Office</div>
              <div style={{ fontWeight: 400, marginTop: '8px' }}>
                Ismaning - HRB Munich 292052<br />
                Tax number: 143/173/60143<br />
                VAT ID No.: DE368116002
              </div>
            </div>

            {/* Right - Legal */}
            <div className="flex-shrink-0 flex flex-col" style={{ width: '240px' }}>
              <h2
                className="text-center font-bold mb-4"
                style={{
                  width: '89.191px',
                  height: '14.052px',
                  flexShrink: 0,
                  color: '#454545',
                  fontFamily: 'Helvetica',
                  fontSize: '16px',
                  lineHeight: '120%'
                }}
              >
                Legal
              </h2>
              <nav className="flex flex-col gap-2">
                <a
                  href="/terms-and-conditions"
                  className="text-[#454545] hover:text-[#000000] transition-colors"
                  style={{
                    fontFamily: 'Helvetica',
                    fontSize: '14px',
                    lineHeight: '120%'
                  }}
                >
                  Terms & Conditions
                </a>
                <a
                  href="/imprint"
                  className="text-[#454545] hover:text-[#000000] transition-colors"
                  style={{
                    fontFamily: 'Helvetica',
                    fontSize: '14px',
                    lineHeight: '120%'
                  }}
                >
                  Imprint
                </a>
                <a
                  href="/privacy-policy"
                  className="text-[#454545] hover:text-[#000000] transition-colors"
                  style={{
                    fontFamily: 'Helvetica',
                    fontSize: '14px',
                    lineHeight: '120%'
                  }}
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
