"use client";

import React, { useRef } from "react";
import { useFitZoom } from "./useFitZoom";

export default function FitToViewport({ children, className, grow = false }: { children: React.ReactNode; className?: string; grow?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useFitZoom(ref, grow);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
