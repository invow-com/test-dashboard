import '@testing-library/jest-dom/extend-expect'; 
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../Dashboard.jsx';

describe('Dashboard', () => {
  it('renders the CustomerList component', () => {
    render(<Dashboard />);
  });

  it('opens the modal with customer details when a customer is selected', () => {
    render(<Dashboard />);
    
    const moreButton = screen.getAllByText('...')[0];
    fireEvent.click(moreButton);
  });

  it('closes the modal when the close button is clicked', () => {
    render(<Dashboard />);
    
    const moreButton = screen.getAllByText('...')[0];
    fireEvent.click(moreButton);
    
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();
    
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));
    
    expect(screen.queryByRole('button', { name: /Close/i })).not.toBeInTheDocument();
  });
});
