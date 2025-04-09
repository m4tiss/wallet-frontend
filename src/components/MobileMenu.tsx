import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../data/SidebarItems";
import { Settings, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const MobileMenu = () => {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-around py-2 xl:hidden z-50">
      {sidebarItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="flex flex-1 flex-col items-center justify-center text-xs"
        >
          <item.icon
            size={24}
            className={
              location.pathname === item.path ? "text-(--color-mobileMenu)" : ""
            }
          />
          <span>{item.title}</span>
        </Link>
      ))}
      <Link
        to="/settings"
        className="flex flex-1 flex-col items-center justify-center text-xs"
      >
        <Settings
          size={24}
          className={
            location.pathname === "/settings" ? "text-(--color-mobileMenu)" : ""
          }
        />
        <span>Ustawienia</span>
      </Link>
      <Link
        onClick={logout}
        to="/login"
        className="flex flex-1 flex-col items-center justify-center text-xs"
      >
        <LogOut
          size={24}
        />
        <span>Wyloguj</span>
      </Link>
    </nav>
  );
};

export default MobileMenu;
