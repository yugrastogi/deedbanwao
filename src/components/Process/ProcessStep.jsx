const ProcessStep = ({ step, isLast }) => {
  const Icon = step.icon;

  return (
    <article
      className="
        relative

        grid
        grid-cols-[52px_1fr]

        gap-4

        sm:grid-cols-[100px_1fr]
        sm:gap-10
      "
    >
      {/* =================================================
          NUMBER / TIMELINE
      ================================================= */}

      <div className="relative flex justify-center">

        {/* ===============================================
            VERTICAL LINE
        =============================================== */}

        {!isLast && (
          <div
            className="
              absolute

              left-1/2

              top-12
              bottom-0

              w-px

              -translate-x-1/2

              bg-white/10

              sm:top-14
            "
          />
        )}

        {/* ===============================================
            NUMBER CIRCLE
        =============================================== */}

        <div
          className="
            relative
            z-10

            flex

            h-12
            w-12
            shrink-0

            items-center
            justify-center

            rounded-full

            border
            border-white/15

            bg-[#193A7E]

            text-base
            font-semibold

            text-white

            shadow-[0_10px_30px_rgba(0,0,0,0.18)]

            sm:h-16
            sm:w-16
            sm:text-lg
          "
        >
          {String(step.id).padStart(2, "0")}
        </div>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          min-w-0

          pb-12

          sm:pb-20
        "
      >
        {/* =================================================
            ICON + LABEL
        ================================================= */}

        <div
          className="
            flex
            min-w-0
            items-center
            gap-2.5

            sm:gap-3
          "
        >
          {/* ICON */}

          <div
            className="
              flex
              h-8
              w-8
              shrink-0

              items-center
              justify-center

              rounded-xl

              border
              border-white/10

              bg-white/[0.05]

              text-white

              backdrop-blur-xl

              sm:h-9
              sm:w-9
            "
          >
            <Icon className="text-xs sm:text-sm" />
          </div>

          {/* LABEL */}

          <span
            className="
              min-w-0

              text-[8px]
              font-semibold
              uppercase
              tracking-[0.14em]

              text-white/40

              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            {step.label}
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <h3
          className="
            mt-5

            max-w-2xl

            text-[1.65rem]
            font-semibold

            leading-[1.05]
            tracking-[-0.04em]

            text-white

            sm:mt-6
            sm:text-4xl

            lg:text-[42px]
          "
        >
          {step.title}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-4

            max-w-xl

            text-[13px]
            leading-6

            text-white/55

            sm:mt-5
            sm:text-base
            sm:leading-7
          "
        >
          {step.description}
        </p>

        {/* =================================================
            SMALL BOTTOM ACCENT
        ================================================= */}

        <div
          className="
            mt-6

            h-px
            w-12

            bg-white

            sm:mt-7
            sm:w-16
          "
        />
      </div>
    </article>
  );
};

export default ProcessStep;