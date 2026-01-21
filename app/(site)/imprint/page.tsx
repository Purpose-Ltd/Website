'use client'

import Link from 'next/link'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

export default function ImprintPage() {
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

      {/* Imprint Content Section */}
      <section className="relative w-full flex items-center justify-center px-4 sm:px-8 py-10 sm:py-20 bg-white">
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
            <h1 className="text-center font-bold text-[#454545] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[120%]">
              Imprint
            </h1>

            {/* Content */}
            <div className="w-full max-w-4xl mt-12 sm:mt-16 lg:mt-[100px] px-4 sm:px-8 lg:px-0 text-[#454545] font-helvetica text-base sm:text-lg lg:text-xl leading-normal">
              {/* Legal Title */}
              <div className="text-2xl sm:text-[32px] font-bold mb-8">
                Legal
              </div>

              <p className="mb-12">
                Purpose UG (haftungsbeschränkt)<br />
                Seidl-Kreuz-Weg 94<br />
                85737 Ismaning<br />
                Deutschland
              </p>

              {/* Disclaimer Section */}
              <h2 className="text-2xl sm:text-[32px] font-bold mb-8">
                Haftungsausschluss – Disclaimer
              </h2>

              <h3 className="font-bold mb-4">
                Haftung für Inhalte
              </h3>
              <p className="mb-8">
                Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.<br /><br />
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
              </p>

              <h3 className="font-bold mb-4">
                Haftungsbeschränkung für externe Links
              </h3>
              <p className="mb-4">
                Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die &bdquo;externen Links&ldquo; auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.
              </p>
              <p className="mb-4">
                Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
              </p>
              <p className="mb-4">
                Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes &bdquo;purpose.hr&ldquo; gesetzten Links und Verweise von Fragestellern. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
              </p>
              <p className="mb-8">
                Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.
              </p>

              <h3 className="font-bold mb-4">
                Urheberrecht
              </h3>
              <p className="mb-4">
                Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf). Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt worden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="imprint-footer" className="relative w-full flex items-center justify-center px-4 sm:px-8 bg-white" style={{ paddingTop: '15px', paddingBottom: '80px' }}>
        <div className="relative w-full max-w-[1552px] flex justify-center">
          {/* Desktop Footer */}
          <div
            className="hidden lg:flex w-full max-w-[1760px] items-start justify-between px-8 xl:px-12 py-8 rounded-[50px] border border-white"
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
              <div className="font-bold mb-2">Registered Office</div>
              <div>
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
                <a href="/terms-and-conditions" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                  Terms & Conditions
                </a>
                <a href="/imprint" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                  Imprint
                </a>
                <a href="/privacy-policy" className="text-[#454545] hover:text-[#000000] transition-colors font-helvetica text-sm">
                  Privacy Policy
                </a>
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
        </div>
      </section>
    </div>
  )
}
