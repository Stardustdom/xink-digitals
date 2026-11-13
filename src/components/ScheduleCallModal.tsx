"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  X,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Download,
  Sparkles,
} from "lucide-react";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  "10:00 AM – 10:30 AM IST",
  "11:30 AM – 12:00 PM IST",
  "02:00 PM – 02:30 PM IST",
  "04:00 PM – 04:30 PM IST",
  "06:00 PM – 06:30 PM IST",
  "Flexible / Any convenient time",
];

export default function ScheduleCallModal({
  isOpen,
  onClose,
}: ScheduleCallModalProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: TIME_SLOTS[0],
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Set default date to tomorrow
  useEffect(() => {
    if (isOpen) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const dd = String(tomorrow.getDate()).padStart(2, "0");
      setFormData((prev) => ({
        ...prev,
        date: prev.date || `${yyyy}-${mm}-${dd}`,
      }));
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

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      errs.email = "Please enter a valid email address.";
    if (!formData.phone.trim() || formData.phone.trim().length < 6)
      errs.phone = "Please enter a valid phone number.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/schedule-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrors(data.errors || { general: "Something went wrong. Please try again." });
      }
    } catch {
      // Fallback: send via mailto directly to contact@xinkdigitals.com
      const subject = encodeURIComponent(`Scheduled Call Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nNotes: ${formData.notes || "None"}`
      );
      window.location.href = `mailto:contact@xinkdigitals.com?subject=${subject}&body=${body}`;
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Discovery Call — Xink Digitals");
    const details = encodeURIComponent(
      `Strategy & Discovery discussion with ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email}\nNotes: ${formData.notes || "None"}\nAgency: contact@xinkdigitals.com\nWebsite: https://xinkdigitals.com`
    );
    const location = encodeURIComponent("Google Meet / Phone: " + formData.phone);
    const d = formData.date ? formData.date.replace(/-/g, "") : "";
    const dates = d ? `&dates=${d}T093000Z/${d}T100000Z` : "";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}${dates}&add=contact@xinkdigitals.com`;
  };

  // Download .ics Calendar file
  const handleDownloadIcs = () => {
    const d = formData.date ? formData.date.replace(/-/g, "") : "20261115";
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Xink Digitals//Discovery Call//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:REQUEST",
      "BEGIN:VEVENT",
      `UID:xink-call-${Date.now()}@xinkdigitals.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART:${d}T100000Z`,
      `DTEND:${d}T103000Z`,
      "SUMMARY:Discovery Call — Xink Digitals",
      `DESCRIPTION:Scheduled 1-on-1 strategy call with ${formData.name} (${formData.phone}, ${formData.email}). Agency: contact@xinkdigitals.com`,
      `LOCATION:Phone / Google Meet (${formData.phone})`,
      "ORGANIZER;CN=Xink Digitals:mailto:contact@xinkdigitals.com",
      `ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=${formData.name}:mailto:${formData.email}`,
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-PT15M",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder: Call with Xink Digitals in 15 minutes",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `xink-call-${formData.name.toLowerCase().replace(/\s+/g, "-") || "booking"}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F0A1C]/70 backdrop-blur-md transition-all animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white text-[#1B143F] shadow-[0_25px_60px_-15px_rgba(27,20,63,0.3)] border border-[#EDEDF5] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="relative px-6 pt-6 pb-4 sm:px-8 sm:pt-8 bg-gradient-to-b from-[#F7F5FE] to-white border-b border-[#EDEDF5]/80 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6A38EB]/10 border border-[#6A38EB]/20 text-[#6A38EB] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Consultation</span>
            </div>
            <h3
              id="schedule-modal-title"
              className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B143F] tracking-tight"
            >
              {isSuccess ? "Call Scheduled!" : "Schedule a Call"}
            </h3>
            <p className="text-xs sm:text-sm text-[#5B5573] mt-1">
              {isSuccess
                ? "Your booking has been registered and routed to contact@xinkdigitals.com."
                : "Lock in a 1-on-1 strategy sync with our growth specialists."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[#EDEDF5] text-[#5B5573] hover:text-[#1B143F] hover:bg-[#F4F4FA] flex items-center justify-center transition-colors shrink-0 shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            /* Success Confirmation State */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EBFBF5] border-2 border-[#00C48C] text-[#00C48C] flex items-center justify-center mx-auto shadow-sm animate-in zoom-in-50 duration-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-[#1B143F]">
                  You&apos;re on the schedule!
                </h4>
                <p className="text-sm text-[#5B5573] mt-1 max-w-sm mx-auto">
                  A confirmation email with your booking details has been sent to{" "}
                  <strong className="text-[#6A38EB] font-semibold">{formData.email}</strong> and{" "}
                  <strong className="text-[#1B143F] font-semibold">contact@xinkdigitals.com</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-[#F8F7FD] border border-[#EBE8F7] text-left text-xs space-y-2 text-[#5B5573]">
                <div className="flex justify-between border-b border-[#E5E0F5] pb-2">
                  <span className="font-semibold text-[#1B143F]">Name:</span>
                  <span>{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E0F5] pb-2">
                  <span className="font-semibold text-[#1B143F]">Contact Phone:</span>
                  <span className="font-mono text-[#6A38EB] font-bold">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E0F5] pb-2">
                  <span className="font-semibold text-[#1B143F]">Date &amp; Time:</span>
                  <span>{formData.date} · {formData.time}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-semibold text-[#1B143F]">Calendar Status:</span>
                  <span className="text-[#00A877] font-bold">✓ Ready to Add</span>
                </div>
              </div>

              {/* Calendar Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#6A38EB] hover:bg-[#5829D6] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-[#6A38EB]/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Add to Google Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-[#F8F7FD] border border-[#EDEDF5] text-[#1B143F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#6A38EB]" />
                  <span>Download .ics (Apple / Outlook / Phone)</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold text-[#8C87A5] hover:text-[#1B143F] transition-colors"
                >
                  Done &amp; Return to Page
                </button>
              </div>
            </div>
          ) : (
            /* Active Schedule Call Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C87A5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCDAE8] text-sm text-[#1B143F] outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/15 transition-all"
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                  Business / Personal Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C87A5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCDAE8] text-sm text-[#1B143F] outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/15 transition-all"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                  Contact Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8C87A5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="(+91) 92306 53970"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCDAE8] text-sm text-[#1B143F] outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/15 transition-all"
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Date & Time Slot Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8C87A5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-[#DCDAE8] text-sm text-[#1B143F] outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#8C87A5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-[#DCDAE8] text-xs sm:text-sm text-[#1B143F] outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/15 transition-all bg-white"
                    >
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes / Optional */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B143F] mb-1">
                  Discussion Topic / Goals <span className="text-[#8C87A5] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Scaling Meta Ads, full SEO roadmap, or rebranding..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#DCDAE8] text-sm text-[#1B143F] outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/15 transition-all"
                />
              </div>

              {errors.general && (
                <p className="text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-4 h-4" /> {errors.general}
                </p>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#6A38EB] hover:bg-[#5829D6] disabled:opacity-70 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#6A38EB]/30 hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Registering Call...</span>
                  ) : (
                    <>
                      <span>Confirm &amp; Schedule Call</span>
                      <span className="transition-transform group-hover:translate-x-1">↗</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#8C87A5] text-center mt-2.5">
                  Sends invite directly to <span className="text-[#6A38EB] font-medium">contact@xinkdigitals.com</span> &amp; generates your calendar file.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
