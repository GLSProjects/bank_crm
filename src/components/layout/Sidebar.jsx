import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../utils/Navigation";
import { FaUniversity } from "react-icons/fa";

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-white border-r transition-all duration-300 
      ${isOpen ? "w-64" : "w-20"} 
      h-screen`}
    >
      {/* Logo Section */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-3 justify-center">
          
          {/* Logo Icon */}
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white 
                          flex items-center justify-center shadow-md">
            <FaUniversity className="text-lg" />
          </div>

          {/* Hide text when collapsed */}
          {isOpen && (
            <h2 className="text-base font-bold text-gray-800">
              Global Bank CRM
            </h2>
          )}
        </div>
      </div>

      {/* Menu */}
      <ul className="p-2 space-y-1">
        {sidebarMenu.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center ${
                    isOpen ? "justify-start px-3" : "justify-center"
                  } gap-3 p-3 rounded text-sm transition ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                <Icon className="text-lg" />

                {/* Hide title when collapsed */}
                {isOpen && <span>{item.title}</span>}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}