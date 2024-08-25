import { Dialog } from '@headlessui/react';

const CustomerDetailModal = ({ isOpen, closeModal, customer }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
          <Dialog.Title>{customer.name}</Dialog.Title>
          <div>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Gender: {customer.gender}</p>
          </div>
          <button onClick={closeModal} className="mt-4 bg-blue-500 text-white p-2 rounded">Close</button>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomerDetailModal;
