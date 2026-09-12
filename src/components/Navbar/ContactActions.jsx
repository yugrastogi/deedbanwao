import { FaPhone, FaWhatsapp } from "react-icons/fa";

import contactData from "./contact.data";

const ContactActions = ({ isLight = false }) => {
  const phoneNumber = contactData.phoneNumbers[0];

  return (
    <div
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

      <a
        href={`tel:${phoneNumber.replace(/\s/g, "")}`}
        aria-label="Call Now"
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
      </a>

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