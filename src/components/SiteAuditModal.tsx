"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Globe,
  MapPin,
  Mail,
  Phone,
  User,
  X,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";
import { validateEmail, validatePhone } from "@/lib/validation";

interface SiteAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteAuditModal({
  isOpen,
  onClose,
}: SiteAuditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    websiteUrl: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSuccess(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }
    if (!formData.location.trim() || formData.location.trim().length < 2) {
      errs.location = "Please enter your location / city / country.";
    }
    const phoneErr = validatePhone(formData.phone, true);
    if (phoneErr) errs.phone = phoneErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) errs.email = emailErr;

    if (!formData.websiteUrl.trim() || formData.websiteUrl.trim().length < 3) {
      errs.websiteUrl = "Please enter the site URL to be audited.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/site-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrors(
          data.errors || {
            general: data.error || "Something went wrong. Please try again.",
          }
        );
      }
    } catch {
      setErrors({
        general: "Network error occurred. Please check your connection and retry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      location: "",
      phone: "",
      email: "",
      websiteUrl: "",
    });
    setIsSuccess(false);
    setErrors({});
    onClose();
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-audit-modal-title"
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/60 backdrop-blur-md transition-opacity duration-200"
    >
      <div
        className="min-h-full flex items-center justify-center p-3 sm:p-6 py-6 sm:py-10"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="relative w-full max-w-lg rounded-3xl bg-white text-[#1B143F] shadow-[0_25px_60px_-15px_rgba(27,20,63,0.35)] border border-[#EDEDF5] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative px-5 py-4 sm:px-6 sm:py-5 bg-gradient-to-b from-[#F7F5FE] to-white border-b border-[#EDEDF5] flex items-center justify-between shrink-0">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#6A38EB]/10 border border-[#6A38EB]/20 text-[#6A38EB] text-[10px] font-bold uppercase tracking-wider mb-1">
                <Search className="w-3 h-3" />
                <span>Complimentary Diagnostic</span>
              </div>
              <h3
                id="site-audit-modal-title"
                className="font-display text-xl sm:text-2xl font-extrabold text-[#1B143F] tracking-tight leading-tight"
              >
                {isSuccess ? "Audit Request Received!" : "Free Website Audit"}
              </h3>
              {!isSuccess && (
                <p className="text-xs text-[#5B5573] mt-0.5">
                  Full SEO, core vitals, and conversion leakage report delivered in 24 hours.
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#EDEDF5] text-[#5B5573] hover:text-[#1B143F] hover:bg-[#F4F4FA] flex items-center justify-center transition-colors shrink-0 shadow-2xs cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 space-y-4">
            {isSuccess ? (
              /* Success State */
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EBFBF5] border-2 border-[#00C48C] text-[#00C48C] flex items-center justify-center mx-auto shadow-sm animate-in zoom-in-50 duration-300">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h4 className="font-display text-xl font-bold text-[#1B143F]">
                    Audit Queued Successfully!
                  </h4>
                  <p className="text-xs text-[#5B5573] mt-1.5 max-w-sm mx-auto leading-relaxed">
                    A confirmation email has been sent to{" "}
                    <strong className="text-[#6A38EB] font-bold">{formData.email}</strong>{" "}
                    and our SEO team at{" "}
                    <strong className="text-[#6A38EB] font-bold">info@xinkdigitals.com</strong>.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="p-4 rounded-2xl bg-[#F8F7FD] border border-[#EBE8F7] text-left text-xs space-y-2 text-[#5B5573]">
                  <div className="flex justify-between border-b border-[#E5E0F5] pb-2">
                    <span className="font-semibold text-[#1B143F]">Website URL:</span>
                    <span className="font-mono text-[#6A38EB] font-bold break-all">
                      {formData.websiteUrl}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E0F5] pb-2">
                    <span className="font-semibold text-[#1B143F]">Client Name:</span>
                    <span>{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E0F5] pb-2">
                    <span className="font-semibold text-[#1B143F]">Location:</span>
                    <span>{formData.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E0F5] pb-2">
                    <span className="font-semibold text-[#1B143F]">Contact Phone:</span>
                    <span className="font-mono">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="font-semibold text-[#1B143F]">Turnaround:</span>
                    <span className="text-[#00A877] font-semibold">✓ Within 24 Hours</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-3 rounded-2xl bg-[#6A38EB] hover:bg-[#5829D6] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#6A38EB]/25 cursor-pointer"
                  >
                    Done & Return to Page
                  </button>
                </div>
              </div>
            ) : (
              /* Audit Request Form */
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errors.general && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{errors.general}</span>
                  </div>
                )}

                {/* 1. Website URL to be Audited */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                    Website URL to be Audited <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C87A5]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. https://yourcompany.com or brand.com"
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, websiteUrl: e.target.value })
                      }
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-xs text-[#1B143F] placeholder-[#9E9AA7] focus:outline-none focus:ring-2 focus:ring-[#6A38EB]/20 transition-all font-mono ${
                        errors.websiteUrl
                          ? "border-red-400 bg-red-50/20"
                          : "border-[#EDEDF5] focus:border-[#6A38EB]"
                      }`}
                    />
                  </div>
                  {errors.websiteUrl && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.websiteUrl}</p>
                  )}
                </div>

                {/* 2. Full Name & Location (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C87A5]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-xs text-[#1B143F] placeholder-[#9E9AA7] focus:outline-none focus:ring-2 focus:ring-[#6A38EB]/20 transition-all ${
                          errors.name
                            ? "border-red-400 bg-red-50/20"
                            : "border-[#EDEDF5] focus:border-[#6A38EB]"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C87A5]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London / California / Kolkata"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-xs text-[#1B143F] placeholder-[#9E9AA7] focus:outline-none focus:ring-2 focus:ring-[#6A38EB]/20 transition-all ${
                          errors.location
                            ? "border-red-400 bg-red-50/20"
                            : "border-[#EDEDF5] focus:border-[#6A38EB]"
                        }`}
                      />
                    </div>
                    {errors.location && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>
                    )}
                  </div>
                </div>

                {/* 3. Contact No. & Email (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                      Contact No. (10+ digits) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C87A5]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 92306 53970"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-xs text-[#1B143F] placeholder-[#9E9AA7] focus:outline-none focus:ring-2 focus:ring-[#6A38EB]/20 transition-all font-mono ${
                          errors.phone
                            ? "border-red-400 bg-red-50/20"
                            : "border-[#EDEDF5] focus:border-[#6A38EB]"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                      Delivery Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C87A5]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@brand.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-white text-xs text-[#1B143F] placeholder-[#9E9AA7] focus:outline-none focus:ring-2 focus:ring-[#6A38EB]/20 transition-all ${
                          errors.email
                            ? "border-red-400 bg-red-50/20"
                            : "border-[#EDEDF5] focus:border-[#6A38EB]"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Audit Highlights */}
                <div className="p-3 rounded-xl bg-[#F8F7FD] border border-[#EDEDF5] text-[11px] text-[#5B5573] flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-medium text-[#1B143F]">
                    <ShieldCheck className="w-4 h-4 text-[#6A38EB]" />
                    <span>Free Comprehensive 18-Point Audit</span>
                  </span>
                  <span className="text-[#6A38EB] font-bold">100% Free · 24h Turnaround</span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#6A38EB] to-[#5829D6] hover:from-[#5829D6] hover:to-[#4820B8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#6A38EB]/30 hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Queuing Audit Diagnostic...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 text-[#C9F36D]" />
                        <span>Request Free Site Audit</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#8C87A5] pt-1">
                  Report dispatched directly to your inbox and <span className="font-semibold text-[#1B143F]">info@xinkdigitals.com</span>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
