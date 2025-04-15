"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  SiYoutube,
  SiInstagram,
  SiGithub,
  SiX,
  SiDiscord,
  SiLinkedin,
} from 'react-icons/si';
import {FaArrowRight} from "react-icons/fa";
import Image from "next/image";

// Define the SocialIcon type
type SocialIconProps = {
  Icon: React.ElementType;
};

const languages = [
  { name: 'Hindi', native: 'हिंदी' },
  { name: 'German', native: 'Deutsch' },
  { name: 'Korean', native: '한국어' },
  { name: 'Bengali', native: 'বাংলা' },
  { name: 'Kannada', native: 'ಕನ್ನಡ' },
];
export default function Home() {
  const [isDiscoverHovered, setIsDiscoverHovered] = useState(false);
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false); 
  const discoverItems: [string, string][] = [["Brand Concept","/"], ["Episodes", "/episodes"], ["Contact","/"], ["Become a collector","/"]];
  const [scrolled, setScrolled] = useState(false);
  const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
    <div className="w-full aspect-video relative max-w-4xl px-4">
      <iframe
        src={`https://www.youtube.com/embed/fgNWASN_qHw`}
        className="w-full h-full rounded-lg shadow-xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Brand Story Video"
      />
    </div>
  );
  // Option 1: Centered GIF
  const CenteredGif = () => (
    <div className="w-full max-w-4xl px-4 aspect-video">
      <img
        src="/rabbit-hole.gif"
        alt="Brand Story Animation"
        className="rounded-lg shadow-xl mx-auto w-full h-auto"
        loading="eager" 
      />
    </div>
  );

  // Option 2: Full-screen Background GIF
  const BackgroundGif = () => (
    <div className="fixed inset-0 -z-10 opacity-90">
      <img
        src="/rabbit-hole.gif"
        alt="Brand Motion Background"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay for readability */}
    </div>
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        <div className="bg-black text-white min-h-screen overflow-y-auto">
            {/* Logo */}
            <div className="absolute top-4 left-4">
                <Image
                    src="la-katha-logo.svg"
                    alt="Logo"
                    width={200}
                    height={60}
                />
            </div>
            <section className="relative flex flex-col justify-center items-center h-screen"> 
                    
              {/* Top Right Elements */}
              <div className="absolute top-8 right-8 flex items-center space-x-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  <Link href="/" className="hover:underline">Discover Katha
                  </Link>
                    {isDiscoverHovered && (
                      <Dropdown items={discoverItems} />
                    )}
                </div>
              </div>      

              {/* For CENTERED GIF: */}
              <CenteredGif />     
            </section>

            {/* Bottom Right Button */}
            <div className="absolute bottom-4 right-4">
              <button className="text-black font-normal py-2 px-4 rounded border border-red-500 bg-red-500 font-button hover:bg-red-600 transition-colors">
                Disturbance
              </button>
            </div>
        </div>
    );
}

function Section({ title, scrolled, button }: { title: string; scrolled: boolean, button?:[string, string] }) {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl">{title}</h2>
      {button &&(
        <Link href={button[1]} className='group'>
            <motion.p 
              className="mt-4 text-white underline group-hover:text-platinum flex flex-row items-center"
              whileHover={{ scale: 1.1 }}
            >
                {button[0]} <FaArrowRight className="ml-1"/>
            </motion.p>
        </Link>
      )}
    </section>
  );
}

function Dropdown({ items }: { items: [string, string][] }) {
  return (
    <div className="absolute right-0 mt-2 w-32 bg-platinum rounded-md shadow-lg">
      <ul className="py-1">
        {items.map(([itemName, itemLink], index) => (
          <li key={index} className="px-4 py-2 hover:bg-white-300 text-white">
            <Link href={itemLink} className="block w-full h-full">
              {itemName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
