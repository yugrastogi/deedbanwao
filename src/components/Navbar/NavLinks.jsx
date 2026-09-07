import { useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({
  mobile = false,
  setMenuOpen,
  isLight = false,
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
  // NAVIGATION
  // =====================================================

  const handleNavigation = (event, link) => {
    // HOME

    if (link.name === "Home") {
      event.preventDefault();

      setMenuOpen?.(false);

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

    // CONTACT

    if (link.name === "Contact") {
      setMenuOpen?.(false);
      return;
    }

    // SECTION LINKS

    event.preventDefault();

    setMenuOpen?.(false);

    const sectionId = link.href.replace("#", "");

    if (location.pathname === "/") {
      const section =
        document.getElementById(sectionId);

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
          document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
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
                : `/#${link.href.replace("#", "")}`
          }
          onClick={(event) =>
            handleNavigation(event, link)
          }
          className={`
            rounded-full
            font-semibold

            transition-all
            duration-500

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
                    w-full
                    px-5
                    py-3
                    text-sm
                  `
                : `
                    px-4
                    py-2
                    text-sm
                  `
            }
          `}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;