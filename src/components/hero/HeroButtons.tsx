import { ArrowRight, Play } from "lucide-react";

function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      {/* Primary CTA. */}
      <a
        href="#contact"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 sm:w-auto"
      >
        Get Started
        <ArrowRight size={17} />
      </a>

      {/* Secondary CTA. */}
      <a
        href="#features"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
      >
        <Play size={16} />
        Watch Demo
      </a>
    </div>
  );
}

export default HeroButtons;