import WhyUsItem from "./WhyUsItem";
import { whyUsPoints } from "./whyUs.data";

const WhyUs = () => {
return (
<section
id="why-us"
aria-labelledby="why-us-heading"
className="
relative
overflow-hidden
bg-white

px-6
py-24

sm:px-8
sm:py-30

lg:px-12
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
      max-w-[1560px]
    "
  >

    {/* ===================================================
        HEADER
    =================================================== */}

    <div
      className="
        grid
        grid-cols-1

        gap-8

        lg:grid-cols-[0.95fr_1.05fr]
        lg:items-end
        lg:gap-20
      "
    >

      {/* =================================================
          LEFT
      ================================================= */}

      <div>

        {/* ===============================================
            SECTION LABEL
        =============================================== */}

        <div
          className="
            flex
            items-center

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
              leading-none
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#193A7E]/65

              sm:text-[10px]
              sm:tracking-[0.25em]

              lg:text-[12px]
              lg:tracking-[0.3em]
            "
          >
            Why DeedBanwao
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
            MAIN HEADING
        =============================================== */}

        <h2
          id="why-us-heading"
          className="
            mt-6

            max-w-3xl

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
          Less running
          <br />

          <span
            className="
              font-normal
              italic

              text-[#16A66A]
            "
          >
            More peace.
          </span>
        </h2>

      </div>

      {/* =================================================
          RIGHT INTRO
      ================================================= */}

      <div
        className="
          flex
          items-end

          lg:pb-1
        "
      >

        <p
          className="
            max-w-2xl

            text-[14px]
            leading-6

            text-[#294A76]/75

            sm:text-[16px]
            sm:leading-7

            lg:text-[18px]
            lg:leading-8
          "
        >
          DeedBanwao helps simplify property documentation and
          deed drafting in Meerut by making document requirements,
          document checking, drafting and registration-related
          assistance clearer and easier to manage.
        </p>

      </div>

    </div>

    {/* ===================================================
        REASONS
    =================================================== */}

    <div
      className="
        mt-14

        border-t
        border-[#193A7E]/15

        sm:mt-20

        lg:mt-24
      "
    >
      {whyUsPoints.map((item, index) => (
        <WhyUsItem
          key={item.id}
          item={item}
          isLast={
            index === whyUsPoints.length - 1
          }
        />
      ))}
    </div>

  </div>
</section>
);
};

export default WhyUs;