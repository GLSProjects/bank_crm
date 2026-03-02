import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", disbursed: 400 },
  { month: "Feb", disbursed: 650 },
  { month: "Mar", disbursed: 800 },
  { month: "Apr", disbursed: 720 },
  { month: "May", disbursed: 950 },
  { month: "Jun", disbursed: 1100 },
];

export default function LoanChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="disbursed" stroke="#2563eb" />
      </LineChart>
    </ResponsiveContainer>
  );
}