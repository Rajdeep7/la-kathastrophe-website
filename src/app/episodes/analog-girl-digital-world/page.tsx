"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ShopButton from '../../components/ShopButton';
import Header from '../../components/Header';
import { episodes } from '../../components/EpisodeGrid';
import { FaArrowLeft } from 'react-icons/fa';

const AnalogDigitalPhotoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Main Feature Photo */}
      <motion.div 
        className="col-span-1 md:col-span-2 lg:col-span-3 h-[70vh] bg-gray-900 rounded-lg overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 p-8 z-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">Analog girl in the digital world</h2>
          <p className="text-white/70 max-w-xl">
            A juxtaposition of vintage analog technologies with modern digital aesthetics, 
            exploring the liminal space between two worlds.
          </p>
        </div>
      </motion.div>
      
      {/* Grid Photos */}
      <motion.div 
        className="h-[50vh] bg-gray-800 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      ></motion.div>
      
      <motion.div 
        className="h-[50vh] bg-gray-800 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      ></motion.div>
      
      <motion.div 
        className="h-[50vh] bg-gray-800 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      ></motion.div>
      
      {/* Full Width Text Section */}
      <motion.div 
        className="col-span-1 md:col-span-2 lg:col-span-3 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-light tracking-wider mb-6">The Concept</h3>
          <p className="text-white/70 mb-6">
            This collection explores the fascinating intersection between analog nostalgia and digital futurism. 
            Taking inspiration from obsolete technologies like cassette tapes, VHS, vinyl records, and film negatives, 
            these pieces reimagine them through a contemporary digital lens.
          </p>
          <p className="text-white/70">
            The "Analog girl in the digital world" is a character caught between eras, embracing the tactile, 
            imperfect charm of the past while navigating the sleek, immaterial nature of our digital present.
          </p>
        </div>
      </motion.div>
      
      {/* More Grid Photos */}
      <motion.div 
        className="h-[60vh] bg-gray-800 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      ></motion.div>
      
      <motion.div 
        className="col-span-1 md:col-span-2 h-[60vh] bg-gray-800 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      ></motion.div>
    </div>
  );
};

export default function AnalogDigitalPage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading episode...</p>
      </div>
    );
  }
  
  return (
    <div className="bg-black text-white min-h-screen overflow-y-auto">
      <Header />
      
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="flex items-center mb-8 mt-2">
          <Link 
            href="/episodes" 
            className="flex items-center text-white/80 hover:text-white transition-colors">
              <FaArrowLeft className="mr-2" /> Back to Episodes
          </Link>
        </div>
        
        <AnalogDigitalPhotoGrid />
      </div>
      
      <ShopButton />
    </div>
  );
} 