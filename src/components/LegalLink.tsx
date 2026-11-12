"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import LegalContent, { type LegalKind } from "./LegalContent";

function LegalModal({ kind, onClose }: { kind: LegalKind; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
    };
  }, []);

  return createPortal(<dialog
    ref={ref}
    aria-labelledby={titleId}
    onCancel={onClose}
    onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
    }}
    className="legal-modal fixed inset-0 m-auto max-h-[88dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-[2rem] border border-white/70 bg-[#FBFBFE] p-0 text-[#1B143F] shadow-2xl backdrop:bg-[#1B143F]/45 backdrop:backdrop-blur-lg"
  >
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#EDEDF5] bg-[#FBFBFE]/95 px-6 py-4 backdrop-blur-md">
      <span className="text-xs font-bold uppercase tracking-widest text-[#6A38EB]">Xink Digitals · {kind === "privacy" ? "Privacy" : "Terms"}</span>
      <button type="button" autoFocus onClick={onClose} aria-label="Close popup" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EBFC] text-[#6A38EB] transition-colors hover:bg-[#6A38EB] hover:text-white focus-visible:outline-2 focus-visible:outline-[#6A38EB]"><X className="h-5 w-5" /></button>
    </div>
    <div className="px-6 pb-10 pt-8 sm:px-10"><LegalContent kind={kind} titleId={titleId} /></div>
  </dialog>, document.body);
}

export default function LegalLink({ kind, children, className = "hover:text-[#6A38EB] transition-colors" }: { kind: LegalKind; children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" aria-haspopup="dialog" onClick={() => setOpen(true)} className={className}>{children}</button>
    {open && <LegalModal kind={kind} onClose={() => setOpen(false)} />}
  </>;
}
