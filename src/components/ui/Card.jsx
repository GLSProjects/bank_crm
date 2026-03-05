export default function Card({ title, children }) {
  return (
    <div className="bg-white border rounded p-4 shadow-sm">
      <h3 className="text-md font-medium mb-4">{title}</h3>
      {children}
    </div>
  );
}