export interface FAQItem {
  id: string;
  category: "conversion" | "real-estate" | "healthcare";
  categoryLabel: string;
  q: string;
  a: string;
}

export interface FAQCategory {
  id: "all" | "conversion" | "real-estate" | "healthcare";
  title: string;
  shortTitle: string;
  description?: string;
  badge: string;
  count: number;
}

export const faqCategories: FAQCategory[] = [
  {
    id: "all",
    title: "All Questions",
    shortTitle: "All FAQs",
    badge: "28 Answers",
    count: 28,
  },
  {
    id: "conversion",
    title: "Conversion-Focused FAQs",
    shortTitle: "General & Growth",
    description: "Everything you need to know about working with Xink Digitals, pricing, lead generation, and campaign timelines.",
    badge: "10 Questions",
    count: 10,
  },
  {
    id: "real-estate",
    title: "Industry-Specific FAQs – Real Estate",
    shortTitle: "Real Estate",
    description: "Real estate businesses need more than website traffic. They need qualified property enquiries, local visibility, and a reliable online reputation.",
    badge: "8 Questions",
    count: 8,
  },
  {
    id: "healthcare",
    title: "Industry-Specific FAQs – Healthcare",
    shortTitle: "Healthcare",
    description: "Healthcare marketing requires special attention to accuracy, patient privacy, professional credibility, and advertising regulations.",
    badge: "10 Questions",
    count: 10,
  },
];

