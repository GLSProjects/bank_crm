import { FaBars, FaSearch, FaMoon, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header({ onToggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens here
    navigate('/login');
  };

  return (
    <div className={`h-16 bg-white border-b flex items-center justify-between px-6 ${isAuthPage ? 'relative z-50' : ''}`}>

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Sidebar Toggle */}
        {!isAuthPage && (
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FaBars className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {/* Search */}
        {!isAuthPage && (
          <div className="relative w-80 shadow-sm rounded-lg">
            <FaSearch className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search or type command..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Dark Mode Button */}
        <button className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-500 hover:text-gray-700">
          <FaMoon className="w-5 h-5" />
        </button>

        {/* Profile / Auth */}
        {isAuthPage ? (
          <div className="flex items-center gap-3">
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center gap-2 cursor-pointer p-1 rounded-lg hover:bg-gray-50 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                U
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                User
              </span>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 transform opacity-100 scale-100 transition-all duration-200 origin-top-right">
                <div className="px-4 py-3 border-b border-gray-50">
                  <p className="text-sm font-medium text-gray-900">Signed in as</p>
                  <p className="text-sm text-gray-500 truncate">user@example.com</p>
                </div>
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                  >
                    <FaSignOutAlt className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}