"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  showDiscoverMenu?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showDiscoverMenu = true }) => {
  const [isDiscoverHovered, setIsDiscoverHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const discoverItems: [string, string][] = [
    ["Brand Concept", "/"],
    ["Episodes", "/episodes"],
    ["Contact", "/"],
    ["Become a collector", "/"]
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src="/la-katha-logo.svg"
            alt="Logo"
            width={160}
            height={48}
            className="transition-transform hover:scale-105"
          />
        </Link>
      </div>

      {/* Top Right Elements */}
      {showDiscoverMenu && (
        <div className="flex items-center space-x-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <div
            onMouseEnter={() => setIsDiscoverHovered(true)}
            onMouseLeave={() => setIsDiscoverHovered(false)}
            className="relative px-4 py-2 bg-platinum"
          >
            <Link href="/" className="hover:underline">
              Discover Katha
            </Link>
            {isDiscoverHovered && (
              <div className="absolute right-0 mt-2 w-40 bg-platinum rounded-md shadow-lg">
                <ul className="py-1">
                  {discoverItems.map(([itemName, itemLink], index) => (
                    <li key={index} className="px-4 py-2 hover:bg-white-300 text-white transition-colors hover:bg-black/30">
                      <Link href={itemLink} className="block w-full h-full">
                        {itemName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header; 