export const faqs: FAQItem[] = [
  // ==========================================
  // PART 1: CONVERSION-FOCUSED FAQS
  // ==========================================
  {
    id: "conv-1",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "Why should I choose Xink Digitals for my digital marketing needs?",
    a: "Xink Digitals combines practical business understanding, digital strategy, and technical expertise to help businesses improve their online presence. We focus on understanding your objectives before recommending services, ensuring that every activity supports your business goals.",
  },
  {
    id: "conv-2",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "How much does digital marketing cost in Kolkata?",
    a: "Digital marketing costs depend on your business requirements, competition, target audience, and selected services. We offer customized proposals based on your objectives and budget. Contact us to discuss a suitable plan for your business.",
  },
  {
    id: "conv-3",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "Can Xink Digitals help my business generate more leads?",
    a: "Yes. We use SEO, Google Ads, social media marketing, landing page optimization, and content strategies to attract relevant audiences and encourage enquiries. Our focus is on lead quality and conversion opportunities rather than simply increasing website traffic.",
  },
  {
    id: "conv-4",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "How long does it take to see results from digital marketing?",
    a: "The timeline depends on the service and your existing online presence. Paid advertising can generate enquiries relatively quickly, while SEO generally requires several months of consistent work. We establish realistic expectations and monitor progress throughout the engagement.",
  },
  {
    id: "conv-5",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "Do you provide customized digital marketing packages?",
    a: "Yes. We understand that startups, small businesses, and established companies have different marketing requirements. We develop customized service plans based on your business stage, target market, available resources, and growth objectives.",
  },
  {
    id: "conv-6",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "Can I hire Xink Digitals for only website development or SEO?",
    a: "Absolutely. You can engage us for individual services such as website design, website development, SEO, social media management, or paid advertising. You do not need to purchase a complete digital marketing package.",
  },
  {
    id: "conv-7",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "Do you work with businesses outside Kolkata?",
    a: "Yes. Although our primary market is Greater Kolkata and West Bengal, we have supported businesses across India and select international markets. We are comfortable working remotely through email, video meetings, and other digital communication channels.",
  },
  {
    id: "conv-8",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "Will I have access to my website and marketing accounts?",
    a: "Yes. We believe clients should retain ownership and appropriate administrative access to their business assets. Account access, permissions, and responsibilities are agreed upon during onboarding.",
  },
  {
    id: "conv-9",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "Do you guarantee first-page Google rankings?",
    a: "No responsible SEO agency can guarantee specific Google rankings. Search visibility depends on competition, website quality, search intent, algorithm changes, and several other factors. We focus on ethical optimization and sustainable improvements.",
  },
  {
    id: "conv-10",
    category: "conversion",
    categoryLabel: "Conversion-Focused",
    q: "How can I get started with Xink Digitals?",
    a: "Getting started is simple. Contact us through our website, email, or phone. We will understand your requirements, discuss your business challenges, and suggest suitable digital solutions.",
  },

  // ==========================================
  // PART 2: REAL ESTATE FAQS
  // ==========================================
  {
    id: "re-1",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "How can digital marketing help my real estate business?",
    a: "Digital marketing helps real estate businesses reach potential buyers, sellers, investors, and tenants through search engines, social media, and paid advertising. A well-planned strategy can improve property visibility and generate relevant enquiries.",
  },
  {
    id: "re-2",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "Can Xink Digitals help real estate companies generate property leads?",
    a: "Yes. We can develop lead-generation strategies using Google Ads, Meta Ads, landing pages, SEO, and relevant property content. Campaigns can be structured around property type, location, budget range, and intended audience.",
  },
  {
    id: "re-3",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "Can you help promote residential and commercial properties?",
    a: "Yes. We can support the online promotion of residential apartments, independent houses, commercial spaces, office properties, and other real estate offerings through suitable digital channels.",
  },
  {
    id: "re-4",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "How important is local SEO for real estate companies?",
    a: "Local SEO helps property businesses become more discoverable when people search for properties or real estate services in specific locations. Location-focused website content, accurate business listings, and relevant local information can strengthen regional visibility.",
  },
  {
    id: "re-5",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "Can you create a website for a real estate company?",
    a: "Yes. We develop business websites that can include property listings, location-based categories, enquiry forms, project information, image galleries, and contact details. The structure depends on your business model and requirements.",
  },
  {
    id: "re-6",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "Can Google and Facebook advertising help sell properties?",
    a: "Both platforms can support property marketing. Google Ads can reach people actively searching for properties, while Meta Ads can introduce projects to relevant audiences. Advertising must comply with applicable housing, targeting, and platform policies.",
  },
  {
    id: "re-7",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "Can you promote real estate projects in Kolkata and surrounding areas?",
    a: "Yes. We can develop location-focused marketing strategies for real estate businesses operating in Kolkata, Salt Lake, New Town, Rajarhat, Howrah, and other Greater Kolkata locations.",
  },
  {
    id: "re-8",
    category: "real-estate",
    categoryLabel: "Real Estate",
    q: "How do you measure the success of real estate marketing campaigns?",
    a: "We evaluate performance through relevant enquiries, cost per lead, landing page conversions, traffic quality, campaign engagement, and other agreed business indicators. Lead quality should also be assessed by the client's sales team.",
  },

  // ==========================================
  // PART 3: HEALTHCARE FAQS
  // ==========================================
  {
    id: "hc-1",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "How can digital marketing help hospitals and healthcare professionals?",
    a: "Digital marketing helps healthcare providers improve online visibility, communicate their services, share educational information, and make it easier for patients to find relevant contact and appointment details.",
  },
  {
    id: "hc-2",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "Can Xink Digitals develop websites for doctors and clinics?",
    a: "Yes. We can develop professional websites for doctors, clinics, diagnostic centres, and healthcare organizations. Features may include doctor profiles, specialities, service information, appointment enquiry forms, location details, and patient information resources.",
  },
  {
    id: "hc-3",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "How does SEO help doctors attract more patients?",
    a: "Healthcare SEO improves the discoverability of relevant medical information and professional service pages. Local SEO can also help patients find nearby clinics and practitioners when searching for healthcare services.",
  },
  {
    id: "hc-4",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "Can you manage Google Business Profiles for doctors and hospitals?",
    a: "Yes. We can assist with eligible Google Business Profile optimization, including business information, service descriptions, photographs, updates, and review-response guidance. All information must remain accurate and comply with Google's healthcare-related policies.",
  },
  {
    id: "hc-5",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "Can social media marketing help healthcare professionals?",
    a: "Yes. Social media can help doctors and healthcare organizations share educational content, awareness campaigns, service updates, and general health information. Content should be medically responsible and avoid misleading claims.",
  },
  {
    id: "hc-6",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "Do you provide healthcare content writing services?",
    a: "Yes. We can develop website content, healthcare blogs, service descriptions, educational articles, and social media content. Medical information should be reviewed and approved by appropriately qualified healthcare professionals before publication.",
  },
  {
    id: "hc-7",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "Can you run Google Ads for medical services?",
    a: "Healthcare advertising is subject to Google's advertising policies and applicable local regulations. We can help plan eligible campaigns, subject to the advertiser's qualifications, service category, location, and platform restrictions.",
  },
  {
    id: "hc-8",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "How do you protect patient privacy during healthcare marketing?",
    a: "We encourage healthcare clients to follow applicable privacy and data protection requirements. Marketing forms, analytics, advertising pixels, and enquiry management systems should be configured carefully to avoid collecting or sharing unnecessary sensitive patient information.",
  },
  {
    id: "hc-9",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "Can you help diagnostic centres improve their local visibility?",
    a: "Yes. We can optimize website content, location information, service pages, and eligible local business listings to help diagnostic centres become more discoverable to relevant local audiences.",
  },
  {
    id: "hc-10",
    category: "healthcare",
    categoryLabel: "Healthcare",
    q: "Why should healthcare businesses invest in professional website development?",
    a: "A professional healthcare website helps communicate qualifications, specialities, facilities, services, and appointment information clearly. It also provides patients with an accessible source of verified information before contacting a healthcare provider.",
  },
];
