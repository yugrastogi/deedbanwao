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

    // -----------------------------------------------------
    // ALWAYS bring the top of the Services section into view
    // on toggle (expand AND collapse) — otherwise, expanding
    // the list while scrolled down gives no visual feedback
    // and the user can't tell whether it actually opened.
    // -----------------------------------------------------

    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const cards = container.querySelectorAll(
      ".service-card-item"
    );

    gsap.set(cards, {
      opacity: 0,
      y: 18,
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
      y: 14,
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
      aria-labelledby="services-heading"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-24
        sm:px-8
        sm:py-30
        lg:px-12
        lg:py-37
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
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#193A7E]/[0.025]
          blur-3xl
          sm:h-[425px]
          sm:w-[425px]
          lg:h-[510px]
          lg:w-[510px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#4FB3BF]/[0.035]
          blur-3xl
          sm:h-[380px]
          sm:w-[380px]
          lg:h-[465px]
          lg:w-[465px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1560px]">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          {/* =================================================
              SECTION LABEL
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              sm:gap-3.5
            "
          >
            {/* LEFT LINE */}

            <span
              className="
                h-px
                w-7
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
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#193A7E]/60
                sm:text-[10px]
                sm:tracking-[0.25em]
                lg:text-[12px]
                lg:tracking-[0.3em]
              "
            >
              Our Services
            </span>

            {/* RIGHT LINE */}

            <span
              className="
                h-px
                w-7
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
            id="services-heading"
            className="
              mt-5
              text-[2.45rem]
              font-semibold
              leading-[0.94]
              tracking-[-0.05em]
              text-[#193A7E]
              sm:mt-7
              sm:text-[3.2rem]
              md:text-[3.85rem]
              lg:text-[4.45rem]
              xl:text-[5.75rem]
            "
          >
            Property Paperwork

            <br />

            <span
              className="
                font-normal
                italic
                text-[#16A66A]
              "
            >
              Handled Properly.
            </span>
          </h2>

          {/* =================================================
              SEO-OPTIMIZED DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[380px]
              text-[14px]
              leading-6
              text-[#294A76]/65
              sm:mt-6
              sm:max-w-2xl
              sm:text-[16px]
              sm:leading-7
              lg:text-[18px]
              lg:leading-8
            "
          >
            DeedBanwao provides property documentation and
            deed drafting assistance in Meerut, covering
            Sale Deeds, Gift Deeds, Wills, GPA, SPA, Partition
            Deeds, Rent Agreements and other property-related
            documentation, along with document checking and
            registration assistance.
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
                sm:gap-6
                lg:grid-cols-3
                lg:gap-7
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
                space-y-14
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
                        mb-6
                        flex
                        items-end
                        gap-3.5
                        sm:mb-8
                        sm:gap-7
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
                            sm:tracking-[0.22em]
                            lg:text-[12px]
                          "
                        >
                          {String(
                            categoryServices.length
                          ).padStart(2, "0")}{" "}
                          Services
                        </p>

                        <h3
                          className="
                            mt-1
                            max-w-[280px]
                            text-[14px]
                            font-semibold
                            leading-tight
                            tracking-[-0.03em]
                            text-[#193A7E]
                            sm:mt-1.5
                            sm:max-w-none
                            sm:text-[16px]
                            lg:text-[18px]
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
                        sm:gap-6
                        lg:grid-cols-3
                        lg:gap-7
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
            ${showAll ? "mt-12 sm:mt-17" : "mt-12 sm:mt-14"}
          `}
        >
          <button
            type="button"
            onClick={handleToggle}
            className="
              group
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#193A7E]
              px-6
              text-[14px]
              font-semibold
              text-white
              shadow-[0_14px_34px_rgba(25,58,126,0.20)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#123064]
              hover:shadow-[0_18px_40px_rgba(25,58,126,0.24)]
              sm:h-14
              sm:gap-2.5
              sm:px-8
              sm:text-[16px]
              lg:text-[18px]
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
            mt-3
            text-center
            text-[9px]
            font-medium
            text-[#294A76]/35
            sm:mt-4
            sm:text-[10px]
            lg:text-[12px]
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