import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../utils/Navigation";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-blue-600">GSB-CRM</h2>
      </div>

      <ul className="p-2 space-y-1">
        {sidebarMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block p-3 rounded text-sm ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100"
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}