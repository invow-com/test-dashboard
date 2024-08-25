"use client";

import { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerDetailModal from './CustomerDetailModal';
import data from '../utils/test_dataset.json';

export default function Dashboard() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const openModal = (customer) => {
    setSelectedCustomer(customer);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Dashboard</h1>
      <CustomerList customers={data} openModal={openModal} />
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
