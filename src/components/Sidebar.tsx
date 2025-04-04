import React from "react";
import { Link } from "react-router-dom"; // Link, jeśli używasz React Router do nawigacji

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/6 lg:w-1/6 xl:w-1/6 h-screen fixed">
      <h2 className="p-4 text-center">Sidebar</h2>
      <ul>
        <li>
          <Link to="/" className="block p-4 hover:bg-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block p-4 hover:bg-gray-700">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block p-4 hover:bg-gray-700">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
