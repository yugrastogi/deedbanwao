import { useEffect, useRef, useState } from "react";

import {
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import contactData from "./contact.data";

const ContactActions = ({
  isLight = false,
}) => {
  const [showCallOptions, setShowCallOptions] =
    useState(false);

  const callOptionsRef = useRef(null);

  // =====================================================
  // CLOSE CALL MENU WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        callOptionsRef.current &&
        !callOptionsRef.current.contains(
          event.target
        )
      ) {
        setShowCallOptions(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={callOptionsRef}
      className="
        relative
        z-10

        flex
        items-center
        gap-2
      "
    >
      {/* =====================================================
          CALL NOW
      ===================================================== */}

      <button
        type="button"
        onClick={() =>
          setShowCallOptions(
            (previous) => !previous
          )
        }
        className={`
          flex
          h-10
          w-10
          shrink-0

          cursor-pointer

          items-center
          justify-center
          gap-2

          rounded-full

          px-3

          text-sm
          font-semibold

          shadow-[inset_0_1px_1px_rgba(255,255,255,0.20)]

          backdrop-blur-xl

          transition-all
          duration-500

          hover:-translate-y-[1px]

          sm:w-auto
          sm:px-4
          sm:py-2.5

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
        <FaPhone className="text-xs" />

        <span className="hidden lg:inline">
          Call Now
        </span>
      </button>

      {/* =====================================================
          CALL OPTIONS
      ===================================================== */}

      {showCallOptions && (
        <div
          className={`
            absolute

            right-0
            top-[52px]

            z-50

            w-[calc(100vw-32px)]
            max-w-72

            overflow-hidden

            rounded-[24px]

            p-2

            backdrop-blur-2xl
            backdrop-saturate-150

            shadow-[0_20px_50px_rgba(0,0,0,0.20)]

            ${
              isLight
                ? `
                  border
                  border-black/[0.06]
                  bg-white/75
                `
                : `
                  border
                  border-white/15
                  bg-black/30
                `
            }
          `}
        >
          {/* HEADER */}

          <div
            className={`
              px-4
              py-3

              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]

              ${
                isLight
                  ? "text-black/45"
                  : "text-white/55"
              }
            `}
          >
            Choose a number
          </div>

          {/* NUMBERS */}

          {contactData.phoneNumbers.map(
            (number) => (
              <a
                key={number}
                href={`tel:${number.replace(
                  /\s/g,
                  ""
                )}`}
                onClick={() =>
                  setShowCallOptions(false)
                }
                className={`
                  flex
                  w-full
                  cursor-pointer

                  items-center
                  justify-between

                  rounded-[18px]

                  px-4
                  py-3.5

                  text-sm
                  font-semibold

                  transition-all
                  duration-300

                  ${
                    isLight
                      ? `
                        text-black/80
                        hover:bg-black/[0.06]
                        hover:text-black
                      `
                      : `
                        text-white/90
                        hover:bg-white/10
                        hover:text-white
                      `
                  }
                `}
              >
                <span>
                  {number}
                </span>

                <FaPhone
                  className={`
                    text-xs

                    ${
                      isLight
                        ? "text-black/35"
                        : "text-white/50"
                    }
                  `}
                />
              </a>
            )
          )}
        </div>
      )}

      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <a
        href={`https://wa.me/${contactData.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          flex
          h-10
          w-10
          shrink-0

          cursor-pointer

          items-center
          justify-center
          gap-2

          rounded-full

          bg-[#25D366]

          px-3

          text-sm
          font-semibold
          text-white

          shadow-[inset_0_1px_1px_rgba(255,255,255,0.20)]

          backdrop-blur-xl

          transition-all
          duration-500

          hover:-translate-y-[1px]
          hover:bg-[#20BD5A]

          sm:w-auto
          sm:px-5
          sm:py-2.5
        "
      >
        <FaWhatsapp className="text-base" />

        <span className="hidden lg:inline">
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default ContactActions;