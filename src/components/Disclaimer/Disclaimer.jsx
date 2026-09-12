import { useEffect, useState } from "react";
import { LuFileWarning } from "react-icons/lu";

import deedbanwaoLogo from "../../assets/images/deedbanwao_logo.svg";

const DISCLAIMER_STORAGE_KEY =
  "deedbanwao-disclaimer-accepted";

const Disclaimer = ({ onProceed }) => {
  const [agreed, setAgreed] = useState(false);

  // =====================================================
  // PREVENT PAGE SCROLL WHILE DISCLAIMER IS OPEN
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // =====================================================
  // PROCEED
  // =====================================================

  const handleProceed = () => {
    if (!agreed) return;

    localStorage.setItem(
      DISCLAIMER_STORAGE_KEY,
      "true"
    );

    onProceed();
  };

  // =====================================================
  // CANCEL
  // Website remains blocked
  // =====================================================

  const handleCancel = () => {
    setAgreed(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-y-auto bg-[#F6F8FB] px-4 py-6 sm:px-6">
      <div className="w-full max-w-[570px]">

        {/* =====================================================
            DISCLAIMER CARD
        ===================================================== */}

        <div className="border border-[#193A7E]/10 bg-white px-6 py-7 shadow-[0_24px_70px_rgba(25,58,126,0.10)] sm:px-9 sm:py-9">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <div className="mb-8 flex justify-center">
            <img
              src={deedbanwaoLogo}
              alt="DeedBanwao"
              className="h-auto w-[145px] sm:w-[165px]"
            />
          </div>

          {/* =====================================================
              TITLE
          ===================================================== */}

          <div className="mb-6 flex items-center gap-3 border-b border-[#193A7E]/10 pb-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#193A7E]/12 text-[#193A7E]">
              <LuFileWarning
                className="text-[17px]"
                strokeWidth={1.7}
              />
            </div>

            <h1 className="text-[23px] font-semibold tracking-[-0.025em] text-[#193A7E] sm:text-[25px]">
              Disclaimer
            </h1>
          </div>

          {/* =====================================================
              DISCLAIMER TEXT
          ===================================================== */}

          <div>
            <p className="text-[14px] leading-[1.85] text-[#294A76] sm:text-[15px] sm:leading-[1.85]">
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
              AGREEMENT
          ===================================================== */}

          <label className="mt-7 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) =>
                setAgreed(event.target.checked)
              }
              className="mt-[3px] h-[17px] w-[17px] shrink-0 cursor-pointer accent-[#193A7E]"
            />

            <span className="text-[13px] leading-6 text-[#294A76] sm:text-[14px]">
              I have read and understood the above disclaimer
              and agree to proceed to the DeedBanwao website.
            </span>
          </label>

          {/* =====================================================
              ACTIONS
          ===================================================== */}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            {/* CANCEL */}

            <button
              type="button"
              onClick={handleCancel}
              className="h-11 rounded-full border border-[#193A7E]/15 px-6 text-[13px] font-medium text-[#193A7E] transition-colors duration-200 hover:bg-[#F6F8FB]"
            >
              Cancel
            </button>

            {/* PROCEED */}

            <button
              type="button"
              disabled={!agreed}
              onClick={handleProceed}
              className={`h-11 rounded-full px-7 text-[13px] font-medium transition-all duration-200 ${
                agreed
                  ? "cursor-pointer bg-[#193A7E] text-white hover:bg-[#123064]"
                  : "cursor-not-allowed bg-[#E2E6ED] text-[#929BAB]"
              }`}
            >
              I Agree &amp; Proceed
            </button>
          </div>

          {/* =====================================================
              FOOTNOTE
          ===================================================== */}

          <p className="mt-5 text-center text-[10px] leading-5 text-[#294A76]/45">
            By proceeding, you acknowledge that you have read
            and understood this disclaimer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;