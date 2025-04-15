"use client";
import React, { useState, useEffect } from 'react';

type Photo = {
  id: string;
  shape: 'square' | 'portrait' | 'landscape';
  size: 'small' | 'medium' | 'large';
};

// Generate photos for each episode with deterministic patterns
export const generateEpisodePhotos = (episodeId: string): Photo[] => {
  // Create a deterministic but seemingly random number of photos based on episode ID
  const episodeNumber = parseInt(episodeId.split('-')[1] || '1');
  const count = 12 + (episodeNumber % 9); // 12 to 20 photos, deterministically based on episode ID
  
  const shapes = ['square', 'portrait', 'landscape'] as const;
  const sizes = ['small', 'medium', 'large'] as const;
  
  return Array.from({ length: count }, (_, i) => {
    // Use a deterministic pattern based on both episode ID and photo index
    const combinedIndex = episodeNumber * 100 + i;
    const shapeIndex = combinedIndex % shapes.length;
    const sizeIndex = Math.floor(combinedIndex / shapes.length) % sizes.length;
    
    return {
      id: `${episodeId}-photo-${i + 1}`,
      shape: shapes[shapeIndex],
      size: sizes[sizeIndex],
    };
  });
};

const getPhotoClasses = (shape: Photo['shape'], size: Photo['size']) => {
  const baseClasses = "relative overflow-hidden rounded-md bg-gray-800 group";
  
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

interface EpisodePhotosProps {
  episodeId: string;
}

const EpisodePhotos: React.FC<EpisodePhotosProps> = ({ episodeId }) => {
  // Use client-side rendering to avoid hydration mismatches
  const [isClient, setIsClient] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  
  useEffect(() => {
    // Generate photos on the client side to avoid hydration mismatch
    setPhotos(generateEpisodePhotos(episodeId));
    setIsClient(true);
  }, [episodeId]);
  
  if (!isClient) {
    // Simple loading state until client-side rendering takes over
    return <div className="h-96 flex items-center justify-center">Loading photos...</div>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 auto-rows-[100px]">
      {photos.map((photo, index) => (
        <div 
          key={photo.id}
          className={getPhotoClasses(photo.shape, photo.size)}
        >
          {/* For now, using a colored div; will be replaced with actual images */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950">
            <div className="absolute inset-0 flex items-center justify-center text-xs text-white/50">
              {photo.shape} - {photo.size}
            </div>
          </div>
          
          {/* Caption overlay - only visible on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-medium text-sm md:text-base text-center">Photo {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodePhotos; 