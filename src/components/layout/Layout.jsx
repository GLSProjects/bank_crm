import { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300 overflow-hidden">

        <Header onToggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}