import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { DiggingDivider } from "@/components/sections/digging-divider";
import { WhyUs } from "@/components/sections/why-us";
import { Contact } from "@/components/sections/contact";
import { Process } from "@/components/sections/process";
import { Introduction } from "@/components/sections/introduction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Introduction />
      <DiggingDivider />
      <Contact />
    </>
  );
}
