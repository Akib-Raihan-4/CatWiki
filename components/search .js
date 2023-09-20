"use client"
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import './headers.css';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [breedSuggestions, setBreedSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const res = await axios.get("https://api.thecatapi.com/v1/breeds");
        const breeds = res.data;
        setBreedSuggestions(breeds);
        setFilteredSuggestions(breeds); // Initialize filtered suggestions with all breeds
      } catch (err) {
        console.log({ Message: "Could not fetch breed data" });
      }
    }

    fetchBreeds();
  }, []);

  const handleSuggestionClick = async (suggestion) => {
    setInputValue(suggestion.name);
  
    // Get the breed ID from the suggestion
    const breedId = suggestion.id;
  
    if (suggestion.name && breedId) {
      const databaseUrl = `https://catbreed-96dbf-default-rtdb.asia-southeast1.firebasedatabase.app/breedData/${breedId}.json`;
  
      try {
        // Fetch the existing data from the database
        const existingDataResponse = await fetch(databaseUrl);
        if (existingDataResponse.ok) {
          const existingData = await existingDataResponse.json();
  
          // Get the current count or default to 0
          const currentCount = existingData?.count || 0;
  
          // Update the count
          const updatedCount = currentCount + 1;
  
          // Send a PATCH request to update the count in the database
          const res = await fetch(databaseUrl, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              count: updatedCount, // Update the count
            }),
          });
  
          if (res.ok) {
            // Data updated successfully
            // You can handle success here
          } else {
            // Handle errors here
            console.error("Failed to update data");
          }
        } else {
          // Handle errors here
          console.error("Failed to fetch existing data");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  
    setShowSuggestions(false);
  };
  
  

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the suggestions based on the input value
    const filtered = breedSuggestions.filter((suggestion) =>
      suggestion.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered); // Update the filtered suggestions
  
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

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className='mt-24 bg-white text-black w-[80%] max-h-[200px] h-fit search rounded-[30px]'>
          <ul className="suggestion-list">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
