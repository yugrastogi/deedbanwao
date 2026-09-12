import { useEffect, useState } from "react";

const DISCLAIMER_STORAGE_KEY =
  "deedbanwao-disclaimer-accepted";

const Disclaimer = ({ onProceed }) => {
  const [agreed, setAgreed] = useState(false);

  // Prevent scrolling while disclaimer is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleProceed = () => {
    if (!agreed) return;

    localStorage.setItem(
      DISCLAIMER_STORAGE_KEY,
      "true"
    );

    onProceed();
  };

  const handleCancel = () => {
    // Keep the website blocked
    setAgreed(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-y-auto bg-[#F5F7FA]/95 px-4 py-6 backdrop-blur-xl sm:px-6">
      <div className="w-full max-w-[620px]">
        {/* =====================================================
            DISCLAIMER CARD
        ===================================================== */}

        <div className="rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_30px_100px_rgba(25,58,126,0.15)] backdrop-blur-2xl sm:rounded-[32px] sm:p-8 md:p-10">

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div className="mb-7 text-center sm:mb-8">
            <div className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-[#193A7E] sm:text-3xl">
              DeedBanwao
            </div>

            <div className="mx-auto h-[2px] w-10 rounded-full bg-[#16A66A]" />
          </div>

          {/* =====================================================
              TITLE
          ===================================================== */}

          <div className="mb-5 text-center">
            <h1 className="text-[24px] font-semibold tracking-[-0.035em] text-[#193A7E] sm:text-[30px]">
              Disclaimer
            </h1>

            <p className="mt-2 text-sm text-[#294A76]/70 sm:text-[15px]">
              Please read the following information before
              proceeding to the website.
            </p>
          </div>

          {/* =====================================================
              DISCLAIMER TEXT
          ===================================================== */}

          <div className="rounded-2xl border border-[#193A7E]/8 bg-[#F8FAFD] p-5 sm:p-6">
            <p className="text-[14px] leading-7 text-[#294A76] sm:text-[15px] sm:leading-7">
              <span className="font-semibold text-[#193A7E]">
                Disclaimer:
              </span>{" "}
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

          <label className="mt-6 flex cursor-pointer items-start gap-3 select-none sm:mt-7">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) =>
                setAgreed(event.target.checked)
              }
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#193A7E]"
            />

            <span className="text-sm leading-6 text-[#294A76]">
              I have read and understood the above disclaimer
              and agree to proceed to the DeedBanwao website.
            </span>
          </label>

          {/* =====================================================
              ACTIONS
          ===================================================== */}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:mt-8 sm:flex-row sm:justify-end">
            {/* CANCEL */}

            <button
              type="button"
              onClick={handleCancel}
              className="h-12 rounded-full border border-[#193A7E]/15 px-6 text-sm font-medium text-[#193A7E] transition duration-300 hover:bg-[#F4F7FB]"
            >
              Cancel
            </button>

            {/* PROCEED */}

            <button
              type="button"
              disabled={!agreed}
              onClick={handleProceed}
              className={`
                h-12 rounded-full px-7 text-sm font-semibold
                transition duration-300
                ${
                  agreed
                    ? "cursor-pointer bg-[#193A7E] text-white shadow-[0_10px_30px_rgba(25,58,126,0.22)] hover:bg-[#123064]"
                    : "cursor-not-allowed bg-[#D9DFE8] text-[#8A94A5]"
                }
              `}
            >
              I Agree &amp; Proceed
            </button>
          </div>

          {/* =====================================================
              SMALL FOOTNOTE
          ===================================================== */}

          <p className="mt-5 text-center text-[11px] leading-5 text-[#294A76]/45 sm:mt-6">
            By proceeding, you acknowledge that you have read
            and understood this disclaimer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;