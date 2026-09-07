import { useState } from "react";

import FAQItem from "./FAQItem";
import { faqData } from "./faq.data";

const FAQ = () => {
  // =====================================================
  // ALL FAQS CLOSED BY DEFAULT
  // =====================================================

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden

        bg-[#F5F7FA]

        px-5
        py-24

        sm:px-6
        sm:py-32

        lg:py-40
      "
    >
      {/* =====================================================
          CIRCULAR GRADIENT — MAIN
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_10%_15%,#D5DCE4_0%,#E8ECF1_25%,transparent_55%)]
        "
      />

      {/* =====================================================
          CIRCULAR GRADIENT — RIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_90%_25%,#DCE2E8_0%,#EEF1F4_25%,transparent_55%)]
        "
      />

      {/* =====================================================
          CIRCULAR GRADIENT — BOTTOM
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_55%_100%,#DCE2E8_0%,#EEF1F4_25%,transparent_58%)]
        "
      />

      {/* =====================================================
          SOFT CENTER LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-[450px]
          w-[650px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/60

          blur-[100px]

          sm:h-[600px]
          sm:w-[900px]
          sm:blur-[120px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-5xl
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            mx-auto
            max-w-3xl

            text-center
          "
        >
          {/* ===============================================
              SECTION LABEL
          =============================================== */}

          <div
            className="
              flex
              items-center
              justify-center

              gap-3

              sm:gap-5
            "
          >
            {/* LEFT LINE */}

            <span
              className="
                h-px
                w-8
                shrink-0

                bg-gradient-to-r
                from-transparent
                via-[#193A7E]/10
                to-[#193A7E]/20

                sm:w-20

                lg:w-24
              "
            />

            {/* LABEL */}

            <span
              className="
                shrink-0

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]

                text-[#193A7E]/60

                sm:text-[15px]
                sm:tracking-[0.3em]
              "
            >
              FAQs
            </span>

            {/* RIGHT LINE */}

            <span
              className="
                h-px
                w-8
                shrink-0

                bg-gradient-to-l
                from-transparent
                via-[#193A7E]/10
                to-[#193A7E]/20

                sm:w-20

                lg:w-24
              "
            />
          </div>

          {/* ===============================================
              HEADING
          =============================================== */}

          <h2
            className="
              mt-6

              text-[2.7rem]
              font-semibold

              leading-[0.94]
              tracking-[-0.05em]

              text-[#193A7E]

              sm:mt-7
              sm:text-5xl

              md:text-6xl

              lg:text-7xl
            "
          >
            Questions?
            <br />

            <span
              className="
                font-normal
                italic

                text-[#193A7E]/80
              "
            >
              We make it simple.
            </span>
          </h2>

          {/* ===============================================
              DESCRIPTION
          =============================================== */}

          <p
            className="
              mx-auto

              mt-5

              max-w-[340px]

              text-sm
              leading-6

              text-[#294A76]/65

              sm:mt-6
              sm:max-w-2xl
              sm:text-lg
              sm:leading-8
            "
          >
            Common questions people ask before getting
            their property documents prepared.
          </p>
        </div>

        {/* ===================================================
            FAQ LIST
        =================================================== */}

        <div
          className="
            mt-14

            border-t
            border-[#193A7E]/10

            sm:mt-24
          "
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                handleToggle(index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;