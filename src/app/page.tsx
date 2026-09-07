import FirstView from "@/components/sections/FirstView";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";

export default function Home() {
  return (
    <main>
      <FirstView />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}
