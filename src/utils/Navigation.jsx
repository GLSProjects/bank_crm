import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaChartBar,
  FaUserShield,
  FaKey
} from "react-icons/fa";

export const sidebarMenu = [
  { title: "Dashboard", path: "/", icon: FaTachometerAlt },
  { title: "Customers", path: "/customers", icon: FaUsers },
  { title: "Leads", path: "/leads", icon: FaUserTie },
  { title: "Loans", path: "/loans", icon: FaMoneyBillWave },
  { title: "Risk", path: "/risk", icon: FaExclamationTriangle },
  { title: "Reports", path: "/reports", icon: FaChartBar },
  { title: "Admin Users", path: "/admin/users", icon: FaUserShield },
  { title: "Roles", path: "/admin/roles", icon: FaKey },
];