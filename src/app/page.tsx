import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "AI Promo Studio — AI promos for artists & brands",
  description:
    "Turn a photo into short-form video promos for Instagram and TikTok. Concert campaigns and brand announcements.",
};

const features = [
  {
    title: "Artists & concerts",
    description:
      "Tour energy, venue shots, ticket CTAs — vertical 9:16 promos tuned for Instagram Reels and TikTok.",
  },
  {
    title: "Brands & announcements",
    description:
      "Product launches, employer brand, company news — square and vertical formats for your feed.",
  },
  {
    title: "Simple workflow",
    description:
      "Pick a template, upload a photo, and get a 10-second promo. Credits via Google Play on Android.",
  },
] as const;

export default function LandingPage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="brand-glow pointer-events-none absolute -right-24 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 opacity-50"
            style={{
              background:
                "conic-gradient(from 200deg at 50% 50%, #ff8a00, #e52e71, #9c27b0, #2b59ff, #ff8a00)",
              filter: "blur(80px)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-5xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
            <div className="space-y-8">
              <BrandMark variant="hero" animate />
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Create 10-second{" "}
                  <span className="brand-gradient-text">AI promo videos</span> from one photo
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-brand-muted">
                  Choose a template, upload a photo, and get a professional video ready for Instagram, TikTok, and
                  more — in minutes.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  className="inline-flex items-center justify-center rounded-xl brand-gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-pink/25 transition-opacity hover:opacity-90"
                  href="/terms"
                >
                  Terms of Service
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-brand-surface px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-brand-elevated"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/hero-banner.png"
                alt="AI Promo Studio app preview showing a concert promo on a phone"
                width={640}
                height={400}
                className="relative z-10 w-full max-w-lg rounded-2xl"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-brand-muted">
            Built for social-first campaigns
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-brand-surface p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-brand-elevated">
          <div className="mx-auto max-w-5xl px-4 py-14 text-center">
            <h2 className="text-xl font-semibold text-white">Available on Android</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-brand-muted">
              Create promos in the AI Promo Studio Android app — pick a template, upload a photo, and purchase credits
              via Google Play. The web studio is not open for sign-in yet.
            </p>
          </div>
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
