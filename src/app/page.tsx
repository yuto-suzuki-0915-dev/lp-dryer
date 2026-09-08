import FirstView from "@/components/sections/FirstView";
import FinalSection from "@/components/sections/FinalSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ReasonSection from "@/components/sections/ReasonSection";
import SolutionSection from "@/components/sections/SolutionSection";
import LpHeader from "@/components/ui/LpHeader";

export default function Home() {
  return (
    <>
      <LpHeader />
      <main>
        <FirstView />
        <ProblemSection />
        <SolutionSection />
        <ReasonSection />
        <FinalSection />
      </main>
    </>
  );
}
