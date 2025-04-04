import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../data/SidebarItems";
import { Settings } from "lucide-react";

const MobileMenu = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-around py-2 xl:hidden z-50">
      {sidebarItems.map((item) => (
        <Link key={item.path} to={item.path} className="flex flex-1 flex-col items-center justify-center text-xs">
          <item.icon size={24} className={location.pathname === item.path ? "text-blue-500" : ""} />
          <span>{item.title}</span>
        </Link>
      ))}
      <Link to="/settings" className="flex flex-1 flex-col items-center justify-center text-xs">
        <Settings size={24} className={location.pathname === "/settings" ? "text-blue-500" : ""} />
        <span>Settings</span>
      </Link>
    </nav>
  );
};

export default MobileMenu;
