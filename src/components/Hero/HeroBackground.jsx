import heroBackground from "../../assets/images/hero-background.jpg";

const HeroBackground = () => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        bg-white
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          opacity-30
        "
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
    </div>
  );
};

export default HeroBackground;
