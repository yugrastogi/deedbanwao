import { useEffect, useRef, useState } from "react";

import logo from "../../assets/images/deedbanwao_logo.svg";

import ContactActions from "./ContactActions";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const mobileMenuRef = useRef(null);

  // =====================================================
  // DETECT PROCESS SECTION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const processSection =
        document.getElementById("process");

      if (!processSection) return;

      const navbarHeight = 66;

      const sectionTop = processSection.offsetTop;

      const sectionBottom =
        sectionTop + processSection.offsetHeight;

      const scrollPosition =
        window.scrollY + navbarHeight;

      setIsLight(
        scrollPosition >= sectionTop &&
        scrollPosition < sectionBottom
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
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

      <div className="relative z-10 flex shrink-0 items-center">
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

      <ContactActions isLight={true} />

      {/* =====================================================
          MOBILE HAMBURGER
      ===================================================== */}

      <div
        ref={mobileMenuRef}
        className="
          relative
          z-50
          md:hidden
        "
      >
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (previous) => !previous
            )
          }
          className="
            relative
            ml-1

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
          {/* TOP LINE */}

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

          {/* MIDDLE LINE */}

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

          {/* BOTTOM LINE */}

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

        {/* =====================================================
            MOBILE NAV MENU
        ===================================================== */}

        {menuOpen && (
          <div
            className="
              absolute

              right-0
              top-[58px]

              w-56

              overflow-hidden

              rounded-[24px]

              border
              border-black/[0.06]

              bg-white/80

              p-2

              backdrop-blur-2xl
              backdrop-saturate-150

              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            "
          >
            <NavLinks
              mobile
              setMenuOpen={setMenuOpen}
              isLight={true}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;