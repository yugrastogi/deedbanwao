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
py-24

sm:px-8
sm:py-30

lg:px-12
lg:py-37
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

      h-[383px]
      w-[383px]

      rounded-full

      bg-white/[0.025]

      blur-[85px]

      sm:h-[553px]
      sm:w-[553px]
      sm:blur-[110px]

      lg:h-[638px]
      lg:w-[638px]
    "
  />

  <div
    className="
      pointer-events-none

      absolute
      -left-72
      bottom-0

      h-[340px]
      w-[340px]

      rounded-full

      bg-[#193A7E]/30

      blur-[72px]

      sm:h-[510px]
      sm:w-[510px]
      sm:blur-[94px]

      lg:h-[595px]
      lg:w-[595px]
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

        gap-7

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

            sm:gap-4
          "
        >
          {/* LEFT LINE */}

          <span
            className="
              h-px
              w-7

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

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]

              text-white/55

              sm:text-[10px]
              sm:tracking-[0.25em]

              lg:text-[12px]
              lg:tracking-[0.3em]
            "
          >
            How It Works
          </span>

          {/* RIGHT LINE */}

          <span
            className="
              h-px
              w-7

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
          id="process-heading"
          className="
            mt-5

            max-w-2xl

            text-[2.45rem]
            font-semibold

            leading-[0.94]
            tracking-[-0.05em]

            text-white

            sm:mt-7
            sm:text-[3.2rem]

            md:text-[3.85rem]

            lg:text-[4.45rem]

            xl:text-[5.75rem]
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
    max-w-2xl

    text-[14px]
    leading-6

    text-white/55

    sm:text-[16px]
    sm:leading-7

    lg:ml-10
    lg:text-[18px]
    lg:leading-8
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
        mt-14

        sm:mt-20

        lg:mt-24
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

        pt-6

        sm:mt-7
        sm:pt-7
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