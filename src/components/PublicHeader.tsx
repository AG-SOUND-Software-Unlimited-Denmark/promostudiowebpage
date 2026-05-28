import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function PublicHeader() {
  return (
    <header className="border-b border-white/10 bg-brand-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-pink">
          <BrandMark variant="header" animate={false} />
        </Link>
        <nav className="flex gap-4 text-sm text-brand-muted">
          <Link className="transition-colors hover:text-white" href="/terms">
            Terms
          </Link>
          <Link className="transition-colors hover:text-white" href="/privacy">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
