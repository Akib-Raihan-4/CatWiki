"use client"
import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import './headers.css';
import { db } from './firebase';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MobileSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [breedSuggestions, setBreedSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

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

  const router = useRouter();

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

  const openMobileModal = () => {
    setIsMobileModalOpen(true);
  };

  const closeMobileModal = () => {
    setIsMobileModalOpen(false);
  };

  return (
    <>
      <div className="text-black w-[80%] sm:mt-8 mt-4 bg-white">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Breeds"
            className="absolute w-full rounded-[50px] sm:h-[50px] h-[41px]"
            value={inputValue}
            onChange={handleInputChange}
            onClick={openMobileModal} // Open the mobile modal when the input is clicked
          />
          <button className="text-black absolute sm:right-4 right-2 sm:top-0 sm:bottom-0 sm:translate-y-4 translate-y-3">
            <BiSearch size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Modal */}
      {isMobileModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex flex-col ">
          <button
            onClick={closeMobileModal}
            className="bg-[#9797971A] text-[#291507] text-[28px] text-xl py-2 mt-4 ml-[85%] rounded-[10px] w-10 h-10 flex justify-center items-center"
          >
            &times;
          </button>
          <div className="w-full p-4">
            <input
              type="text"
              placeholder="Search Breeds"
              className="w-full rounded-[50px] h-[50px] px-4 text-black"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full overflow-auto">
            <ul className="suggestion-list">
              {filteredSuggestions.map((suggestion, index) => (
                <Link
                  href={{
                    pathname: '/breeds/',
                    query: {
                      id: suggestion.id,
                    },
                  }}
                >
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="cursor-pointer p-4 hover:bg-gray-200 text-black"
                  >
                    {suggestion.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};


// Desktop view

const DesktopSearch = () => {
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
  const router = useRouter();
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
      <div className='text-black w-[80%] sm:mt-8 mt-4 bg-white'>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Breeds"
            className='absolute w-full rounded-[50px] sm:h-[50px] h-[41px]'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='text-black absolute sm:right-4 right-2 sm:top-0 sm:bottom-0 sm:translate-y-4 translate-y-3'>
            <BiSearch size={20} />
          </button>
        </div>
      </div>

      {showSuggestions && breedSuggestions.length > 0 && (
        <div className='mt-24 bg-white text-black w-[80%] max-h-[200px] h-fit search rounded-[30px]'>
          <ul className="suggestion-list">
            {filteredSuggestions.map((suggestion, index) => (
              <Link
              href = {{
                pathname: '/breeds/',
                query: {
                  id: suggestion.id
                }
              }}
              >
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                >
                  
                    {suggestion.name}
                  
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};


export const Search = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 768
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <>
        
      {isMobile ? <MobileSearch /> : <DesktopSearch/>}
        
    </>

);
}