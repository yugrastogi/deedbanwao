import { useEffect, useRef, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const NavLinks = ({
  mobile = false,
  setMenuOpen,
  isLight = false,
  closeMenuWithAnimation,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [activeLink, setActiveLink] = useState("Home");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = (name) => {
    const activeElement = linkRefs.current[name];
    const navElement = navRef.current;
    if (!activeElement || !navElement) return;
    setIndicator({
      left: activeElement.offsetLeft,
      width: activeElement.offsetWidth,
    });
  };

  useEffect(() => {
    const updateActiveLink = () => {
      if (location.pathname === "/contact") {
        setActiveLink("Contact");
        return;
      }

      const sectionNames = [
        ["services", "Services"],
        ["process", "How We Work"],
        ["why-us", "Why Us"],
        ["faq", "FAQs"],
      ];
      const marker = window.scrollY + 140;
      let current = "Home";

      for (const [id, name] of sectionNames) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top + window.scrollY <= marker) {
          current = name;
        }
      }

      setActiveLink(current);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", () => updateIndicator(activeLink));
    return () => window.removeEventListener("scroll", updateActiveLink);
  }, [location.pathname]);

  useEffect(() => {
    updateIndicator(activeLink);
  }, [activeLink, mobile, isLight]);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "How We Work",
      href: "#process",
    },
    {
      name: "Why Us",
      href: "#why-us",
    },
    {
      name: "FAQs",
      href: "#faq",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // =====================================================
  // ACTUALLY NAVIGATE
  // =====================================================

  const performNavigation = (link) => {
    // =================================================
    // HOME
    // =================================================

    if (link.name === "Home") {
      if (location.pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        navigate("/");
      }

      return;
    }

    // =================================================
    // CONTACT
    // =================================================

    if (link.name === "Contact") {
      navigate("/contact");
      return;
    }

    // =================================================
    // SECTION
    // =================================================

    const sectionId =
      link.href.replace("#", "");

    if (location.pathname === "/") {
      const section =
        document.getElementById(
          sectionId
        );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/");

      setTimeout(() => {
        const section =
          document.getElementById(
            sectionId
          );

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 180);
    }
  };

  // =====================================================
  // CLICK HANDLER
  // =====================================================

  const handleNavigation = (
    event,
    link
  ) => {
    event.preventDefault();

    // =================================================
    // MOBILE
    // =================================================

    if (
      mobile &&
      closeMenuWithAnimation
    ) {
      closeMenuWithAnimation(() => {
        performNavigation(link);
      });

      return;
    }

    // =================================================
    // DESKTOP
    // =================================================

    setMenuOpen?.(false);

    performNavigation(link);
  };

  return (
    <div
      ref={navRef}
      className={
        mobile
          ? `
              flex
              flex-col
              gap-1.5
            `
          : `
              relative
              z-10

              hidden

              items-center
              gap-1

              md:flex
            `
      }
    >
      {!mobile && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-[#193A7E] transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width, opacity: indicator.width ? 1 : 0 }}
        />
      )}
      {links.map((link) => (
        <a
          ref={(element) => { linkRefs.current[link.name] = element; }}
          key={link.name}
          href={
            link.name === "Contact"
              ? "/contact"
              : link.name === "Home"
                ? "/"
                : `/#${link.href.replace(
                    "#",
                    ""
                  )}`
          }
          onClick={(event) =>
            handleNavigation(
              event,
              link
            )
          }
          aria-current={activeLink === link.name ? "page" : undefined}
          className={`
            group

            rounded-full

            font-semibold

            transition-all
            duration-300

            ${
              isLight
                ? `
                    text-black/75
                    hover:bg-black/[0.06]
                    hover:text-black
                  `
                : `
                    text-white
                    hover:bg-white/10
                    hover:text-white
                  `
            }

            ${
              mobile
                ? `
                    flex
                    w-full

                    items-center
                    justify-between

                    rounded-2xl

                    px-4
                    py-3.5

                    text-[1.35rem]
                    leading-none
                    tracking-[-0.025em]

                    hover:bg-[#193A7E]/[0.04]

                    sm:px-5
                    sm:py-4
                    sm:text-2xl
                  `
                : `
                    px-4
                    py-2

                    text-base
                  `
            }
          `}
        >
          <span>
            {link.name}
          </span>

          {/* =================================================
              MOBILE ARROW
          ================================================= */}

          {mobile && (
            <span
              className="
                flex
                h-8
                w-8
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#193A7E]/[0.045]

                text-base
                font-normal
                leading-none
                text-[#193A7E]/45

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:bg-[#193A7E]
                group-hover:text-white
              "
            >
              <span className="block translate-y-[-1px]">
                →
              </span>
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
