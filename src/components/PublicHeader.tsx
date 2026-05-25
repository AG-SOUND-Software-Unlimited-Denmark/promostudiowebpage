import Link from "next/link";

export function PublicHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          AI Promo Studio
        </Link>
        <nav className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          <Link className="hover:text-zinc-900 dark:hover:text-white" href="/terms">
            Terms
          </Link>
          <Link className="hover:text-zinc-900 dark:hover:text-white" href="/privacy">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
