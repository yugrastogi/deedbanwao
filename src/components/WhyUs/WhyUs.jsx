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
        py-28

        sm:px-8
        sm:py-36

        lg:px-12
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

            gap-10

            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-end
            lg:gap-24
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
                  leading-none
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#193A7E]/65
                  sm:text-base
                  sm:tracking-[0.32em]
                "
              >
                Why DeedBanwao
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
                MAIN HEADING
            =============================================== */}

            <h2
              id="why-us-heading"
              className="
                mt-7

                max-w-3xl

                text-[3.3rem]
                font-semibold

                leading-[0.92]
                tracking-[-0.055em]

                text-[#193A7E]

                sm:mt-8
                sm:text-7xl

                md:text-8xl

                lg:text-[92px]

                xl:text-[100px]
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

                text-sm
                leading-7

                text-[#294A76]/75

                sm:text-xl
                sm:leading-9
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
            mt-16

            border-t
            border-[#193A7E]/15

            sm:mt-24

            lg:mt-28
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