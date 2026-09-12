import {
  useEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";

import logo from "../../assets/images/deedbanwao_logo.svg";

import ContactActions from "./ContactActions";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [isLight, setIsLight] =
    useState(false);

  const mobileMenuRef =
    useRef(null);

  const mobilePanelRef =
    useRef(null);

  const menuTimelineRef =
    useRef(null);

  // =====================================================
  // DETECT PROCESS SECTION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const processSection =
        document.getElementById("process");

      if (!processSection) return;

      const navbarHeight = 66;

      const sectionTop =
        processSection.offsetTop;

      const sectionBottom =
        sectionTop +
        processSection.offsetHeight;

      const scrollPosition =
        window.scrollY +
        navbarHeight;

      setIsLight(
        scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================================
  // LOCK PAGE SCROLL WHEN MENU IS OPEN
  // =====================================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [menuOpen]);

  // =====================================================
  // MOBILE MENU SLIDE ANIMATION
  // =====================================================

  useEffect(() => {
    if (!mobilePanelRef.current) {
      return;
    }

    menuTimelineRef.current?.kill();

    if (menuOpen) {
      // -------------------------------------------------
      // OPEN
      // -------------------------------------------------

      gsap.set(
        mobilePanelRef.current,
        {
          xPercent: 100,
        }
      );

      menuTimelineRef.current =
        gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

      menuTimelineRef.current.to(
        mobilePanelRef.current,
        {
          xPercent: 0,
          duration: 0.5,
        }
      );
    } else {
      // -------------------------------------------------
      // CLOSE
      // -------------------------------------------------

      menuTimelineRef.current =
        gsap.timeline({
          defaults: {
            ease: "power3.inOut",
          },

          onComplete: () => {
            setMenuOpen(false);
          },
        });

      menuTimelineRef.current.to(
        mobilePanelRef.current,
        {
          xPercent: 100,
          duration: 0.4,
        }
      );
    }

    return () => {
      menuTimelineRef.current?.kill();
    };
  }, [menuOpen]);

  // =====================================================
  // CLOSE MENU WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(
          event.target
        )
      ) {
        if (menuOpen) {
          setMenuOpen(false);
        }
      }
    };

    if (menuOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  // =====================================================
  // CLOSE MENU WITH GSAP BEFORE NAVIGATION
  // =====================================================

  const closeMenuWithAnimation = (
    callback
  ) => {
    if (
      !menuOpen ||
      !mobilePanelRef.current
    ) {
      callback?.();
      return;
    }

    menuTimelineRef.current?.kill();

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },

      onComplete: () => {
        setMenuOpen(false);

        callback?.();
      },
    });

    timeline.to(
      mobilePanelRef.current,
      {
        xPercent: 100,
        duration: 0.4,
      }
    );
  };

  // =====================================================
  // SEND ENQUIRY
  // =====================================================

  const handleMobileEnquiry = () => {
    closeMenuWithAnimation(() => {
      // Scroll to Hero
      const hero =
        document.getElementById("home");

      if (hero) {
        hero.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Tell Hero to open the enquiry form
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent(
            "open-enquiry-form"
          )
        );
      }, 450);
    });
  };

  return (
    <nav
      className="
        fixed
        left-0
        top-0
        z-30

        flex
        h-[72px]
        w-full

        items-center
        justify-between

        overflow-visible

        border-b
        border-black/[0.06]

        bg-white/70

        px-5

        backdrop-blur-2xl
        backdrop-saturate-150

        shadow-[0_10px_40px_rgba(0,0,0,0.06)]

        transition-all
        duration-500
        ease-out

        sm:h-[76px]
        sm:px-7

        lg:px-10
      "
    >
      {/* =====================================================
          LOGO
      ===================================================== */}

      <div
        className="
          relative
          z-[70]

          flex
          shrink-0
          items-center
        "
      >
        <img
          src={logo}
          alt="DeedBanwao"
          className="
            h-9
            w-auto

            sm:h-10
          "
        />
      </div>

      {/* =====================================================
          DESKTOP NAVIGATION
      ===================================================== */}

      <NavLinks
        setMenuOpen={setMenuOpen}
        isLight={true}
      />

      {/* =====================================================
          CONTACT BUTTONS
      ===================================================== */}

      <ContactActions
        isLight={true}
      />

      {/* =====================================================
          MOBILE CONTROLLER
      ===================================================== */}

      <div
        ref={mobileMenuRef}
        className="
          relative
          z-[70]

          md:hidden
        "
      >
        {/* =================================================
            MENU BUTTON
        ================================================= */}

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (previous) => !previous
            )
          }
          className="
            relative
            z-[80]

            flex
            h-10
            w-10
            shrink-0

            items-center
            justify-center

            rounded-full

            bg-black/[0.05]

            text-black

            shadow-[inset_0_1px_1px_rgba(255,255,255,0.80)]

            backdrop-blur-xl

            transition-all
            duration-300

            hover:bg-black/[0.09]
          "
        >
          {/* TOP */}

          <span
            className={`
              absolute
              h-[1.5px]
              w-4
              rounded-full
              bg-black
              transition-all
              duration-300

              ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-[5px]"
              }
            `}
          />

          {/* MIDDLE */}

          <span
            className={`
              absolute
              h-[1.5px]
              w-4
              rounded-full
              bg-black
              transition-all
              duration-300

              ${
                menuOpen
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />

          {/* BOTTOM */}

          <span
            className={`
              absolute
              h-[1.5px]
              w-4
              rounded-full
              bg-black
              transition-all
              duration-300

              ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-[5px]"
              }
            `}
          />
        </button>

        {/* =================================================
            FULL SCREEN MOBILE MENU
        ================================================= */}

        {menuOpen && (
          <div
            ref={mobilePanelRef}
            className="
              fixed
              inset-0

              z-40

              h-screen
              w-screen

              overflow-y-auto

              bg-white

              md:hidden
            "
          >
            {/* =================================================
                SUBTLE BACKGROUND
            ================================================= */}

            <div
              className="
                pointer-events-none

                absolute
                right-[-120px]
                top-[15%]

                h-[350px]
                w-[350px]

                rounded-full

                bg-[#193A7E]/[0.035]

                blur-[90px]
              "
            />

            <div
              className="
                pointer-events-none

                absolute
                bottom-[-150px]
                left-[-120px]

                h-[350px]
                w-[350px]

                rounded-full

                bg-[#193A7E]/[0.025]

                blur-[90px]
              "
            />

            {/* =================================================
                MENU CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10

                flex
                min-h-screen
                flex-col

                px-6

                pb-8
                pt-[110px]

                sm:px-10
              "
            >
              {/* =================================================
                  MENU HEADING
              ================================================= */}

              <div
                className="
                  mb-10
                "
              >
                <h2
                  className="
                    text-5xl
                    font-semibold

                    tracking-[-0.045em]

                    text-[#193A7E]

                    sm:text-6xl
                  "
                >
                  Menu
                </h2>
              </div>

              {/* =================================================
                  NAV LINKS
              ================================================= */}

              <NavLinks
                mobile
                setMenuOpen={setMenuOpen}
                isLight={true}
                closeMenuWithAnimation={
                  closeMenuWithAnimation
                }
              />

              {/* =================================================
                  SEND ENQUIRY BUTTON
              ================================================= */}

              <div
                className="
                  mt-auto

                  pt-10
                "
              >
                <button
                  type="button"
                  onClick={
                    handleMobileEnquiry
                  }
                  className="
                    flex
                    w-full

                    items-center
                    justify-center
                    gap-2

                    rounded-full

                    bg-[#193A7E]

                    px-6
                    py-4

                    text-sm
                    font-semibold

                    text-white

                    shadow-[0_12px_30px_rgba(25,58,126,0.18)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#123064]
                    hover:shadow-[0_16px_35px_rgba(25,58,126,0.24)]

                    active:translate-y-0
                  "
                >
                  Send Enquiry

                  <span>
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;