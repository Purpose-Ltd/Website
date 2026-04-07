import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import TermConditions from "@/components/pages/terms-conditions/TermsConditions";

export default function termConditionPage() {
  return (
    <>
      <Header />
      <main className="min-h-dvh">
        <TermConditions />
      </main>
      <Footer />
    </>
  );
}
