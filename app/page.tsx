import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Hero from "@/components/pages/home/Hero";
import Individuals from "@/components/pages/home/Individuals";
import IntegrationFlow from "@/components/pages/home/IntegrationFlow";
import PoweredBy from "@/components/pages/home/PoweredBy";
import WhyWork from "@/components/pages/home/WhyWork";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <div className="bg-[linear-gradient(180deg,#EEE9FC_0%,#D3E3FF_50%,#DDFCF6_100%)]">
          <Hero />
          <PoweredBy />
        </div>
        <Individuals />
        <IntegrationFlow />
        <div className=" bg-[linear-gradient(360deg,#EEE9FC_0%,#D3E3FF_50%,#DDFCF6_100%)]">
          <WhyWork />
          <Footer />
        </div>
      </main>
    </>
  );
}
