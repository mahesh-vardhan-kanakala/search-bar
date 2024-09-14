import React, { useState } from 'react';
import countries from './countries.json';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const results = countries.filter((country) => {
      const countryName = country.country.toLowerCase();
      const capital = country.capital.toLowerCase();
      return countryName.includes(searchTerm.toLowerCase()) || capital.includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a country or capital"
      />
      <ul>
        {searchResults.map((country) => (
          <li key={country.country}>{country.country} - {country.capital}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
