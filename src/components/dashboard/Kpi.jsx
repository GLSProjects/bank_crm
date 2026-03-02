export default function KPI({ title, value }) {
  return (
    <div className="bg-white border p-4 rounded shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-semibold mt-2">{value}</h3>
    </div>
  );
}