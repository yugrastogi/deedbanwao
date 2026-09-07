import bgImage from "../../assets/images/bg_image.png";

const HeroBackground = () => {
  return (
    <>
      {/* Main Background */}
      <div
        className="
          absolute
          inset-0
          scale-[1.02]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Subtle White Wash */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Soft Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[380px]
          w-[500px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/20

          blur-[100px]

          sm:h-[450px]
          sm:w-[600px]
          sm:blur-[110px]

          md:h-[500px]
          md:w-[700px]
          md:blur-[115px]

          lg:h-[600px]
          lg:w-[800px]
          lg:blur-[120px]
        "
      />
    </>
  );
};

export default HeroBackground;