import {
  useEffect,
} from "react";

import {
  FaArrowRight,
  FaChevronDown,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

import propertyDocument from "../../assets/images/property-document.png";

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

        max-w-[1400px]

        items-center

        px-5
        pb-16
        pt-28

        sm:px-6
        sm:pb-20
        sm:pt-32

        lg:px-8
        lg:pb-12
        lg:pt-28
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
          {/* EYEBROW */}

          <p
            className="
              mb-6

              text-[11px]
              font-bold
              uppercase
              tracking-[0.25em]

              text-[#193A7E]

              sm:mb-7
              sm:text-xs
              sm:tracking-[0.28em]
            "
          >
            Your Trusted Partner for Property Documentation
          </p>

          {/* HEADING */}

          <h1
            className="
              max-w-[650px]

              text-[3rem]
              font-semibold

              leading-[0.95]

              tracking-[-0.045em]

              text-[#193A7E]

              sm:text-[4rem]

              md:text-[4.5rem]

              lg:text-[5rem]

              xl:text-[5.6rem]
            "
          >
            Paper Sahi Toh
            <br />
            Property Sahi.
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6

              max-w-[500px]

              text-base
              font-medium
              leading-7

              text-[#294A76]/75

              sm:mt-7
              sm:text-lg
              sm:leading-8
            "
          >
            Expert drafting, review, and coordination for Sale Deeds, Gift Deeds, Wills, and Rent Agreements and all other Property Related Deeds, right from the comfort of your home.
          </p>

          {/* BUTTONS */}

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
            {/* GET IN TOUCH */}

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

            {/* GET ENQUIRY */}

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
              Send Enquiry

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

          {/* TRUST */}

          <div
            className="
              mt-7

              text-lg
              font-medium

              text-black/50

              sm:mt-8
            "
          >
            Professional • Trusted • Reliable
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

            min-h-[560px]
            w-full
            max-w-[560px]

            lg:mx-0
            lg:h-[500px]
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
              alt="Property deeds and documentation"
              className="
                block

                h-auto
                w-full

                max-w-[520px]

                object-contain

                select-none

                lg:max-w-[570px]

                xl:max-w-[610px]
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

              w-full

              overflow-y-auto
              overflow-x-hidden

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
            {/* FORM HEADER */}

            <div
              className="
                flex
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
                mt-5

                space-y-3

                sm:mt-6
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

                      text-[10px]
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
                    text-xs

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* PRIVACY */}


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;