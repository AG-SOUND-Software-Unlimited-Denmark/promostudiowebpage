import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyPolicyDocument } from "@/components/PrivacyPolicyDocument";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Promo Studio",
  description: "Privacy Policy for AI Promo Studio — mobile app, web studio, and video generation services.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="mb-8 text-sm text-brand-muted">
          <Link className="underline transition-colors hover:text-white" href="/">
            ← Back to home
          </Link>
        </p>
        <PrivacyPolicyDocument />
      </main>
      <PublicFooter />
    </>
  );
}
