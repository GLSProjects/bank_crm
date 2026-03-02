import { FaBars, FaSearch, FaMoon } from "react-icons/fa";

export default function Header({ onToggleSidebar }) {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Sidebar Toggle */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FaBars className="w-5 h-5 text-gray-600" />
        </button>

        {/* Search */}
        <div className="relative w-80">
          <FaSearch className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search or type command..."
            className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Dark Mode Button */}
        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <FaMoon className="w-5 h-5 text-gray-600" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold">
            K
          </div>
          <span className="text-sm font-medium text-gray-700">
            Kaushik
          </span>
        </div>
      </div>
    </div>
  );
}