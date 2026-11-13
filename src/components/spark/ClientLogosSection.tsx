"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { clients, sampleClients } from "@/data/clients";

export default function ClientLogosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (
      !section ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    section.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        section.dataset.reveal = "visible";
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  const demo = clients.length === 0;
  // Repeat items so the scrolling marquee flows seamlessly across all screen sizes
  const displayClients =
    clients.length > 0 && clients.length < 8
      ? [...clients, ...clients]
      : clients;

  function cards(duplicate: boolean) {
    return (
      <div
        className="client-marquee-group"
        aria-hidden={duplicate || undefined}
      >
        {demo
          ? sampleClients.map((client) => (
              <div key={client.name} className="client-logo-card">
                <span aria-hidden="true" className="text-3xl text-[#6A38EB]">
                  {client.mark}
                </span>
                <span className={`text-2xl ${client.style}`}>
                  {client.name}
                </span>
              </div>
            ))
          : displayClients.map((client, idx) => {
              const logo = (
                <Image
                  src={client.logo}
                  alt={duplicate ? "" : `${client.name} logo`}
                  width={160}
                  height={64}
                  className="max-h-14 sm:max-h-16 w-auto max-w-[150px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              );
              return client.website ? (
                <a
                  key={`${client.name}-${duplicate ? "dup" : "orig"}-${idx}`}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={duplicate ? -1 : undefined}
                  aria-label={`${client.name} website (opens in new tab)`}
                  title={`Visit ${client.name}`}
                  className="client-logo-card group hover:border-[#6A38EB] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  {logo}
                </a>
              ) : (
                <div
                  key={`${client.name}-${duplicate ? "dup" : "orig"}-${idx}`}
                  className="client-logo-card"
                >
                  {logo}
                </div>
              );
            })}
      </div>
    );
  }
  return (
    <section
      ref={sectionRef}
      aria-labelledby="clients-heading"
      className="bg-[#FBFBFE] py-16 sm:py-24 text-[#1B143F] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="collaboration-reveal collaboration-eyebrow text-xs font-bold uppercase tracking-[0.2em] text-[#6A38EB] mb-4">
          Our clients
        </p>
        <h2
          id="clients-heading"
          className="collaboration-reveal collaboration-title font-display font-extrabold text-3xl sm:text-5xl tracking-tight"
        >
          Brands we are supporting.
        </h2>
        <p className="collaboration-reveal collaboration-description text-sm text-[#5B5573] mt-4 mb-10">
          Good work starts with a shared ambition.
        </p>
      </div>
      <div className="collaboration-reveal collaboration-logos client-marquee-window">
        <div className="client-marquee-track">
          {cards(false)}
          {cards(true)}
        </div>
      </div>
    </section>
  );
}
