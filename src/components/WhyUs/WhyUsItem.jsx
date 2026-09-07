const WhyUsItem = ({ item, isLast }) => {
  const Icon = item.icon;

  return (
    <article
      className={`
        group
        relative

        grid
        grid-cols-[32px_1fr]

        gap-4

        py-7

        sm:grid-cols-[70px_48px_1fr]
        sm:gap-6
        sm:py-10

        ${
          !isLast
            ? "border-b border-[#193A7E]/10"
            : ""
        }
      `}
    >
      {/* =================================================
          NUMBER
      ================================================= */}

      <div
        className="
          pt-1

          text-[11px]
          font-semibold
          tracking-[0.12em]

          text-[#193A7E]/35

          sm:text-xs
          sm:tracking-[0.15em]
        "
      >
        {String(item.id).padStart(2, "0")}
      </div>

      {/* =================================================
          ICON
      ================================================= */}

      <div
        className="
          hidden

          h-10
          w-10

          items-center
          justify-center

          rounded-full

          border
          border-[#193A7E]/10

          bg-white/50

          text-[#193A7E]/60

          backdrop-blur-xl

          transition-all
          duration-300

          group-hover:bg-[#193A7E]
          group-hover:text-white

          sm:flex
        "
      >
        <Icon className="text-sm" />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div>
        {/* TITLE */}

        <h3
          className="
            text-[21px]
            font-semibold

            leading-tight
            tracking-[-0.035em]

            text-[#193A7E]

            transition-colors
            duration-300

            sm:text-[28px]
          "
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-2.5

            max-w-2xl

            text-[13px]
            leading-6

            text-[#294A76]/65

            sm:mt-3
            sm:text-base
            sm:leading-7
          "
        >
          {item.description}
        </p>
      </div>
    </article>
  );
};

export default WhyUsItem;