import SectionHeading from "@/components/common/SectionHeading";
import React from "react";

export default function TermConditions() {
  const data = [
    {
      title: " Geltungsbereich",
      des: (
        <>
          Diese AGB gelten für die Website purpose.hr sowie alle über diese
          erbrachten Informations- und Buchungsleistungen (§ 305 BGB). Für
          weitere Services gelten separate Bedingungen. Abweichende
          Nutzerbedingungen werden nicht anerkannt (§ 305b BGB).
        </>
      ),
    },

    {
      title: "Anbieter",
      des: (
        <>
          Purpose UG (haftungsbeschränkt), Seidl-Kreuz-Weg 94, 85737 Ismaning.
          <br /> Vertreten durch: Lukas Faber <br /> HRB München 292052,
          USt-IdNr: DE368116002
        </>
      ),
    },
    {
      title: "Vertragsschluss",
      des: (
        <>
          Die auf der Website dargestellten Inhalte stellen unverbindliche
          Angebote dar (§ 145 BGB). Demo-Termine sind ebenfalls unverbindlich.
          Ein verbindlicher Vertragsschluss erfolgt erst durch separate
          Vereinbarung (§ 126 BGB).
        </>
      ),
    },
    {
      title: "Beta-Programm",
      des: (
        <>
          Services, die sich in der Beta-Phase befinden, werden unentgeltlich
          zur Verfügung gestellt (§ 516 BGB). Die Haftung ist auf Vorsatz und
          grobe Fahrlässigkeit beschränkt (§ 521 BGB). Das Beta-Programm kann
          jederzeit beendet werden (§ 627 BGB).
        </>
      ),
    },

    {
      title: "Nutzung",
      des: (
        <>
          Erlaubt sind: Information, Kontaktaufnahme und Terminbuchung. <br />
          Verboten sind: Scraping, Überlastung der Server sowie jegliche Form
          von Rechtsverletzungen (§ 1004 BGB, § 303a StGB).
        </>
      ),
    },

    {
      title: "Urheberrecht",
      des: (
        <>
          Alle auf der Website veröffentlichten Inhalte sind urheberrechtlich
          geschützt (§§ 2, 15, 31 UrhG). Bei Verstößen gegen das Urheberrecht
          besteht Schadensersatzpflicht (§ 97 UrhG).
        </>
      ),
    },

    {
      title: "Leistungsstörungen",
      des: (
        <>
          Für technische Störungen, die nicht zu vertreten sind, besteht keine
          Haftung (§ 276 BGB). Bei unentgeltlichen Leistungen entfällt die
          Gewährleistung (§ 521 BGB).
        </>
      ),
    },

    {
      title: "Haftung",
      des: (
        <>
          Unbeschränkte Haftung besteht bei Personenschäden sowie bei Vorsatz
          und grober Fahrlässigkeit (§ 276 BGB). Bei leichter Fahrlässigkeit
          haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten
          (Kardinalpflichten) (§ 280 BGB). Ausgeschlossen ist die Haftung für
          mittelbare und unvorhersehbare Schäden (§ 309 Nr. 7 BGB) sowie für
          externe Links (TMG § 7).
        </>
      ),
    },

    {
      title: "Datenschutz",
      des: (
        <>
          Die Datenverarbeitung erfolgt nach den Vorgaben der DSGVO und des
          BDSG. Detaillierte Informationen finden Sie in der separaten
          Datenschutzerklärung (Art. 13 DSGVO).
        </>
      ),
    },
    {
      title: "Widerrufsrecht",
      des: (
        <>
          Nutzer haben ein 14-tägiges Widerrufsrecht ohne Angabe von Gründen (§
          355 BGB). Bei unentgeltlichen Leistungen ist das Widerrufsrecht
          ausgeschlossen (§ 312g BGB) – dies gilt für das Beta-Programm.
        </>
      ),
    },

    {
      title: "AGB-Änderungen",
      des: (
        <>
          Änderungen dieser AGB werden in Textform mitgeteilt. Nutzer haben eine
          Widerspruchsfrist von 14 Tagen (§ 305 BGB). Schweigen gilt als
          Zustimmung.
        </>
      ),
    },

    {
      title: "Streitbeilegung",
      des: (
        <>
          Eine Teilnahme an Verbraucherschlichtungsverfahren erfolgt nicht (§ 36
          VSBG). Vor Klageerhebung wird eine Mediation empfohlen (§ 15a EGZPO).
        </>
      ),
    },

    {
      title: "Verjährung",
      des: (
        <>
          Die Verjährungsfrist beträgt drei Jahre (§ 195 BGB) und beginnt mit
          dem Ende des Jahres, in dem der Anspruch entstanden ist (§ 199 Abs. 1
          BGB).
        </>
      ),
    },
    {
      title: "Schlussbestimmungen",
      des: (
        <>
          Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
          Gerichtsstand ist München (§ 17, 38 ZPO), für Verbraucher gilt § 29c
          ZPO. Sollten einzelne Bestimmungen unwirksam sein, bleibt die
          Wirksamkeit der übrigen Bestimmungen unberührt (§ 306 BGB).
          Vertragssprache ist Deutsch.
        </>
      ),
    },
  ];
  return (
    <section className="xl:pt-47.5 pb-25 pt-30 md:pt-30">
      <div className="container flex flex-col md:gap-13.75 gap-8">
        <SectionHeading>Terms & Conditions</SectionHeading>
        <div className="flex flex-col md:gap-7.5 gap-5">
          {data.map((it, idx) => (
            <div key={idx} className="flex flex-col md:gap-6 gap-4">
              <h3 className="text-[#454545] text-xl md:text-2xl font-dm-sans font-bold leading-[120%]">
                § {idx + 1} {it.title}
              </h3>
              {it.des && (
                <p className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]">
                  {it.des}
                </p>
              )}
            </div>
          ))}
          <p className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]">
            Stand: 20.10.2025 | Version: 1.0
          </p>
        </div>
      </div>
    </section>
  );
}
