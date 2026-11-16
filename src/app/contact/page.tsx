"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Send,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  MessageSquare,
  HelpCircle,
  Calendar,
  Phone,
  Search,
  Globe,
} from "lucide-react";
import WaterButton from "@/components/WaterButton";
import TurnstileWidget from "@/components/TurnstileWidget";
import ScheduleCallModal from "@/components/ScheduleCallModal";
import SiteAuditModal from "@/components/SiteAuditModal";
import { validateEmail, validatePhone } from "@/lib/validation";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.72 2.68 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.34-.76-1.83-.2-.48-.41-.41-.56-.42l-.48-.01z" />
    </svg>
  );
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICES_OPTIONS = [
  "Select your current challenge...",
  "Full-Stack Growth Retainer (All Channels)",
  "Paid Advertising (Meta, Google, TikTok)",
  "SEO & Content Strategy",
  "High-Converting Web Design & Development",
  "Branding & Creative Identity",
  "Conversion Rate Optimization (CRO)",
  "Not sure — need strategic guidance",
];

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(
    null,
  );
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isSiteAuditModalOpen, setIsSiteAuditModalOpen] = useState(false);

  // Validation Logic
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters.";
        return "";
      case "email": {
        const err = validateEmail(value);
        return err || "";
      }
      case "phone": {
        if (!value.trim()) return "";
        const err = validatePhone(value, false);
        return err || "";
      }
      case "company":
        // Optional field
        return "";
      case "service":
        if (
          !value ||
          value === "Choose a service..." ||
          value === "Select your current challenge..."
        )
          return "Please select your current challenge.";
        return "";
      case "message":
        // Optional note
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(
      field,
      formData[field as keyof typeof formData],
    );
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fields = ["name", "email", "service"];

    fields.forEach((field) => {
      const error = validateField(
        field,
        formData[field as keyof typeof formData],
      );
      if (error) newErrors[field] = error;
    });

    if (!turnstileToken) {
      newErrors.turnstile =
        "Please complete the Cloudflare verification check.";
    }

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      service: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setSubmissionFeedback(data.message);
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setSubmissionFeedback(
            data.error || "Submission failed. Please try again.",
          );
        }
      }
    } catch {
      // Fallback: If API route is unreachable, open in email client
      const body = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Company: ${formData.company}`,
        `Service: ${formData.service}`,
        `Budget: ${formData.budget || "Not specified"}`,
        "",
        formData.message,
      ].join("\n");

      window.location.href = `mailto:contact@xinkdigitals.com?subject=${encodeURIComponent(
        "Project enquiry: " + formData.company,
      )}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
      setSubmissionFeedback("Draft created in your mail client.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company}`,
      `Service: ${formData.service}`,
      `Budget: ${formData.budget || "Not specified"}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:contact@xinkdigitals.com?subject=${encodeURIComponent(
      "Project enquiry: " + (formData.company || "New Client"),
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass = (field: string) => `
    transition-[border-color,box-shadow,background-color] duration-200 w-full mt-2 rounded-2xl border px-4 py-3.5 text-sm outline-none
    ${
      touched[field] && errors[field]
        ? "border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-400/20 text-[#15103A]"
        : touched[field] &&
            !errors[field] &&
            formData[field as keyof typeof formData]
          ? "border-[#00C48C]/50 bg-emerald-50/10 focus:border-[#00C48C] focus:ring-2 focus:ring-[#00C48C]/20"
          : "border-[#E5E5EF] bg-[#FBFBFE] focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/20"
    }
  `;

  return (
    <>
      <main className="page-glow bg-[#FFF9F1] text-[#1B143F] min-h-screen px-6 pt-36 pb-20 sm:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="page-intro max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6A38EB]/10 border border-[#6A38EB]/20 text-[#6A38EB] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start a conversation</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
              Your goals. <br />
              Our next brief.
            </h1>
            <p className="text-[#5B5573] max-w-xl mt-4 leading-relaxed text-sm sm:text-base">
              Tell Xink Digitals about your business, current performance, and
              growth targets. We will evaluate the right scope, channels, and
              milestones.
            </p>
            {/* Quick Action Trigger Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setIsScheduleModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1B143F] hover:bg-[#6A38EB] text-white text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C9F36D]" />
                <span>Schedule a Call</span>
              </button>
              <button
                type="button"
                onClick={() => setIsSiteAuditModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#1B143F]/20 bg-white hover:border-[#6A38EB] hover:text-[#6A38EB] text-[#1B143F] text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <Search className="w-3.5 h-3.5 text-[#6A38EB]" />
                <span>Free Site Audit</span>
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
            {/* Main Contact Form or Success Card */}
            <div className="rounded-[2.2rem] bg-white border border-[#EDEDF5] p-6 sm:p-10 shadow-sm relative overflow-hidden">
              {isSubmitted ? (
                /* Success Confirmation Card */
                <div className="py-8 text-center animate-fade-in flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#00C48C]/15 text-[#00A877] flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#15103A] mb-3">
                    Enquiry Received!
                  </h2>
                  <p className="text-sm text-[#5B5573] max-w-md mx-auto leading-relaxed mb-6">
                    {submissionFeedback ||
                      "Thank you for reaching out. Our growth strategists are reviewing your brief and will respond within 2–4 business hours."}
                  </p>

                  <div className="w-full max-w-md bg-[#FBFBFE] border border-[#EDEDF5] rounded-2xl p-5 text-left mb-8 text-xs text-[#5B5573] space-y-2">
                    <div className="flex justify-between border-b border-[#EDEDF5] pb-2">
                      <span className="font-semibold text-[#15103A]">
                        Contact:
                      </span>
                      <span>
                        {formData.name} ({formData.email})
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-[#EDEDF5] pb-2">
                      <span className="font-semibold text-[#15103A]">
                        Company / Site:
                      </span>
                      <span>{formData.company}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#EDEDF5] pb-2">
                      <span className="font-semibold text-[#15103A]">
                        Service:
                      </span>
                      <span>{formData.service}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="font-semibold text-[#15103A]">
                        Status:
                      </span>
                      <span className="text-[#00A877] font-bold">
                        ✓ Verified &amp; Queued
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setTurnstileToken("");
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          budget: "",
                          message: "",
                        });
                        setTouched({});
                        setErrors({});
                      }}
                      className="px-5 py-2.5 rounded-full border border-[#15103A] text-xs font-bold text-[#15103A] hover:bg-[#15103A] hover:text-white transition-all"
                    >
                      Submit another enquiry
                    </button>
                    <Link
                      href="/"
                      className="px-5 py-2.5 rounded-full bg-[#6A38EB] text-white text-xs font-bold hover:bg-[#5829d6] transition-all shadow-sm"
                    >
                      Back to homepage
                    </Link>
                  </div>
                </div>
              ) : (
                /* The Active Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Row 1: Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15103A] mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Elena Rostova"
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={inputClass("name")}
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15103A] mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="elena@company.com"
                        maxLength={200}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={inputClass("email")}
                      />
                      {touched.email && errors.email && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#15103A]">
                          Company Name or URL
                        </label>
                        <span className="text-[10px] text-[#8C87A5] font-mono">
                          Optional
                        </span>
                      </div>
                      <input
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="e.g. Acme Brands or acme.com"
                        maxLength={200}
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        onBlur={() => handleBlur("company")}
                        className={inputClass("company")}
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#15103A]">
                          Contact Phone
                        </label>
                        <span className="text-[10px] text-[#8C87A5] font-mono">
                          Optional (10+ digits)
                        </span>
                      </div>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="e.g. (+91) 92306 53970"
                        maxLength={25}
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={inputClass("phone")}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Current Challenges */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#15103A] mb-1">
                      current challenges <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      onBlur={() => handleBlur("service")}
                      className={inputClass("service")}
                    >
                      {SERVICES_OPTIONS.map((s, idx) => (
                        <option
                          key={s}
                          value={idx === 0 ? "" : s}
                          disabled={idx === 0}
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                    {touched.service && errors.service && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 4: Budget (Optional) */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15103A]">
                        Monthly Marketing Budget
                      </label>
                      <span className="text-[10px] text-[#8C87A5] font-mono">
                        Optional
                      </span>
                    </div>
                    <input
                      name="budget"
                      type="text"
                      placeholder="e.g. $5k–$10k/mo, $20k+/mo, or unsure"
                      maxLength={100}
                      value={formData.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      className={inputClass("budget")}
                    />
                  </div>

                  {/* Row 5: Message & Notes */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15103A]">
                        Would you like to add something or something to say
                      </label>
                      <span
                        className={`text-[10px] font-mono ${
                          formData.message.length > 2800
                            ? "text-red-500 font-bold"
                            : "text-[#8C87A5]"
                        }`}
                      >
                        {formData.message.length} / 3000
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      maxLength={3000}
                      placeholder="Share any details, context, questions, or goals..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={inputClass("message")}
                    />
                    {touched.message && errors.message && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* ── Human Verification: Cloudflare Turnstile ── */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#15103A] flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#6A38EB]" />
                        <span>Human Verification Check</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#8C87A5]">
                        Cloudflare Turnstile
                      </span>
                    </div>

                    <TurnstileWidget
                      onVerify={(token) => {
                        setTurnstileToken(token);
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.turnstile;
                          return copy;
                        });
                      }}
                      onError={(err) => {
                        setErrors((prev) => ({
                          ...prev,
                          turnstile:
                            err || "Verification check failed. Please refresh.",
                        }));
                      }}
                      onExpire={() => {
                        setTurnstileToken("");
                        setErrors((prev) => ({
                          ...prev,
                          turnstile:
                            "Verification expired. Please check again.",
                        }));
                      }}
                    />

                    {errors.turnstile && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.turnstile}</span>
                      </p>
                    )}
                  </div>

                  {/* Privacy acknowledgment */}
                  <p className="text-xs text-[#8C87A5] leading-relaxed pt-2">
                    We respect your data privacy. By submitting, you acknowledge
                    our{" "}
                    <Link
                      href="/privacy"
                      className="underline hover:text-[#6A38EB]"
                    >
                      privacy policy
                    </Link>
                    . We will never sell your information.
                  </p>

                  {/* Submit Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <WaterButton
                      type="submit"
                      tone="purple"
                      className="sm:self-start"
                    >
                      <span>
                        {isSubmitting
                          ? "Submitting Enquiry..."
                          : "Send Project Enquiry ↗"}
                      </span>
                    </WaterButton>

                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="text-xs font-semibold text-[#5B5573] hover:text-[#6A38EB] transition-colors py-2 text-center"
                    >
                      Or open as email draft directly ↗
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Information & Trust Sidebar + Schedule Call Card */}
            <div className="self-start space-y-6">
              <aside className="rounded-[2.2rem] bg-[#F4F1FD] border border-[#EDEDF5] p-8 space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#6A38EB]/15 text-[#6A38EB] flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-3 text-[#15103A]">
                    Let&apos;s find your focus.
                  </h2>
                  <p className="text-sm text-[#5B5573] leading-relaxed">
                    Not sure which channel will drive the highest ROAS? Share
                    your website URL and current bottleneck. We analyze traffic,
                    messaging, and conversion flow before recommending a scope.
                  </p>
                </div>

                {/* Direct contact pills */}
                <div className="pt-4 border-t border-[#E5E0F5] space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C87A5] font-bold block">
                    Direct Contact
                  </span>
                  <a
                    className="text-sm font-bold text-[#6A38EB] hover:underline flex items-center gap-2"
                    href="mailto:contact@xinkdigitals.com"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>contact@xinkdigitals.com</span>
                  </a>
                  <a
                    className="text-sm font-bold text-[#6A38EB] hover:underline flex items-center gap-2"
                    href="mailto:info@xinkdigitals.com"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>info@xinkdigitals.com</span>
                  </a>
                  <a
                    className="text-sm font-bold text-[#1B143F] hover:text-[#6A38EB] transition-colors flex items-center gap-2"
                    href="tel:+919230653970"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-[#6A38EB]" />
                    <span>(+91) 92306 53970</span>
                  </a>
                  <p className="text-xs text-[#7E7896]">
                    Response time: usually within 2–4 business hours.
                  </p>

                  {/* WhatsApp Redirection Card (Themed & Clean) */}
                  <a
                    href="https://wa.me/919230653970?text=Hi%20Xink%20Digitals,%20I'd%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#E5E0F5] hover:border-[#6A38EB]/40 hover:bg-[#FAF8FE] shadow-sm transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-[#075E54] flex items-center justify-center shrink-0 border border-[#25D366]/20 group-hover:scale-105 transition-transform">
                        <WhatsAppIcon className="w-4 h-4 fill-[#128C7E]" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-[#1B143F] group-hover:text-[#6A38EB] transition-colors flex items-center gap-1.5">
                          <span>Chat on WhatsApp</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                        </div>
                        <p className="text-[11px] font-mono text-[#7E7896]">
                          (+91) 92306 53970
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#6A38EB] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Connect ↗
                    </span>
                  </a>
                </div>

                {/* What happens next box */}
                <div className="p-4 rounded-2xl bg-white/80 border border-[#E5E0F5] text-xs text-[#5B5573] space-y-2">
                  <span className="font-bold text-[#15103A] block">
                    What happens next?
                  </span>
                  <ol className="list-decimal list-inside space-y-1.5 text-[11px] leading-relaxed">
                    <li>Initial website &amp; competitor review</li>
                    <li>Strategy sync to discuss target metrics</li>
                    <li>Clear scope &amp; transparent roadmap proposal</li>
                  </ol>
                </div>

                <div className="pt-2">
                  <Link
                    href="/faq"
                    className="text-xs font-bold text-[#6A38EB] hover:underline flex items-center gap-1"
                  >
                    <span>Frequently Asked Questions</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </aside>

              {/* Direct Booking & Free Audit Action Card (Combined & Compact) */}
              <div className="rounded-[2.2rem] bg-gradient-to-br from-[#1B143F] to-[#2E1A47] text-white p-6 shadow-lg border border-white/10 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6A38EB]/40 border border-[#6A38EB]/50 text-[#C9F36D] text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Instant Booking & Audit</span>
                  </div>
                  <span className="text-[11px] text-[#C9F36D] font-semibold">✓ 100% Free</span>
                </div>

                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                    Prefer a Call or Free Audit?
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Pick a direct strategy call slot or get a full 18-point website audit delivered in 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="py-3 px-3 rounded-xl bg-[#6A38EB] hover:bg-[#5829D6] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#6A38EB]/30 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C9F36D]" />
                    <span>Schedule Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSiteAuditModalOpen(true)}
                    className="py-3 px-3 rounded-xl bg-white hover:bg-white/90 text-[#1B143F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    <Search className="w-3.5 h-3.5 text-[#6A38EB]" />
                    <span>Site Audit</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/10">
                  <span>Phone: (+91) 92306 53970</span>
                  <span className="text-[#C9F36D]">✓ Instant calendar sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Schedule Call Modal Popup */}
      <ScheduleCallModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />

      {/* Free Site Audit Modal Popup with blurred background */}
      <SiteAuditModal
        isOpen={isSiteAuditModalOpen}
        onClose={() => setIsSiteAuditModalOpen(false)}
      />
    </>
  );
}
