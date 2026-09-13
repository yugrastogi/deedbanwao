const ProcessStep = ({ step, isLast }) => {
const Icon = step.icon;

return (
<article
className="
relative

grid
grid-cols-[48px_1fr]

gap-3.5

sm:grid-cols-[102px_1fr]
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

          sm:top-[58px]
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

        text-[14px]
        font-semibold

        text-white

        shadow-[0_10px_30px_rgba(0,0,0,0.18)]

        sm:h-[65px]
        sm:w-[65px]
        sm:text-[16px]

        lg:text-[18px]
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
        gap-2

        sm:gap-3
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          h-[31px]
          w-[31px]
          shrink-0

          items-center
          justify-center

          rounded-[10px]

          border
          border-white/10

          bg-white/[0.05]

          text-white

          backdrop-blur-xl

          sm:h-[37px]
          sm:w-[37px]
        "
      >
        <Icon className="text-[12px] sm:text-[14px]" />
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

          sm:text-[10px]
          sm:tracking-[0.24em]

          lg:text-[12px]
          lg:tracking-[0.3em]
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
        mt-4

        max-w-3xl

        text-[2rem]
        font-semibold

        leading-[1.05]
        tracking-[-0.04em]

        text-white

        sm:mt-6
        sm:text-[2.55rem]

        md:text-[3rem]

        lg:text-[3.35rem]
      "
    >
      {step.title}
    </h3>

    {/* =================================================
        DESCRIPTION
    ================================================= */}

    <p
      className="
        mt-3.5

        max-w-2xl

        text-[14px]
        leading-6

        text-white/55

        sm:mt-5
        sm:text-[16px]
        sm:leading-7

        lg:text-[18px]
        lg:leading-8
      "
    >
      {step.description}
    </p>

    {/* =================================================
        SMALL BOTTOM ACCENT
    ================================================= */}

    <div
      className="
        mt-5

        h-px
        w-10

        bg-white

        sm:mt-7
        sm:w-[68px]
      "
    />
  </div>
</article>
);
};

export default ProcessStep;