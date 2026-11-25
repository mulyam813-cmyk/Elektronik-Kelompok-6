import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Elektronik
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <Link href="/" className="transition-colors hover:text-neutral-900 dark:hover:text-white">
            Beranda
          </Link>
        </div>
      </nav>
    </header>
  );
}
