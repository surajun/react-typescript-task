function HeaderButtons() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      {/* Secondary action. */}
      <a
        href="#login"
        className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Login
      </a>

      {/* Primary action to encourage users to get started. */}
      <a
        href="#contact"
        className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
      >
        Get Started
      </a>
    </div>
  );
}

export default HeaderButtons;