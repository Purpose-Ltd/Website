import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import ImprintInfo from "@/components/pages/imprint/ImprintInfo";
import React from "react";

export default function imprintPage() {
  return (
    <>
      <Header />
      <main className="min-h-dvh">
        <ImprintInfo />
      </main>
      <Footer />
    </>
  );
}
