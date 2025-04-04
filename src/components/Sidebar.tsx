import { Link } from "react-router-dom"; // Link, jeśli używasz React Router do nawigacji
import ProfileCard from "./ProfileCard";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/6 h-screen p-10">
        <ProfileCard/>
      <h2 className="text-center">Sidebar</h2>
      <ul>
        <li>
          <Link to="/" className="blockhover:bg-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block hover:bg-gray-700">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block  hover:bg-gray-700">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
