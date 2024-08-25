import { Dialog } from '@headlessui/react';

const CustomerDetailModal = ({ isOpen, closeModal, customer }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-70">
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all max-w-lg w-full">
          <div className="p-8">
            <Dialog.Title className="text-3xl font-bold text-gray-100 mb-6">{customer.name}</Dialog.Title>
            <div className="space-y-4">
              <p className="text-gray-300 text-lg"><strong>Email:</strong> {customer.email}</p>
              <p className="text-gray-300 text-lg"><strong>Phone:</strong> {customer.phone}</p>
              <p className="text-gray-300 text-lg"><strong>Gender:</strong> {customer.gender}</p>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-150"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomerDetailModal;
