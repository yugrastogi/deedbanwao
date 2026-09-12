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

        bg-[#EEF3F8]

        px-5
        py-24

        sm:px-6
        sm:py-32

        lg:py-40
      "
    >
      {/* =====================================================
          VISIBLE GRADIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-br
          from-[#DCE8F6]
          via-[#F7F9FC]
          to-[#D9E8F2]
        "
      />

      {/* =====================================================
          LARGE BLUE GRADIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -left-40
          top-0

          h-[450px]
          w-[450px]

          rounded-full

          bg-gradient-to-br
          from-[#193A7E]/20
          via-[#4F76B5]/10
          to-transparent

          blur-[75px]

          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[90px]
        "
      />

      {/* =====================================================
          SECOND GRADIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -right-40
          top-1/3

          h-[500px]
          w-[500px]

          rounded-full

          bg-gradient-to-bl
          from-[#8CB9D4]/25
          via-[#D7E8F0]/30
          to-transparent

          blur-[90px]

          sm:h-[650px]
          sm:w-[650px]
          sm:blur-[110px]
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

          h-[400px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/50

          blur-[100px]

          sm:h-[500px]
          sm:w-[800px]
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
          max-w-7xl
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
                  leading-none
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#193A7E]/65
                  sm:text-[15px]
                  sm:tracking-[0.3em]
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
                mt-7

                max-w-2xl

                text-[3.1rem]
                font-semibold

                leading-[0.92]
                tracking-[-0.055em]

                text-[#193A7E]

                sm:mt-8
                sm:text-6xl

                md:text-7xl

                lg:text-[76px]

                xl:text-[82px]
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
                max-w-xl

                text-sm
                leading-7

                text-[#294A76]/75

                sm:text-lg
                sm:leading-8
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