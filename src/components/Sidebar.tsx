import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import SidebarTile from "./SidebarTile";
import { sidebarItems } from "../data/SidebarItems";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center w-1/6 h-screen py-10 px-8">
      <div className="flex flex-col items-center gap-10 w-full">
        <ProfileCard />
        <ul className="w-full">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="w-full">
                <SidebarTile
                  icon={<item.icon size={30} />}
                  title={item.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
