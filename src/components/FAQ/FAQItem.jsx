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

          py-7

          text-left

          focus:outline-none

          sm:gap-6
          sm:py-10
        "
      >
        {/* =================================================
            ARROW
        ================================================= */}

        <span
          className={`
            flex
            w-7
            shrink-0

            items-center
            justify-center

            text-black

            transition-all
            duration-300

            sm:w-10

            ${
              isOpen
                ? "rotate-180 text-[#193A7E]/65"
                : "group-hover:text-[#193A7E]/60"
            }
          `}
        >
          <FaArrowDown
            className="
              text-[10px]

              sm:text-sm
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

            text-[17px]
            font-semibold

            leading-snug
            tracking-[-0.025em]

            text-black/70

            sm:text-2xl
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
              pb-7

              pl-0
              pr-5

              sm:pb-10
              sm:pl-[64px]
              sm:pr-14
            "
          >
            <p
              className="
                max-w-4xl

                text-sm
                leading-6

                text-[#294A76]/65

                sm:text-lg
                sm:leading-8
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