import React from 'react';

const CustomerDetailModal = ({ customer, onClose }) => {
  if (!customer) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-100">{customer.name}</h2>
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition duration-200 text-2xl"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>
        {customer.profile_picture && (
          <img
            src={customer.profile_picture}
            alt={customer.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
        )}
        <p className="text-gray-400 text-md">Email: {customer.email}</p>
        <p className="text-gray-400 text-md">Phone: {customer.phone}</p>
        <p className="text-gray-400 text-md">Gender: {customer.gender}</p>
      </div>
    </div>
  );
};

export default CustomerDetailModal;
