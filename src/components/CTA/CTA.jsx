import {
  FaArrowRight,
  FaCalculator,
  FaCommentDots,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const CTA = () => {
// =====================================================
// GET ESTIMATE — OPEN ENQUIRY FORM ON HERO + SCROLL UP
// =====================================================
// Mirrors the pattern used in ServiceCard.jsx / HeroContent.jsx:
// dispatch the same global event the Hero listens for, then
// scroll the Hero section into view so the form is visible.

const handleGetEstimate = () => {
  window.dispatchEvent(new Event("open-enquiry-form"));

  // Let event-driven UI updates settle before scrolling to the form card.
  window.setTimeout(() => {
    const enquiryForm = document.getElementById("enquiry-form");
    if (!enquiryForm) return;

    // Leave room for the fixed navbar/announcement strip so the
    // card's top padding and "QUICK ENQUIRY" label stay visible.
    const top = enquiryForm.getBoundingClientRect().top + window.scrollY - 132;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, 120);
};

// =====================================================
// GET IN TOUCH — GO TO CONTACT PAGE
// =====================================================

const navigate = useNavigate();

const handleGetInTouch = () => {
  navigate("/contact");
};

return (
<section
aria-labelledby="cta-heading"
className="
relative
overflow-hidden

bg-[#EAF2F9]

px-6
py-12

sm:px-8
sm:py-14

lg:px-12
lg:py-16
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

        bg-[#193A7E]

        px-6
        py-7

        shadow-[0_30px_70px_rgba(25,58,126,0.28)]

        sm:rounded-[32px]
        sm:px-10
        sm:py-9

        lg:px-12
        lg:py-10
      "
    >
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

            Get Free Estimate

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
