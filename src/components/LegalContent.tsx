export type LegalKind = "privacy" | "terms";

export default function LegalContent({ kind, titleId }: { kind: LegalKind; titleId?: string }) {
  return kind === "privacy" ? <>
        <h1 id={titleId} className="text-3xl sm:text-5xl font-black font-heading mb-6 text-[#1B143F]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#8C87A5] mb-10">Last updated: October 2026</p>

        <div className="space-y-6 text-sm text-[#5B5573] leading-relaxed">
          <p>
            At Xink Digitals, we value your privacy as much as our creative freedom. This policy details how we treat information received through our website and client communications.
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">1. Information We Collect</h2>
          <p>
            We collect contact details voluntarily submitted via our project estimator, inquiry forms, and email communications (such as name, company name, email address, and project brief scope).
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">2. How We Use Information</h2>
          <p>
            We strictly use this data to deliver proposals, communicate regarding project briefs, and provide our creative services. We never sell or distribute your contact details to third-party data brokers.
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">3. Security &amp; Confidentiality</h2>
          <p>
            All submitted project briefs and discussions are held under strict confidentiality. Mutual NDAs are readily signed prior to sensitive product launches.
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">4. Contacting Us</h2>
          <p>
            For privacy inquiries, please contact our team at{" "}
            <a href="mailto:privacy@xinkdigitals.com" className="text-[#6A38EB] underline">
              privacy@xinkdigitals.com
            </a>
            .
          </p>
        </div>
  </> : <>
        <h1 id={titleId} className="text-3xl sm:text-5xl font-extrabold font-heading mb-6">
          Terms of Service
        </h1>
        <p className="text-xs text-[#8C87A5] mb-10">Last updated: October 2026</p>

        <div className="space-y-6 text-sm text-[#5B5573] leading-relaxed">
          <p>
            Welcome to Xink Digitals. By accessing our website or engaging our creative studio services, you agree to comply with and be bound by the following terms.
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">1. Scope of Engagement</h2>
          <p>
            Project specifications, milestones, sprint deliverables, and payment terms are defined within individual Statements of Work (SOWs) executed between Xink Digitals and the client.
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">2. Intellectual Property</h2>
          <p>
            Upon full settlement of agreed project fees, full ownership of custom design deliverables, source code repositories, and brand identity assets transfers entirely to the client.
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">3. Portfolio Showcase Rights</h2>
          <p>
            Unless explicitly precluded by a signed non-disclosure agreement, Xink Digitals reserves the right to showcase completed project designs and verified case studies within our agency portfolio.
          </p>
          <h2 className="text-lg font-bold text-[#1B143F] pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the State of New York and the United States of America.
          </p>
        </div>
  </>;
}
