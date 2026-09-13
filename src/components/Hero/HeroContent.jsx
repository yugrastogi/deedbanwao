import {
  useEffect,
} from "react";

import {
  FaArrowRight,
  FaCalculator,
  FaChevronDown,
  FaClock,
  FaFileLines,
  FaLocationDot,
  FaShieldHalved,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

import propertyDocument from "../../assets/images/property-document.png";

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
  graphicsRef,
  formRef,
  showEnquiry,
  setShowEnquiry,
}) => {
  // =====================================================
  // OPEN ENQUIRY FROM MOBILE MENU
  // =====================================================

  useEffect(() => {
    const openEnquiryForm = () => {
      setShowEnquiry(true);
    };

    window.addEventListener(
      "open-enquiry-form",
      openEnquiryForm
    );

    return () => {
      window.removeEventListener(
        "open-enquiry-form",
        openEnquiryForm
      );
    };
  }, [setShowEnquiry]);

  // =====================================================
  // SCROLL TO PROCESS SECTION (HOW IT WORKS)
  // =====================================================

  const scrollToProcess = () => {
    const section = document.getElementById("process");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

        min-h-screen

        max-w-[1560px]

        items-center

        px-6
        pb-20

        pt-40

        sm:px-8
        sm:pb-24
        sm:pt-36

        lg:px-12
        lg:pb-16
        lg:pt-32
      "
    >
      <div
        className="
          grid
          w-full

          grid-cols-1

          items-center

          gap-14

          lg:grid-cols-[0.95fr_1.05fr]

          lg:gap-16

          xl:gap-24
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
              mb-6

              text-xs
              font-bold
              uppercase
              tracking-[0.25em]

              text-[#193A7E]

              sm:mb-7
              sm:text-sm
              sm:tracking-[0.3em]
            "
          >
            Property Documentation & Deed Drafting In Meerut
          </p>

          {/* SEO SUPPORTING HEADING */}

          {/* HEADING */}

          <h1
            className="
              max-w-[760px]

              text-[3.75rem]
              font-semibold

              leading-[0.94]

              tracking-[-0.045em]

              text-[#193A7E]

              sm:text-[4.75rem]

              md:text-[5.25rem]

              lg:text-[6rem]

              xl:text-[6.75rem]
            "
          >
            Paper Sahi Toh
            <br />
            <span className="text-[#16A66A]">
              Property Sahi.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7

              max-w-[580px]

              text-lg
              font-medium
              leading-8

              text-[#294A76]/75

              sm:mt-8
              sm:text-xl
              sm:leading-9
            "
          >
            Professional property documentation and deed
            drafting assistance in Meerut, including Sale
            Deeds, Gift Deeds, Wills, GPA, SPA, Partition
            Deeds, Rent Agreements and other property-related
            deeds. Get document checking, drafting guidance
            and registration assistance from the comfort of
            your home.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-10

              flex
              flex-col
              items-stretch
              gap-4

              sm:mt-12
              sm:flex-row
              sm:items-center
            "
          >
            {/* HOW IT WORKS */}

            <button
              type="button"
              onClick={scrollToProcess}
              className="
                group

                flex
                h-14

                items-center
                justify-center
                gap-2.5

                rounded-full

                bg-[#193A7E]

                px-8

                text-base
                font-semibold
                text-white

                shadow-[0_14px_34px_rgba(25,58,126,0.20)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#123064]

                sm:h-16
                sm:px-9
                sm:text-lg
              "
            >
              <FaFileLines className="text-sm" />

              How It Works

              <FaArrowRight
                className="
                  text-sm

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </button>

            {/* GET ESTIMATE */}

            <button
              type="button"
              onClick={() =>
                setShowEnquiry(true)
              }
              className="
                group

                flex
                h-14

                items-center
                justify-center
                gap-2.5

                rounded-full

                border
                border-black/[0.08]

                bg-white

                px-8

                text-base
                font-semibold
                text-black/80

                shadow-[0_10px_28px_rgba(0,0,0,0.06)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#193A7E]/20
                hover:text-[#193A7E]

                sm:h-16
                sm:px-9
                sm:text-lg
              "
            >
              <FaCalculator className="text-sm" />

              Get Estimate

              <FaArrowRight
                className="
                  text-sm

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
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

            min-h-[640px]
            w-full
            max-w-[640px]

            lg:mx-0
            lg:h-[580px]
            lg:min-h-0
            lg:max-w-none
          "
        >
          {/* =================================================
              SINGLE HERO IMAGE
          ================================================= */}

          <div
            ref={graphicsRef}
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center
            "
          >
            <img
              src={propertyDocument}
              alt="Property deed documents and property documentation"
              className="
                block

                h-auto
                w-full

                max-w-[590px]

                object-contain

                select-none

                lg:max-w-[650px]

                xl:max-w-[700px]
              "
            />
          </div>

          {/* =================================================
              ENQUIRY FORM
          ================================================= */}

          <div
            ref={formRef}
            className="
              absolute
              inset-0

              flex
              w-full
              flex-col

              overflow-y-auto
              overflow-x-hidden

              rounded-[34px]

              border
              border-black/[0.07]

              bg-white

              p-5

              shadow-[0_36px_90px_rgba(15,35,70,0.12)]

              sm:p-6

              lg:rounded-[38px]
              lg:p-7
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
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]

                    text-[#193A7E]/50
                  "
                >
                  QUICK ENQUIRY
                </p>

                <h2
                  className="
                    mt-2

                    text-2xl
                    font-semibold
                    tracking-[-0.03em]

                    text-[#193A7E]

                    sm:text-3xl
                  "
                >
                  Tell us what you need.
                </h2>

                <p
                  className="
                    mt-2

                    max-w-[390px]

                    text-xs
                    leading-5

                    text-black/40

                    sm:text-sm
                  "
                >
                  Share a few details and we'll
                  guide you through the next step.
                </p>
              </div>

              {/* CLOSE */}

              <button
                type="button"
                onClick={() =>
                  setShowEnquiry(false)
                }
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-black/[0.04]

                  text-black/50

                  transition-all
                  duration-300

                  hover:bg-black/[0.08]
                  hover:text-black
                "
              >
                <FaXmark className="text-xs" />
              </button>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-4

                flex
                flex-1
                flex-col

                sm:mt-5
              "
            >
              <div
                className="
                  space-y-3

                  sm:space-y-3.5
                "
              >
              {/* NAME + PHONE */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-3

                  sm:grid-cols-2
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
                      tracking-[0.12em]

                      text-black/35
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
                      h-11
                      w-full

                      rounded-xl

                      border
                      border-black/[0.07]

                      bg-black/[0.02]

                      px-4

                      text-sm
                      text-black

                      outline-none

                      placeholder:text-black/25

                      transition-all
                      duration-300

                      focus:border-[#193A7E]/30
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#193A7E]/[0.05]
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
                      tracking-[0.12em]

                      text-black/35
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
                      h-11
                      w-full

                      rounded-xl

                      border
                      border-black/[0.07]

                      bg-black/[0.02]

                      px-4

                      text-sm
                      text-black

                      outline-none

                      placeholder:text-black/25

                      transition-all
                      duration-300

                      focus:border-[#193A7E]/30
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#193A7E]/[0.05]
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
                    tracking-[0.12em]

                    text-black/35
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
                      h-11
                      w-full

                      appearance-none

                      rounded-xl

                      border
                      border-black/[0.07]

                      bg-black/[0.02]

                      px-4
                      pr-10

                      text-sm
                      text-black/70

                      outline-none

                      transition-all
                      duration-300

                      focus:border-[#193A7E]/30
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#193A7E]/[0.05]
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

                      text-xs
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
                    tracking-[0.12em]

                    text-black/35
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
                    min-h-[72px]
                    w-full

                    resize-none

                    rounded-xl

                    border
                    border-black/[0.07]

                    bg-black/[0.02]

                    px-4
                    py-3

                    text-sm
                    leading-5
                    text-black

                    outline-none

                    placeholder:text-black/25

                    transition-all
                    duration-300

                    focus:border-[#193A7E]/30
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#193A7E]/[0.05]
                  "
                />
              </div>
              </div>

              {/* SPACER — absorbs leftover height so the CTA sits at the bottom of the card */}

              <div className="flex-1" />

              <div className="space-y-3">

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group

                  flex
                  h-12
                  w-full

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-[#25D366]

                  text-sm
                  font-semibold
                  text-white

                  shadow-[0_10px_25px_rgba(37,211,102,0.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#20BD5A]
                "
              >
                <FaWhatsapp className="text-base" />

                <span className="truncate">
                  Send Enquiry on WhatsApp
                </span>

                <FaArrowRight
                  className="
                    shrink-0
                    text-sm

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* PRIVACY */}

              <p
                className="
                  flex
                  items-center
                  justify-center

                  gap-2

                  pt-1

                  text-center

                  text-[11px]
                  leading-tight

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
            grid-cols-2

            gap-x-8
            gap-y-10

            border-t
            border-black/[0.07]

            pt-12

            sm:grid-cols-4
            sm:gap-x-10

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
                  items-start
                  gap-5
                "
              >
                <span
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#193A7E]/[0.07]

                    text-lg
                    text-[#193A7E]
                  "
                >
                  <Icon />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      text-base
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
                      mt-1.5

                      text-sm
                      leading-tight

                      text-black/45

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