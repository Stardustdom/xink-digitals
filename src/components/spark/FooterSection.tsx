import React from "react";
import Link from "next/link";
import { Apple, Play } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="contacts" className="relative bg-[#FBFBFE] text-[#1B143F] rounded-[2.5rem] sm:rounded-[3.2rem] overflow-hidden p-8 sm:p-16 border border-[#EAEAFA] shadow-[0_4px_30px_rgba(27,20,63,0.03)] mt-6 mb-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Header: Contact Us on Left, hello@spark.co on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-12 mb-12 border-b border-[#EBEBF4] gap-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1B143F] tracking-tight">
            Contact Us
          </h2>
          <a
            href="mailto:hello@spark.co"
            className="font-display font-extrabold text-2xl sm:text-4xl text-[#1B143F] hover:text-[#6A38EB] transition-colors tracking-tight"
          >
            hello@spark.co
          </a>
        </div>

        {/* Middle Columns & Download Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          {/* Sitemap (3 cols) */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-[#1B143F] mb-4">Sitemap</p>
            <ul className="space-y-2.5 text-xs text-[#5B5573]">
              <li><a href="#features" className="hover:text-[#1B143F]">Features</a></li>
              <li><a href="#article" className="hover:text-[#1B143F]">Article</a></li>
              <li><a href="#testimonials" className="hover:text-[#1B143F]">Testimonials</a></li>
              <li><a href="#about" className="hover:text-[#1B143F]">About</a></li>
            </ul>
          </div>

          {/* Press & Help (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <p className="text-xs font-bold text-[#1B143F] mb-1.5">For Press</p>
              <a href="mailto:media@flash.co" className="text-xs text-[#5B5573] hover:text-[#1B143F]">
                media@flash.co
              </a>
            </div>
            <div>
              <p className="text-xs font-bold text-[#1B143F] mb-1.5">For Help</p>
              <a href="mailto:help@flash.co" className="text-xs text-[#5B5573] hover:text-[#1B143F]">
                help@flash.co
              </a>
            </div>
          </div>

          {/* Social (2 cols) */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-[#1B143F] mb-3">Social</p>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#F0F0F8] hover:bg-[#1B143F] hover:text-white flex items-center justify-center text-[#1B143F] transition-colors font-bold text-xs"
              >
                <span>IG</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#F0F0F8] hover:bg-[#1B143F] hover:text-white flex items-center justify-center text-[#1B143F] transition-colors font-bold text-xs"
              >
                <span>♪</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#F0F0F8] hover:bg-[#1B143F] hover:text-white flex items-center justify-center text-[#1B143F] transition-colors font-bold text-xs"
              >
                <span>𝕏</span>
              </a>
            </div>
          </div>

          {/* Download Card on Right (5 cols) */}
          <div id="download" className="md:col-span-5 p-6 rounded-3xl bg-white border border-[#EDEDF5] shadow-sm flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold text-[#1B143F] leading-snug mb-4">
                Flash.co available <br />
                to download:
              </p>
              <div className="flex items-center gap-2">
                <button className="w-12 h-12 rounded-2xl bg-[#1B143F] text-white flex flex-col items-center justify-center hover:bg-[#6A38EB] transition-colors">
                  <Apple className="w-4 h-4 fill-current mb-0.5" />
                  <span className="text-[8px] font-bold">iOS</span>
                </button>
                <button className="w-12 h-12 rounded-2xl bg-[#1B143F] text-white flex flex-col items-center justify-center hover:bg-[#6A38EB] transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current mb-0.5" />
                  <span className="text-[8px] font-bold">Android</span>
                </button>
              </div>
            </div>

            {/* Mini phone screen preview */}
            <div className="w-24 h-32 rounded-2xl bg-[#F4F4FA] border border-[#E5E5EF] p-2 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="w-8 h-2 rounded-full bg-black mx-auto mb-1" />
              <div className="space-y-1">
                <div className="h-3 rounded bg-white" />
                <div className="h-3 rounded bg-white" />
                <div className="h-3 rounded bg-white" />
              </div>
              <div className="h-4 rounded-lg bg-[#6A38EB] text-[7px] text-white flex items-center justify-center font-bold">
                Download
              </div>
            </div>
          </div>
        </div>

        {/* Big Signature Wordmark & Legal */}
        <div className="pt-8 border-t border-[#EBEBF4] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Giant Spark.co wordmark */}
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-4xl sm:text-6xl text-[#1B143F] tracking-tighter">
              Spark<span className="text-[#6A38EB]">.co</span>
            </span>
          </div>

          {/* Legal / Copyright */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-[#8C87A5]">
            <Link href="/privacy" className="hover:text-[#1B143F]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1B143F]">Terms</Link>
            <span>Copyright@spark.co 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
