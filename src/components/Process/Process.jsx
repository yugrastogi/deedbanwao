import ProcessStep from "./ProcessStep";
import { processSteps } from "./process.data";

const Process = () => {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="
        relative
        overflow-hidden

        bg-[#0B2348]

        px-6
        py-28

        sm:px-8
        sm:py-36

        lg:px-12
        lg:py-44
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -right-64
          top-0

          h-[450px]
          w-[450px]

          rounded-full

          bg-white/[0.025]

          blur-[100px]

          sm:h-[650px]
          sm:w-[650px]
          sm:blur-[130px]

          lg:h-[750px]
          lg:w-[750px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          -left-72
          bottom-0

          h-[400px]
          w-[400px]

          rounded-full

          bg-[#193A7E]/30

          blur-[85px]

          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[110px]

          lg:h-[700px]
          lg:w-[700px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1560px]">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-8

            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-end

            lg:gap-12
          "
        >
          {/* =================================================
              LEFT HEADING
          ================================================= */}

          <div>

            {/* ===============================================
                SECTION LABEL
            =============================================== */}

            <div
              className="
                flex
                items-center
                justify-start

                gap-3

                sm:gap-5
              "
            >
              {/* LEFT LINE */}

              <span
                className="
                  h-px
                  w-8

                  bg-gradient-to-r
                  from-transparent
                  to-white/20

                  sm:w-24

                  lg:w-28
                "
              />

              {/* TEXT */}

              <span
                className="
                  shrink-0

                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]

                  text-white/55

                  sm:text-base
                  sm:tracking-[0.32em]
                "
              >
                How It Works
              </span>

              {/* RIGHT LINE */}

              <span
                className="
                  h-px
                  w-8

                  bg-gradient-to-l
                  from-transparent
                  to-white/20

                  sm:w-24

                  lg:w-28
                "
              />
            </div>

            {/* ===============================================
                HEADING
            =============================================== */}

            <h2
              id="process-heading"
              className="
                mt-6

                max-w-2xl

                text-[2.9rem]
                font-semibold

                leading-[0.94]
                tracking-[-0.05em]

                text-white

                sm:mt-8
                sm:text-6xl

                md:text-7xl

                lg:text-8xl
              "
            >
              From Enquiry
              <br />

              <span
                className="
                  font-normal
                  italic

                 text-[#16A66A]
                "
              >
                To Registration.
              </span>
            </h2>
          </div>

          {/* =================================================
              RIGHT INTRO
          ================================================= */}

          <div className="lg:pb-2">

            <p
              className="
                max-w-xl

                text-sm
                leading-7

                text-white/55

                sm:text-xl
                sm:leading-9
              "
            >
              A straightforward process for property documentation
              and deed drafting in Meerut, designed to keep your
              documents clear, organised, and easy to follow from
              the first conversation to the final registration stage.
            </p>

          </div>
        </div>

        {/* ===================================================
            PROCESS
        =================================================== */}

        <div
          className="
            mt-16

            sm:mt-24

            lg:mt-28
          "
        >
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              isLast={
                index === processSteps.length - 1
              }
            />
          ))}
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <div
          className="
            mt-0

            border-t
            border-white/10

            pt-7

            sm:mt-8
            sm:pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-4
            "
          >

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;