import Link from "next/link";
import WaterButton from "@/components/WaterButton";
import LegalLink from "@/components/LegalLink";

export default function FooterSection() {
  return <footer id="contacts" className="bg-[#FBFBFE] text-[#1B143F] px-6 py-16 sm:p-16">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#EBEBF4]">
        <div><p className="text-xs uppercase tracking-[0.2em] text-[#6A38EB] font-bold mb-4">Your next chapter</p><h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">Let&apos;s grow your business.</h2><p className="text-sm text-[#5B5573] mt-4">Tell us where you are and where you want to go.</p></div>
        <WaterButton href="/contact" className="self-start">Start a conversation ↗</WaterButton>
      </div>
      <div className="grid sm:grid-cols-3 gap-10 py-12">
        <div><Link href="/" prefetch={true} className="font-display font-extrabold text-2xl">Xink Digitals<span className="text-[#6A38EB]">.</span></Link><p className="text-sm text-[#5B5573] leading-relaxed mt-4 max-w-xs">Digital marketing, creative and websites built around your business goals.</p></div>
        <div><h3 className="font-bold text-sm mb-4">Explore</h3><nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm text-[#5B5573]">{[["Services","/services"],["Work","/work"],["About","/about"],["FAQs","/faq"],["Contact","/contact"]].map(([name,href]) => <Link key={href} href={href} prefetch={true} className="hover:text-[#6A38EB]">{name}</Link>)}</nav></div>
        <div><h3 className="font-bold text-sm mb-4">Say hello</h3><a href="mailto:contact@xinkdigitals.com" className="text-sm text-[#5B5573] break-all hover:text-[#6A38EB]">contact@xinkdigitals.com</a><p className="text-xs text-[#8C87A5] mt-4 leading-relaxed">Share your goals, website and the kind of support you need.</p></div>
      </div>
      <div className="border-t border-[#EBEBF4] pt-6 flex flex-wrap justify-between gap-4 text-xs text-[#8C87A5]"><span>&copy; 2026 Xink Digitals. All rights reserved.</span><div className="flex gap-6"><LegalLink kind="privacy">Privacy Policy</LegalLink><LegalLink kind="terms">Terms</LegalLink></div></div>
    </div>
  </footer>;
}
