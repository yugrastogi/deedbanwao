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
      const processSection = document.getElementById("process");

      if (!processSection) return;

      const navbarHeight = 66;

      const sectionTop = processSection.offsetTop;
      const sectionBottom =
        sectionTop + processSection.offsetHeight;

      const scrollPosition = window.scrollY + navbarHeight;

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
      window.removeEventListener("scroll", handleScroll);
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
      className={`
        fixed
        left-1/2
        top-4
        z-30
        -translate-x-1/2

        flex
        h-[66px]
        w-[94%]
        max-w-6xl

        items-center
        justify-between

        overflow-visible
        rounded-full

        px-3
        pl-4

        backdrop-blur-2xl
        backdrop-saturate-150

        shadow-[0_20px_50px_rgba(0,0,0,0.18)]

        transition-all
        duration-500
        ease-out

        sm:top-6
        sm:w-[92%]
        sm:pl-5

        ${
          isLight
            ? `
              border
              border-black/[0.06]
              bg-white/55
              shadow-[0_20px_50px_rgba(0,0,0,0.10)]
            `
            : `
              border
              border-white/[0.04]
              bg-black/30
            `
        }
      `}
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
        isLight={isLight}
      />

      {/* =====================================================
          CONTACT BUTTONS
      ===================================================== */}

      <ContactActions isLight={isLight} />

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
            setMenuOpen((previous) => !previous)
          }
          className={`
            relative
            ml-1

            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center

            rounded-full

            shadow-[inset_0_1px_1px_rgba(255,255,255,0.20)]

            backdrop-blur-xl

            transition-all
            duration-500

            ${
              isLight
                ? `
                  bg-black/[0.06]
                  text-black
                  hover:bg-black/[0.10]
                `
                : `
                  bg-white/10
                  text-white
                  hover:bg-white/20
                `
            }
          `}
        >
          {/* TOP LINE */}

          <span
            className={`
              absolute
              h-[1.5px]
              w-4
              rounded-full

              transition-all
              duration-300

              ${
                isLight
                  ? "bg-black"
                  : "bg-white"
              }

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

              transition-all
              duration-300

              ${
                isLight
                  ? "bg-black"
                  : "bg-white"
              }

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

              transition-all
              duration-300

              ${
                isLight
                  ? "bg-black"
                  : "bg-white"
              }

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
            className={`
              absolute

              right-0
              top-[62px]

              w-56

              overflow-hidden

              rounded-[24px]

              p-2

              backdrop-blur-2xl
              backdrop-saturate-150

              shadow-[0_20px_50px_rgba(0,0,0,0.20)]

              transition-all
              duration-500

              ${
                isLight
                  ? `
                    border
                    border-black/[0.06]
                    bg-white/65
                  `
                  : `
                    border
                    border-white/10
                    bg-black/30
                  `
              }
            `}
          >
            <NavLinks
              mobile
              setMenuOpen={setMenuOpen}
              isLight={isLight}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;