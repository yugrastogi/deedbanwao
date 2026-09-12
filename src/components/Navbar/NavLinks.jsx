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
      name: "Process",
      href: "#process",
    },
    {
      name: "Why Us?",
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

    /*
      Mobile:
      Animate the menu OUT first,
      then perform navigation.
    */

    if (
      mobile &&
      closeMenuWithAnimation
    ) {
      closeMenuWithAnimation(() => {
        performNavigation(link);
      });

      return;
    }

    /*
      Desktop:
      Navigate immediately.
    */

    setMenuOpen?.(false);

    performNavigation(link);
  };

  return (
    <div
      className={
        mobile
          ? `
              flex
              flex-col
              gap-1
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
      {links.map((link) => (
        <a
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

                    px-3
                    py-4

                    text-[2rem]
                    leading-none
                    tracking-[-0.035em]

                    sm:px-4
                    sm:py-5
                    sm:text-4xl
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

          {/* Mobile Arrow */}

          {mobile && (
            <span
              className="
                text-xl
                font-normal

                text-[#193A7E]/30

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:text-[#193A7E]
              "
            >
              →
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;