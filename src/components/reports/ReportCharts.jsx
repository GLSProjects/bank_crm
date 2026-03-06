import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const monthlyTransactions = [
  { month: "Jan", transactions: 1200 },
  { month: "Feb", transactions: 1500 },
  { month: "Mar", transactions: 1800 },
  { month: "Apr", transactions: 1600 },
  { month: "May", transactions: 2000 },
  { month: "Jun", transactions: 2200 }
];

const customerGrowth = [
  { month: "Jan", customers: 100 },
  { month: "Feb", customers: 120 },
  { month: "Mar", customers: 150 },
  { month: "Apr", customers: 180 },
  { month: "May", customers: 200 },
  { month: "Jun", customers: 250 }
];

const loanDistribution = [
  { name: "Personal Loans", amount: 500000 },
  { name: "Home Loans", amount: 1000000 },
  { name: "Car Loans", amount: 750000 },
  { name: "Business Loans", amount: 750000 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Monthly Transactions Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Monthly Transactions</h3>
        <BarChart width={400} height={300} data={monthlyTransactions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="transactions" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Customer Growth Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Customer Growth</h3>
        <BarChart width={400} height={300} data={customerGrowth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="customers" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* Loan Distribution Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 col-span-1 lg:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Loan Distribution</h3>
        <div className="flex justify-center">
          <PieChart width={400} height={300}>
            <Pie
              data={loanDistribution}
              cx={200}
              cy={150}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="amount"
            >
              {loanDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default ReportCharts;