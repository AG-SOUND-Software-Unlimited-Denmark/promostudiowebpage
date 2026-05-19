import Link from "next/link";
import { privacyPolicyMeta } from "@/content/privacy-policy";

export function PublicFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {privacyPolicyMeta.company} · {privacyPolicyMeta.copyright}
        </p>
        <nav className="flex flex-wrap gap-4">
          <Link className="hover:text-zinc-800 dark:hover:text-zinc-200" href="/privacy">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
