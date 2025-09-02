import React, { useState } from 'react';

const SearchBar = ({ onPlaceSelected }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [valueOfBox, setValueOfBox] = useState('');

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setValueOfBox(query);
    if (query.length > 2) {
      try {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=0ea35de2abbb46da90aeca610e0936a0`);
        const data = await response.json();
        setSuggestions(data.features);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setValueOfBox(suggestion.properties.formatted);
    const [lon, lat] = suggestion.geometry.coordinates;
    const address = suggestion.properties.formatted;
    onPlaceSelected(lat, lon, address);
    setSuggestions([]);
  };

  return (
    <div className="flex justify-center relative pt-10 bg-gray-900">
      <div className="flex items-center bg-gray-200 rounded-full p-2 w-full max-w-md">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search location..."
          value={valueOfBox}
          onChange={handleInputChange}
          className="bg-gray-200 outline-none ml-2 w-full"
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-md mt-10 w-full max-w-md z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.properties.place_id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              {suggestion.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
