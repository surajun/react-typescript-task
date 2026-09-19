import type { NavItemData } from "../../../types/global";

interface NavItemProps {
  item: NavItemData;
}

function NavItem({ item }: NavItemProps) {
  return (
    <a
      href={item.href}
      className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
    >
      {item.label}
    </a>
  );
}

export default NavItem;

//NavItemData
//item = { label, href }
//NavItem receives item
//href → decides where the link goes
// label → decides what text is displayed