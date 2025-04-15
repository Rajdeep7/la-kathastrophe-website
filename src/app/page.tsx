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
import Header from './components/Header';

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
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] = useState(false); 
  const discoverItems: [string, string][] = [
    ["Brand Concept","/brand-concept"], 
    ["Episodes", "/episodes"], 
    ["Contact","/contact"], 
    ["Become a collector","/become-collector"]
  ];
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
            {/* Use the Header component */}
            <Header />
            
            <section className="relative flex flex-col justify-center items-center h-screen">      
              {/* For CENTERED GIF: */}
              <CenteredGif />     
            </section>

            {/* Featured Sections */}
            <section className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light tracking-wider text-center mb-16">DISCOVER LA KATHASTROPHE</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Concept Card */}
                  <Link href="/brand-concept" className="group">
                    <div className="relative h-80 overflow-hidden bg-gray-900 transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-light tracking-wider mb-2">Brand Concept</h3>
                        <p className="text-gray-300 text-sm">The artistic vision of Katharina Wigger</p>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Contact Card */}
                  <Link href="/contact" className="group">
                    <div className="relative h-80 overflow-hidden bg-gray-900 transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-light tracking-wider mb-2">Contact</h3>
                        <p className="text-gray-300 text-sm">Get in touch with our team</p>
                      </div>
                    </div>
                  </Link>
                  
                  {/* Become a Collector Card */}
                  <Link href="/become-collector" className="group">
                    <div className="relative h-80 overflow-hidden bg-[#600000] transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h3 className="text-2xl font-light tracking-wider mb-2">Become a Collector</h3>
                        <p className="text-gray-300 text-sm">Join our exclusive circle of art enthusiasts</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>

            {/* Bottom Right Button */}
            <div className="fixed bottom-4 right-4">
              <Link href="/disturbance">
                <button className="text-black font-normal py-2 px-4 rounded border border-red-500 bg-red-500 font-button hover:bg-red-600 transition-colors">
                  Disturbance
                </button>
              </Link>
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
    <div className="absolute right-0 mt-2 w-52 bg-platinum rounded-md shadow-lg">
      <ul className="py-1">
        {items.map(([itemName, itemLink], index) => (
          <li key={index} className="px-4 py-2 hover:bg-white-300 text-white whitespace-nowrap">
            <Link href={itemLink} className="block w-full h-full">
              {itemName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
