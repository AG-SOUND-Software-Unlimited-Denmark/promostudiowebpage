import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/LegalDocument";
import { PublicFooter } from "@/components/PublicFooter";
import { termsOfServiceMeta, termsOfServiceSections } from "@/content/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service — AI Promo Studio",
  description:
    "Terms of Service for AI Promo Studio — AI video promos, credits, limitations of liability, and acceptance of AI output quality.",
};

export default function TermsPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="mb-8 text-sm text-brand-muted">
          <Link className="underline transition-colors hover:text-white" href="/">
            ← Back to home
          </Link>
        </p>
        <LegalDocument meta={termsOfServiceMeta} sections={termsOfServiceSections} />
      </main>
      <PublicFooter />
    </>
  );
}
