import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CheckBox from './CheckBox';
import { CheckBoxProps } from './types';

const handleOnChangeMock = jest.fn();

const defaultProps: CheckBoxProps = {
  label: 'USA',
  value: 1,
  selectedItems: [],
  handleOnChange: handleOnChangeMock,
}

describe('<CheckBox />', () => {

  test('should renders component correctly', () => {
    const { container } = render(<CheckBox {...defaultProps} />);
    const label = screen.getByText(/USA/i);
    const checkbox = screen.getByRole('checkbox');

    expect(label).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(container).toMatchSnapshot();
  });

  test('should calls handleOnChange prop when checkbox is clicked', () => {
    render(<CheckBox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
  });

  test('should checkbox is checked when selectedItems contains value', () => {
    const selectedItems = [{ id: 1, name: 'USA' }];
    render(<CheckBox {...defaultProps} selectedItems={selectedItems} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  test('should checkbox is not checked when selectedItems does not contain value', () => {
    const selectedItems = [{ id: '2', name: 'Ecuador' }];
    render(<CheckBox {...defaultProps} selectedItems={selectedItems} />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).not.toBeChecked();
  });
});