import {
  FaArrowRight,
  FaCalculator,
  FaCommentDots,
} from "react-icons/fa";

const CTA = () => {
  // =====================================================
  // GET ESTIMATE — OPEN ENQUIRY FORM ON HERO + SCROLL UP
  // =====================================================
  // Mirrors the pattern used in ServiceCard.jsx / HeroContent.jsx:
  // dispatch the same global event the Hero listens for, then
  // scroll the Hero section into view so the form is visible.

  const handleGetEstimate = () => {
    window.dispatchEvent(
      new Event("open-enquiry-form")
    );

    const heroSection =
      document.getElementById("home");

    if (heroSection) {
      requestAnimationFrame(() => {
        heroSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  // =====================================================
  // GET IN TOUCH — SCROLL TO CONTACT SECTION
  // =====================================================
  // Assumes the Contact section (linked in the nav as "Contact")
  // has id="contact". Update the id below if yours differs.

  const handleGetInTouch = () => {
    const contactSection =
      document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="
        relative
        overflow-hidden

        bg-white

        px-6
        py-14

        sm:px-8
        sm:py-16

        lg:px-12
        lg:py-20
      "
    >
      <div
        className="
          relative

          mx-auto
          max-w-[1560px]
        "
      >
        {/* ===================================================
            CARD
        =================================================== */}

        <div
          className="
            relative
            overflow-hidden

            rounded-[24px]

            bg-[#0B2348]

            px-6
            py-7

            shadow-[0_30px_70px_rgba(11,35,72,0.28)]

            sm:rounded-[32px]
            sm:px-10
            sm:py-9

            lg:px-12
            lg:py-10
          "
        >
          {/* =================================================
              BACKGROUND GLOW — matches Process section styling
          ================================================= */}

          <div
            className="
              pointer-events-none

              absolute
              -right-40
              -top-40

              h-[350px]
              w-[350px]

              rounded-full

              bg-white/[0.03]

              blur-[100px]

              sm:h-[450px]
              sm:w-[450px]
            "
          />

          <div
            className="
              pointer-events-none

              absolute
              -left-40
              -bottom-40

              h-[300px]
              w-[300px]

              rounded-full

              bg-[#193A7E]/40

              blur-[85px]

              sm:h-[400px]
              sm:w-[400px]
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10

              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-8
            "
          >
            {/* ===============================================
                TEXT
            =============================================== */}

            <div className="min-w-0">
              <h2
                id="cta-heading"
                className="
                  whitespace-normal

                  text-xl
                  font-semibold

                  leading-[1.15]
                  tracking-[-0.03em]

                  text-white

                  sm:whitespace-nowrap
                  sm:text-[1.85rem]

                  lg:text-3xl
                "
              >
                Need help with your property documents?
              </h2>

              <p
                className="
                  mt-2

                  max-w-md

                  text-xs
                  leading-5

                  text-white/55

                  sm:mt-2.5
                  sm:text-base
                  sm:leading-6
                "
              >
                Tell us what you need and get a clear next step.
              </p>
            </div>

            {/* ===============================================
                BUTTONS
            =============================================== */}

            <div
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center

                lg:shrink-0
              "
            >
              {/* GET ESTIMATE */}

              <button
                type="button"
                onClick={handleGetEstimate}
                className="
                  group

                  flex
                  h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  bg-white

                  px-6

                  text-sm
                  font-semibold
                  text-[#193A7E]

                  shadow-[0_10px_28px_rgba(0,0,0,0.14)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-white/90

                  sm:h-14
                  sm:px-7
                "
              >
                <FaCalculator className="text-xs" />

                Get Estimate

                <FaArrowRight
                  className="
                    text-xs

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* GET IN TOUCH */}

              <button
                type="button"
                onClick={handleGetInTouch}
                className="
                  group

                  flex
                  h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  border
                  border-[#4FB3BF]/40

                  bg-[#4FB3BF]/[0.08]

                  px-6

                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#4FB3BF]/70
                  hover:bg-[#4FB3BF]/[0.16]
                  hover:text-white

                  sm:h-14
                  sm:px-7
                "
              >
                <FaCommentDots className="text-xs" />

                Get in Touch

                <FaArrowRight
                  className="
                    text-xs

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;