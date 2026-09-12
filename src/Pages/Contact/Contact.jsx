import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import contactData from "./contact.data";

const Contact = () => {
  const phoneNumber = contactData.phoneNumbers[0];

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        text-[#193A7E]
      "
    >

      {/* =====================================================
          BACKGROUND — SUBTLE CIRCULAR GRADIENTS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_10%,rgba(0,0,0,0.055),transparent_30%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_90%_45%,rgba(0,0,0,0.04),transparent_32%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-1/2
          h-[600px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(0,0,0,0.035),transparent_68%)]
          blur-[40px]
        "
      />


      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-24
          pt-24

          sm:pb-32
          sm:pt-28

          lg:pb-40
          lg:pt-32
        "
      >

        {/* ===================================================
            HERO
        =================================================== */}

        <div
          className="
            mt-8

            grid
            grid-cols-1
            gap-10

            sm:mt-12

            lg:mt-16
            lg:grid-cols-[1fr_0.8fr]
            lg:items-end
            lg:gap-24
          "
        >

          {/* =================================================
              LEFT — HEADING
          ================================================= */}

          <div>

            {/* SECTION LABEL */}

            <div
              className="
                flex
                items-center
                gap-5
              "
            >

              {/* LEFT LINE */}

              <span
                className="
                  h-px
                  w-12
                  shrink-0

                  bg-gradient-to-r
                  from-transparent
                  via-[#193A7E]/10
                  to-[#193A7E]/20

                  sm:w-20
                  lg:w-24
                "
              />

              {/* LABEL */}

              <span
                className="
                  shrink-0

                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  text-[#193A7E]/60
                "
              >
                Get In Touch
              </span>

              {/* RIGHT LINE */}

              <span
                className="
                  h-px
                  w-12
                  shrink-0

                  bg-gradient-to-l
                  from-transparent
                  via-[#193A7E]/10
                  to-[#193A7E]/20

                  sm:w-20
                  lg:w-24
                "
              />

            </div>


            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
  className="
    mt-9
    max-w-3xl
    text-left
    text-[26px]
    font-semibold
    leading-[1.15]
    tracking-[-0.035em]
    text-[#193A7E]
    sm:text-[32px]
    md:text-[38px]
    lg:text-[44px]
    xl:text-[48px]
  "
>
  <span className="block">
    Have a <span className="text-[#193A7E]">Deed Drafting</span>
  </span>

  <span className="block whitespace-nowrap">
    or <span className="text-[#16A66A]">Property Documentation</span>
  </span>

  <span className="block">
    Requirement?
  </span>
</h1>

          </div>


          {/* =================================================
              RIGHT — UPPER DESCRIPTION
          ================================================= */}

          <div
            className="
              lg:pb-3
            "
          >

            <p
              className="
                max-w-md

                text-base
                leading-7

                text-[#294A76]/70

                sm:text-lg
                sm:leading-8
              "
            >
              Have a property document requirement?
              Reach out to us and tell us what you need.
              We'll help you understand the next steps.
            </p>

          </div>

        </div>


        {/* ===================================================
            CONTACT AREA
        =================================================== */}

        <div
          className="
            mt-20

            grid
            grid-cols-1
            gap-16

            lg:mt-28
            lg:grid-cols-[1fr_0.8fr]
            lg:gap-24
          "
        >

          {/* =================================================
              LEFT — CONTACT DETAILS
          ================================================= */}

          <div
            className="
              w-full
            "
          >

            {/* =================================================
                PHONE NUMBER
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1

                border-t
                border-[#193A7E]/10

                py-8

                sm:grid-cols-[260px_1fr]
                sm:py-10

                lg:grid-cols-[280px_1fr]
              "
            >

              {/* LABEL */}

              <div>
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]

                    text-[#193A7E]/50
                  "
                >
                  Phone Number
                </span>
              </div>


              {/* ONLY ONE NUMBER */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-2

                  sm:mt-0
                "
              >

                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="
                    w-fit

                    text-2xl
                    font-medium
                    leading-tight
                    tracking-[-0.035em]

                    text-[#193A7E]

                    transition-opacity
                    duration-300

                    hover:opacity-50

                    sm:text-3xl
                  "
                >
                  {phoneNumber}
                </a>

              </div>

            </div>


            {/* =================================================
                EMAIL
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1

                border-t
                border-[#193A7E]/10

                py-8

                sm:grid-cols-[260px_1fr]
                sm:py-10

                lg:grid-cols-[280px_1fr]
              "
            >

              {/* LABEL */}

              <div>
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]

                    text-[#193A7E]/50
                  "
                >
                  Email
                </span>
              </div>


              {/* VALUE */}

              <div
                className="
                  mt-5

                  sm:mt-0
                "
              >

                <a
                  href={
                    contactData.email === "YOUR_EMAIL_HERE"
                      ? undefined
                      : `mailto:${contactData.email}`
                  }
                  className="
                    break-all

                    text-2xl
                    font-medium
                    leading-tight
                    tracking-[-0.035em]

                    text-[#193A7E]

                    transition-opacity
                    duration-300

                    hover:opacity-50

                    sm:text-3xl
                  "
                >
                  {contactData.email}
                </a>

              </div>

            </div>


            {/* =================================================
                LOCATION
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1

                border-t
                border-[#193A7E]/10

                py-8

                sm:grid-cols-[260px_1fr]
                sm:py-10

                lg:grid-cols-[280px_1fr]
              "
            >

              {/* LABEL */}

              <div>
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]

                    text-[#193A7E]/50
                  "
                >
                  Location
                </span>
              </div>


              {/* VALUE */}

              <div
                className="
                  mt-5

                  sm:mt-0
                "
              >

                <span
                  className="
                    text-2xl
                    font-medium
                    leading-tight
                    tracking-[-0.035em]

                    text-[#193A7E]

                    sm:text-3xl
                  "
                >
                  Meerut, Uttar Pradesh
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — ACTIONS
          ================================================= */}

          <div
            className="
              flex
              flex-col
              justify-end

              lg:min-h-[280px]
            "
          >

            {/* =================================================
                LOWER DESCRIPTION
            ================================================= */}

            <p
              className="
                max-w-sm

                text-sm
                leading-6

                text-[#294A76]/60
              "
            >
              Prefer a quick conversation? Connect
              directly with us through WhatsApp or
              give us a call.
            </p>


            {/* =================================================
                WHATSAPP BUTTON
            ================================================= */}

            <a
              href={`https://wa.me/${contactData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                mt-7

                flex
                h-16
                w-full

                items-center
                justify-between

                rounded-full

                bg-[#25D366]

                px-6

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#20BD5A]

                hover:shadow-[0_18px_40px_rgba(37,211,102,0.20)]

                sm:px-7
              "
            >

              {/* LEFT SIDE */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                {/* WHATSAPP ICON */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    bg-white/10

                    transition-colors
                    duration-300

                    group-hover:bg-white/20
                  "
                >
                  <FaWhatsapp className="text-lg" />
                </div>


                {/* BUTTON TEXT */}

                <span
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Connect on WhatsApp
                </span>

              </div>


              {/* ARROW */}

              <FaArrowUpRightFromSquare
                className="
                  text-xs

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </a>


            {/* =================================================
                SECONDARY ACTIONS
            ================================================= */}

            <div
              className="
                mt-3

                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2
              "
            >

              {/* =================================================
                  CALL
              ================================================= */}

              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="
                  group

                  flex
                  h-14

                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  border
                  border-[#193A7E]/15

                  bg-white

                  text-sm
                  font-semibold
                  text-[#193A7E]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#193A7E]
                  hover:bg-[#193A7E]
                  hover:text-white
                "
              >

                <FaPhone
                  className="
                    text-xs

                    transition-transform
                    duration-300

                    group-hover:rotate-12
                  "
                />

                Call Us

              </a>


              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href={
                  contactData.email === "YOUR_EMAIL_HERE"
                    ? undefined
                    : `mailto:${contactData.email}`
                }
                className="
                  group

                  flex
                  h-14

                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  border
                  border-[#193A7E]/15

                  bg-white

                  text-sm
                  font-semibold
                  text-[#193A7E]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#193A7E]
                  hover:bg-[#193A7E]
                  hover:text-white
                "
              >

                <FaEnvelope
                  className="
                    text-xs

                    transition-transform
                    duration-300

                    group-hover:-rotate-6
                  "
                />

                Email Us

              </a>

            </div>

          </div>

        </div>


        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
            mt-24

            flex
            flex-col
            gap-2

            border-t
            border-[#193A7E]/10

            pt-5

            sm:mt-32
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        />

      </div>

    </main>
  );
};

export default Contact;