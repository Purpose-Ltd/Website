import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import PrivacyPolicyContents from "@/components/pages/privacy-policy/PrivacyPolicyContents";
import React from "react";

export default function privacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-dvh">
        <PrivacyPolicyContents />
      </main>
      <Footer />
    </>
  );
}
