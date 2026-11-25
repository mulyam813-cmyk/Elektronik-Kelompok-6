import { LoginForm } from "@/components/auth/LoginForm";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f4f5fb] px-4 py-10">
      {/* Soft ambient background glows matching reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#e3e7fb]/70 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-[460px] w-[460px] rounded-full bg-[#dfe5fa]/80 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
