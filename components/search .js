"use client"
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import './headers.css';
import { db } from './firebase';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

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
  
    // Define a reference to the breed document
    const breedDocRef = doc(db, 'breedSearchCounts', breedId);
  
    // Use getDoc to retrieve the document
    const docSnapshot = await getDoc(breedDocRef);
  
    if (docSnapshot.exists()) {
      // Document exists, get the current count
      const currentCount = docSnapshot.data().count;
  
      // Use updateDoc to increment the count
      await updateDoc(breedDocRef, {
        count: currentCount + 1, // Increment the count
      });
    } else {
      // Document does not exist, create it with count 1
      await setDoc(breedDocRef, {
        count: 1,
      });
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

      {showSuggestions && breedSuggestions.length > 0 && (
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