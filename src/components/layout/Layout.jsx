import { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300">

        <Header onToggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold">
            Welcome to Dashboard
          </h1>
        </main>

      </div>
    </div>
  );
}