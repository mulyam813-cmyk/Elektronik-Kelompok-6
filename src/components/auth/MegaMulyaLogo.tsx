export function MegaMulyaLogo() {
  return (
    <div className="mx-auto flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#edf1f7] ring-1 ring-slate-200/70">
      <svg
        width="26"
        height="26"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="14" stroke="#163c72" strokeWidth="2.2" />
        <path
          d="M11 22V14L18 19.5L25 14V22"
          stroke="#0b5cc5"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="11.5" r="1.8" fill="#163c72" />
      </svg>
      <span className="mt-0.5 text-[5.5px] font-extrabold leading-none tracking-[0.06em] text-[#163c72]">
        MEGA MULYA
      </span>
      <span className="text-[4.5px] font-semibold leading-tight tracking-[0.08em] text-slate-500">
        ELEKTRONIK
      </span>
    </div>
  );
}
