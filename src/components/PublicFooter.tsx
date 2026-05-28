import Link from "next/link";
import { privacyPolicyMeta } from "@/content/privacy-policy";

export function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-elevated">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {privacyPolicyMeta.company} · {privacyPolicyMeta.copyright}
        </p>
        <nav className="flex flex-wrap gap-4">
          <Link className="transition-colors hover:text-white" href="/terms">
            Terms of Service
          </Link>
          <Link className="transition-colors hover:text-white" href="/privacy">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
