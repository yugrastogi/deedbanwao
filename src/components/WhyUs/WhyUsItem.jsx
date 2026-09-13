const WhyUsItem = ({ item, isLast }) => {
  const Icon = item.icon;

  return (
    <article
      className={`
        group
        relative

        grid
        grid-cols-[36px_1fr]

        gap-4

        py-8

        sm:grid-cols-[84px_60px_1fr]
        sm:gap-7
        sm:py-12

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

          text-xs
          font-semibold
          tracking-[0.12em]

          text-[#193A7E]/35

          sm:text-base
          sm:tracking-[0.18em]
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

          h-12
          w-12

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
        <Icon className="text-lg" />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div>
        {/* TITLE */}

        <h3
          className="
            text-2xl
            font-semibold

            leading-tight
            tracking-[-0.035em]

            text-[#193A7E]

            transition-colors
            duration-300

            sm:text-[38px]
          "
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-2.5

            max-w-3xl

            text-sm
            leading-6

            text-[#294A76]/65

            sm:mt-3.5
            sm:text-xl
            sm:leading-8
          "
        >
          {item.description}
        </p>
      </div>
    </article>
  );
};

export default WhyUsItem;