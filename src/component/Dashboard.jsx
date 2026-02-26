import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

/* ================= ORIGINAL DATA ================= */

const monthlyLoanData = [
  { month: "Jan", disbursed: 400, predicted: 420, revenue: 120 },
  { month: "Feb", disbursed: 650, predicted: 690, revenue: 180 },
  { month: "Mar", disbursed: 800, predicted: 860, revenue: 240 },
  { month: "Apr", disbursed: 720, predicted: 790, revenue: 210 },
  { month: "May", disbursed: 950, predicted: 1020, revenue: 310 },
  { month: "Jun", disbursed: 1100, predicted: 1180, revenue: 350 },
  { month: "Jul", disbursed: 1250, predicted: 1320, revenue: 400 },
  { month: "Aug", disbursed: 1180, predicted: 1260, revenue: 360 },
  { month: "Sep", disbursed: 1350, predicted: 1420, revenue: 420 },
  { month: "Oct", disbursed: 1500, predicted: 1600, revenue: 480 },
  { month: "Nov", disbursed: 1620, predicted: 1720, revenue: 520 },
  { month: "Dec", disbursed: 1800, predicted: 1950, revenue: 600 },
];

const branchPerformance = [
  { branch: "Mumbai", loans: 1200 },
  { branch: "Delhi", loans: 980 },
  { branch: "Bangalore", loans: 850 },
  { branch: "Chennai", loans: 730 },
  { branch: "Ahmedabad", loans: 620 },
];

const riskData = [{ name: "Risk Score", value: 72, fill: "#0ea5e9" }];
const COLORS = ["#0ea5e9", "#38bdf8", "#7dd3fc"];

/* ================= CRM MODULES ================= */

const crmModules = [
  { name: "Customer Management", icon: "👤", submenu: ["Customer Profile", "KYC Verification", "Customer 360 View"] },
  { name: "Lead Management", icon: "🎯", submenu: ["New Leads", "Lead Scoring", "Conversion Funnel"] },
  { name: "Loan Management", icon: "💳", submenu: ["Loan Applications", "Approval Workflow", "Disbursement"] },
  { name: "Risk Management", icon: "⚠️", submenu: ["Credit Scoring", "Fraud Detection", "NPA Monitoring"] },
  { name: "Analytics & Reporting", icon: "📊", submenu: ["Branch Analytics", "Revenue Reports", "Forecasting"] },
  { name: "Service & Case Management", icon: "🛎️", submenu: ["Customer Complaints", "Ticket Tracking", "Resolution SLA"] },
  { name: "Marketing Automation", icon: "📢", submenu: ["Campaigns", "Email Marketing", "SMS Alerts"] },
  { name: "Compliance & Audit", icon: "📑", submenu: ["Audit Logs", "Regulatory Reports", "Internal Controls"] },
];

/* ================= COMPONENT ================= */

export default function PremiumBankDashboard() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-sky-50">

      {/* SIDEBAR */}
      <div className={`${collapsed ? "w-20" : "w-72"} bg-white shadow-lg p-4 fixed h-screen border-r border-sky-100 transition-all duration-300`}>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {!collapsed && (
            <h1 className="text-xl font-bold text-sky-600">
              🏦 Smart Bank CRM
            </h1>
          )}

          {/* Collapse Toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-sky-600 text-lg font-bold"
          >
            {collapsed ? "➡" : "⬅"}
          </button>
        </div>

        {/* Modules */}
        <div className="space-y-2">
          {crmModules.map((module, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setOpenIndex(openIndex === index ? null : index); // auto close others
                  setActiveModule(index);
                }}
                className={`w-full flex justify-between items-center px-3 py-3 rounded-lg transition-all duration-300
                  ${activeModule === index ? "bg-sky-600 text-white" : "bg-sky-100 text-sky-700 hover:bg-sky-200"}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{module.icon}</span>
                  {!collapsed && <span>{module.name}</span>}
                </div>

                {!collapsed && (
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Submenu */}
              {!collapsed && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="ml-10 space-y-1 text-sm">
                    {module.submenu.map((item, i) => (
                      <div
                        key={i}
                        className="px-2 py-2 rounded-md hover:bg-sky-50 cursor-pointer text-sky-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={`${collapsed ? "ml-20" : "ml-72"} flex-1 overflow-y-auto p-8 transition-all duration-300`}>
        <h2 className="text-3xl font-bold text-sky-700 mb-8">
          Executive Dashboard
        </h2>

        {/* KPI GRID */}
        <div className="grid grid-cols-5 gap-6 mb-10">
          <KPI title="Total Customers" value="82,450" />
          <KPI title="Active Loans" value="12,320" />
          <KPI title="Portfolio Value" value="₹240 Cr" />
          <KPI title="NPA Ratio" value="1.8%" />
          <KPI title="Growth Forecast" value="+14%" />
        </div>

        {/* CHART GRID */}
        <div className="grid grid-cols-2 gap-6">
          <Card title="Loan vs Prediction vs Revenue">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={monthlyLoanData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                <XAxis dataKey="month" stroke="#0284c7" />
                <YAxis stroke="#0284c7" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="disbursed" stroke="#0ea5e9" />
                <Line type="monotone" dataKey="predicted" stroke="#38bdf8" strokeDasharray="4 4" />
                <Line type="monotone" dataKey="revenue" stroke="#7dd3fc" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Top 5 Branch Performance">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={branchPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                <XAxis dataKey="branch" stroke="#0284c7" />
                <YAxis stroke="#0284c7" />
                <Tooltip />
                <Bar dataKey="loans" fill="#0ea5e9" barSize={18} radius={[10,10,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function KPI({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-sky-100">
      <h3 className="text-sky-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-sky-700 mt-2">{value}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-sky-100">
      <h3 className="font-semibold text-sky-700 mb-4">{title}</h3>
      {children}
    </div>
  );
}