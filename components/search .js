"use client"
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import './headers.css'


export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [breedSuggestions, setBreedSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const res = await axios.get("https://api.thecatapi.com/v1/breeds");
        const breeds = res.data.map((breed) => breed.name);
        setBreedSuggestions(breeds);
      } catch (err) {
        console.log({ Message: "Could not fetch breed data" });
      }
    }

    fetchBreeds();
  }, []);

  const filteredBreeds = breedSuggestions.filter((breed) =>
    breed.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSuggestionClick = (suggestion) => {
    
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
   
    setShowSuggestions(!!value);
  };

  return (
    <>
      <div className='text-black w-[80%] mt-8 bg-white'>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your breed"
            className='absolute w-full rounded-[50px] h-[50px]'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='text-black absolute right-4 top-0 bottom-0 translate-y-4'>
            <BiSearch size={20} />
          </button>
        </div>
      </div>

      {showSuggestions && filteredBreeds.length > 0 && (
        <div className='mt-24 bg-white text-black w-[80%] max-h-[200px] h-fit search rounded-[30px]'>
          <ul className="suggestion-list">
            {filteredBreeds.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
