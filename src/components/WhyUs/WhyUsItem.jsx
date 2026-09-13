const WhyUsItem = ({ item, isLast }) => {
const Icon = item.icon;

return (
<article
className={`
group
relative

grid
grid-cols-[31px_1fr]

gap-3.5

py-7

sm:grid-cols-[71px_51px_1fr]
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

      text-[9px]
      font-semibold
      tracking-[0.12em]

      text-[#193A7E]/35

      sm:text-[10px]
      sm:tracking-[0.18em]

      lg:text-[12px]
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
    <Icon className="text-[15px]" />
  </div>

  {/* =================================================
      CONTENT
  ================================================= */}

  <div>

    {/* TITLE */}

    <h3
      className="
        text-[1.57rem]
        font-semibold

        leading-[1.05]
        tracking-[-0.04em]

        text-[#193A7E]

        transition-colors
        duration-300

        sm:text-[2rem]

        md:text-[2.35rem]

        lg:text-[2.55rem]
      "
    >
      {item.title}
    </h3>

    {/* DESCRIPTION */}

    <p
      className="
        mt-2

        max-w-3xl

        text-[14px]
        leading-6

        text-[#294A76]/65

        sm:mt-3
        sm:text-[16px]
        sm:leading-7

        lg:text-[18px]
        lg:leading-8
      "
    >
      {item.description}
    </p>

  </div>
</article>
);
};

export default WhyUsItem;