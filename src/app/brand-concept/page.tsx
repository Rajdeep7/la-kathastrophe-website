"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function BrandConceptPage() {
  const [activeSection, setActiveSection] = useState<number>(0);
  
  // Sections of content that will be revealed by scrolling
  const sections = [
    {
      title: "Inception",
      content: "A vision born from the intersection of art and fashion."
    },
    {
      title: "Identity",
      content: "Creating unique pieces that defy conventional categorization."
    },
    {
      title: "Process",
      content: "Every creation begins with a disturbance in the ordinary."
    },
    {
      title: "Vision",
      content: "Reshaping fashion as a form of artistic expression."
    }
  ];
  
  // Handle scroll to change active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.min(
        Math.floor(scrollPosition / (windowHeight * 0.8)), 
        sections.length - 1
      );
      
      setActiveSection(newActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);
  
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      {/* Main content */}
      <div className="pt-28 pb-20">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col justify-center items-center relative px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-wider text-center mb-8"
          >
            KATHARINA WIGGER
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-center font-light leading-relaxed text-gray-300">
              Artist. Fashion Designer. Model. Visionary.
            </p>
            
            <div className="mt-12 w-full h-[1px] bg-white/20" />
            
            <p className="mt-12 text-center text-gray-400">
              Scroll to discover the concept
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
        
        {/* Scrolling Sections */}
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`min-h-screen flex flex-col justify-center items-center p-4 transition-opacity duration-1000 ${
              activeSection === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wider">{section.title}</h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}
        
        {/* Final Statement */}
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-12">LA KATHASTROPHE</h2>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              "Fashion is not just clothing.<br />It is a disruption of the ordinary."
            </p>
          </motion.div>
        </div>
      </div>
      
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