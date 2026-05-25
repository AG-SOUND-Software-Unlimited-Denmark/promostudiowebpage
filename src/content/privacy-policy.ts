/** Privacy policy copy — AI Promo Studio (AG-SOUND). */

import type { LegalDocumentMeta, LegalSection } from "@/content/legal-types";

export const privacyPolicyMeta: LegalDocumentMeta = {
  title: "Privacy Policy",
  productName: "AI Promo Studio",
  effectiveDate: "February 2, 2026",
  lastUpdated: "February 2026",
  contactEmail: "agsounddenmark@gmail.com",
  company: "AG-SOUND (Software Unlimited Denmark)",
  copyright: "Copyright © 2026",
};

export const privacyPolicySections: LegalSection[] = [
  {
    id: "overview",
    title: "1. Overview",
    paragraphs: [
      `${privacyPolicyMeta.productName} is a service by ${privacyPolicyMeta.company} that helps you turn photos into short-form video promos for social media (for example Instagram and TikTok). The service is available through our Android mobile app and our web studio.`,
      `${privacyPolicyMeta.productName} ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, who we share it with, and what choices you have when you use the mobile app, the website, and related backend services.`,
    ],
  },
  {
    id: "data-collection",
    title: "2. Information We Collect",
    paragraphs: [
      `The information we collect depends on how you use ${privacyPolicyMeta.productName}. You must sign in to create promos and manage credits on the Android app. Web studio sign-in may be offered later; this site currently provides marketing pages and the privacy policy only.`,
    ],
    subsections: [
      {
        title: "2.1 Account and identity",
        bullets: [
          "When you sign in with Google (via Supabase Auth on mobile, or Google OAuth on the web), we receive identifiers and profile fields provided by Google, such as your email address, display name, and profile image URL.",
          "We assign an internal user ID and store account-related records in our database (hosted on Supabase) so we can authenticate API requests, track credit balance, and associate your jobs with your account.",
          "We do not offer a separate username/password system; authentication is handled through Google and our auth providers.",
        ],
      },
      {
        title: "2.2 Photos and generated videos (user content)",
        bullets: [
          "To generate a promo, you choose a photo from your device. That image is uploaded to our servers (Supabase Storage) and linked to your promo job.",
          "Our systems send your image (and a text prompt derived from the template you selected) to our video generation provider (fal.ai / Kling image-to-video) to produce a short MP4 video.",
          "The finished video is stored in Supabase Storage. You can view it in the app and, if you grant permission, save it to your device photo gallery.",
          "We use your content only to provide the generation service, deliver results to you, and operate the product (for example troubleshooting failed jobs). We do not use your photos or videos to train our own models.",
        ],
      },
      {
        title: "2.3 Credits and purchases (Android)",
        bullets: [
          "Promo generation uses credits. On Android, credits are purchased through Google Play In-App Billing.",
          "When you buy a credit pack, Google processes the payment. Our backend receives product identifiers and purchase tokens from the app so we can verify the purchase with Google and add credits to your account.",
          "We do not receive or store your full payment card details; those are handled by Google.",
        ],
      },
      {
        title: "2.4 Usage, diagnostics, and analytics (Android app)",
        paragraphs: [
          "The Android app uses Google Firebase services to understand how the app is used and to diagnose crashes:",
        ],
        bullets: [
          "Firebase Analytics: app events (for example screen views, promo started) and an analytics user ID linked to your account when signed in.",
          "Firebase Crashlytics: crash reports, stack traces, and optional diagnostic attributes to fix stability issues.",
          "These SDKs may collect device and app-instance identifiers as described in Google's documentation. Collection is disabled in development builds unless you explicitly enable debug analytics.",
          `We do not use Google Mobile Ads (AdMob) in ${privacyPolicyMeta.productName}.`,
          "You can limit ad-related identifiers in Android settings; uninstalling the app stops further collection from the app.",
        ],
      },
      {
        title: "2.5 Web studio (campaigns and billing)",
        bullets: [
          "If you use the web studio, we store brand profiles, uploaded brand assets, campaign briefs, and generation metadata in our application database tied to your signed-in account.",
          "If you subscribe through our website, Stripe processes payments. We store Stripe customer and subscription identifiers and billing status so we can enable paid features. Stripe's privacy policy applies to payment processing.",
          `The public marketing pages (/ and /privacy) do not require sign-in. We do not currently run third-party marketing analytics or session-recording tools on the ${privacyPolicyMeta.productName} website.`,
        ],
      },
      {
        title: "2.6 Support and communications",
        paragraphs: [
          "If you contact us by email, we use your message and email address only to respond and keep a record of the conversation as needed.",
        ],
      },
    ],
  },
  {
    id: "permissions",
    title: "3. App Permissions (Android)",
    paragraphs: ["The Android app may request the following permissions:"],
    bullets: [
      "Photos / media library (read): to let you pick an image for promo generation.",
      "Photos / media library (write): to save finished promo videos to your gallery when you choose to download or save.",
      "Network access: to sign in, call our API, stream template previews, and download results.",
      "Notifications (optional): to inform you about job completion or product updates, if enabled on your device.",
      "We do not request access to your contacts, microphone, or location for core promo features.",
    ],
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Information",
    bullets: [
      "Authenticate you and keep your session secure.",
      "Process promo jobs: store uploads, run video generation, deliver outputs, and deduct credits.",
      "Verify Google Play purchases and maintain your credit balance.",
      "Operate and improve the service (analytics, crash reporting, fraud prevention, support).",
      "Comply with law and enforce our terms where required.",
      "We do not sell your personal information. We do not use your photos or videos for third-party advertising.",
    ],
  },
  {
    id: "sharing",
    title: "5. Who We Share Information With",
    paragraphs: [
      `We share information only with service providers that help us run ${privacyPolicyMeta.productName}, under contracts or terms that require them to protect your data:`,
    ],
    bullets: [
      "Supabase: authentication, Postgres database, and file storage for uploads and generated videos.",
      "Google: Google Sign-In, Google Play billing verification, Firebase Analytics, and Firebase Crashlytics.",
      "fal.ai (and underlying model providers such as Kling): image-to-video generation processing. Your uploaded image and prompt are sent to their systems for the duration of the job.",
      "Stripe (web billing only): subscription and payment processing when you use paid web features.",
      "Infrastructure hosts we use to run our API and workers (for example cloud hosting providers).",
      "We may disclose information if required by law or to protect rights, safety, and security.",
    ],
  },
  {
    id: "data-storage",
    title: "6. Data Storage, Retention, and Security",
    bullets: [
      "Account and job metadata are stored in Supabase (PostgreSQL) in regions configured for our production project.",
      "Photos and videos are stored in Supabase Storage. They remain available while your account and jobs exist unless you request deletion or we apply a retention policy.",
      "Data in transit is protected with HTTPS/TLS where applicable.",
      "No system is 100% secure. We use reasonable technical and organizational measures appropriate to the nature of the data we hold.",
      "Web studio data (brands, campaigns) is stored in our application database for the web product; retention follows your use of the service and our backup practices.",
    ],
  },
  {
    id: "international",
    title: "7. International Transfers",
    paragraphs: [
      "Our service providers may process data in the European Union, the United States, or other countries. Where required, we rely on appropriate safeguards (such as standard contractual clauses) for transfers outside your country. If you are in the EEA or UK, you may have additional rights under GDPR as described below.",
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    paragraphs: [
      `${privacyPolicyMeta.productName} is not directed at children under 13 (or the minimum age required in your country). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it.`,
    ],
  },
  {
    id: "your-rights",
    title: "9. Your Rights and Choices",
    paragraphs: [
      "Depending on where you live (including the EU/EEA and Denmark under GDPR), you may have the right to:",
      "To exercise these rights, email us at the address in Section 11. We will respond within the time required by applicable law.",
    ],
    bullets: [
      "Access, correct, or delete personal data we hold about you.",
      "Object to or restrict certain processing, or withdraw consent where processing is consent-based.",
      "Data portability for information you provided in a structured format.",
      "Lodge a complaint with your local data protection authority.",
      "Delete your account and associated jobs by contacting us (we will verify your identity). Uninstalling the Android app does not by itself delete server-side data.",
      "Export or delete web studio data by request where applicable.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the "Last Updated" date. Material changes may also be communicated in the app or by email where appropriate. Continued use after changes means you accept the updated policy.',
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    paragraphs: [
      "Questions about this Privacy Policy or our data practices:",
    ],
  },
];
