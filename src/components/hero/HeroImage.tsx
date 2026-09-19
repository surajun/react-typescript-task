import dashboardImage from "../../assets/hero-dashboard.png";

function HeroImage() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl">
      {/* Soft glow behind the dashboard image. */}
      <div className="absolute inset-x-10 top-10 -z-10 h-40 rounded-full bg-indigo-200/40 blur-3xl" />

      {/* Dashboard preview supplied with the assignment. */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
        <img
          src={dashboardImage}
          alt="Dashboard preview"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

export default HeroImage;