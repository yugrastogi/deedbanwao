import { useEffect, useState } from "react";
import { LuFileWarning } from "react-icons/lu";

import deedbanwaoLogo from "../../assets/images/deedbanwao_logo.svg";

const Disclaimer = ({ onProceed }) => {
  const [agreed, setAgreed] = useState(false);

  // =====================================================
  // PREVENT PAGE SCROLL WHILE DISCLAIMER IS OPEN
  // =====================================================

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // =====================================================
  // PROCEED
  // =====================================================

  const handleProceed = () => {
    if (!agreed) return;

    localStorage.setItem(
      "deedbanwao-disclaimer-accepted",
      "true"
    );

    onProceed();
  };

  // =====================================================
  // CANCEL
  // Keep disclaimer open
  // =====================================================

  const handleCancel = () => {
    setAgreed(false);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        min-h-screen
        items-center
        justify-center
        overflow-y-auto
        bg-[#193A7E]/10
        px-4
        py-6
        backdrop-blur-[12px]
        sm:px-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      {/* =====================================================
          MODAL
      ===================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[570px]
          rounded-[20px]
          border
          border-white/80
          bg-white/95
          px-6
          py-7
          shadow-[0_25px_80px_rgba(25,58,126,0.16)]
          backdrop-blur-xl
          sm:rounded-[24px]
          sm:px-9
          sm:py-9
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <div className="mb-8 flex justify-center">
          <img
            src={deedbanwaoLogo}
            alt="DeedBanwao"
            className="h-auto w-[145px] sm:w-[160px]"
          />
        </div>

        {/* =====================================================
            TITLE
        ===================================================== */}

        <div
          className="
            mb-6
            flex
            items-center
            gap-3
            border-b
            border-[#193A7E]/10
            pb-5
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#B85C5C]/20
              bg-[#B85C5C]/5
              text-[#B85C5C]
            "
          >
            <LuFileWarning
              className="text-[17px]"
              strokeWidth={1.7}
            />
          </div>

          <h1
            id="disclaimer-title"
            className="
              text-[23px]
              font-semibold
              tracking-[-0.025em]
              text-[#193A7E]
              sm:text-[25px]
            "
          >
            Disclaimer
          </h1>
        </div>

        {/* =====================================================
            DISCLAIMER TEXT
        ===================================================== */}

        <div>
          <p
            className="
              text-[14px]
              leading-[1.85]
              text-[#294A76]
              sm:text-[15px]
              sm:leading-[1.85]
            "
          >
            DeedBanwao is a property documentation and
            drafting service provider. The information
            provided on this website is for informational
            purposes only and does not constitute formal
            legal advice. We assist in drafting and
            documentation based on user inputs. For complex
            litigation or court disputes, users are advised
            to consult an independent legal practitioner.
          </p>
        </div>

        {/* =====================================================
            AGREEMENT CHECKBOX
        ===================================================== */}

        <div className="mt-7">
          <label
            className="
              flex
              w-full
              cursor-pointer
              items-start
              gap-3
              select-none
            "
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) =>
                setAgreed(event.target.checked)
              }
              className="
                mt-[4px]
                h-[17px]
                w-[17px]
                shrink-0
                cursor-pointer
                accent-[#193A7E]
              "
            />

            <span
              className="
                flex-1
                text-[13px]
                leading-6
                text-[#294A76]
                sm:text-[14px]
              "
            >
              I have read and understood the above disclaimer
              and agree to proceed to the DeedBanwao website.
            </span>
          </label>
        </div>

        {/* =====================================================
            ACTION BUTTONS
        ===================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col-reverse
            gap-3
            sm:flex-row
            sm:justify-end
          "
        >
          {/* -------------------------------------------------
              CANCEL
          ------------------------------------------------- */}

          <button
            type="button"
            onClick={handleCancel}
            className="
              h-11
              rounded-full
              border
              border-[#193A7E]/15
              px-6
              text-[13px]
              font-medium
              text-[#193A7E]
              transition-colors
              duration-200
              hover:bg-[#F6F8FB]
            "
          >
            Cancel
          </button>

          {/* -------------------------------------------------
              PROCEED
          ------------------------------------------------- */}

          <button
            type="button"
            disabled={!agreed}
            onClick={handleProceed}
            className={`
              h-11
              rounded-full
              px-7
              text-[13px]
              font-medium
              transition-all
              duration-200

              ${
                agreed
                  ? "cursor-pointer bg-[#193A7E] text-white hover:bg-[#123064]"
                  : "cursor-not-allowed bg-[#E2E6ED] text-[#929BAB]"
              }
            `}
          >
            I Agree &amp; Proceed
          </button>
        </div>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <p
          className="
            mt-5
            text-center
            text-[10px]
            leading-5
            text-[#294A76]/45
          "
        >
          By proceeding, you acknowledge that you have read
          and understood this disclaimer.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;