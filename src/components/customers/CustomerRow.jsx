import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export default function CustomerRow({ customer, onView, onEdit, onDelete }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {customer.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {customer.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {customer.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {customer.phone}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          customer.accountType === 'Saving'
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {customer.accountType}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ${customer.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          customer.status === 'Active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {customer.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onView(customer)}
            className="text-blue-600 hover:text-blue-900 p-1 rounded"
            title="View Customer"
          >
            <FaEye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onEdit(customer)}
            className="text-yellow-600 hover:text-yellow-900 p-1 rounded"
            title="Edit Customer"
          >
            <FaEdit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(customer.id)}
            className="text-red-600 hover:text-red-900 p-1 rounded"
            title="Delete Customer"
          >
            <FaTrash className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}