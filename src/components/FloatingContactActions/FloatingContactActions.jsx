import {
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const FloatingContactActions = () => {
  return (
    <div
      className="
        fixed
        bottom-28
        right-4
        z-20
        flex
        flex-col
        gap-3
        sm:bottom-32
        sm:right-6
      "
    >
      <a
        href="https://wa.me/917983320163"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#16A66A]
          text-xl
          text-white
          shadow-[0_10px_24px_rgba(22,166,106,0.28)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
        "
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+917983320163"
        aria-label="Call DeedBanwao"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#193A7E]
          text-lg
          text-white
          shadow-[0_10px_24px_rgba(25,58,126,0.25)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
        "
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default FloatingContactActions;
