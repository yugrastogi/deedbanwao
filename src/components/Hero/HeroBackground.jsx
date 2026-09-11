import {
  FaBuilding,
  FaCheck,
  FaFileContract,
  FaLocationDot,
  FaPenNib,
  FaShieldHalved,
} from "react-icons/fa6";

const HeroBackground = () => {
  return (
    <>
      {/* =====================================================
          CLEAN WHITE BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-white" />

      {/* =====================================================
          VERY SUBTLE AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[5%]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#193A7E]/[0.035]

          blur-[100px]

          sm:right-[-120px]
          sm:h-[600px]
          sm:w-[600px]

          lg:right-[-80px]
          lg:top-[10%]
          lg:h-[700px]
          lg:w-[700px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          bottom-[-200px]

          h-[450px]
          w-[450px]

          rounded-full

          bg-[#193A7E]/[0.025]

          blur-[100px]
        "
      />

      {/* =====================================================
          RIGHT SIDE GRAPHICS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-1/2

          hidden

          h-[520px]
          w-[520px]

          -translate-y-1/2

          lg:block
          xl:right-[7%]
          xl:h-[570px]
          xl:w-[570px]
        "
      >
        {/* Soft circular outline */}
        <div
          className="
            absolute
            inset-[8%]

            rounded-full

            border
            border-[#193A7E]/[0.07]
          "
        />

        <div
          className="
            absolute
            inset-[18%]

            rounded-full

            border
            border-[#193A7E]/[0.05]
          "
        />

        {/* Small orbit dots */}
        <div
          className="
            absolute
            right-[11%]
            top-[18%]

            h-2
            w-2

            rounded-full

            bg-[#193A7E]/30
          "
        />

        <div
          className="
            absolute
            left-[13%]
            bottom-[22%]

            h-1.5
            w-1.5

            rounded-full

            bg-[#193A7E]/20
          "
        />
      </div>

      {/* =====================================================
          MOBILE VISUAL BACKDROP
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-1/2

          h-[350px]
          w-[350px]

          -translate-x-1/2

          rounded-full

          bg-[#193A7E]/[0.025]

          blur-[80px]

          lg:hidden
        "
      />
    </>
  );
};

export default HeroBackground;