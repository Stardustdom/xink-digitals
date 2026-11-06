"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playPop: () => void;
  playSwoosh: () => void;
  playSuccess: () => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  toggleSound: () => {},
  playPop: () => {},
  playSwoosh: () => {},
  playSuccess: () => {},
});

export const useSound = () => useContext(SoundContext);

export default function SoundManager() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("xink_sound_enabled");
    if (saved === "true") {
      setSoundEnabled(true);
    }
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem("xink_sound_enabled", String(next));
    if (next) {
      playTone(520, 0.08, "sine");
    }
  };

  const playTone = (freq: number, duration: number, type: OscillatorType = "sine") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext policy
    }
  };

  const playPop = () => {
    playTone(600, 0.06, "triangle");
  };

  const playSwoosh = () => {
    playTone(340, 0.12, "sine");
  };

  const playSuccess = () => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      [440, 554, 659, 880].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.06, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } catch {}
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleSound}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel text-xs font-medium text-white/80 hover:text-white hover:border-[#754BFF]/60 transition-all duration-300 shadow-xl backdrop-blur-md group"
        title={soundEnabled ? "Mute interactive audio" : "Enable futuristic sound effects"}
      >
        <span className="relative flex h-2 w-2">
          {soundEnabled && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9F36D] opacity-75"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              soundEnabled ? "bg-[#C9F36D]" : "bg-white/30"
            }`}
          ></span>
        </span>
        {soundEnabled ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#C9F36D]" />
            <span className="hidden sm:inline">Audio On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-white/50 group-hover:text-white" />
            <span className="hidden sm:inline">Sound FX</span>
          </>
        )}
      </button>
    </div>
  );
}
