"use client";
import React from 'react';
import EpisodeGrid from '../components/EpisodeGrid';
import Header from '../components/Header';

export default function EpisodesPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-y-auto">
      <Header />
      
      <div className="pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Episodes</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of fashion episodes, each with a unique theme and story. 
            Click on any episode to discover more.
          </p>
        </div>
        
        <EpisodeGrid />
      </div>
    </div>
  );
} 