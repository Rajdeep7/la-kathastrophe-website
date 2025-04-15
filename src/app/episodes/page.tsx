"use client";
import React from 'react';
import { motion } from 'framer-motion';
import EpisodeGrid from '../components/EpisodeGrid';
import Header from '../components/Header';

export default function EpisodesPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-y-auto">
      <Header />
      
      <div className="pt-28 pb-16 px-4 md:px-8">
        <motion.div 
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">EPISODES</h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of fashion episodes, each with a unique theme and story. 
            Click on any episode to discover more.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <EpisodeGrid />
        </motion.div>
      </div>
    </div>
  );
} 