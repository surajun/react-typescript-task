import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <main
      id="contact"
      className="overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white"
    >
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-7xl text-center">
          {/* Small badge above the heading. */}
          <HeroBadge />

          {/* Main hero heading. */}
          <HeroTitle />

          {/* Supporting text. */}
          <HeroDescription />

          {/* Primary + secondary calls to action. */}
          <HeroButtons />

          {/* Dashboard preview from the supplied reference. */}
          <HeroImage />

          {/* Four statistics cards. */}
          <HeroStats />
        </div>
      </section>
    </main>
  );
}

export default Hero;