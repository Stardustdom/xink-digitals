"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import CaseStudyContent from "./CaseStudyContent";

export default function CaseStudyModal({ project, onClose, onNext }: {
  project: Project;
  onClose: () => void;
  onNext: (project: Project) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 });
  }, [project.slug]);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby="case-study-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto overscroll-contain rounded-3xl border border-white/60 bg-[#FFF9F1] p-0 text-[#181329] shadow-2xl backdrop:bg-[#181329]/45 backdrop:backdrop-blur-md"
    >
      <div className="sticky top-0 z-20 flex justify-end border-b border-[#181329]/10 bg-[#FFF9F1]/95 px-4 py-3 backdrop-blur-md">
        <button type="button" autoFocus onClick={onClose} aria-label="Close case study" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#181329] shadow-sm transition-colors hover:bg-[#754BFF] hover:text-white focus-visible:outline-2 focus-visible:outline-[#754BFF]">
          <X className="h-5 w-5" />
        </button>
      </div>
      <CaseStudyContent project={project} onClose={onClose} onNext={onNext} />
    </dialog>,
    document.body,
  );
}
