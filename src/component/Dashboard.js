import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 40000 },
  { month: "Feb", revenue: 30000 },
  { month: "Mar", revenue: 50000 },
  { month: "Apr", revenue: 70000 },
  { month: "May", revenue: 60000 },
];

const loanStatusData = [
  { name: "Approved", value: 400 },
  { name: "Pending", value: 200 },
  { name: "Rejected", value: 100 },
];

const COLORS = ["#4CAF50", "#FFC107", "#F44336"];

function Dashboard() {
  return (
    <div style={{ padding: "20px", background: "#f4f6f9", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "20px" }}>Bank CRM Dashboard</h2>

      {/* KPI Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <Card title="Total Customers" value="1,245" />
        <Card title="Active Loans" value="540" />
        <Card title="Monthly Revenue" value="₹7,50,000" />
        <Card title="Pending Approvals" value="32" />
      </div>

      {/* Charts Section */}
      <div style={{ display: "flex", gap: "30px" }}>
        {/* Revenue Chart */}
        <div style={chartBox}>
          <h4>Monthly Revenue</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#1976D2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Loan Status Pie Chart */}
        <div style={chartBox}>
          <h4>Loan Status</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={loanStatusData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                {loanStatusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div style={{ marginTop: "40px", background: "#fff", padding: "20px", borderRadius: "10px" }}>
        <h4>Recent Transactions</h4>
        <table style={{ width: "100%", marginTop: "15px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#1976D2", color: "#fff" }}>
              <th style={th}>Transaction ID</th>
              <th style={th}>Customer</th>
              <th style={th}>Amount</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>TXN001</td>
              <td style={td}>Rahul Patel</td>
              <td style={td}>₹50,000</td>
              <td style={{ ...td, color: "green" }}>Completed</td>
            </tr>
            <tr>
              <td style={td}>TXN002</td>
              <td style={td}>Anjali Shah</td>
              <td style={td}>₹1,20,000</td>
              <td style={{ ...td, color: "orange" }}>Pending</td>
            </tr>
            <tr>
              <td style={td}>TXN003</td>
              <td style={td}>Amit Kumar</td>
              <td style={td}>₹75,000</td>
              <td style={{ ...td, color: "red" }}>Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Card = ({ title, value }) => (
  <div
    style={{
      flex: 1,
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    }}
  >
    <h4>{title}</h4>
    <h2 style={{ marginTop: "10px", color: "#1976D2" }}>{value}</h2>
  </div>
);

const chartBox = {
  flex: 1,
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const th = {
  padding: "10px",
  textAlign: "left",
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

export default Dashboard;