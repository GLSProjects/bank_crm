import { X, User, CreditCard, TrendingUp, Calendar, AlertTriangle } from 'lucide-react';

export default function RiskModal({ customer, isOpen, onClose }) {
  if (!isOpen || !customer) return null;

  const getRiskColor = (level) => {
    switch (level) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Risk Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Customer Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Customer ID</p>
                <p className="font-medium">{customer.customerId}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Customer Name</p>
                <p className="font-medium">{customer.customerName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="font-medium">{customer.accountNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Credit Score</p>
                <p className="font-medium">{customer.creditScore}</p>
              </div>
            </div>
          </div>

          {/* Loan Details */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Loan Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Loan Amount</p>
                <p className="font-medium text-lg">₹{customer.loanAmount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Risk Level</p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(customer.riskLevel)}`}>
                  {customer.riskLevel} Risk
                </span>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Payment History</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">Last Payment</span>
                </div>
                <span className="font-medium">{customer.lastPaymentDate}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">Payment Status</span>
                </div>
                <span className="font-medium text-green-600">On Time</span>
              </div>
            </div>
          </div>

          {/* Risk Prediction */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Risk Prediction</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                Based on current credit score and payment history, this customer has a {customer.riskLevel.toLowerCase()} risk profile.
                Regular monitoring is recommended.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}