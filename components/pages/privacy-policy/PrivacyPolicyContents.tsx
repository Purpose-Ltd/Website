import SectionHeading from "@/components/common/SectionHeading";
import React from "react";

export default function PrivacyPolicyContents() {
  return (
    <section className="xl:pt-47.5 pb-25 pt-30 md:pt-30">
      <div className="container flex flex-col md:gap-13.75 gap-8">
        <SectionHeading>Privacy Policy</SectionHeading>
        <div className="flex flex-col md:gap-6.25 gap-5">
          {privacySections.map((section, index) => (
            <div key={index} className="flex flex-col md:gap-6 gap-4">
              <h2 className="text-[#454545] text-xl md:text-2xl font-dm-sans font-bold leading-[120%]">
                {section.title}
              </h2>
              {section.contentBlock && (
                <div>
                  {section.contentBlock.map((it, idx) => (
                    <p
                      key={idx}
                      className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]"
                    >
                      {it}
                    </p>
                  ))}
                </div>
              )}

              {/* Description */}
              {section.description && (
                <p className=" text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]">
                  {section.description}
                </p>
              )}

              {/* List */}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2">
                  {section.list.map((item, i) => (
                    <li
                      className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]"
                      key={i}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Nested Items */}
              {section.items &&
                section.items.map((item, i) => (
                  <div key={i} className="flex flex-col md:gap-6 gap-4">
                    <h3 className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]">
                      {item.subtitle}
                    </h3>
                    <ul className="space-y-0.5">
                      {item.content.map((text, j) => (
                        <li
                          className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]"
                          key={j}
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}

          <p className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]">
            Stand: 20.10.2025
          </p>
        </div>
      </div>
    </section>
  );
}
const privacySections = [
  {
    title: "I. Verantwortlicher",
    contentBlock: [
      "Purpose UG (haftungsbeschränkt)",
      "Seidl-Kreuz-Weg 94",
      "85737 Ismaning",
      "Deutschland",
      <>
        <br />
      </>,
      "Telefon: +49 1522 77 32 940",
      "E-Mail: hello@purpose.hr",
      "Vertreten durch: Lukas Faber",
    ],
  },

  {
    title: "II. Datenverarbeitung auf dieser Website",
    items: [
      {
        subtitle: "2.1 Technische Daten",
        content: [
          "Automatisch erfasst: IP-Adresse, Browser-Typ, Betriebssystem, besuchte Seiten, Zugriffszeitpunkt",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO",
          "Zweck: Website-Betrieb und Sicherheit",
          "Speicherdauer: 7 Tage",
        ],
      },
      {
        subtitle: "2.2 Kontaktdaten",
        content: [
          "Bei Demo-Anfragen: Name, E-Mail, Unternehmen, Nachricht",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO",
          "Speicherdauer: 30 Tage nach Anfrage",
        ],
      },
    ],
  },

  {
    title: "III. Externe Tools",
    items: [
      {
        subtitle: "3.1 Google Analytics",
        content: [
          "Zweck: Website-Analyse",
          "Daten: Anonymisierte IP, Nutzungsverhalten, Browser-Informationen",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)",
          "Datenübertragung: USA (EU-Standardvertragsklauseln)",
          "Widerspruch: Cookie-Banner",
        ],
      },
      {
        subtitle: "3.2 Calendly",
        content: [
          "Zweck: Demo-Terminbuchung",
          "Daten: Name, E-Mail, Terminpräferenzen",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO",
          "Datenübertragung: USA",
        ],
      },
    ],
  },

  {
    title: "IV. Cookies",
    description:
      "Wir verwenden technisch notwendige und Analyse-Cookies. Ihre Einwilligung können Sie über den Cookie-Banner verwalten.",
  },

  {
    title: "V. Ihre Rechte (Art. 15–21 DSGVO)",
    list: [
      "Auskunft über gespeicherte Daten",
      "Berichtigung unrichtiger Daten",
      "Löschung unter bestimmten Voraussetzungen",
      "Einschränkung der Verarbeitung",
      "Datenübertragbarkeit",
      "Widerspruch gegen Verarbeitung",
      "Widerruf erteilter Einwilligungen",
    ],
  },

  {
    title: "VI. Beschwerderecht",
    description:
      "Bei Beschwerden wenden Sie sich an die zuständige Datenschutzaufsichtsbehörde Ihres Bundeslandes.",
  },
];
