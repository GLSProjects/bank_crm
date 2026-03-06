import ReportCards from "../components/reports/ReportCards";
import ReportFilters from "../components/reports/ReportFilters";
import ReportTable from "../components/reports/ReportTable";
import ReportCharts from "../components/reports/ReportCharts";

export default function Reports() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="text-gray-600 mt-1">Comprehensive reports and analytics for bank operations</p>
      </div>

      <ReportCards />

      <ReportFilters />

      <ReportTable />

      <ReportCharts />
    </>
  );
}