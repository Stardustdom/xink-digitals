"use client";

import React, { useEffect, useRef } from "react";

interface HeroCanvasProps {
  mood: "electric" | "cyber" | "sunset";
}

export default function HeroCanvas({ mood }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Pastel light palette definitions
    const moodPalettes = {
      electric: [
        { r: 117, g: 75, b: 255 }, // Violet
        { r: 255, g: 101, b: 117 }, // Coral
        { r: 255, g: 140, b: 213 }, // Pink
        { r: 98, g: 217, b: 245 }, // Cyan
      ],
      cyber: [
        { r: 201, g: 243, b: 109 }, // Lime
        { r: 98, g: 217, b: 245 }, // Cyan
        { r: 117, g: 75, b: 255 }, // Violet
        { r: 255, g: 194, b: 71 }, // Sunburst
      ],
      sunset: [
        { r: 255, g: 101, b: 117 }, // Coral
        { r: 255, g: 194, b: 71 }, // Sunburst
        { r: 255, g: 140, b: 213 }, // Pink
        { r: 117, g: 75, b: 255 }, // Violet
      ],
    };

    // Blobs
    const blobs = Array.from({ length: 4 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: 140 + Math.random() * 120,
      colorIndex: i % 4,
      pulse: Math.random() * Math.PI,
    }));

    // Ambient floating particles
    const particles = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const palette = moodPalettes[mood];

      // Draw soft gradient blooms for light theme
      ctx.globalCompositeOperation = "source-over";

      blobs.forEach((blob, idx) => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        blob.pulse += 0.015;

        if (idx === 0) {
          blob.x += (mouse.x - blob.x) * 0.012;
          blob.y += (mouse.y - blob.y) * 0.012;
        }

        if (blob.x < -blob.radius) blob.x = width + blob.radius;
        if (blob.x > width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = height + blob.radius;
        if (blob.y > height + blob.radius) blob.y = -blob.radius;

        const currentRadius = blob.radius + Math.sin(blob.pulse) * 25;
        const color = palette[blob.colorIndex % palette.length];

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          currentRadius
        );

        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.16)`);
        gradient.addColorStop(0.6, `rgba(${color.r}, ${color.g}, ${color.b}, 0.05)`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle light theme particles
      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(117, 75, 255, ${p.alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(117, 75, 255, ${(1 - dist / 90) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mood]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
