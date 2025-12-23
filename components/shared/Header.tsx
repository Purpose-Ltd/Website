'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Sticky header wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        {/* Glassmorphism card with liquid glass effect */}
        <div
          className={`relative w-full max-w-[1552px] h-24 transition-all duration-500 ease-out pointer-events-auto`}
        >
          {/* Extended background for scrolled state */}
          {isScrolled && (
            <div
              className="absolute inset-0 backdrop-blur-md backdrop-saturate-100 rounded-[20px]"
              style={{
                left: '-110px',
                right: '-110px',
                background: 'rgba(238, 233, 252, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.03), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
              }}
            />
          )}
          {/* Logo - Responsive positioning */}
          <div className="absolute opacity-0 animate-fade-in left-4 top-4 sm:left-8 sm:top-8 lg:left-[-80px] lg:top-[20px]">
            <Link href="/">
              <span className="sr-only">Purpose</span>
              <div className="scale-75 sm:scale-90 lg:scale-100 origin-left">
                <PurposeLogo />
              </div>
            </Link>
          </div>

          {/* Desktop navigation - Flexbox for responsive spacing */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-[200px] xl:left-[220px] 2xl:left-[240px] top-[28px]">
            <a
              href="#individuals"
              className="text-lg xl:text-xl 2xl:text-2xl font-bold leading-6 text-[#120C2B] hover:bg-radial-1 hover:bg-clip-text hover:text-transparent hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent] transition-all opacity-0 animate-fade-in-delay-1 cursor-pointer whitespace-nowrap"
            >
              Individuals
            </a>
            <a
              href="#companies"
              className="text-lg xl:text-xl 2xl:text-2xl font-bold leading-6 text-[#120C2B] hover:bg-radial-1 hover:bg-clip-text hover:text-transparent hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent] transition-all opacity-0 animate-fade-in-delay-2 cursor-pointer whitespace-nowrap"
            >
              Companies
            </a>
            <Link
              href="/about"
              className="text-lg xl:text-xl 2xl:text-2xl font-bold leading-6 text-[#120C2B] hover:bg-radial-1 hover:bg-clip-text hover:text-transparent hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent] transition-all opacity-0 animate-fade-in-delay-2 cursor-pointer whitespace-nowrap"
            >
              About us
            </Link>
          </nav>

          {/* CTA Button - Responsive positioning */}
          <div
            className="hidden lg:block absolute opacity-0 animate-fade-in-delay-3 top-[20px] right-[-40px] xl:right-[-60px] 2xl:right-[-80px]"
          >
            <CTAButton href="/cta">Start hiring</CTAButton>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden absolute top-4 right-4 opacity-0 animate-fade-in">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--primary-text)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 mx-4 rounded-lg">
          <div className="space-y-2 py-6 px-6">
            <a
              href="#individuals"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary-text)] hover:bg-radial-1 hover:bg-clip-text hover:text-transparent hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Individuals
            </a>
            <a
              href="#companies"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary-text)] hover:bg-radial-1 hover:bg-clip-text hover:text-transparent hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies
            </a>
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary-text)] hover:bg-radial-1 hover:bg-clip-text hover:text-transparent hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/cta"
              className="block rounded-lg px-3 py-2 text-center text-base font-semibold leading-7 bg-[var(--primary-button)] text-white hover:bg-[var(--primary-button-hover)] transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start hiring
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
