import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";

import {
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

import { services } from "./services.data";
import ServiceCard from "./ServiceCard";

const INITIAL_SERVICES = 6;

const categories = [
  "Deed Drafting",
  "Property Documentation Assistance",
  "Other Documentation Services",
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const contentRef = useRef(null);
  const isFirstRender = useRef(true);
  const isAnimating = useRef(false);

  const initialServices = services.slice(
    0,
    INITIAL_SERVICES
  );

  const groupedServices = categories.map((category) => ({
    category,
    services: services.filter(
      (service) => service.category === category
    ),
  }));

  // =====================================================
  // REVEAL WHICHEVER VIEW IS CURRENTLY RENDERED
  // =====================================================

  useLayoutEffect(() => {
    const container = contentRef.current;

    if (!container) {
      return;
    }

    // Skip animating on first mount — just show it as-is.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const cards = container.querySelectorAll(
      ".service-card-item"
    );

    gsap.set(cards, {
      opacity: 0,
      y: 22,
    });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.045,
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // After collapsing back to the six-card view, bring the
    // Services section back into view automatically.
    if (!showAll) {
      requestAnimationFrame(() => {
        const section =
          document.getElementById("services");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  }, [showAll]);

  // =====================================================
  // TOGGLE HANDLER — FADE OUT CURRENT CARDS, THEN SWAP STATE
  // =====================================================

  const handleToggle = () => {
    if (isAnimating.current) {
      return;
    }

    const container = contentRef.current;

    if (!container) {
      setShowAll((previous) => !previous);
      return;
    }

    isAnimating.current = true;

    const cards = container.querySelectorAll(
      ".service-card-item"
    );

    gsap.to(cards, {
      opacity: 0,
      y: 16,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.02,
      onComplete: () => {
        setShowAll((previous) => !previous);
      },
    });
  };

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white

        px-5
        py-24

        sm:px-6
        sm:py-32

        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -right-52
          top-20

          h-[400px]
          w-[400px]

          rounded-full

          bg-[#193A7E]/[0.025]

          blur-3xl

          sm:h-[500px]
          sm:w-[500px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          -left-52
          bottom-0

          h-[350px]
          w-[350px]

          rounded-full

          bg-[#4FB3BF]/[0.035]

          blur-3xl

          sm:h-[450px]
          sm:w-[450px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* =================================================
              SECTION LABEL
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              sm:gap-4
            "
          >
            {/* LEFT LINE */}

            <span
              className="
                h-px
                w-8
                shrink-0

                bg-gradient-to-r
                from-transparent
                via-[#193A7E]/10
                to-[#193A7E]/20

                sm:w-20

                lg:w-24
              "
            />

            {/* LABEL */}

            <span
              className="
                shrink-0

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]

                text-[#193A7E]/60

                sm:text-[15px]
                sm:tracking-[0.28em]
              "
            >
              Our Services
            </span>

            {/* RIGHT LINE */}

            <span
              className="
                h-px
                w-8
                shrink-0

                bg-gradient-to-l
                from-transparent
                via-[#193A7E]/10
                to-[#193A7E]/20

                sm:w-20

                lg:w-24
              "
            />
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h2
            className="
              mt-6

              text-[2.65rem]
              font-semibold

              leading-[0.94]
              tracking-[-0.05em]

              text-[#193A7E]

              sm:mt-7
              sm:text-5xl

              md:text-6xl

              lg:text-7xl
            "
          >
            Property Paperwork,

            <br />

            <span
              className="
                font-normal
                italic
                text-[#193A7E]/80
              "
            >
              Handled Properly.
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto

              mt-5

              max-w-[340px]

              text-sm
              leading-6

              text-[#294A76]/65

              sm:mt-6
              sm:max-w-xl
              sm:text-sm
              sm:leading-7
            "
          >
            From Drafting To Registration, We Help You
            Navigate The Documentation Behind Your
            Property With Clarity And Confidence.
          </p>
        </div>

        {/* ===================================================
            ANIMATED CONTENT WRAPPER
        =================================================== */}

        <div ref={contentRef}>

          {/* =================================================
              SIX FEATURED SERVICES
          ================================================= */}

          {!showAll && (
            <div
              className="
                mt-14

                grid
                grid-cols-1
                gap-4

                sm:mt-20
                sm:grid-cols-2
                sm:gap-5

                lg:grid-cols-3
              "
            >
              {initialServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          )}

          {/* =================================================
              ALL SERVICES
          ================================================= */}

          {showAll && (
            <div
              className="
                mt-14

                space-y-16

                sm:mt-20
                sm:space-y-24
              "
            >
              {groupedServices.map(
                ({
                  category,
                  services: categoryServices,
                }) => (
                  <div key={category}>

                    {/* =====================================
                        CATEGORY HEADER
                    ===================================== */}

                    <div
                      className="
                        mb-7

                        flex
                        items-end
                        gap-4

                        sm:mb-10
                        sm:gap-8
                      "
                    >
                      <div className="min-w-0 shrink-0">

                        <p
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]

                            text-[#193A7E]/45

                            sm:text-[10px]
                            sm:tracking-[0.2em]
                          "
                        >
                          {String(
                            categoryServices.length
                          ).padStart(2, "0")}{" "}
                          Services
                        </p>

                        <h3
                          className="
                            mt-1.5

                            max-w-[280px]

                            text-xl
                            font-semibold
                            leading-tight
                            tracking-[-0.03em]

                            text-[#193A7E]

                            sm:mt-2
                            sm:max-w-none
                            sm:text-3xl
                          "
                        >
                          {category}
                        </h3>
                      </div>

                      {/* ===================================
                          CATEGORY DIVIDER
                      =================================== */}

                      <div
                        className="
                          mb-1.5

                          hidden
                          h-px
                          flex-1

                          bg-[#193A7E]/10

                          sm:mb-2
                          sm:block
                        "
                      />
                    </div>

                    {/* =====================================
                        CATEGORY CARDS
                    ===================================== */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-4

                        sm:grid-cols-2
                        sm:gap-5

                        lg:grid-cols-3
                      "
                    >
                      {categoryServices.map((service) => (
                        <ServiceCard
                          key={service.id}
                          service={service}
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* ===================================================
            EXPLORE / SHOW LESS BUTTON
        =================================================== */}

        <div
          className={`
            flex
            justify-center

            ${showAll ? "mt-12 sm:mt-16" : "mt-12 sm:mt-14"}
          `}
        >
          <button
            type="button"
            onClick={handleToggle}
            className="
              group

              flex
              items-center
              gap-2.5

              rounded-full

              bg-[#193A7E]

              px-5
              py-3

              text-xs
              font-semibold

              text-white

              shadow-[0_12px_30px_rgba(25,58,126,0.18)]

              transition-all
              duration-300

              hover:-translate-y-1

              hover:bg-[#123064]

              hover:shadow-[0_18px_40px_rgba(25,58,126,0.24)]

              sm:gap-3
              sm:px-6
              sm:py-3.5
              sm:text-sm
            "
          >
            {showAll
              ? "Show Less Services"
              : "Show All Services"}

            {/* BUTTON ARROW */}

            <span
              className="
                flex
                h-6
                w-6

                items-center
                justify-center

                rounded-full

                bg-white

                text-[#193A7E]

                transition-transform
                duration-300

                group-hover:scale-105

                sm:h-7
                sm:w-7
              "
            >
              {showAll ? (
                <FaArrowUp className="text-[9px] sm:text-[10px]" />
              ) : (
                <FaArrowDown className="text-[9px] sm:text-[10px]" />
              )}
            </span>
          </button>
        </div>

        {/* ===================================================
            SERVICE COUNT
        =================================================== */}

        <p
          className="
            mt-4

            text-center

            text-[11px]
            font-medium

            text-[#294A76]/35

            sm:mt-5
            sm:text-xs
          "
        >
          {showAll
            ? `All ${services.length} services`
            : `6 of ${services.length} services`}
        </p>
      </div>
    </section>
  );
};

export default Services;