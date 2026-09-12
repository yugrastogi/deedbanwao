import { useEffect } from "react";

import {
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaFileContract,
  FaLocationDot,
  FaPenNib,
  FaShieldHalved,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

const HeroContent = ({
  contentRef,
  visualRef,
  graphicsRef,
  formRef,
  showEnquiry,
  setShowEnquiry,
}) => {
  // =====================================================
  // OPEN ENQUIRY FORM FROM MOBILE MENU
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
  // SUBMIT ENQUIRY
  // =====================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData =
      new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

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
        max-w-[1500px]
        items-center

        px-4
        pb-16
        pt-28

        sm:px-6
        sm:pb-20
        sm:pt-32

        lg:px-6
        lg:pb-16
        lg:pt-28

        xl:px-8
      "
    >
      <div
        className="
          grid
          w-full

          grid-cols-1

          items-center

          gap-12

          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16

          xl:grid-cols-[0.9fr_1.1fr]
          xl:gap-24
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          ref={contentRef}
          className="
            flex
            flex-col

            text-left
          "
        >
          {/* =====================================================
              EYEBROW
          ===================================================== */}

          <div
            className="
              mb-6

              flex
              w-fit
              items-center
              gap-2

              rounded-full

              border
              border-[#193A7E]/10

              bg-[#193A7E]/[0.035]

              px-3.5
              py-2

              text-[10px]
              font-semibold
              tracking-[0.16em]

              text-[#193A7E]

              sm:mb-7
              sm:px-4
            "
          >
            <span
              className="
                h-1.5
                w-1.5

                rounded-full

                bg-[#193A7E]
              "
            />

            LEGAL PROPERTY SUPPORT
          </div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <h1
            className="
              max-w-[760px]

              text-[3.35rem]
              font-semibold

              leading-[0.94]
              tracking-[-0.055em]

              text-[#193A7E]

              sm:text-6xl

              md:text-7xl

              lg:text-[5.7rem]

              xl:text-[6.4rem]
            "
          >
            Paper Sahi Toh
            <br />
            Property Sahi.
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <p
            className="
              mt-7

              max-w-[500px]

              text-base
              font-medium
              leading-7

              text-[#294A76]/75

              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            Your trusted partner for property documentation,
            deed drafting and registration assistance in Meerut.
          </p>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}

          <div
            className="
              mt-8

              flex
              flex-col
              items-stretch
              gap-3

              sm:mt-9
              sm:flex-row
              sm:items-center
            "
          >
            {/* =================================================
                GET IN TOUCH
            ================================================= */}

            <a
              href="/contact"
              className="
                group

                flex
                h-12
                items-center
                justify-center
                gap-2

                rounded-full

                bg-[#193A7E]

                px-6

                text-sm
                font-semibold
                text-white

                shadow-[0_12px_30px_rgba(25,58,126,0.18)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#123064]
                hover:shadow-[0_18px_40px_rgba(25,58,126,0.22)]

                sm:h-13
                sm:px-7
              "
            >
              Get In Touch

              <FaArrowRight
                className="
                  text-xs

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </a>

            {/* =================================================
                GET ENQUIRY
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setShowEnquiry(true)
              }
              className="
                group

                flex
                h-12
                items-center
                justify-center
                gap-2

                rounded-full

                border
                border-black/[0.08]

                bg-white

                px-6

                text-sm
                font-semibold
                text-black/80

                shadow-[0_8px_25px_rgba(0,0,0,0.05)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#193A7E]/20
                hover:text-[#193A7E]

                sm:h-13
                sm:px-7
              "
            >
              Get Enquiry

              <FaArrowRight
                className="
                  text-xs

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* =====================================================
              TRUST LINE
          ===================================================== */}

          <div
            className="
              mt-7

              flex
              items-center
              gap-2

              text-xs
              font-medium

              text-black/40

              sm:mt-8
            "
          >
            <FaShieldHalved
              className="text-[#193A7E]/50"
            />

            Clear process • Document focused • Meerut
          </div>
        </div>

        {/* =====================================================
            RIGHT VISUAL AREA
        ===================================================== */}

        <div
          ref={visualRef}
          className="
            relative

            mx-auto

            h-[430px]
            w-full
            max-w-[640px]

            lg:mx-0
            lg:h-[560px]
            lg:max-w-none
          "
        >
          {/* =================================================
              DOCUMENT GRAPHICS
          ================================================= */}

          <div
            ref={graphicsRef}
            className="
              absolute
              inset-0
            "
          >
            {/* =================================================
                BACK DOCUMENT
            ================================================= */}

            <div
              className="
                absolute

                right-[2%]
                top-[16%]

                h-[265px]
                w-[65%]

                rotate-[7deg]

                rounded-[26px]

                border
                border-black/[0.05]

                bg-[#F8F9FB]

                shadow-[0_25px_60px_rgba(15,35,70,0.07)]

                lg:right-[4%]
                lg:top-[14%]
                lg:h-[330px]
              "
            />

            {/* =================================================
                MAIN DOCUMENT
            ================================================= */}

            <div
              className="
                absolute

                left-[5%]
                top-[9%]

                h-[310px]
                w-[78%]

                rotate-[-5deg]

                rounded-[28px]

                border
                border-black/[0.07]

                bg-white

                p-6

                shadow-[0_35px_80px_rgba(15,35,70,0.10)]

                sm:h-[350px]
                sm:p-8

                lg:left-[8%]
                lg:top-[11%]
                lg:h-[390px]
                lg:w-[72%]
              "
            >
              {/* Document Header */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >
                <div>
                  <div
                    className="
                      h-2
                      w-20

                      rounded-full

                      bg-[#193A7E]/20
                    "
                  />

                  <div
                    className="
                      mt-3
                      h-2
                      w-32

                      rounded-full

                      bg-black/[0.07]
                    "
                  />
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-full

                    bg-[#193A7E]/[0.06]

                    text-[#193A7E]
                  "
                >
                  <FaFileContract />
                </div>
              </div>

              {/* Document Lines */}

              <div className="mt-10 space-y-4">
                <div
                  className="
                    h-2
                    w-full
                    rounded-full
                    bg-black/[0.055]
                  "
                />

                <div
                  className="
                    h-2
                    w-[88%]
                    rounded-full
                    bg-black/[0.055]
                  "
                />

                <div
                  className="
                    h-2
                    w-[94%]
                    rounded-full
                    bg-black/[0.055]
                  "
                />

                <div
                  className="
                    h-2
                    w-[72%]
                    rounded-full
                    bg-black/[0.055]
                  "
                />
              </div>

              {/* Property Details */}

              <div
                className="
                  mt-9

                  rounded-2xl

                  border
                  border-[#193A7E]/[0.07]

                  bg-[#193A7E]/[0.025]

                  p-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]

                    text-[#193A7E]/50
                  "
                >
                  <FaLocationDot />

                  Property Details
                </div>

                <div
                  className="
                    mt-4

                    space-y-3
                  "
                >
                  <div
                    className="
                      h-2
                      w-[85%]
                      rounded-full
                      bg-black/[0.06]
                    "
                  />

                  <div
                    className="
                      h-2
                      w-[65%]
                      rounded-full
                      bg-black/[0.06]
                    "
                  />
                </div>
              </div>

              {/* Signature */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7

                  flex
                  items-end
                  justify-between
                "
              >
                <div>
                  <div
                    className="
                      h-px
                      w-28

                      bg-black/10
                    "
                  />

                  <p
                    className="
                      mt-2

                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]

                      text-black/30
                    "
                  >
                    Applicant
                  </p>
                </div>

                <FaPenNib
                  className="
                    text-[#193A7E]/30
                  "
                />
              </div>
            </div>

            {/* =================================================
                VERIFICATION CARD
            ================================================= */}

            <div
              className="
                absolute

                bottom-[9%]
                right-[2%]

                z-20

                w-[260px]

                rounded-[24px]

                border
                border-black/[0.07]

                bg-white/95

                p-5

                shadow-[0_25px_60px_rgba(15,35,70,0.13)]

                backdrop-blur-xl

                sm:w-[290px]

                lg:bottom-[10%]
                lg:right-[4%]
                lg:w-[315px]
                lg:p-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-full

                    bg-[#193A7E]/[0.07]

                    text-[#193A7E]
                  "
                >
                  <FaCheck />
                </div>

                <span
                  className="
                    rounded-full

                    bg-[#193A7E]/[0.06]

                    px-3
                    py-1.5

                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]

                    text-[#193A7E]
                  "
                >
                  Verified
                </span>
              </div>

              <h3
                className="
                  mt-5

                  text-base
                  font-semibold
                  tracking-tight

                  text-black/85
                "
              >
                Documentation Ready
              </h3>

              <p
                className="
                  mt-2

                  text-xs
                  leading-5

                  text-black/40
                "
              >
                Clear documentation and a guided process
                for your property matter.
              </p>

              <div
                className="
                  mt-5

                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5

                    rounded-full

                    bg-[#193A7E]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold

                    text-black/40
                  "
                >
                  MEERUT • UTTAR PRADESH
                </span>
              </div>
            </div>

            {/* =================================================
                FLOATING LOCATION ICON
            ================================================= */}

            <div
              className="
                absolute

                bottom-[18%]
                left-[5%]

                z-30

                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                border
                border-black/[0.06]

                bg-white

                text-[#193A7E]

                shadow-[0_20px_45px_rgba(15,35,70,0.10)]

                lg:left-[6%]
              "
            >
              <FaLocationDot />
            </div>

            {/* =================================================
                FLOATING SHIELD
            ================================================= */}

            <div
              className="
                absolute

                right-[13%]
                top-[5%]

                z-30

                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full

                bg-[#193A7E]

                text-white

                shadow-[0_15px_35px_rgba(25,58,126,0.22)]
              "
            >
              <FaShieldHalved className="text-sm" />
            </div>

            {/* =================================================
                DECORATIVE LINE
            ================================================= */}

            <div
              className="
                absolute

                bottom-[7%]
                left-[27%]

                h-px
                w-20

                bg-[#193A7E]/10

                lg:left-[29%]
              "
            />
          </div>

          {/* =====================================================
              ENQUIRY FORM
          ===================================================== */}

          <div
            ref={formRef}
            className="
              absolute
              inset-0

              hidden

              overflow-hidden

              rounded-[30px]

              border
              border-black/[0.07]

              bg-white

              p-5

              shadow-[0_30px_80px_rgba(15,35,70,0.10)]

              sm:p-7

              lg:rounded-[34px]
              lg:p-8
            "
          >
            {/* Form Header */}

            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
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
                  Share a few details and we'll guide you
                  through the next step.
                </p>
              </div>

              {/* Close */}

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
                mt-5
                space-y-3

                sm:mt-6
                sm:space-y-3.5
              "
            >
              {/* Name + Phone */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-3

                  sm:grid-cols-2
                "
              >
                {/* Name */}

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

                {/* Phone */}

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

              {/* Requirement */}

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

                    <option value="Sale Deed">
                      Sale Deed
                    </option>

                    <option value="Gift Deed">
                      Gift Deed
                    </option>

                    <option value="Agreement to Sell">
                      Agreement to Sell
                    </option>

                    <option value="Will">
                      Will
                    </option>

                    <option value="GPA / SPA">
                      GPA / SPA
                    </option>

                    <option value="Partition Deed">
                      Partition Deed
                    </option>

                    <option value="Family Settlement">
                      Family Settlement
                    </option>

                    <option value="Property Document Checking">
                      Property Document Checking
                    </option>

                    <option value="Registration Assistance">
                      Registration Assistance
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

                      text-[10px]
                      text-black/30
                    "
                  />
                </div>
              </div>

              {/* Message */}

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

              {/* Submit */}

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

                  bg-[#193A7E]

                  text-sm
                  font-semibold
                  text-white

                  shadow-[0_10px_25px_rgba(25,58,126,0.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#123064]
                "
              >
                <FaWhatsapp className="text-base" />

                Send Enquiry on WhatsApp

                <FaArrowRight
                  className="
                    text-xs

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Privacy note */}

              <p
                className="
                  text-center

                  text-[9px]
                  font-medium

                  text-black/25
                "
              >
                We'll use your details only to respond to
                your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;