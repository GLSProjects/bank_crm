import { useState } from 'react';
import { FaSearch, FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import CustomerTable from '../components/customers/CustomerTable';
import AddCustomerModal from '../components/customers/AddCustomerModal';

const dummyCustomers = [
  {
    id: 'C001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-0123',
    address: '123 Main St, New York, NY 10001',
    accountType: 'Saving',
    balance: 5000.00,
    status: 'Active'
  },
  {
    id: 'C002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1-555-0124',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    accountType: 'Current',
    balance: 12000.50,
    status: 'Active'
  },
  {
    id: 'C003',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    phone: '+1-555-0125',
    address: '789 Pine Rd, Chicago, IL 60601',
    accountType: 'Saving',
    balance: 7500.25,
    status: 'Inactive'
  },
  {
    id: 'C004',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    phone: '+1-555-0126',
    address: '321 Elm St, Houston, TX 77001',
    accountType: 'Current',
    balance: 15000.00,
    status: 'Active'
  },
  {
    id: 'C005',
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    phone: '+1-555-0127',
    address: '654 Maple Dr, Phoenix, AZ 85001',
    accountType: 'Saving',
    balance: 3200.75,
    status: 'Active'
  }
];

export default function Customers() {
  const [customers, setCustomers] = useState(dummyCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === '' || customer.accountType === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleAddCustomer = (newCustomer) => {
    const customer = {
      ...newCustomer,
      id: `C${String(customers.length + 1).padStart(3, '0')}`,
      status: 'Active'
    };
    setCustomers([...customers, customer]);
    setIsModalOpen(false);
  };

  const handleEditCustomer = (updatedCustomer) => {
    setCustomers(customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
    setIsModalOpen(false);
    setEditingCustomer(null);
  };

  const handleDeleteCustomer = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  const handleViewCustomer = (customer) => {
    alert(`Viewing customer: ${customer.name}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nAddress: ${customer.address}\nAccount Type: ${customer.accountType}\nBalance: $${customer.balance}\nStatus: ${customer.status}`);
  };

  const handleEditClick = (customer) => {
    setEditingCustomer(customer);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900">Customers Management</h1>
        <p className="text-gray-600 mt-1">Manage and monitor customer accounts</p>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Dropdown */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Account Types</option>
              <option value="Saving">Saving</option>
              <option value="Current">Current</option>
            </select>
          </div>

          {/* Add Customer Button */}
          <button
            onClick={() => {
              setEditingCustomer(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <FaPlus className="text-sm" />
            Add Customer
          </button>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <CustomerTable
          customers={filteredCustomers}
          onView={handleViewCustomer}
          onEdit={handleEditClick}
          onDelete={handleDeleteCustomer}
        />
      </div>

      {/* Add/Edit Customer Modal */}
      {isModalOpen && (
        <AddCustomerModal
          customer={editingCustomer}
          onClose={() => {
            setIsModalOpen(false);
            setEditingCustomer(null);
          }}
          onSave={editingCustomer ? handleEditCustomer : handleAddCustomer}
        />
      )}
    </div>
  );
}