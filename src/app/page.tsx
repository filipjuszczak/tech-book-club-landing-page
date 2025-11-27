import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { BenefitsSections } from '@/components/benefits-section';
import { JourneySection } from '@/components/journey-section';
import { MembershipSection } from '@/components/membership-section';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <div className="hero-section-wrapper max-w-360 mx-auto pb-20 rounded-bl-2xl rounded-br-2xl">
        <div className="px-4 md:px-8 xl:px-32 pt-6 md:pt-8">
          <Header />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-360 mx-auto px-4 md:px-8 xl:px-32">
        <main className="space-y-16 md:space-y-20 xl:space-y-32">
          <BenefitsSections />
          <JourneySection />
          <MembershipSection />
          <Testimonials />
        </main>
      </div>
      <div className="max-w-360 mx-auto">
        <Footer />
      </div>
    </>
  );
}
