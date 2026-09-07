import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <HeroContent />
    </section>
  );
};

export default Hero;