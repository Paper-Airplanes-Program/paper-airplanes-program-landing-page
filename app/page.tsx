import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Hero } from "@/components/landing/sections/hero";
import { Mission } from "@/components/landing/sections/mission";
import { Programs } from "@/components/landing/sections/programs";
import { HowItWorks } from "@/components/landing/sections/how-it-works";
import { Impact } from "@/components/landing/sections/impact";
import { Voices } from "@/components/landing/sections/voices";
import { Portal } from "@/components/landing/sections/portal";
import { Involved } from "@/components/landing/sections/involved";
import { Partners } from "@/components/landing/sections/partners";
import { ClosingCta } from "@/components/landing/sections/closing-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Programs />
        <HowItWorks />
        <Impact />
        <Voices />
        <Portal />
        <Involved />
        <Partners />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
