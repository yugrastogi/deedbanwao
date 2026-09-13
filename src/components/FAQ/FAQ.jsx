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
      aria-labelledby="faq-heading"
      className="
        relative
        overflow-hidden

        bg-white

        px-6
        py-28

        sm:px-8
        sm:py-36

        lg:py-44
      "
    >
      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-6xl
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            mx-auto
            max-w-4xl

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

                sm:w-24

                lg:w-28
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

                sm:text-base
                sm:tracking-[0.32em]
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

                sm:w-24

                lg:w-28
              "
            />
          </div>

          {/* ===============================================
              HEADING
          =============================================== */}

          <h2
            id="faq-heading"
            className="
              mt-6

              text-[2.9rem]
              font-semibold

              leading-[0.94]
              tracking-[-0.05em]

              text-[#193A7E]

              sm:mt-8
              sm:text-6xl

              md:text-7xl

              lg:text-8xl
            "
          >
            Questions?
            <br />

            <span
              className="
                font-normal
                italic

                text-[#16A66A]
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

              max-w-[380px]

              text-[15px]
              leading-6

              text-[#294A76]/65

              sm:mt-7
              sm:max-w-3xl
              sm:text-xl
              sm:leading-9
            "
          >
            Find answers to common questions about property
            documentation, deed drafting, document checking,
            registration assistance and other property-related
            services provided by DeedBanwao in Meerut.
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