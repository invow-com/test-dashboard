import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerDetailModal from '../CustomerDetailModal';

describe('CustomerDetailModal', () => {
  const customer = {
    name: 'Jane Smith',
    email: 'johndoe12322@gmail.com',
    phone: '2430232325',
    gender: 'male',
    profile_picture: 'https://images.hellomagazine.com/horizon/landscape/13bd17120306-tom-cruise.jpg?tx=c_limit,w_960',
  };

  it('renders the modal with the close button', () => {
    render(<CustomerDetailModal isOpen={true} closeModal={jest.fn()} customer={customer} />);

    const closeButton = screen.getByRole('button', { name: /Close/i });
    expect(closeButton).toBeInTheDocument();
  });
});
