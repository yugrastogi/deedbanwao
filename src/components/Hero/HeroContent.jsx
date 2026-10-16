import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaCalculator,
  FaChevronDown,
  FaClock,
  FaFileLines,
  FaLocationDot,
  FaShieldHalved,
  FaWhatsapp,
} from "react-icons/fa6";

const TRUST_FEATURES = [
  {
    icon: FaShieldHalved,
    title: "Trusted & Professional",
    subtitle: "Legally valid documentation",
  },
  {
    icon: FaClock,
    title: "Time Saving",
    subtitle: "Hassle-free process",
  },
  {
    icon: FaFileLines,
    title: "Wide Range of Services",
    subtitle: "All major property documents",
  },
  {
    icon: FaLocationDot,
    title: "Meerut & Nearby Areas",
    subtitle: "Local support, easy coordination",
  },
];

const HeroContent = ({
  contentRef,
  visualRef,
}) => {
  const navigate = useNavigate();

  // =====================================================
  // SUBMIT ENQUIRY
  // =====================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData =
      new FormData(event.currentTarget);

    const name =
      formData.get("name");

    const phone =
      formData.get("phone");

    const service =
      formData.get("service");

    const message =
      formData.get("message");

    const whatsappMessage = `
Hello DeedBanwao,

I would like to make a property documentation enquiry.

Name: ${name}
Phone: ${phone}
Requirement: ${service}
Message: ${message || "Not provided"}

Please guide me regarding the next steps.
`.trim();

    const whatsappUrl =
      `https://wa.me/917983320163?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappUrl,
      "_blank"
    );
  };

  return (
    <div
      className="
        relative
        z-10
        mx-auto
        flex
        min-h-0 lg:min-h-[min(100svh,780px)]
        max-w-[1560px]
        items-center
        px-6
        pb-14
        pt-28
        sm:px-8
        sm:pb-16
        sm:pt-32
        lg:px-12
        lg:pb-12
        lg:pt-32
      "
    >
      <div
        className="
          grid
          w-full
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-12
          xl:gap-16
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          ref={contentRef}
          className="
            flex
            flex-col
            text-left
          "
        >
          {/* LABEL */}

          <p
            className="
              mb-4
            text-[10px]
              font-bold
              uppercase
            whitespace-nowrap
            tracking-[0.16em]
              text-[#193A7E]
              sm:mb-5
            sm:text-xs
            sm:tracking-[0.18em]
            lg:text-sm
            lg:tracking-[0.2em]
            "
          >
            Paper Sahi Toh Property Sahi.
          </p>

          {/* HEADING */}

          <h1
            className="
              max-w-[760px]
              text-[2.45rem]
              font-semibold
              leading-[0.98]
              tracking-[-0.04em]
              text-[#193A7E]
              sm:text-[3.2rem]
              md:text-[3.85rem]
              lg:text-[3.85rem]
              xl:text-[4.8rem]
            "
          >
            Property Registration in
            <br />
            <span className="text-[#16A66A]">
              Meerut.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              max-w-[580px]
              text-[14px]
              font-medium
              leading-6
              text-[#193A7E]/75
              sm:mt-5
              sm:text-base
              sm:leading-7
              lg:text-base
              lg:leading-7
            "
          >
            DeedBanwao provides complete registration services
            for your Sale Deed, Lease Deed, Gift Deed, and other
            property-related deeds in Meerut. Our expert lawyers
            give end-to-end service for property documentation
            and registration.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-5
              flex
              flex-col
              items-stretch
              gap-3
              sm:mt-7
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            {/* GET FREE CONSULTATION */}

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                group
                flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#193A7E]
                px-5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_12px_29px_rgba(25,58,126,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#193A7E]
                sm:h-12
                sm:px-7
                sm:text-sm
                lg:h-14
                lg:px-8
                lg:text-base
              "
            >
              <FaFileLines className="text-[11px] sm:text-xs" />

              Get Free Consultation

              <FaArrowRight
                className="
                  text-[11px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:text-xs
                "
              />
            </button>

            {/* TALK TO AN EXPERT */}

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                group
                flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-black/[0.08]
                bg-white
                px-5
                text-[13px]
                font-semibold
                text-black/80
                shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#193A7E]/20
                hover:text-[#193A7E]
                sm:h-12
                sm:px-7
                sm:text-sm
                lg:h-14
                lg:px-8
                lg:text-base
              "
            >
              <FaCalculator className="text-[11px] sm:text-xs" />

              Talk to an Expert

              <FaArrowRight
                className="
                  text-[11px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:text-xs
                "
              />
            </button>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div
          ref={visualRef}
          className="
            relative
            mx-auto
            min-h-[440px] sm:min-h-[460px]
            w-full
            max-w-[640px]
            lg:mx-0
            lg:h-[490px]
            lg:min-h-0
            lg:max-w-none
          "
        >
          {/* =================================================
              ENQUIRY FORM
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              flex
              w-full
              flex-col
              rounded-[34px]
              border
              border-black/[0.07]
              bg-white
              p-4
              shadow-[0_36px_90px_rgba(15,35,70,0.12)]
              sm:p-5
              lg:rounded-[38px]
              lg:p-6
            "
          >
            {/* FORM HEADER */}

            <div
              className="
                flex
                shrink-0
                items-start
                justify-between
              "
            >
              <div
                className="
                  min-w-0
                  pr-3
                "
              >
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#193A7E]/50
                    sm:text-xs
                  "
                >
                  QUICK ENQUIRY
                </p>

                <h2
                  className="
                    mt-1
                    text-[21px]
                    font-semibold
                    tracking-[-0.03em]
                    text-[#193A7E]
                    sm:text-[24px]
                  "
                >
                  Tell us what you need.
                </h2>

                <p
                  className="
                    mt-1
                    max-w-[440px]
                    text-[13px]
                    leading-5
                    text-black/40
                    sm:text-sm
                  "
                >
                  Share a few details and we'll
                  guide you through the next step.
                </p>
              </div>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-4
              "
            >
              <div
                className="
                  space-y-3
                "
              >
                {/* NAME + PHONE */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                    sm:gap-3
                  "
                >
                  {/* NAME */}

                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.11em]
                        text-black/35
                        sm:text-[11px]
                      "
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="
                        h-10
                        w-full
                        rounded-[11px]
                        border
                        border-black/[0.07]
                        bg-black/[0.02]
                        px-4
                        text-[14px]
                        text-black
                        outline-none
                        placeholder:text-black/25
                        transition-all
                        duration-300
                        focus:border-[#193A7E]/30
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#193A7E]/[0.05]
                        sm:h-11
                        sm:text-[15px]
                      "
                    />
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.11em]
                        text-black/35
                        sm:text-[11px]
                      "
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91"
                      className="
                        h-10
                        w-full
                        rounded-[11px]
                        border
                        border-black/[0.07]
                        bg-black/[0.02]
                        px-4
                        text-[14px]
                        text-black
                        outline-none
                        placeholder:text-black/25
                        transition-all
                        duration-300
                        focus:border-[#193A7E]/30
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#193A7E]/[0.05]
                        sm:h-11
                        sm:text-[15px]
                      "
                    />
                  </div>
                </div>

                {/* REQUIREMENT */}

                <div>
                  <label
                    htmlFor="service"
                    className="
                      mb-1.5
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-black/35
                      sm:text-[11px]
                    "
                  >
                    Requirement
                  </label>

                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="
                        h-10
                        w-full
                        appearance-none
                        rounded-[11px]
                        border
                        border-black/[0.07]
                        bg-black/[0.02]
                        px-4
                        pr-10
                        text-[14px]
                        text-black/70
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#193A7E]/30
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#193A7E]/[0.05]
                        sm:h-11
                        sm:text-[15px]
                      "
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select a service
                      </option>

                      <option value="Deed Drafting">
                        Deed Drafting
                      </option>

                      <option value="Registration Assistance">
                        Registration Assistance
                      </option>

                      <option value="Legal Consultation">
                        Legal Consultation
                      </option>

                      <option value="Property Papers Check">
                        Property Papers Check
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>

                    <FaChevronDown
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[11px]
                        text-black/30
                      "
                    />
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-1.5
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-black/35
                      sm:text-[11px]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Tell us briefly about your requirement..."
                    className="
                      min-h-[60px]
                      w-full
                      resize-none
                      rounded-[11px]
                      border
                      border-black/[0.07]
                      bg-black/[0.02]
                      px-4
                      py-3
                      text-[14px]
                      leading-6
                      text-black
                      outline-none
                      placeholder:text-black/25
                      transition-all
                      duration-300
                      focus:border-[#193A7E]/30
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#193A7E]/[0.05]
                      sm:min-h-[68px]
                      sm:text-[15px]
                    "
                  />
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    h-10
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-[11px]
                    bg-[#16A66A]
                    text-[14px]
                    font-semibold
                    text-white
                    shadow-[0_8px_21px_rgba(22,166,106,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#16A66A]
                    sm:h-11
                    sm:text-[15px]
                  "
                >
                  <FaWhatsapp className="text-base sm:text-lg" />

                  <span className="truncate">
                    Send Enquiry on WhatsApp
                  </span>

                  <FaArrowRight
                    className="
                      shrink-0
                      text-[13px]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      sm:text-sm
                    "
                  />
                </button>

                {/* PRIVACY */}

                <p
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    pt-1
                    text-center
                    text-[11px]
                    leading-5
                    text-black/35
                    sm:text-xs
                  "
                >
                  <FaShieldHalved className="text-[10px] text-[#193A7E]/50" />

                  Your details stay private and are used only
                  to respond to your enquiry.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* =================================================
            TRUST FEATURES STRIP
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-4
            rounded-2xl
            border
            border-white/70
            bg-[#DFEAF5]
            p-5
            shadow-sm
            sm:grid-cols-4
            sm:gap-5
            sm:p-6
            lg:col-span-2
            lg:mt-4
          "
        >
          {TRUST_FEATURES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[112px]
                  items-center
                  gap-3
                  rounded-xl
                  bg-white/70
                  p-3
                  shadow-sm
                  sm:gap-4
            sm:min-h-[112px]
                  sm:p-4
                "
              >
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#193A7E]/10
                    text-[13px]
                    text-[#193A7E]
                    sm:h-14
                    sm:w-14
                    sm:text-base lg:text-lg
                  "
                >
                  <Icon />
                </span>

                <div
                  className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    justify-center
                  "
                >
                  <p
                    className="
                      text-sm
                      font-semibold
                      leading-tight
                      text-[#193A7E]
                      sm:text-lg
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-snug
                      text-[#193A7E]/80
                      sm:mt-1.5
                      sm:text-base
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
