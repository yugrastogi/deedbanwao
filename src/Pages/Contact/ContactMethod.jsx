const ContactMethod = ({
  number,
  label,
  children,
}) => {
  return (
    <div
      className="
        group

        border-t
        border-black/10

        py-7

        transition-colors
        duration-300

        hover:border-black/25

        sm:py-8
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-3

          sm:grid-cols-[180px_1fr]
          sm:items-start
        "
      >

        {/* CATEGORY */}

        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.25em]

            text-black/40
          "
        >
          {label}
        </span>


        {/* CONTENT */}

        <div
          className="
            text-xl
            font-medium
            tracking-[-0.025em]

            text-black

            sm:text-2xl
          "
        >
          {children}
        </div>

      </div>
    </div>
  );
};

export default ContactMethod;