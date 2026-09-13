const ProcessStep = ({ step, isLast }) => {
  const Icon = step.icon;

  return (
    <article
      className="
        relative

        grid
        grid-cols-[56px_1fr]

        gap-4

        sm:grid-cols-[120px_1fr]
        sm:gap-12
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

              top-14
              bottom-0

              w-px

              -translate-x-1/2

              bg-white/10

              sm:top-[68px]
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

            h-14
            w-14
            shrink-0

            items-center
            justify-center

            rounded-full

            border
            border-white/15

            bg-[#193A7E]

            text-lg
            font-semibold

            text-white

            shadow-[0_10px_30px_rgba(0,0,0,0.18)]

            sm:h-[76px]
            sm:w-[76px]
            sm:text-2xl
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

          pb-14

          sm:pb-24
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

            sm:gap-3.5
          "
        >
          {/* ICON */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0

              items-center
              justify-center

              rounded-xl

              border
              border-white/10

              bg-white/[0.05]

              text-white

              backdrop-blur-xl

              sm:h-11
              sm:w-11
            "
          >
            <Icon className="text-sm sm:text-base" />
          </div>

          {/* LABEL */}

          <span
            className="
              min-w-0

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]

              text-white/40

              sm:text-xs
              sm:tracking-[0.24em]
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

            max-w-3xl

            text-[1.85rem]
            font-semibold

            leading-[1.05]
            tracking-[-0.04em]

            text-white

            sm:mt-7
            sm:text-5xl

            lg:text-[52px]
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

            max-w-2xl

            text-sm
            leading-6

            text-white/55

            sm:mt-6
            sm:text-lg
            sm:leading-8
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

            sm:mt-8
            sm:w-20
          "
        />
      </div>
    </article>
  );
};

export default ProcessStep;