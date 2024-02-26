import React, { useState } from 'react';
import './App.css';
import { Country } from './components/Checkbox/types';
import CheckBox from './components/Checkbox/CheckBox';

const countries: Country[] = [
  { id: 1, name: 'India' },
  { id: 2, name: 'USA' },
  { id: 3, name: 'France' },
];

function App() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const countryName = event.target.name;
    const countryValue = event.target.value;
    const isChecked = event.target.checked;

    const updatedSelectedCountries: Country[] = isChecked
      ? [...selectedCountries, { id: +countryValue, name: countryName }]
      : selectedCountries.filter((country) => country.id !== +countryValue);
      
    setSelectedCountries(updatedSelectedCountries);
    setSelectAll(updatedSelectedCountries.length === countries.length);
  };

  const handleSelectAllChange = () => {
    const updatedSelectedCountries = selectAll ? [] : countries;
    setSelectedCountries(updatedSelectedCountries);
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
        />
        Select All
      </label>
      <br />
      {countries.map((country) => (
        <CheckBox 
          key={country.id}
          label={country.name}
          value={country.id}
          selectedItems={selectedCountries}
          handleOnChange={handleCountryChange}
        />
      ))}
    </div>
  );
}

export default App;
