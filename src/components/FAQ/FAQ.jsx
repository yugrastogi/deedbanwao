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
py-24

sm:px-8
sm:py-30

lg:py-37
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

          sm:gap-4
        "
      >
        {/* LEFT LINE */}

        <span
          className="
            h-px
            w-7
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

            text-[9px]
            font-semibold
            uppercase
            tracking-[0.22em]

            text-[#193A7E]/60

            sm:text-[10px]
            sm:tracking-[0.32em]

            lg:text-[12px]
          "
        >
          FAQs
        </span>

        {/* RIGHT LINE */}

        <span
          className="
            h-px
            w-7
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
        id="faq-heading"
        className="
          mt-5

          text-[2.45rem]
          font-semibold

          leading-[0.94]
          tracking-[-0.05em]

          text-[#193A7E]

          sm:mt-7
          sm:text-[3.2rem]

          md:text-[3.85rem]

          lg:text-[4.45rem]

          xl:text-[5.75rem]
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

          mt-4

          max-w-[380px]

          text-[14px]
          leading-5

          text-[#294A76]/65

          sm:mt-6
          sm:max-w-3xl
          sm:text-[16px]
          sm:leading-8

          lg:text-[18px]
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
        mt-12

        border-t
        border-[#193A7E]/10

        sm:mt-20
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