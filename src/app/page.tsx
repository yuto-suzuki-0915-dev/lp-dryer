import FirstView from "@/components/sections/FirstView";
import ClosingSection from "@/components/sections/ClosingSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ReasonSection from "@/components/sections/ReasonSection";
import SolutionSection from "@/components/sections/SolutionSection";
import LpHeader from "@/components/ui/LpHeader";

export default function Home() {
  const purchaseUrl = process.env.NEXT_PUBLIC_PURCHASE_URL || "/purchase";

  return (
    <>
      <LpHeader />
      <main>
        <FirstView purchaseUrl={purchaseUrl} />
        <ProblemSection />
        <SolutionSection />
        <ReasonSection />
        <ClosingSection purchaseUrl={purchaseUrl} />
      </main>
    </>
  );
}
