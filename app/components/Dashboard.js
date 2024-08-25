"use client";

import { useState, useEffect } from 'react';
import CustomerList from './CustomerList';
import CustomerDetailModal from './CustomerDetailModal';
import initialData from '../utils/test_dataset.json';

export default function Dashboard() {
  const [customers, setCustomers] = useState(initialData.slice(0, 20)); // Start with 20 customers
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true); // Assume more pages exist
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-100 mb-8 shadow-lg">Customer Dashboard</h1>
      <div className="bg-gray-800 shadow-2xl rounded-xl p-6">
        <CustomerList
          customers={customers}
          loadMoreItems={loadMoreItems}
          hasNextPage={hasNextPage}
          openModal={openModal}
        />
      </div>
      {selectedCustomer && (
        <CustomerDetailModal
          isOpen={true}
          closeModal={closeModal}
          customer={selectedCustomer}
        />
      )}
    </div>
  );
}
