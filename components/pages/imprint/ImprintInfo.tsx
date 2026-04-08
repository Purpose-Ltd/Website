import SectionHeading from "@/components/common/SectionHeading";
import React from "react";

export default function ImprintInfo() {
  const data = [
    {
      title: "Legal",
      des: (
        <>
          Purpose Technologies UG (haftungsbeschränkt) <br />
          Ansprengerstraße 8 <br />
          80803 München <br />
          Deutschland
        </>
      ),
    },
    {
      title: "Haftungsausschluss – Disclaimer",
      des: "",
    },
    {
      title: "Haftung für Inhalte",
      des: (
        <>
          Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und
          nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit
          und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. <br /> Eine diesbezügliche Haftung ist jedoch erst
          ab dem Zeitpunkt der Kenntniserlangung einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von den o.g.
          Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
        </>
      ),
    },
    {
      title: "Haftungsbeschränkung für externe Links",
      des: (
        <>
          Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die
          Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir
          keinen Einfluss. Daher können wir für die „externen Links“ auch keine
          Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der
          externen Links sind die jeweilige Anbieter oder Betreiber (Urheber)
          der Seiten verantwortlich. <br /> Die externen Links wurden zum
          Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und
          waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten.
          Eine ständige inhaltliche Überprüfung der externen Links ist ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei
          direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die
          außerhalb unseres Verantwortungsbereichs liegen, würde eine
          Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn
          wir von den Inhalten Kenntnis erlangen und es uns technisch möglich
          und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu
          verhindern. <br /> Diese Haftungsausschlusserklärung gilt auch
          innerhalb des eigenen Internetauftrittes „purpose.hr“ gesetzten Links
          und Verweise von Fragestellern. Für illegale, fehlerhafte oder
          unvollständige Inhalte und insbesondere für Schäden, die aus der
          Nutzung oder Nichtnutzung solcherart dargestellten Informationen
          entstehen, haftet allein der Diensteanbieter der Seite, auf welche
          verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
          Veröffentlichung lediglich verweist. <br /> Werden uns
          Rechtsverletzungen bekannt, werden die externen Links durch uns
          unverzüglich entfernt.
        </>
      ),
    },
    {
      title: "Urheberrecht",
      des: (
        <>
          Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen
          dem deutschen Urheberrecht
          (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf). Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          des geistigen Eigentums in ideeller und materieller Sicht des Urhebers
          außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen
          schriftlichen Zustimmung des jeweiligen Urhebers i.S.d.
          Urhebergesetzes
          (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf).
          Downloads und Kopien dieser Seite sind nur für den privaten und nicht
          kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite
          nicht von uns erstellt worden, sind die Urheberrechte Dritter zu
          beachten. Die Inhalte Dritter werden als solche kenntlich gemacht.
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
          werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Inhalte unverzüglich
          entfernen.
        </>
      ),
    },
  ];
  return (
    <section className="xl:pt-47.5 pb-25 pt-30 md:pt-30">
      <div className="container flex flex-col md:gap-13.75 gap-8">
        <SectionHeading>Imprint</SectionHeading>
        <div className="flex flex-col md:gap-7.5 gap-5">
          {data.map((it, idx) => (
            <div key={idx} className="flex flex-col md:gap-6 gap-4">
              <h3 className="text-[#454545] text-xl md:text-2xl font-dm-sans font-bold leading-[120%]">
                {it.title}
              </h3>
              {it.des && (
                <p className="text-[#454545] text-base md:text-xl font-dm-sans font-normal leading-[120%]">
                  {it.des}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
