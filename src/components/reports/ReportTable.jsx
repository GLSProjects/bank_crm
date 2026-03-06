import { FaEye, FaDownload, FaFileExport } from "react-icons/fa";

const dummyReports = [
  {
    id: "RPT001",
    customerName: "John Doe",
    accountNumber: "1234567890",
    transactionType: "Deposit",
    amount: 5000,
    date: "2023-10-01",
    status: "Completed"
  },
  {
    id: "RPT002",
    customerName: "Jane Smith",
    accountNumber: "0987654321",
    transactionType: "Withdrawal",
    amount: 2000,
    date: "2023-10-02",
    status: "Completed"
  },
  {
    id: "RPT003",
    customerName: "Bob Johnson",
    accountNumber: "1122334455",
    transactionType: "Transfer",
    amount: 15000,
    date: "2023-10-03",
    status: "Pending"
  },
  {
    id: "RPT004",
    customerName: "Alice Brown",
    accountNumber: "5566778899",
    transactionType: "Loan Payment",
    amount: 3000,
    date: "2023-10-04",
    status: "Completed"
  },
  {
    id: "RPT005",
    customerName: "Charlie Wilson",
    accountNumber: "9988776655",
    transactionType: "Deposit",
    amount: 7500,
    date: "2023-10-05",
    status: "Failed"
  }
];

const ReportTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Reports Data</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dummyReports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {report.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.accountNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.transactionType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${report.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <FaEye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <FaDownload className="w-4 h-4" />
                    </button>
                    <button className="text-purple-600 hover:text-purple-900">
                      <FaFileExport className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;