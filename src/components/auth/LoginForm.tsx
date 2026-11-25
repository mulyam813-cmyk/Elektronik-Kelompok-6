"use client";

import { useState, type FormEvent } from "react";
import { MegaMulyaLogo } from "./MegaMulyaLogo";

type DemoRole = "kasir" | "admin";

interface DemoAccount {
  role: DemoRole;
  label: string;
  username: string;
  password: string;
}

const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    role: "kasir",
    label: "Kasir",
    username: "kasir_mega",
    password: "password123",
  },
  {
    role: "admin",
    label: "Admin",
    username: "admin_mega",
    password: "password123",
  },
];

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<DemoRole | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "error" | "success" | "info";
    text: string;
  } | null>(null);

  const handleQuickDemo = (account: DemoAccount) => {
    setUsername(account.username);
    setPassword(account.password);
    setSelectedDemo(account.role);
    setStatusMessage(null);
  };

  const handleForgotPassword = () => {
    setStatusMessage({
      type: "info",
      text: "Silakan hubungi Admin Mega Mulya Elektronik untuk reset password akun Anda.",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!username.trim() || !password.trim()) {
      setStatusMessage({
        type: "error",
        text: "Username dan password wajib diisi.",
      });
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: "success",
        text: `Berhasil masuk sebagai "${username.trim()}" (Mode Demo).`,
      });
    }, 500);
  };

  return (
    <div className="w-full max-w-[392px] rounded-2xl border border-white/80 bg-white px-7 pb-7 pt-8 shadow-[0_14px_45px_-12px_rgba(24,39,75,0.10)] sm:px-8">
      {/* Header / Brand */}
      <div className="text-center">
        <MegaMulyaLogo />
        <h1 className="mt-4 text-[21px] font-bold tracking-tight text-[#0f2240]">
          Mega Mulya Elektronik
        </h1>
        <p className="mt-1 text-[12.5px] font-medium text-slate-500">
          Sistem Informasi Toko Elektronik
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="mb-1.5 block text-[12px] font-semibold text-[#1e293b]"
          >
            Username
          </label>
          <div className="relative flex items-center">
            <span className="pointer-events-none absolute left-3.5 text-slate-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setSelectedDemo(null);
              }}
              placeholder="Masukkan username (contoh: kasir1 / admin)"
              className="h-[42px] w-full rounded-lg border border-transparent bg-[#eef1f8] pl-10 pr-3.5 text-[13px] text-slate-800 placeholder:text-slate-400 transition-all focus:border-[#0b5cc5]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0b5cc5]/15"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-[12px] font-semibold text-[#1e293b]"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <span className="pointer-events-none absolute left-3.5 text-slate-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-[42px] w-full rounded-lg border border-transparent bg-[#eef1f8] pl-10 pr-10 text-[13px] text-slate-800 placeholder:tracking-widest placeholder:text-slate-400 transition-all focus:border-[#0b5cc5]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0b5cc5]/15"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={
                showPassword ? "Sembunyikan password" : "Tampilkan password"
              }
              className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-700"
            >
              {showPassword ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-0.5">
          <label className="inline-flex cursor-pointer items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-3.5 w-3.5 cursor-pointer rounded border-slate-300 text-[#0b5cc5] accent-[#0b5cc5] focus:ring-[#0b5cc5]"
            />
            <span className="text-[12px] text-slate-600">Ingat Saya</span>
          </label>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-[12px] font-semibold text-[#0b5cc5] transition-colors hover:text-[#08479c] hover:underline"
          >
            Lupa Password?
          </button>
        </div>

        {/* Status feedback */}
        {statusMessage && (
          <div
            role="status"
            className={`rounded-lg px-3 py-2 text-[12px] font-medium ${
              statusMessage.type === "error"
                ? "bg-red-50 text-red-700 ring-1 ring-red-200/70"
                : statusMessage.type === "success"
                  ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/70"
                  : "bg-blue-50 text-[#0b5cc5] ring-1 ring-blue-200/70"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0b5cc5] text-[13.5px] font-semibold text-white shadow-[0_6px_16px_-4px_rgba(11,92,197,0.45)] transition-all hover:bg-[#094ea8] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>{isSubmitting ? "Memproses..." : "Masuk ke Sistem"}</span>
          {!isSubmitting && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          )}
        </button>
      </form>

      {/* Akses Cepat (Demo Mode) */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-[#f5f7fc] p-3.5">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-500"
              aria-hidden="true"
            >
              <circle cx="7.5" cy="15.5" r="5.5" />
              <path d="m21 2-9.6 9.6" />
              <path d="m15.5 7.5 3 3L22 7l-3-3" />
            </svg>
            <span>Akses Cepat (Demo Mode)</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">v2.4</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {DEMO_ACCOUNTS.map((account) => {
            const isSelected = selectedDemo === account.role;
            return (
              <button
                key={account.role}
                type="button"
                onClick={() => handleQuickDemo(account)}
                className={`group flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-all ${
                  isSelected
                    ? "border-[#0b5cc5]/50 bg-blue-50/40 ring-1 ring-[#0b5cc5]/20"
                    : "border-slate-200/75 bg-white hover:border-[#0b5cc5]/35 hover:bg-blue-50/20"
                }`}
              >
                <div className="min-w-0">
                  <p className="text-[12px] font-bold leading-tight text-slate-800">
                    {account.label}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[10.5px] text-slate-400">
                    {account.username}
                  </p>
                </div>
                <span className="ml-2 shrink-0 text-slate-400 transition-colors group-hover:text-[#0b5cc5]">
                  {account.role === "kasir" ? (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal Status */}
      <div className="mt-5 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 font-mono font-medium text-slate-600">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Terminal Online</span>
        </div>
        <span className="font-mono tracking-wide text-slate-400">
          POS-STATION-01
        </span>
      </div>

      {/* Copyright */}
      <p className="mt-5 text-center text-[10.5px] text-slate-400">
        &copy; 2026 Mega Mulya Elektronik &bull; Hak Cipta Dilindungi
      </p>
    </div>
  );
}
