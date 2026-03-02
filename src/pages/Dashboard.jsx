// import KPI from "../components/dashboard/KPI";
// import Card from "../components/ui/Card";
// import LoanChart from "../components/dashboard/LoanChart";
// import BranchChart from "../components/dashboard/BranchChart";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* <KPI title="Total Customers" value="82,450" /> */}
        {/* <KPI title="Active Loans" value="12,320" /> */}
        {/* <KPI title="Portfolio Value" value="₹240 Cr" /> */}
        {/* <KPI title="NPA Ratio" value="1.8%" /> */}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* <Card title="Monthly Loan Disbursement"> */}
          {/* <LoanChart /> */}
        {/* </Card> */}

        {/* <Card title="Branch Performance"> */}
          {/* <BranchChart /> */}
        {/* </Card> */}
      </div>
    </>
  );
}