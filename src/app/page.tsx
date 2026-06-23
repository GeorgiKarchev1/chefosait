import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { DiggingDivider } from "@/components/sections/digging-divider";
import { WhyUs } from "@/components/sections/why-us";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Portfolio />
      <DiggingDivider />
      <WhyUs />
      <Contact />
    </>
  );
}
