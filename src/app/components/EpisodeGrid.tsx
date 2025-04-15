"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type Episode = {
  id: string;
  slug: string;
  title: string;
  shape: 'square' | 'portrait' | 'landscape';
  size: 'small' | 'medium' | 'large';
};

// Generate 25 sample episodes with fixed random seed to ensure consistency
export const episodes: Episode[] = Array.from({ length: 25 }, (_, i) => {
  // Using a deterministic pattern instead of random to avoid hydration mismatches
  const shapes = ['square', 'portrait', 'landscape'] as const;
  const sizes = ['small', 'medium', 'large'] as const;
  
  // Use index modulo to create a deterministic but varied pattern
  const shapeIndex = i % shapes.length;
  const sizeIndex = Math.floor(i / shapes.length) % sizes.length;
  
  return {
    id: `episode-${i + 1}`,
    slug: `episode-${i + 1}`,
    title: `Episode ${i + 1}`,
    shape: shapes[shapeIndex],
    size: sizes[sizeIndex],
  };
});

const getGridClasses = (shape: Episode['shape'], size: Episode['size']) => {
  const baseClasses = "relative overflow-hidden rounded-md bg-gray-800 transition-transform hover:scale-[1.03] hover:shadow-lg group";
  
  const sizeClasses = {
    small: {
      square: "col-span-1 row-span-1 aspect-square",
      portrait: "col-span-1 row-span-2 aspect-[2/3]",
      landscape: "col-span-2 row-span-1 aspect-[3/2]",
    },
    medium: {
      square: "col-span-2 row-span-2 aspect-square",
      portrait: "col-span-2 row-span-3 aspect-[2/3]",
      landscape: "col-span-3 row-span-2 aspect-[3/2]",
    },
    large: {
      square: "col-span-3 row-span-3 aspect-square",
      portrait: "col-span-2 row-span-4 aspect-[2/3]",
      landscape: "col-span-4 row-span-2 aspect-[3/2]",
    },
  };

  return `${baseClasses} ${sizeClasses[size][shape]}`;
};

const EpisodeGrid: React.FC = () => {
  // Use client-side rendering to avoid hydration mismatches
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    // Simple loading state until client-side rendering takes over
    return <div className="h-96 flex items-center justify-center">Loading episodes...</div>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 auto-rows-[100px]">
      {episodes.map((episode) => (
        <Link
          key={episode.id}
          href={`/episodes/${episode.slug}`}
          className={getGridClasses(episode.shape, episode.size)}
        >
          <div className="w-full h-full relative">
            {/* For now, using a colored div; will be replaced with actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center text-xs text-white/50">
                {episode.shape} - {episode.size}
              </div>
            </div>
            
            {/* Title overlay - only visible on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-medium text-sm md:text-base text-center px-4">{episode.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EpisodeGrid; 