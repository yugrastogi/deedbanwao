import {
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../../assets/images/deedbanwao_logo.svg";

import footerData from "./footer.data";

const Footer = () => {
  const scrollToSection = (event, href) => {
    if (!href.includes("#")) return;

    const [path, hash] = href.split("#");

    // Already on home page
    if (window.location.pathname === "/" && !path) {
      event.preventDefault();

      const section = document.getElementById(hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Home page section from another page
    if (path === "/" && hash) {
      event.preventDefault();

      window.location.href = href;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0B2348]

        px-5
        pt-20

        sm:px-6
        sm:pt-28

        lg:pt-32
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -right-48
          top-0

          h-[400px]
          w-[400px]

          rounded-full

          bg-white/[0.035]

          blur-[100px]

          sm:h-[550px]
          sm:w-[550px]
          sm:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          -left-48
          bottom-0

          h-[350px]
          w-[350px]

          rounded-full

          bg-[#193A7E]/40

          blur-[90px]

          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[110px]
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl
        "
      >
        {/* =================================================
            TOP CONTENT
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12

            sm:gap-16

            lg:grid-cols-[1.4fr_0.7fr_1fr]
            lg:gap-16
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <img
              src={logo}
              alt="DeedBanwao"
              className="
                h-10
                w-auto

                sm:h-11
              "
            />

            <p
              className="
                mt-6

                max-w-sm

                text-sm
                leading-7

                text-white/50

                sm:text-base
                sm:leading-8
              "
            >
              Your trusted partner for legal property
              documentation. Clear guidance, careful
              documentation and a straightforward process.
            </p>

            {/* LOCATION */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3

                text-sm
                text-white/45
              "
            >
              <FaMapMarkerAlt className="shrink-0 text-xs" />

              <span>
                {footerData.contact.location}
              </span>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/35
              "
            >
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerData.navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) =>
                    scrollToSection(event, link.href)
                  }
                  className="
                    w-fit

                    text-sm
                    font-medium
                    text-white/65

                    transition-all
                    duration-300

                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/35
              "
            >
              Get In Touch
            </p>

            <div className="mt-5 flex flex-col gap-4">
              {/* =================================================
                  WHATSAPP
              ================================================= */}

              <a
                href={`https://wa.me/${footerData.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3

                  text-sm
                  font-medium
                  text-white/65

                  transition-all
                  duration-300

                  hover:text-[#25D366]
                "
              >
                <FaWhatsapp className="text-base" />

                <span>
                  WhatsApp
                </span>
              </a>

              {/* =================================================
                  PHONE
              ================================================= */}

              <a
                href={`tel:${footerData.contact.phoneNumbers[0].replace(
                  /\s/g,
                  ""
                )}`}
                className="
                  flex
                  items-center
                  gap-3

                  text-sm
                  font-medium
                  text-white/65

                  transition-all
                  duration-300

                  hover:text-white
                "
              >
                <FaPhone className="text-xs" />

                <span>
                  {footerData.contact.phoneNumbers[0]}
                </span>
              </a>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href={`mailto:${footerData.contact.email}`}
                className="
                  flex
                  items-center
                  gap-3

                  text-sm
                  font-medium
                  text-white/65

                  transition-all
                  duration-300

                  hover:text-white
                "
              >
                <FaEnvelope className="text-xs" />

                <span className="break-all">
                  {footerData.contact.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            CTA STRIP
        ================================================= */}

        <div
          className="
            mt-16

            rounded-[28px]

            border
            border-white/10

            bg-white/[0.035]

            p-6

            backdrop-blur-xl

            sm:mt-24
            sm:flex
            sm:items-center
            sm:justify-between
            sm:gap-8
            sm:p-8

            lg:mt-28
          "
        >
          <div>
            <p
              className="
                text-xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-white

                sm:text-2xl
              "
            >
              Need help with your property documents?
            </p>

            <p
              className="
                mt-2

                max-w-xl

                text-sm
                leading-6

                text-white/45
              "
            >
              Tell us what you need and we'll help you
              understand the next step.
            </p>
          </div>

          <a
            href="/contact"
            className="
              mt-6

              inline-flex
              w-fit

              items-center
              gap-2

              rounded-full

              bg-white

              px-5
              py-3

              text-sm
              font-semibold
              text-[#0B2348]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-white/90

              sm:mt-0
              sm:shrink-0
              sm:px-6
              sm:py-3.5
            "
          >
            Get In Touch

            <span>
              →
            </span>
          </a>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div
          className="
            mt-12

            flex
            flex-col
            gap-4

            border-t
            border-white/10

            py-6

            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:py-7
          "
        >
          <p
            className="
              text-[11px]
              font-medium
              text-white/30

              sm:text-xs
            "
          >
            © {new Date().getFullYear()} DeedBanwao.
            All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="
              flex
              w-fit

              items-center
              gap-2

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/35

              transition-all
              duration-300

              hover:text-white
            "
          >
            Back To Top

            <span
              className="
                flex
                h-7
                w-7

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/[0.04]
              "
            >
              <FaArrowUp className="text-[9px]" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;