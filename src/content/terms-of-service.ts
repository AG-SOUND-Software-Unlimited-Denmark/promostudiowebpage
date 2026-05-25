import { privacyPolicyMeta } from "@/content/privacy-policy";
import type { LegalDocumentMeta, LegalSection } from "@/content/legal-types";

export const termsOfServiceMeta: LegalDocumentMeta = {
  title: "Terms of Service",
  productName: privacyPolicyMeta.productName,
  effectiveDate: "May 19, 2026",
  lastUpdated: "May 2026",
  contactEmail: privacyPolicyMeta.contactEmail,
  company: privacyPolicyMeta.company,
  copyright: privacyPolicyMeta.copyright,
};

export const termsOfServiceSections: LegalSection[] = [
  {
    id: "agreement",
    title: "1. Agreement to These Terms",
    paragraphs: [
      `These Terms of Service ("Terms") govern your access to and use of ${termsOfServiceMeta.productName}, operated by ${termsOfServiceMeta.company} ("we", "our", or "us"), including the Android mobile app, our website at https://promostudio.netlify.app, and related services.`,
      `By creating an account, purchasing credits, uploading content, or generating a promo, you agree to these Terms and to our Privacy Policy at /privacy. If you do not agree, do not use the service.`,
    ],
  },
  {
    id: "service",
    title: "2. The Service",
    paragraphs: [
      `${termsOfServiceMeta.productName} helps you turn photos into short-form video promos for social media using automated AI image-to-video technology provided by third-party model providers.`,
      "We may change, suspend, or discontinue features at any time. We do not guarantee uninterrupted availability, specific generation speeds, or that the web studio, Android app, or any particular template will remain available.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts and Eligibility",
    bullets: [
      "You must be old enough to use the service and accept these Terms under the laws of your country (at least 13, or higher where required).",
      `You sign in with Google. You are responsible for keeping your Google account secure and for all activity under your ${termsOfServiceMeta.productName} account.`,
      "You must provide accurate information and not impersonate others or create accounts for abusive or fraudulent purposes.",
    ],
  },
  {
    id: "credits",
    title: "4. Credits, Purchases, and Refunds",
    bullets: [
      "Promo generation consumes credits. On Android, credits are sold through Google Play In-App Billing under Google's terms. On the web studio (when available), paid features may be billed through Stripe under Stripe's terms.",
      "Prices, credit packs, and promotional offers may change. Taxes may apply depending on your location.",
      "Except where required by applicable consumer law or the policies of Google Play or Stripe, purchases are generally final. Credits used for a submitted job are consumed when processing starts, even if the output is unsatisfactory — see Section 6 on AI outputs.",
      "We may correct credit balances if we detect billing errors, fraud, or abuse.",
    ],
  },
  {
    id: "your-content",
    title: "5. Your Content and Responsibilities",
    paragraphs: [
      "You retain ownership of photos and other materials you upload. You grant us a limited license to host, process, transmit, and display your content solely to operate the service (including sending your image and prompts to our video generation providers).",
    ],
    bullets: [
      "You represent that you have the rights and permissions needed to upload and use your content, and to publish any promo you create (including likeness, trademark, and music rights where applicable).",
      "You must not upload illegal, infringing, harassing, hateful, sexually exploitative, or otherwise harmful content.",
      "You are solely responsible for reviewing every generated video before publishing it on Instagram, TikTok, or any other platform, and for complying with each platform's rules and applicable law.",
      "We may remove content or suspend accounts that violate these Terms or that create legal or security risk for us or our providers.",
    ],
  },
  {
    id: "ai-outputs",
    title: "6. AI-Generated Videos — Quality and Acceptance",
    paragraphs: [
      `${termsOfServiceMeta.productName} relies on third-party AI models. Outputs are probabilistic and cannot be guaranteed to match your expectations, brief, brand guidelines, or template.`,
      "BY USING THE SERVICE, YOU ACKNOWLEDGE AND ACCEPT THAT GENERATED VIDEOS MAY BE UNSATISFACTORY OR UNUSABLE, INCLUDING BUT NOT LIMITED TO:",
    ],
    bullets: [
      "Poor visual quality, blur, distortion, or unnatural motion.",
      "Scrambled, garbled, mirrored, or unreadable on-screen text.",
      "Missing, incorrect, or partially rendered letters, words, or logos.",
      "Unexpected objects, faces, colors, cropping, or aspect-ratio issues.",
      "Content that misrepresents your brand, event, product, or message.",
      "Failed, timed-out, or partially completed jobs despite credit use.",
    ],
    subsections: [
      {
        title: "6.1 No guarantee; your review duty",
        bullets: [
          "We do not warrant that any generation will be accurate, complete, error-free, or fit for advertising, commercial release, or any particular purpose.",
          "You are responsible for inspecting each output before use. If a result is not acceptable, you may try again with different inputs or templates, which may consume additional credits.",
          "We are not obligated to re-run jobs for free, refund credits, or compensate you solely because an AI output was low quality, contained scrambled text, or had missing letters — unless required by mandatory law or an applicable store refund policy.",
        ],
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "7. Acceptable Use",
    bullets: [
      "Do not reverse engineer, scrape, overload, or circumvent credit, rate, or security controls.",
      "Do not use the service to create deepfakes, non-consensual imagery, spam, malware distribution, or illegal campaigns.",
      "Do not misrepresent AI-generated content as wholly human-made where disclosure is required by law or platform policy.",
    ],
  },
  {
    id: "third-parties",
    title: "8. Third-Party Services",
    paragraphs: [
      "The service depends on providers such as Google (sign-in and Play billing), Supabase, fal.ai / Kling and related model hosts, Stripe (web billing), and social platforms where you publish results. Their terms and privacy policies apply to their services.",
      "We are not responsible for outages, policy changes, account actions, or failures caused by third parties outside our reasonable control.",
    ],
  },
  {
    id: "disclaimer",
    title: "9. Disclaimer of Warranties",
    paragraphs: [
      `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${termsOfServiceMeta.productName.toUpperCase()} AND RELATED SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.`,
      "We do not warrant that the service will be uninterrupted, secure, or free of errors, or that AI outputs will be accurate, legible, or suitable for your intended use.",
    ],
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND SUPPLIERS ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES.",
      "WITHOUT LIMITING THE FOREGOING, WE ARE NOT RESPONSIBLE FOR:",
    ],
    bullets: [
      "The quality, accuracy, legibility, or suitability of AI-generated videos, including scrambled text, missing letters, or other visual defects.",
      "Your use or publication of generated content, including claims by third parties (copyright, trademark, publicity, consumer protection, or platform enforcement).",
      "Actions taken by Instagram, TikTok, Google Play, Stripe, or other third-party platforms or providers.",
      "Loss of credits, failed jobs, delays, or data loss beyond our reasonable control.",
      "Any decision you make to run ads, sell tickets, or promote events based on AI outputs.",
    ],
    subsections: [
      {
        title: "10.1 Liability cap",
        paragraphs: [
          "Where liability cannot be fully excluded, our total aggregate liability for all claims arising out of or relating to the service in any twelve-month period is limited to the greater of: (a) the amount you paid us for the service in that period, or (b) EUR 50.",
          "Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the minimum permitted by law.",
        ],
      },
    ],
  },
  {
    id: "indemnity",
    title: "11. Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless us and our affiliates from claims, damages, losses, and expenses (including reasonable legal fees) arising from your content, your use of generated videos, your violation of these Terms, or your violation of any law or third-party rights.",
    ],
  },
  {
    id: "termination",
    title: "12. Suspension and Termination",
    bullets: [
      "You may stop using the service at any time. You may request account deletion by contacting us.",
      "We may suspend or terminate access if you breach these Terms, create risk for us or our providers, or as required by law.",
      "Sections that by their nature should survive (including Sections 6, 9, 10, and 11) survive termination.",
    ],
  },
  {
    id: "law",
    title: "13. Governing Law and Disputes",
    paragraphs: [
      "These Terms are governed by the laws of Denmark, without regard to conflict-of-law rules, except where mandatory consumer protections in your country require otherwise.",
      "Courts in Denmark have exclusive jurisdiction where permitted; consumers in the EU/EEA may also have rights to bring claims in their country of residence under applicable law.",
    ],
  },
  {
    id: "changes",
    title: "14. Changes to These Terms",
    paragraphs: [
      'We may update these Terms from time to time. We will post the revised version at https://promostudio.netlify.app/terms and update the "Last Updated" date. Material changes may be communicated in the app or by email where appropriate. Continued use after changes means you accept the updated Terms.',
    ],
  },
  {
    id: "contact",
    title: "15. Contact Us",
    paragraphs: ["Questions about these Terms:"],
  },
];
