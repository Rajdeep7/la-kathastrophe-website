"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EpisodePhotos from '../../components/EpisodePhotos';
import ShopButton from '../../components/ShopButton';
import Header from '../../components/Header';
import { episodes } from '../../components/EpisodeGrid';
import { FaArrowLeft } from 'react-icons/fa';

interface EpisodePageProps {
  params: {
    slug: string;
  };
}

export default function EpisodePage({ params }: EpisodePageProps) {
  const { slug } = params;
  
  // Use client-side state to avoid hydration issues
  const [isClient, setIsClient] = useState(false);
  const [episode, setEpisode] = useState<typeof episodes[0] | null>(null);
  const [notFoundState, setNotFoundState] = useState(false);
  
  useEffect(() => {
    // Find the episode on the client side
    const foundEpisode = episodes.find(ep => ep.slug === slug);
    
    if (foundEpisode) {
      setEpisode(foundEpisode);
    } else {
      setNotFoundState(true);
    }
    
    setIsClient(true);
  }, [slug]);
  
  // Loading state while client-side code runs
  if (!isClient) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading episode...</p>
      </div>
    );
  }
  
  // Handle not found state
  if (notFoundState) {
    return (
      <div className="bg-black text-white min-h-screen overflow-y-auto">
        <Header />
        
        <div className="pt-24 pb-16 px-4 md:px-8 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="mb-8">
            <Link 
              href="/episodes" 
              className="flex items-center text-white/80 hover:text-white transition-colors">
                <FaArrowLeft className="mr-2" /> Back to Episodes
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Episode Not Found</h1>
          <p className="text-gray-400 text-center max-w-md">
            Sorry, we couldn't find the episode you're looking for. 
            Please try browsing our other episodes.
          </p>
        </div>
      </div>
    );
  }
  
  // If episode is still null but we're on client and not in notFound state
  if (!episode) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading episode details...</p>
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
        
        <EpisodePhotos episodeId={episode.id} />
      </div>
      
      <ShopButton />
    </div>
  );
} 