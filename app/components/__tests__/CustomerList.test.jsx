import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerList from '../CustomerList';

describe('CustomerList', () => {
  const customers = [
    { name: 'Jane Smith', email: 'johndoe12322@gmail.com', phone: '2430232325', gender: 'male' },
    { name: 'John Doe', email: 'charliedavis67856@gmail.com', phone: '2430232326', gender: 'female' },
  ];

  it('renders the "..." button for each customer', () => {
    render(<CustomerList customers={customers} hasNextPage={false} loadMoreItems={jest.fn()} openModal={jest.fn()} />);

    const moreButtons = screen.getAllByRole('button');
    expect(moreButtons).toHaveLength(customers.length);
  });
});
