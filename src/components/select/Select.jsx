"use client"
import React, { useState } from 'react';

export const Select = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(value.length > 0);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    setSearchTerm(option);
    setIsOpen(false);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(searchTerm.length > 0)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
      />
      {isOpen && (
        <ul className="absolute left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded-b-md">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectOption(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

