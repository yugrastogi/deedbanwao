import {
  useEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";
import {
  FaArrowRight,
  FaBriefcase,
  FaChevronDown,
  FaXmark,
} from "react-icons/fa6";

import logo from "../../assets/images/deedbanwao-brand.png";

import ContactActions from "./ContactActions";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [isLight, setIsLight] =
    useState(false);

  const [associateFormOpen, setAssociateFormOpen] =
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
    if (menuOpen || associateFormOpen) {
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
  }, [menuOpen, associateFormOpen]);

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
    const handleClickOutside = (
      event
    ) => {
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

    const timeline =
      gsap.timeline({
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
      // -------------------------------------------------
      // SCROLL TO HERO
      // -------------------------------------------------

      const hero =
        document.getElementById("home");

      if (hero) {
        hero.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // -------------------------------------------------
      // OPEN HERO ENQUIRY FORM
      // -------------------------------------------------

      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent(
            "open-enquiry-form"
          )
        );
      }, 450);
    });
  };

  const handleAssociateSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const request = `
Hello DeedBanwao,

I would like to request to join as an associate advocate.

Name: ${formData.get("name")}
Phone: ${formData.get("phone")}
Email: ${formData.get("email")}
Working area: ${formData.get("area")}
Bar Council No.: ${formData.get("barCouncilNumber")}
Introduction: ${formData.get("introduction")}
`.trim();

    const subject = "Associate Advocate Request";

    window.open(
      `mailto:deedbanwao@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`,
      "_self"
    );
  };

  return (
    <>
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
          ACTION AREA

          IMPORTANT:
          One parent controls the spacing between:

          CALL → WHATSAPP → HAMBURGER

          gap-2 = 8px
      ===================================================== */}

      <div
        className="
          ml-auto

          flex
          items-center
          gap-2

          md:ml-0
        "
      >
        {/* =================================================
            CALL + WHATSAPP
        ================================================= */}

        <ContactActions
          isLight={true}
        />

        {/* =================================================
            MOBILE CONTROLLER
        ================================================= */}

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

              cursor-pointer

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
                  MOBILE MENU CONTENT
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
                  pt-0

                  sm:px-10
                  sm:pt-0
                "
              >
                {/* =================================================
                    LOGO
                ================================================= */}

                <div
                  className="
                    mb-8

                    flex
                    min-h-[72px]
                    items-center

                    border-b
                    border-black/[0.07]

                    pb-0

                    sm:mb-10
                    sm:min-h-[76px]
                    sm:pb-0
                  "
                >
                  <img
                    src={logo}
                    alt="DeedBanwao"
                    className="
                      h-10
                      w-auto

                      sm:h-11
                    "
                  />
                </div>

                {/* =================================================
                    NAV LINKS
                ================================================= */}

                <NavLinks
                  mobile
                  setMenuOpen={
                    setMenuOpen
                  }
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
                    mt-6

                    pt-2
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
                      hover:bg-[#193A7E]

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
      </div>
    </nav>

    <div className="relative z-20 mt-[72px] border-b border-[#193A7E]/10 bg-[#EFF6FC] sm:mt-[76px]">
      <div className="mx-auto flex w-full flex-nowrap items-center justify-end gap-2 px-3 py-3 pr-4 text-right sm:gap-5 sm:px-7 sm:pr-7 lg:px-10 lg:pr-10">
        <p className="whitespace-nowrap text-[11px] font-medium leading-none text-[#193A7E] sm:text-base">
          Join us as an associate
        </p>
        <button
          type="button"
          onClick={() => setAssociateFormOpen(true)}
          className="inline-flex min-h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#193A7E] px-3 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-[#244A94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193A7E] sm:min-h-9 sm:gap-2 sm:px-5 sm:text-sm"
        >
          Send Request
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>

    {associateFormOpen && (
      <div
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-end
          justify-center
          bg-[#193A7E]/45
          p-3
          backdrop-blur-sm
          sm:items-center
          sm:p-6
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="associate-advocate-title"
      >
        <div
          className="
            relative
            max-h-[calc(100svh-1.5rem)]
            w-full
            max-w-xl
            overflow-y-auto
            rounded-[28px]
            border
            border-white/70
            bg-white
            p-5
            shadow-[0_28px_80px_rgba(25,58,126,0.28)]
            sm:max-h-[calc(100svh-3rem)]
            sm:rounded-[32px]
            sm:p-7
          "
        >
          <button
            type="button"
            onClick={() => setAssociateFormOpen(false)}
            aria-label="Close associate advocate request form"
            className="
              absolute
              right-4
              top-4
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#193A7E]/[0.06]
              text-[#193A7E]
              transition-colors
              hover:bg-[#193A7E]/10
              sm:right-5
              sm:top-5
            "
          >
            <FaXmark />
          </button>

          <div className="pr-12">
            <h2
              id="associate-advocate-title"
              className="text-2xl font-semibold tracking-[-0.03em] text-[#193A7E] sm:text-3xl"
            >
              Associate Advocate Request
            </h2>
          </div>

          <form
            onSubmit={handleAssociateSubmit}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E]">
              Name
              <input name="name" required autoComplete="name" className="h-11 rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E]">
              Phone
              <input name="phone" required type="tel" autoComplete="tel" className="h-11 rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E]">
              Email
              <input name="email" required type="email" autoComplete="email" className="h-11 rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E]">
              Working area
              <span className="relative">
                <select name="area" required defaultValue="" className="h-11 w-full appearance-none rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 pr-10 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white">
                  <option value="" disabled>Select your working area</option>
                  <option value="Meerut">Meerut</option>
                  <option value="Sardhana">Sardhana</option>
                  <option value="Mawana">Mawana</option>
                </select>
                <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#193A7E]/70" />
              </span>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E] sm:col-span-2">
              Bar Council Enrollment No.
              <input name="barCouncilNumber" required className="h-11 rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E] sm:col-span-2">
              A short introduction
              <textarea name="introduction" required rows="4" className="resize-y rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 py-2.5 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white" />
            </label>
            <button
              type="submit"
              className="sm:col-span-2 mt-1 flex h-12 items-center justify-center gap-2 rounded-full bg-[#193A7E] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(25,58,126,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#193A7E]"
            >
              Join us as an Associate
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
