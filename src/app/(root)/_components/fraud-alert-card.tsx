"use client";

import { useEffect, useState } from "react";

const FraudAlertCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-4 top-20 z-[70] mx-auto w-full max-w-xl animate-[bounce-in_0.5s_ease-out]">
      <div className="rounded-2xl border border-[#FF4500]/20 bg-white/95 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#FF4500] uppercase">Important Notice</p>
            <h3 className="mt-1 text-lg font-semibold text-[#111827]">Email Safety Alert</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              If you receive any email claiming to be from WFII, please verify it carefully. Fraudulent or spam
              emails may use similar names.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Our official communication email is <span className="font-semibold text-[#111827]">outreach@wfii.in</span>.
              Please trust only messages from this address.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="shrink-0 rounded-full border border-gray-200 px-2 py-1 text-xs font-medium text-gray-600 transition hover:border-[#FF4500]/40 hover:text-[#FF4500]"
            aria-label="Close fraud alert"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FraudAlertCard;
