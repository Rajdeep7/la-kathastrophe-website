"use client";
import React, { useState, useEffect, useRef } from 'react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus the input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery(''); // Clear search when closed
    }
  }, [isOpen]);
  
  // Handle escape key to close the overlay
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center pt-32 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl px-6 animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lakathastrophe.com"
            className="w-full bg-transparent border-b border-gray-600 focus:border-white py-4 text-4xl text-white outline-none placeholder-gray-500 transition-colors duration-300 pl-10"
            autoComplete="off"
          />
          
          {searchQuery && (
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-2"
              onClick={() => setSearchQuery('')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        
        {searchQuery ? (
          <div className="mt-10 text-gray-400">
            <p className="text-lg">No results found for "{searchQuery}"</p>
          </div>
        ) : (
          <div className="mt-10 text-gray-500 text-lg">
            <p>Type to start searching...</p>
          </div>
        )}
      </div>
      
      <div className="absolute top-5 right-5">
        <button 
          className="text-gray-400 hover:text-white p-2 flex items-center space-x-2"
          onClick={onClose}
        >
          <span className="text-sm">ESC</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <style jsx global>{`
        body {
          overflow: ${isOpen ? 'hidden' : 'auto'};
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SearchOverlay; 