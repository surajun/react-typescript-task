import type { NavItemData } from "../../../types/global";

interface MobileMenuProps {
  items: NavItemData[];
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({
  items,
  isOpen,
  onClose,
}: MobileMenuProps) {
  // Don't render anything when the menu is closed.
  if (!isOpen) {
    return null;
  }
  // Mobile menu container; hidden on medium and larger screens
  return (
    <div className="border-t border-slate-200 bg-white px-4 py-5 md:hidden">
      <nav className="flex flex-col gap-4">

        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-sm font-medium text-slate-700 hover:text-indigo-600"
          >
            {item.label}
          </a>
        ))}
        // mobile version

        <div className="flex flex-col gap-3 pt-3">
          <a
            href="#login"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700"
          >
            Login
          </a>

          <a
            href="#contact"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;