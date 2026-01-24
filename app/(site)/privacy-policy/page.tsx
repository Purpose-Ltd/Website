'use client'

import Link from 'next/link'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Non-sticky */}
      <div className="flex justify-center px-4 pt-4">
        <div className="relative w-full max-w-[1552px] h-24">
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

      {/* Privacy Policy Content Section */}
      <section className="relative w-full flex items-center justify-center px-4 sm:px-8 py-10 bg-white">
        <div className="relative w-full max-w-[1552px] flex justify-center">
          {/* Content Box */}
          <div
            className="w-full max-w-[1760px] flex flex-col items-center px-4 sm:px-8 lg:px-12 rounded-[30px] lg:rounded-[50px] border border-white"
            style={{
              background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)',
              backdropFilter: 'blur(5px)',
              paddingTop: '40px',
              paddingBottom: '60px'
            }}
          >
            {/* Title */}
            <h1 className="text-center font-bold text-[#454545] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-[120%] px-4">
              Privacy Policy
            </h1>

            {/* Content */}
            <div className="w-full max-w-4xl mt-12 sm:mt-16 lg:mt-[100px] px-4 sm:px-8 lg:px-0 text-[#454545] font-helvetica text-base sm:text-lg lg:text-xl leading-normal">
              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4">I. Verantwortlicher</p>
              <p className="mb-2">
                Purpose UG (haftungsbeschränkt)<br />
                Seidl-Kreuz-Weg 94<br />
                85737 Ismaning<br />
                Deutschland
              </p>
              <p className="mb-6">
                Telefon: +49 1522 77 32 940<br />
                E-Mail: hello@purpose.hr<br />
                Vertreten durch: Lukas Faber
              </p>

              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 mt-8">II. Datenverarbeitung auf dieser Website</p>

              <p className="font-bold mb-2">2.1 Technische Daten</p>
              <p className="mb-6">
                Automatisch erfasst: IP-Adresse, Browser-Typ, Betriebssystem, besuchte Seiten, Zugriffszeitpunkt<br />
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO<br />
                Zweck: Website-Betrieb und Sicherheit<br />
                Speicherdauer: 7 Tage
              </p>

              <p className="font-bold mb-2">2.2 Kontaktdaten</p>
              <p className="mb-6">
                Bei Demo-Anfragen: Name, E-Mail, Unternehmen, Nachricht<br />
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO<br />
                Speicherdauer: 30 Tage nach Anfrage
              </p>

              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 mt-8">III. Externe Tools</p>

              <p className="font-bold mb-2">3.1 Google Analytics</p>
              <p className="mb-6">
                Zweck: Website-Analyse<br />
                Daten: Anonymisierte IP, Nutzungsverhalten, Browser-Informationen<br />
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                Datenübertragung: USA (EU-Standardvertragsklauseln)<br />
                Widerspruch: Cookie-Banner
              </p>

              <p className="font-bold mb-2">3.2 Calendly</p>
              <p className="mb-6">
                Zweck: Demo-Terminbuchung<br />
                Daten: Name, E-Mail, Terminpräferenzen<br />
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO<br />
                Datenübertragung: USA
              </p>

              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 mt-8">IV. Cookies</p>
              <p className="mb-6">
                Wir verwenden technisch notwendige und Analyse-Cookies. Ihre Einwilligung können Sie über den Cookie-Banner verwalten.
              </p>

              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 mt-8">V. Ihre Rechte (Art. 15-21 DSGVO)</p>
              <p className="mb-6">
                • Auskunft über gespeicherte Daten<br />
                • Berichtigung unrichtiger Daten<br />
                • Löschung unter bestimmten Voraussetzungen<br />
                • Einschränkung der Verarbeitung<br />
                • Datenübertragbarkeit<br />
                • Widerspruch gegen Verarbeitung<br />
                • Widerruf erteilter Einwilligungen
              </p>

              <p className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 mt-8">VI. Beschwerderecht</p>
              <p className="mb-6">
                Bei Beschwerden wenden Sie sich an die zuständige Datenschutzaufsichtsbehörde Ihres Bundeslandes.
              </p>

              <p className="mt-8">
                Stand: 20.10.2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="imprint" className="relative w-full flex items-center justify-center px-4 sm:px-8 bg-white" style={{ paddingTop: '15px', paddingBottom: '80px' }}>
        <div className="relative w-full max-w-[1552px] flex justify-center">
          {/* Desktop Footer */}
          <div
            className="hidden lg:flex w-full max-w-[1760px] items-center justify-between px-8 xl:px-12 py-8 rounded-[50px] border border-white"
            style={{
              background: 'linear-gradient(180deg, rgba(221, 252, 246, 0.90) 0%, rgba(149, 186, 255, 0.90) 100%)',
              backdropFilter: 'blur(5px)',
              color: '#454545'
            }}
          >
            {/* Left side - Company information */}
            <div className="flex-shrink-0 flex flex-col gap-4">
              <PurposeLogo />
              <div className="text-[#454545] font-helvetica text-sm xl:text-base leading-[120%]">
                Purpose UG (haftungsbeschränkt)<br />
                Seidl-Kreuz-Weg 94<br />
                85737 Ismaning<br />
                Germany
              </div>
              <div className="text-[#454545] font-helvetica text-[10px] leading-[120%]">
                © Purpose, 2025
              </div>
            </div>

            {/* Middle - Registered Office */}
            <div className="text-[#454545] text-center font-helvetica text-sm xl:text-base leading-[120%]">
              <div className="font-bold">Registered Office</div>
              <div className="mt-2">
                Ismaning - HRB Munich 292052<br />
                Tax number: 143/173/60143<br />
                VAT ID No.: DE368116002
              </div>
            </div>

            {/* Right - Legal */}
            <div className="flex flex-col">
              <div className="text-[#454545] font-helvetica text-base font-bold leading-[120%] mb-4 text-center">
                Legal
              </div>
              <nav className="flex flex-col gap-2">
                <Link href="/terms-and-conditions" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                  Terms & Conditions
                </Link>
                <Link href="/imprint" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                  Imprint
                </Link>
                <Link href="/privacy-policy" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>

          {/* Mobile Footer */}
          <div
            className="lg:hidden w-full flex flex-col items-center gap-8 px-6 py-8 rounded-[30px] border border-white"
            style={{
              background: 'linear-gradient(180deg, rgba(221, 252, 246, 0.90) 0%, rgba(149, 186, 255, 0.90) 100%)',
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
              <Link href="/terms-and-conditions" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                Terms & Conditions
              </Link>
              <Link href="/imprint" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                Imprint
              </Link>
              <Link href="/privacy-policy" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                Privacy Policy
              </Link>
            </div>
            <div className="text-[#454545] font-helvetica text-[10px]">
              © Purpose, 2025
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
