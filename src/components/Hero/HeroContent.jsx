const HeroContent = () => {
  return (
    <div
      className="
        relative
        z-10

        flex
        min-h-screen
        flex-col
        items-center
        justify-center

        px-5
        pt-24

        text-center

        sm:px-6
        sm:pt-20
      "
    >
      {/* Main Heading */}
      <h1
        className="
          max-w-5xl

          text-[3.25rem]
          font-semibold

          leading-[0.95]
          tracking-[-0.045em]

          text-[#193A7E]

          sm:text-6xl
          md:text-7xl
          lg:text-9xl
        "
      >
        Paper Sahi Toh,

        <br />

        <span className="font-normal italic text-[#193A7E]/80">
          Property Sahi.
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-6

          max-w-[330px]

          text-sm
          font-medium
          leading-relaxed

          text-[#294A76]

          sm:mt-7
          sm:max-w-xl
          sm:text-lg
        "
      >
        Your Trusted Partner For Legal Property Documentation.
      </p>

      {/* CTA */}
      <a
        href="/contact"
        className="
          mt-7

          flex
          items-center
          gap-2

          rounded-full

          bg-[#193A7E]

          px-6
          py-3.5

          text-sm
          font-semibold
          text-white

          shadow-[0_10px_30px_rgba(25,58,126,0.25)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-[#123064]
          hover:shadow-[0_15px_35px_rgba(25,58,126,0.30)]

          sm:mt-8
          sm:px-7
        "
      >
        Get In Touch

        <span>→</span>
      </a>
    </div>
  );
};

export default HeroContent;