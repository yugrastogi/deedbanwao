import {
  useEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";
import {
  FaArrowRight,
  FaBriefcase,
  FaXmark,
} from "react-icons/fa6";

import logo from "../../assets/images/deedbanwao_logo.svg";

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

    const application = `
Hello DeedBanwao,

I would like to apply as an associate advocate.

Name: ${formData.get("name")}
Phone: ${formData.get("phone")}
Email: ${formData.get("email")}
Working area: ${formData.get("area")}
Bar Council No.: ${formData.get("barCouncilNumber")}
Introduction: ${formData.get("introduction")}
`.trim();

    window.open(
      `https://wa.me/917983320163?text=${encodeURIComponent(application)}`,
      "_blank"
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
        <button
          type="button"
          onClick={() => setAssociateFormOpen(true)}
          className="
            hidden
            items-center
            gap-2
            rounded-full
            border
            border-[#193A7E]/15
            bg-[#193A7E]
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            shadow-[0_8px_20px_rgba(25,58,126,0.16)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#123064]
            lg:flex
          "
        >
          <FaBriefcase className="text-xs" />
          Join as Advocate
        </button>

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
                  pt-[105px]

                  sm:px-10
                  sm:pt-[115px]
                "
              >
                {/* =================================================
                    LOGO
                ================================================= */}

                <div
                  className="
                    mb-8

                    flex
                    items-center

                    border-b
                    border-black/[0.07]

                    pb-7

                    sm:mb-10
                    sm:pb-8
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
                    mt-auto

                    pt-8
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      closeMenuWithAnimation(() =>
                        setAssociateFormOpen(true)
                      )
                    }
                    className="
                      mb-3
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-[#193A7E]/15
                      bg-[#193A7E]/[0.06]
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-[#193A7E]
                    "
                  >
                    <FaBriefcase className="text-sm" />
                    Join as an Associate Advocate
                  </button>

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
      </div>
    </nav>

    {associateFormOpen && (
      <div
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-end
          justify-center
          bg-[#0B2348]/45
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
            shadow-[0_28px_80px_rgba(11,35,72,0.28)]
            sm:max-h-[calc(100svh-3rem)]
            sm:rounded-[32px]
            sm:p-7
          "
        >
          <button
            type="button"
            onClick={() => setAssociateFormOpen(false)}
            aria-label="Close associate advocate application form"
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
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#193A7E]/55">
              Join the network
            </p>
            <h2
              id="associate-advocate-title"
              className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#193A7E] sm:text-3xl"
            >
              Associate Advocate Application
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#294A76]/70">
              Tell us a little about your practice. We’ll get in touch about opportunities in your area.
            </p>
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
              <select name="area" required defaultValue="" className="h-11 rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white">
                <option value="" disabled>Select your working area</option>
                <option value="Meerut">Meerut</option>
                <option value="Sardhana">Sardhana</option>
                <option value="Mawana">Mawana</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E] sm:col-span-2">
              Bar Council No.
              <input name="barCouncilNumber" required className="h-11 rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-[#193A7E] sm:col-span-2">
              A short introduction
              <textarea name="introduction" required rows="4" className="resize-y rounded-xl border border-[#193A7E]/12 bg-[#193A7E]/[0.025] px-3 py-2.5 text-base font-normal outline-none transition focus:border-[#193A7E]/45 focus:bg-white" />
            </label>
            <button
              type="submit"
              className="sm:col-span-2 mt-1 flex h-12 items-center justify-center gap-2 rounded-full bg-[#193A7E] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(25,58,126,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#123064]"
            >
              Send application
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
