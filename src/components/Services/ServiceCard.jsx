const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article
      className="
        group
        relative

        flex
        min-h-[280px]
        flex-col

        rounded-[24px]

        border
        border-[#193A7E]/[0.08]

        bg-black/5

        p-6

        shadow-[0_8px_30px_rgba(25,58,126,0.035)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-2

        hover:border-[#193A7E]/[0.12]

        hover:shadow-[0_20px_45px_rgba(25,58,126,0.10)]

        sm:min-h-[300px]
        sm:rounded-[28px]
        sm:p-7
      "
    >
      {/* =====================================================
          TOP ROW
      ===================================================== */}

      <div className="flex items-start justify-between">

        {/* =================================================
            ICON
        ================================================= */}

        <div
          className="
            flex

            h-11
            w-11

            items-center
            justify-center

            rounded-2xl

            bg-[#193A7E]/[0.07]

            text-[#193A7E]

            transition-colors
            duration-300

            group-hover:bg-[#193A7E]
            group-hover:text-white

            sm:h-12
            sm:w-12
          "
        >
          <Icon className="text-base sm:text-lg" />
        </div>

        {/* =================================================
            SERVICE NUMBER
        ================================================= */}

        <span
          className="
            text-xs
            font-medium
            italic
            tracking-tight

            text-[#193A7E]/30

            sm:text-sm
          "
        >
          {String(service.id).padStart(2, "0")}
        </span>
      </div>

      {/* =====================================================
          TITLE
      ===================================================== */}

      <div
        className="
          mt-7

          sm:mt-8
        "
      >
        <h3
          className="
            text-[20px]
            font-semibold

            leading-[1.08]
            tracking-[-0.03em]

            text-[#172B4D]

            sm:text-[22px]
          "
        >
          {service.title}
        </h3>
      </div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div
        className="
          my-4

          h-px
          w-full

          bg-[#193A7E]/[0.07]

          sm:my-5
        "
      />

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          pt-3

          text-[13px]
          leading-6

          text-[#294A76]/70

          sm:pt-5
          sm:text-sm
        "
      >
        {service.description}
      </p>

      {/* =====================================================
          BOTTOM DETAIL
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-0
          left-6
          right-6

          h-px

          bg-gradient-to-r
          from-transparent
          via-[#193A7E]/10
          to-transparent

          sm:left-7
          sm:right-7
        "
      />
    </article>
  );
};

export default ServiceCard;