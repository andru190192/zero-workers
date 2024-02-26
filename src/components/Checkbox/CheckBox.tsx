import React from 'react';
import { CheckBoxProps } from './types';

const CheckBox: React.FC<CheckBoxProps> = ({ label, value, selectedItems, handleOnChange }) => {

  return (
    <div>
      <input
        id={label}
        name={label}
        value={value}
        type="checkbox"
        checked={selectedItems?.some((item) => item.id === value)}
        onChange={handleOnChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CheckBox;