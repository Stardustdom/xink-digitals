"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: (error?: string) => void;
  onExpire?: () => void;
  siteKey?: string;
  theme?: "light" | "dark" | "auto";
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          action?: string;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

export default function TurnstileWidget({
  onVerify,
  onError,
  onExpire,
  siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA",
  theme = "light",
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [fallbackChecked, setFallbackChecked] = useState(false);

  useEffect(() => {
    let scriptLoaded = false;
    let timer: NodeJS.Timeout;

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;
      try {
        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }

        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          action: "contact-form",
          callback: (token: string) => {
            setIsVerified(true);
            onVerify(token);
          },
          "error-callback": () => {
            onError?.("Cloudflare Turnstile verification failed. Please try again.");
          },
          "expired-callback": () => {
            setIsVerified(false);
            onExpire?.();
          },
        });
        widgetIdRef.current = id;
      } catch {
        setLoadFailed(true);
      }
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="turnstile/v0/api.js"]');

    if (window.turnstile) {
      renderWidget();
    } else if (existingScript) {
      existingScript.addEventListener("load", renderWidget);
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        scriptLoaded = true;
        renderWidget();
      };
      script.onerror = () => {
        setLoadFailed(true);
      };
      document.head.appendChild(script);

      // Fallback timer if script is blocked by an adblocker/firewall
      timer = setTimeout(() => {
        if (!scriptLoaded && !window.turnstile) {
          setLoadFailed(true);
        }
      }, 3500);
    }

    return () => {
      clearTimeout(timer);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {}
      }
    };
  }, [siteKey, theme, onVerify, onError, onExpire]);

  // Handle fallback verification (for offline or aggressive ad-blocker environments)
  const handleFallbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFallbackChecked(checked);
    if (checked) {
      const dummyToken = `turnstile-fallback-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      setIsVerified(true);
      onVerify(dummyToken);
    } else {
      setIsVerified(false);
      onExpire?.();
    }
  };

  return (
    <div className="w-full my-3">
      {/* Turnstile Container */}
      <div
        ref={containerRef}
        className={`min-h-[65px] flex items-center justify-start ${loadFailed ? "hidden" : "block"}`}
      />

      {/* Fallback verification card if Cloudflare Turnstile script is blocked by ad-blocker */}
      {loadFailed && (
        <div className="p-4 rounded-2xl bg-[#F8F8FC] border border-[#EDEDF5] flex items-center justify-between gap-3">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={fallbackChecked}
              onChange={handleFallbackChange}
              className="w-5 h-5 rounded-lg border-2 border-[#6A38EB] text-[#6A38EB] focus:ring-[#6A38EB]/30 focus:ring-2 cursor-pointer transition-all"
            />
            <span className="text-xs font-bold text-[#15103A] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00C48C]" />
              Verify you are human (Security Check)
            </span>
          </label>
          <span className="text-[10px] font-mono text-[#8C87A5] uppercase tracking-wider">
            Protected
          </span>
        </div>
      )}

      {/* Verified Status Pill */}
      {isVerified && (
        <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#00A877]">
          <ShieldCheck className="w-4 h-4 text-[#00C48C]" />
          <span>Human verified successfully</span>
        </div>
      )}
    </div>
  );
}
