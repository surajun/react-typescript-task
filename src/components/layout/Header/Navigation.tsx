import type { NavItemData } from "../../../types/global";
import NavItem from "./NavItem";

// Define the props that Navigation will receive
interface NavigationProps {
  items: NavItemData[];
}

function Navigation({ items }: NavigationProps) {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {/* Reuse NavItem for every navigation link. */}
      {items.map((item) => (
        <NavItem
          key={item.label}
          item={item}
        />
      ))}
    </nav>
  );
}

export default Navigation;