import {
  FaArrowRight,
  FaCalculator,
  FaWhatsapp,
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
  // WHATSAPP US — DIRECT CHAT LINK
  // =====================================================
  // Same number used in HeroContent.jsx's WhatsApp submission.

  const handleWhatsApp = () => {
    const whatsappUrl =
      "https://wa.me/917983320163?text=" +
      encodeURIComponent(
        "Hello DeedBanwao, I need help with my property documents."
      );

    window.open(
      whatsappUrl,
      "_blank"
    );
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="
        relative
        overflow-hidden

        bg-white

        px-6
        py-16

        sm:px-8
        sm:py-20

        lg:px-12
        lg:py-24
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

            rounded-[28px]

            bg-[#0B2348]

            px-6
            py-10

            shadow-[0_30px_70px_rgba(11,35,72,0.28)]

            sm:rounded-[36px]
            sm:px-12
            sm:py-14

            lg:px-16
            lg:py-16
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
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            {/* ===============================================
                TEXT
            =============================================== */}

            <div className="min-w-0">
              <h2
                id="cta-heading"
                className="
                  max-w-xl

                  text-[2rem]
                  font-semibold

                  leading-[1.05]
                  tracking-[-0.04em]

                  text-white

                  sm:text-[2.75rem]

                  lg:text-5xl
                "
              >
                Need help with your
                <br className="hidden sm:block" />{" "}
                property documents?
              </h2>

              <p
                className="
                  mt-3

                  max-w-md

                  text-sm
                  leading-6

                  text-white/55

                  sm:mt-4
                  sm:text-lg
                  sm:leading-7
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
                gap-4

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
                  h-14

                  items-center
                  justify-center
                  gap-2.5

                  rounded-full

                  bg-white

                  px-7

                  text-sm
                  font-semibold
                  text-[#193A7E]

                  shadow-[0_10px_28px_rgba(0,0,0,0.14)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-white/90

                  sm:h-16
                  sm:px-9
                  sm:text-base
                "
              >
                <FaCalculator className="text-sm" />

                Get Estimate

                <FaArrowRight
                  className="
                    text-sm

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* WHATSAPP US */}

              <button
                type="button"
                onClick={handleWhatsApp}
                className="
                  group

                  flex
                  h-14

                  items-center
                  justify-center
                  gap-2.5

                  rounded-full

                  bg-[#25D366]

                  px-7

                  text-sm
                  font-semibold
                  text-white

                  shadow-[0_10px_28px_rgba(37,211,102,0.25)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#20BD5A]

                  sm:h-16
                  sm:px-9
                  sm:text-base
                "
              >
                <FaWhatsapp className="text-base" />

                WhatsApp Us

                <FaArrowRight
                  className="
                    text-sm

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