import FirstView from "@/components/sections/FirstView";
import FinalSection from "@/components/sections/FinalSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";

export default function Home() {
  return (
    <main>
      <FirstView />
      <ProblemSection />
      <SolutionSection />
      <FinalSection />
    </main>
  );
}
