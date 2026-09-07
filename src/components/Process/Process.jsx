import ProcessStep from "./ProcessStep";
import { processSteps } from "./process.data";

const Process = () => {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden

        bg-[#0B2348]

        px-5
        py-24

        sm:px-6
        sm:py-32

        lg:py-40
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

          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[120px]
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

          sm:h-[550px]
          sm:w-[550px]
          sm:blur-[100px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

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

            lg:gap-10
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

                  sm:w-20

                  lg:w-24
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

                  sm:text-[15px]
                  sm:tracking-[0.3em]
                "
              >
                How We Work
              </span>

              {/* RIGHT LINE */}

              <span
                className="
                  h-px
                  w-8

                  bg-gradient-to-l
                  from-transparent
                  to-white/20

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

                max-w-xl

                text-[2.7rem]
                font-semibold

                leading-[0.94]
                tracking-[-0.05em]

                text-white

                sm:mt-7
                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              From Enquiry,
              <br />

              <span
                className="
                  font-normal
                  italic

                  text-white/55
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
                max-w-lg

                text-sm
                leading-7

                text-white/55

                sm:text-lg
              "
            >
              A straightforward process designed to keep
              your property documentation clear, organised,
              and easy to follow from the first conversation
              to the final stage.
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
            <p
              className="
                text-xs
                font-medium

                text-white/40

                sm:text-sm
              "
            >
              Four simple stages. One clear process.
            </p>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]

                text-white/35

                sm:text-[10px]
              "
            >
              DeedBanwao
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;