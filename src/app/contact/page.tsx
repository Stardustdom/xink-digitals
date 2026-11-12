"use client";
import { useState } from "react";
import WaterButton from "@/components/WaterButton";
import Link from "next/link";

export default function ContactPage() {
 const [prepared, setPrepared] = useState(false);
 function submit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = [`Name: ${data.get("name")}`, `Email: ${data.get("email")}`, `Company: ${data.get("company")}`, `Service: ${data.get("service")}`, `Budget: ${data.get("budget")}`, "", String(data.get("message"))].join("\n");
  window.location.href = `mailto:hello@xinkdigitals.com?subject=${encodeURIComponent("Project enquiry: " + data.get("company"))}&body=${encodeURIComponent(body)}`;
  setPrepared(true);
 }
 const input = "transition-[border-color,box-shadow,background-color] duration-300 w-full mt-2 rounded-2xl border border-[#E5E5EF] bg-[#FBFBFE] px-4 py-3 text-sm outline-none focus:border-[#6A38EB] focus:ring-2 focus:ring-[#6A38EB]/20";
 return <main className="page-glow bg-[#FFF9F1] text-[#1B143F] min-h-screen px-6 pt-36 pb-20 sm:px-16"><div className="max-w-6xl mx-auto">
  <p className="text-xs uppercase tracking-[0.2em] text-[#6A38EB] font-bold mb-4">Start a conversation</p><h1 className="page-intro font-display text-4xl sm:text-6xl font-extrabold tracking-tight">Your goals.<br />Our next brief.</h1><p className="text-[#5B5573] max-w-xl mt-6 mb-12 leading-relaxed">Tell Xink Digitals about your business and the support you need. We can discuss the right channels, scope and next steps.</p>
  <div className="grid lg:grid-cols-[2fr_1fr] gap-8"><form data-reveal onSubmit={submit} className="rounded-[2rem] bg-white border border-[#EDEDF5] p-6 sm:p-10 space-y-6">
   <div className="grid sm:grid-cols-2 gap-6"><label className="text-sm font-semibold">Your name<input name="name" required autoComplete="name" maxLength={100} className={input}/></label><label className="text-sm font-semibold">Email address<input name="email" type="email" required autoComplete="email" maxLength={200} className={input}/></label></div>
   <label className="block text-sm font-semibold">Company or website<input name="company" required autoComplete="organization" maxLength={200} className={input}/></label>
   <label className="block text-sm font-semibold">What do you need help with?<select name="service" className={input}>{["Help me choose", "SEO & content", "Social media", "Paid advertising", "Branding", "Website design & development", "Motion & creative production"].map(s=><option key={s}>{s}</option>)}</select></label>
   <label className="block text-sm font-semibold">Indicative budget (optional)<input name="budget" placeholder="Amount and currency, or let us know you're unsure" maxLength={100} className={input}/></label>
   <label className="block text-sm font-semibold">Tell us about your goals<textarea name="message" required rows={5} maxLength={3000} placeholder="Your audience, current challenges and ideal timeline" className={input}/></label>
   <p className="text-xs text-[#8C87A5] leading-relaxed">This form prepares an email in your email app. Review it and press Send there to submit your enquiry. By contacting us, you acknowledge our <Link href="/privacy" className="underline">privacy policy</Link>.</p>
   <WaterButton type="submit" tone="purple" className="self-start">Prepare enquiry email ↗</WaterButton>
   {prepared && <p role="status" className="rounded-2xl bg-[#F4F1FD] p-4 text-sm leading-relaxed">Your email draft was requested. Your enquiry has not been sent by this website. If no email app opened, email hello@xinkdigitals.com directly.</p>}
  </form><aside data-reveal className="rounded-[2rem] bg-[#F4F1FD] border border-[#EDEDF5] p-8 self-start"><h2 className="font-display text-2xl font-bold mb-4">Let&apos;s find your focus.</h2><p className="text-sm text-[#5B5573] leading-relaxed mb-6">Not sure where to start? Share your website and your main business challenge. A useful first conversation starts there.</p><a className="text-sm font-bold text-[#6A38EB] break-all" href="mailto:hello@xinkdigitals.com">hello@xinkdigitals.com</a><Link href="/faq" className="block text-sm mt-8 underline">Read our FAQs</Link></aside></div>
 </div></main>;
}
