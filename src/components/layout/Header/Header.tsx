import { Menu, X } from "lucide-react";
import { useState } from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";
import MobileMenu from "./MobileMenu";
import type { NavItemData } from "../../../types/global";

function Header() {
  // Controls whether the mobile navigation is visible.
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  // Navigation data is kept separate from the UI.
  const navItems: NavItemData[] = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left side: logo. */}
        <Logo />

        {/* Desktop navigation. */}
        <Navigation items={navItems} />

        {/* Desktop Login + Get Started buttons. */}
        <HeaderButtons />

        {/* Mobile menu toggle. */}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() =>
            setIsMobileMenuOpen((current) => !current)
          }
          aria-label={
            isMobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile navigation is shown only when open. */}
      <MobileMenu
        items={navItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;