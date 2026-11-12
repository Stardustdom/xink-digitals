import Link from "next/link";
import { faqs } from "@/data/faqs";
export const metadata = { title: "FAQs | Xink Digitals", description: "Answers about Xink Digitals services, proposals, budgets, campaign timelines and reporting." };
export default function FAQPage() {
 return <main className="page-glow bg-[#FFF9F1] text-[#1B143F] px-6 pt-36 pb-20 sm:px-16"><div className="max-w-3xl mx-auto">
 <p className="text-xs uppercase tracking-[0.2em] text-[#6A38EB] font-bold mb-4">Before we begin</p><h1 className="page-intro font-display text-4xl sm:text-6xl font-extrabold tracking-tight">Good questions.<br />Clear answers.</h1><p className="text-[#5B5573] mt-6 mb-10 leading-relaxed">What to expect when you work with Xink Digitals.</p>
 <div className="space-y-4">{faqs.map(faq => <details data-reveal key={faq.q} className="group bg-white border border-[#EDEDF5] rounded-3xl p-6"><summary className="font-bold cursor-pointer leading-relaxed focus-visible:outline-2 focus-visible:outline-[#6A38EB]">{faq.q}</summary><p className="text-sm text-[#5B5573] leading-relaxed mt-4">{faq.a}</p></details>)}</div><Link href="/contact" className="inline-flex rounded-full bg-[#6A38EB] text-white px-7 py-4 mt-10 text-sm font-bold">Tell us about your business ↗</Link>
 </div></main>;
}
