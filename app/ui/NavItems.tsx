import { useActiveSection } from "../hooks/useActiveSection";
import { navItems, type NavItem } from "../lib/NavItems";

function NavItems() {
  const activeSection = useActiveSection();

  return (
    <nav>
      <ul>
        {navItems.map((item: NavItem) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id} className="mb-4">
              <a
                href={`#${item.id}`}
                className="group flex items-center gap-3 text-sm font-medium"
              >
                {/* Line */}
                <span
                  className={`
                    h-px bg-gray-400 dark:bg-gray-600
                    transition-all duration-300
                    ${isActive ? "w-12" : "w-6"}
                  `}
                />

                {/* Text */}
                <span
                  className={`
                    transition-colors
                    ${
                      isActive
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }
                  `}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavItems;
