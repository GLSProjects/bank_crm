import { useState } from 'react';
import RiskCard from '../components/risk/RiskCard';
import RiskTable from '../components/risk/RiskTable';
import RiskChart from '../components/risk/RiskChart';
import RiskModal from '../components/risk/RiskModal';
import { DollarSign, Users, AlertTriangle, Shield } from 'lucide-react';

// Dummy data
const customers = [
  {
    customerId: 'CUST001',
    customerName: 'John Doe',
    accountNumber: 'ACC123456789',
    loanAmount: 500000,
    creditScore: 750,
    riskLevel: 'Low',
    lastPaymentDate: '2024-01-15'
  },
  {
    customerId: 'CUST002',
    customerName: 'Jane Smith',
    accountNumber: 'ACC123456790',
    loanAmount: 750000,
    creditScore: 680,
    riskLevel: 'Medium',
    lastPaymentDate: '2024-01-10'
  },
  {
    customerId: 'CUST003',
    customerName: 'Bob Johnson',
    accountNumber: 'ACC123456791',
    loanAmount: 300000,
    creditScore: 620,
    riskLevel: 'High',
    lastPaymentDate: '2024-01-05'
  },
  {
    customerId: 'CUST004',
    customerName: 'Alice Brown',
    accountNumber: 'ACC123456792',
    loanAmount: 1000000,
    creditScore: 720,
    riskLevel: 'Low',
    lastPaymentDate: '2024-01-20'
  },
  {
    customerId: 'CUST005',
    customerName: 'Charlie Wilson',
    accountNumber: 'ACC123456793',
    loanAmount: 450000,
    creditScore: 650,
    riskLevel: 'Medium',
    lastPaymentDate: '2024-01-12'
  }
];

export default function Risk() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate statistics
  const totalLoans = customers.reduce((sum, customer) => sum + customer.loanAmount, 0);
  const lowRiskCount = customers.filter(c => c.riskLevel === 'Low').length;
  const mediumRiskCount = customers.filter(c => c.riskLevel === 'Medium').length;
  const highRiskCount = customers.filter(c => c.riskLevel === 'High').length;

  // Chart data
  const chartData = [
    { name: 'Low Risk', value: lowRiskCount },
    { name: 'Medium Risk', value: mediumRiskCount },
    { name: 'High Risk', value: highRiskCount }
  ];

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Risk Management</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RiskCard
          title="Total Loans"
          value={`₹${totalLoans.toLocaleString()}`}
          Icon={DollarSign}
          color="border-l-blue-500"
        />
        <RiskCard
          title="Low Risk Customers"
          value={lowRiskCount}
          Icon={Shield}
          color="border-l-green-500"
        />
        <RiskCard
          title="Medium Risk Customers"
          value={mediumRiskCount}
          Icon={Users}
          color="border-l-yellow-500"
        />
        <RiskCard
          title="High Risk Customers"
          value={highRiskCount}
          Icon={AlertTriangle}
          color="border-l-red-500"
        />
      </div>

      {/* Chart and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RiskChart data={chartData} />
        </div>
        <div className="lg:col-span-2">
          <RiskTable customers={customers} onViewCustomer={handleViewCustomer} />
        </div>
      </div>

      {/* Modal */}
      <RiskModal
        customer={selectedCustomer}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}