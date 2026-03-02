export default function Header() {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">
        Bank CRM Dashboard
      </h1>

      <div className="text-sm text-gray-600">
        Welcome, Admin
      </div>
    </div>
  );
}