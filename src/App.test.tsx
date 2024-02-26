import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders component correctly', () => {
    const { container } = render(<App />);
    const selectAllCheckbox = screen.getByText(/Select All/i);
    expect(selectAllCheckbox).toBeInTheDocument();
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(4);
    expect(container).toMatchSnapshot();
  });

  test('calls handleSelectAllChange when Select All checkbox is clicked', () => {
    render(<App />);
    const selectAllCheckbox = screen.getByText(/Select All/i);
    fireEvent.click(selectAllCheckbox);
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });
    fireEvent.click(selectAllCheckbox);
    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
  });

  test('calls handleCountryChange when country checkbox is clicked', () => {
    render(<App />);
    const indiaCheckbox = screen.getByRole('checkbox', { name: 'India' });
    fireEvent.click(indiaCheckbox);
    const selectedCheckboxes = screen.getAllByRole('checkbox', { checked: true });
    expect(selectedCheckboxes.length).toBe(1);
    fireEvent.click(indiaCheckbox);
    const unselectedCheckboxes = screen.getAllByRole('checkbox', { checked: false });
    expect(unselectedCheckboxes.length).toBe(4);
  });
});