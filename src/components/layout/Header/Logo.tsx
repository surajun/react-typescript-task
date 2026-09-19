import { MessageSquare } from "lucide-react";

function Logo() {
  return (
 // Clicking the logo takes the user to the home page
    <a
      href="/"
      className="flex items-center gap-2"
      aria-label="Home"
    >
      {/* Purple icon representing the company logo. */}
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-200">
        <MessageSquare size={20} />
      </span>

      {/* Company name. */}
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Connectly
      </span>
    </a>
  );
}
// Export Logo so it can be used inside other components like Header
export default Logo;