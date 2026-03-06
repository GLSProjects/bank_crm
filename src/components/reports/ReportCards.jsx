import { FaUsers, FaCreditCard, FaExchangeAlt, FaMoneyBillWave } from "react-icons/fa";

const ReportCards = () => {
  const cards = [
    {
      title: "Total Customers",
      value: "1,250",
      icon: FaUsers,
      color: "bg-blue-500"
    },
    {
      title: "Total Accounts",
      value: "3,450",
      icon: FaCreditCard,
      color: "bg-green-500"
    },
    {
      title: "Total Transactions",
      value: "15,678",
      icon: FaExchangeAlt,
      color: "bg-purple-500"
    },
    {
      title: "Total Loan Amount",
      value: "$2,500,000",
      icon: FaMoneyBillWave,
      color: "bg-red-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className={`${card.color} text-white p-3 rounded-full`}>
              <card.icon className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{card.title}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportCards;