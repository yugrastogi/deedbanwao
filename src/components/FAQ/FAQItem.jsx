import { FaArrowDown } from "react-icons/fa";

const FAQItem = ({
item,
isOpen,
onToggle,
}) => {
return (
<article
className="
group

border-b
border-[#193A7E]/10
"
>
  {/* =================================================
      QUESTION
  ================================================= */}

  <button
    type="button"
    onClick={onToggle}
    aria-expanded={isOpen}
    className="
      flex
      w-full

      items-center

      gap-3

      py-6

      text-left

      focus:outline-none

      sm:gap-5
      sm:py-8.5
    "
  >
    {/* =================================================
        ARROW
    ================================================= */}

    <span
      className={`
        flex
        w-6
        shrink-0

        items-center
        justify-center

        text-black

        transition-all
        duration-300

        sm:w-8

        ${
          isOpen
            ? "rotate-180 text-[#193A7E]/65"
            : "group-hover:text-[#193A7E]/60"
        }
      `}
    >
      <FaArrowDown
        className="
          text-[9px]

          sm:text-[10px]

          lg:text-[12px]
        "
      />
    </span>

    {/* =================================================
        QUESTION
    ================================================= */}

    <span
      className="
        min-w-0
        flex-1

        text-[14px]
        font-semibold

        leading-snug
        tracking-[-0.025em]

        text-black/70

        sm:text-[16px]

        lg:text-[18px]
      "
    >
      {item.question}
    </span>
  </button>

  {/* =================================================
      ANSWER
  ================================================= */}

  <div
    className={`
      grid

      transition-all
      duration-300
      ease-out

      ${
        isOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }
    `}
  >
    <div className="overflow-hidden">

      <div
        className="
          pb-6

          pl-0
          pr-4

          sm:pb-8.5
          sm:pl-[53px]
          sm:pr-12
        "
      >
        <p
          className="
            max-w-4xl

            text-[14px]
            leading-5

            text-[#294A76]/65

            sm:text-[16px]
            sm:leading-7

            lg:text-[18px]
          "
        >
          {item.answer}
        </p>
      </div>

    </div>
  </div>
</article>
);
};

export default FAQItem;