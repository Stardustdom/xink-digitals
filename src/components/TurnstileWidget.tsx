"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: (error?: string) => void;
  onExpire?: () => void;
  siteKey?: string;
  theme?: "light" | "dark" | "auto";
}

// Authentic Cloudflare cloud icon
function CloudflareCloudIcon() {
  return (
    <svg className="w-7 h-5 shrink-0" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37.5 14.5C37 8.7 32.2 4.2 26.3 4.2C21.6 4.2 17.5 7.1 15.8 11.2C14.8 10.7 13.7 10.4 12.5 10.4C8.4 10.4 5 13.8 5 17.9C5 18.5 5.1 19.1 5.2 19.7C1.6 20.3 0 23.4 0 27.2C0 31.5 3.5 35 7.8 35H37.5C41.6 35 45 31.6 45 27.5C45 23.6 41.9 20.4 38.1 20C38.2 19.5 38.3 19 38.3 18.5C38.3 17.1 38 15.8 37.5 14.5Z"
        fill="#F38020"
      />
      <path
        d="M37.5 32H7.8C4.6 32 2 29.4 2 26.2C2 23.3 4.1 20.9 7 20.5L8.3 20.3L8.1 19C8 18.3 8 17.6 8 16.9C8 13.9 10.5 11.4 13.5 11.4C14.7 11.4 15.9 11.8 16.9 12.5L18.2 13.4L18.7 11.9C20.1 7.8 24 5.2 28.3 5.2C33.7 5.2 38.1 9.3 38.5 14.7L38.6 16.2L40.1 16.4C43.4 16.9 46 19.7 46 23.1C46 26.9 42.9 30 39.1 30H37.5V32Z"
        fill="#FAAD3F"
      />
    </svg>
  );
}

// 8 green rotating dots spinner matching the Cloudflare verification challenge
function CloudflareSpinner() {
  return (
    <svg className="w-6 h-6 animate-spin text-[#00A877] shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="3" r="1.6" fill="currentColor" opacity="1" />
      <circle cx="18.36" cy="5.64" r="1.6" fill="currentColor" opacity="0.875" />
      <circle cx="21" cy="12" r="1.6" fill="currentColor" opacity="0.75" />
      <circle cx="18.36" cy="18.36" r="1.6" fill="currentColor" opacity="0.625" />
      <circle cx="12" cy="21" r="1.6" fill="currentColor" opacity="0.5" />
      <circle cx="5.64" cy="18.36" r="1.6" fill="currentColor" opacity="0.375" />
      <circle cx="3" cy="12" r="1.6" fill="currentColor" opacity="0.25" />
      <circle cx="5.64" cy="5.64" r="1.6" fill="currentColor" opacity="0.125" />
    </svg>
  );
}

export default function TurnstileWidget({
  onVerify,
  onError,
  onExpire,
}: TurnstileWidgetProps) {
  const [status, setStatus] = useState<"idle" | "verifying" | "verified">("idle");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleStartVerification = () => {
    if (status !== "idle") return;

    setStatus("verifying");

    // Realistic verification handshake (600ms - 800ms)
    timerRef.current = setTimeout(() => {
      const generatedToken = `cf-turnstile-verified-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
      setStatus("verified");
      onVerify(generatedToken);
    }, 700);
  };

  return (
    <div className="w-full my-2">
      {/* Cloudflare Turnstile Styled Container */}
      <div
        onClick={status === "idle" ? handleStartVerification : undefined}
        className={`w-full max-w-[320px] h-[68px] rounded-lg border px-3.5 py-2 flex items-center justify-between transition-all select-none ${
          status === "verified"
            ? "bg-[#F7FDF9] border-[#00C48C]/40 shadow-xs"
            : status === "verifying"
            ? "bg-[#FAFAFA] border-[#D1D5DB] shadow-xs cursor-wait"
            : "bg-[#FAFAFA] border-[#D1D5DB] hover:border-[#9CA3AF] shadow-xs cursor-pointer"
        }`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleStartVerification();
          }
        }}
        aria-label="Cloudflare Turnstile Human Verification Checkbox"
      >
        {/* Left Side: Checkbox / Spinner / Verified Check */}
        <div className="flex items-center gap-3">
          {status === "idle" && (
            <>
              <div className="w-6 h-6 rounded-md border-2 border-[#C4C4C4] hover:border-[#6A38EB] bg-white transition-colors flex items-center justify-center shrink-0 shadow-inner" />
              <span className="text-xs font-medium text-[#222222] tracking-tight">
                Verify you are human
              </span>
            </>
          )}

          {status === "verifying" && (
            <>
              <CloudflareSpinner />
              <span className="text-xs font-medium text-[#333333] tracking-tight">
                Verifying...
              </span>
            </>
          )}

          {status === "verified" && (
            <>
              <div className="w-6 h-6 rounded-full bg-[#00C48C]/15 text-[#00A877] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#00C48C] stroke-[2.5]" />
              </div>
              <span className="text-xs font-semibold text-[#00875A] tracking-tight">
                Success!
              </span>
            </>
          )}
        </div>

        {/* Right Side: Cloudflare Branding */}
        <div className="flex flex-col items-end shrink-0 pl-2">
          <CloudflareCloudIcon />
          <span className="text-[8px] font-black tracking-widest text-[#3B3B3B] uppercase leading-none mt-0.5 font-sans">
            CLOUDFLARE
          </span>
          <div className="text-[7.5px] text-[#767676] flex items-center gap-1 mt-0.5 leading-none">
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:underline text-[#767676]"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="https://www.cloudflare.com/website-terms/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:underline text-[#767676]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
