import { Link, useLocation } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import SidebarTile from "./SidebarTile";
import { Settings } from "lucide-react";
import { sidebarItems } from "../data/SidebarItems";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden xl:flex flex-col items-center w-1/6 h-screen justify-between py-10 px-8">
      <div className="flex flex-col items-center gap-10 w-full">
        <ProfileCard />
        <ul className="w-full">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="w-full">
                <SidebarTile
                  icon={<item.icon size={30} />}
                  title={item.title}
                  isClicked={location.pathname === item.path}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <Link to="/settings" className="w-full">
          <SidebarTile
            icon={<Settings size={30} />}
            title={"Settings"}
            isClicked={location.pathname === '/settings'}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
