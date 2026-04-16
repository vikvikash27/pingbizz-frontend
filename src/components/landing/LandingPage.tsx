import NavBar from "./NavBar";
import Hero from "./sections/Hero";
import SocialProof from "./sections/SocialProof";
import ProblemSolution from "./sections/ProblemSolution";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import UseCases from "./sections/UseCases";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import CustomPrice from "./sections/CustomPrice";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070A0F] text-white">
      {/* subtle background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#25D366]/12 blur-[120px]" />
        <div className="absolute top-[20%] right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-500/12 blur-[120px]" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <NavBar />

      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Pricing />
        <CustomPrice />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
