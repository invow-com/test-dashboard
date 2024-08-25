"use client";

import { useState, useMemo } from 'react';
import CustomerList from './CustomerList';
import CustomerDetailModal from './CustomerDetailModal.jsx';
import initialData from '../utils/test_dataset.json';

export default function Dashboard() {
  const [customers, setCustomers] = useState(initialData.slice(0, 20)); // Start with 20 customers
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true); // Assume more pages exist
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  const loadMoreItems = async () => {
    if (!hasNextPage || loading) return;

    setLoading(true);

    // Simulate a delay to fetch more data
    await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 seconds for a nice effect

    // Simulate loading more customers (e.g., 20 more customers at a time)
    const nextCustomers = initialData.slice(customers.length, customers.length + 20);

    setCustomers((prev) => [...prev, ...nextCustomers]);

    if (customers.length + nextCustomers.length >= initialData.length) {
      setHasNextPage(false); // No more items to load
    }

    setLoading(false);
  };

  const openModal = (customer) => {
    setSelectedCustomer(customer);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
  };

  // Filtered customer list based on search term
  const filteredCustomers = useMemo(() => 
    customers.filter(customer => 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [customers, searchTerm]
  );

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-100 mb-8 shadow-lg">Customer Dashboard</h1>
      <div className="bg-gray-800 shadow-2xl rounded-xl p-6 mb-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full p-2 rounded border border-gray-700 bg-gray-900 text-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-gray-800 shadow-2xl rounded-xl p-6">
        <CustomerList
          customers={filteredCustomers}
          loadMoreItems={loadMoreItems}
          hasNextPage={hasNextPage}
          openModal={openModal}
        />
      </div>
      {selectedCustomer && (
        <CustomerDetailModal
          customer={selectedCustomer}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
