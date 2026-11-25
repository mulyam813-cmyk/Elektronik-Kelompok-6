export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-neutral-500 dark:text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Elektronik. All rights reserved.</p>
      </div>
    </footer>
  );
}
