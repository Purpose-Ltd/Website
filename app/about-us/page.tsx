import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import AboutUs from "@/components/pages/about-us/Index";
import React from "react";

export default function aboutUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-dvh overflow-hidden">
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
