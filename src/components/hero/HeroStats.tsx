import type { HeroStat } from "../../types/global";

function HeroStats() {
  const stats: HeroStat[] = [
    {
      label: "Customers",
      value: "10K+",
      description: "Teams growing with us",
    },
    {
      label: "Messages",
      value: "2.4M+",
      description: "Conversations handled",
    },
    {
      label: "Automation",
      value: "32K+",
      description: "Tasks automated",
    },
    {
      label: "Uptime",
      value: "99.9%",
      description: "Reliable platform",
    },
  ];

  return (
    <div
      id="features"
      className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-sm font-medium text-slate-500">
            {stat.label}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-950">
            {stat.value}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {stat.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export default HeroStats;