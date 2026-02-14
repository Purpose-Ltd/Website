'use client'

import Link from 'next/link'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)' }}>
      {/* Header - Non-sticky */}
      <div className="flex justify-center px-4 pt-4">
        <div className="relative w-full max-w-[1552px] h-24">
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

      {/* Terms & Conditions Content Section */}
      <section className="relative w-full flex items-center justify-center px-4 sm:px-8 py-10" style={{ background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)' }}>
        <div className="relative w-full max-w-[1552px] flex justify-center">
          {/* Content Box */}
          <div
            className="w-full max-w-[1760px] flex flex-col items-center px-4 sm:px-8 lg:px-12"
            style={{
              paddingTop: '40px',
              paddingBottom: '60px'
            }}
          >
            {/* Title */}
            <h1 className="text-center font-bold text-[#454545] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-[120%]">
              Terms & Conditions
            </h1>

            {/* Content */}
            <div className="w-full max-w-4xl mt-12 sm:mt-16 lg:mt-[100px] px-4 sm:px-8 lg:px-0 text-[#454545] font-helvetica text-base sm:text-lg lg:text-xl leading-norma" style={{ marginLeft: '-600px' }}>
              <p className="font-bold mb-2">§ 1 Geltungsbereich</p>
              <p className="mb-6">
                Diese AGB gelten für die Website purpose.hr sowie alle über diese erbrachten Informations- und Buchungsleistungen (§ 305 BGB). Für weitere Services gelten separate Bedingungen. Abweichende Nutzerbedingungen werden nicht anerkannt (§ 305b BGB).
              </p>

              <p className="font-bold mb-2">§ 2 Anbieter</p>
              <p className="mb-6">
                Purpose UG (haftungsbeschränkt), Ansprengerstraße 8, 80803 München<br />
                Vertreten durch: Lukas Faber<br />
                HRB München 292052, USt-IdNr: DE368116002
              </p>

              <p className="font-bold mb-2">§ 3 Vertragsschluss</p>
              <p className="mb-6">
                Die auf der Website dargestellten Inhalte stellen unverbindliche Angebote dar (§ 145 BGB). Demo-Termine sind ebenfalls unverbindlich. Ein verbindlicher Vertragsschluss erfolgt erst durch separate Vereinbarung (§ 126 BGB).
              </p>

              <p className="font-bold mb-2">§ 4 Beta-Programm</p>
              <p className="mb-6">
                Services, die sich in der Beta-Phase befinden, werden unentgeltlich zur Verfügung gestellt (§ 516 BGB). Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt (§ 521 BGB). Das Beta-Programm kann jederzeit beendet werden (§ 627 BGB).
              </p>

              <p className="font-bold mb-2">§ 5 Nutzung</p>
              <p className="mb-6">
                Erlaubt sind: Information, Kontaktaufnahme und Terminbuchung.<br />
                Verboten sind: Scraping, Überlastung der Server sowie jegliche Form von Rechtsverletzungen (§ 1004 BGB, § 303a StGB).
              </p>

              <p className="font-bold mb-2">§ 6 Urheberrecht</p>
              <p className="mb-6">
                Alle auf der Website veröffentlichten Inhalte sind urheberrechtlich geschützt (§§ 2, 15, 31 UrhG). Bei Verstößen gegen das Urheberrecht besteht Schadensersatzpflicht (§ 97 UrhG).
              </p>

              <p className="font-bold mb-2">§ 7 Leistungsstörungen</p>
              <p className="mb-6">
                Für technische Störungen, die nicht zu vertreten sind, besteht keine Haftung (§ 276 BGB). Bei unentgeltlichen Leistungen entfällt die Gewährleistung (§ 521 BGB).
              </p>

              <p className="font-bold mb-2">§ 8 Haftung</p>
              <p className="mb-6">
                Unbeschränkte Haftung besteht bei Personenschäden sowie bei Vorsatz und grober Fahrlässigkeit (§ 276 BGB). Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) (§ 280 BGB). Ausgeschlossen ist die Haftung für mittelbare und unvorhersehbare Schäden (§ 309 Nr. 7 BGB) sowie für externe Links (TMG § 7).
              </p>

              <p className="font-bold mb-2">§ 9 Datenschutz</p>
              <p className="mb-6">
                Die Datenverarbeitung erfolgt nach den Vorgaben der DSGVO und des BDSG. Detaillierte Informationen finden Sie in der separaten Datenschutzerklärung (Art. 13 DSGVO).
              </p>

              <p className="font-bold mb-2">§ 10 Widerrufsrecht</p>
              <p className="mb-6">
                Nutzer haben ein 14-tägiges Widerrufsrecht ohne Angabe von Gründen (§ 355 BGB). Bei unentgeltlichen Leistungen ist das Widerrufsrecht ausgeschlossen (§ 312g BGB) – dies gilt für das Beta-Programm.
              </p>

              <p className="font-bold mb-2">§ 11 AGB-Änderungen</p>
              <p className="mb-6">
                Änderungen dieser AGB werden in Textform mitgeteilt. Nutzer haben eine Widerspruchsfrist von 14 Tagen (§ 305 BGB). Schweigen gilt als Zustimmung.
              </p>

              <p className="font-bold mb-2">§ 12 Streitbeilegung</p>
              <p className="mb-6">
                Eine Teilnahme an Verbraucherschlichtungsverfahren erfolgt nicht (§ 36 VSBG). Vor Klageerhebung wird eine Mediation empfohlen (§ 15a EGZPO).
              </p>

              <p className="font-bold mb-2">§ 13 Verjährung</p>
              <p className="mb-6">
                Die Verjährungsfrist beträgt drei Jahre (§ 195 BGB) und beginnt mit dem Ende des Jahres, in dem der Anspruch entstanden ist (§ 199 Abs. 1 BGB).
              </p>

              <p className="font-bold mb-2">§ 14 Schlussbestimmungen</p>
              <p className="mb-6">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist München (§ 17, 38 ZPO), für Verbraucher gilt § 29c ZPO. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt (§ 306 BGB). Vertragssprache ist Deutsch.
              </p>

              <p className="mt-8">
                Stand: 02/2026 | Version: 1.0
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}
