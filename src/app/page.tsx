import type { Metadata } from "next";
import Link from "next/link";
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
        <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 sm:py-24">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
                AG-SOUND · AI Promo Studio
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
                Short-form promos from a single photo
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                AI Promo Studio helps artists and brands create cinematic 10-second videos for social — powered by
                AI image-to-video, ready for Instagram and TikTok.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                href="/terms"
              >
                Terms of Service
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-50 dark:hover:bg-zinc-900"
                href="/privacy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Built for social-first campaigns
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-5xl px-4 py-14 text-center">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Available on Android</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-300">
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
