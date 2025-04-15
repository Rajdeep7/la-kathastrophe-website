"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import ShopItem, { ShopItemType } from '../../../components/ShopItem';
import { episodes } from '../../../components/EpisodeGrid';
import { FaArrowLeft } from 'react-icons/fa';

// Mock data generator for shop items
const generateShopItems = (episodeId: string): ShopItemType[] => {
  // Using a deterministic approach based on the episode ID to generate consistent items
  const episodeNumber = parseInt(episodeId.split('-')[1], 10);
  
  // Generate some couture items
  const coutureItems: ShopItemType[] = Array.from({ length: 5 }, (_, i) => {
    const shapes = ['square', 'portrait', 'landscape'] as const;
    const sizes = ['medium', 'large'] as const;
    
    // Deterministic selection based on episode and item index
    const shapeIndex = (episodeNumber + i) % shapes.length;
    const sizeIndex = (episodeNumber + i * 2) % sizes.length;
    
    return {
      id: `couture-${episodeId}-${i + 1}`,
      name: `Couture Piece ${i + 1}`,
      price: 2500 + (i * 1500) + (episodeNumber * 100),
      image: '',  // Placeholder - would be actual image paths in production
      shape: shapes[shapeIndex],
      size: sizes[sizeIndex],
      type: 'couture'
    };
  });
  
  // Generate some premium items
  const premiumItems: ShopItemType[] = Array.from({ length: 8 }, (_, i) => {
    const shapes = ['square', 'portrait', 'landscape'] as const;
    const sizes = ['small', 'medium'] as const;
    
    // Deterministic selection based on episode and item index
    const shapeIndex = (episodeNumber + i * 3) % shapes.length;
    const sizeIndex = (episodeNumber + i) % sizes.length;
    
    return {
      id: `premium-${episodeId}-${i + 1}`,
      name: `Premium Item ${i + 1}`,
      price: 500 + (i * 300) + (episodeNumber * 50),
      image: '',  // Placeholder - would be actual image paths in production
      shape: shapes[shapeIndex],
      size: sizes[sizeIndex],
      type: 'premium'
    };
  });
  
  return [...coutureItems, ...premiumItems];
};

interface ShopPageProps {
  params: {
    slug: string;
  };
}

export default function ShopPage({ params }: ShopPageProps) {
  const { slug } = params;
  
  // Client-side state
  const [isClient, setIsClient] = useState(false);
  const [episode, setEpisode] = useState<typeof episodes[0] | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [shopItems, setShopItems] = useState<ShopItemType[]>([]);
  
  useEffect(() => {
    // Find the episode on the client side
    const foundEpisode = episodes.find(ep => ep.slug === slug);
    
    if (foundEpisode) {
      setEpisode(foundEpisode);
      setShopItems(generateShopItems(foundEpisode.id));
    } else {
      setNotFound(true);
    }
    
    setIsClient(true);
  }, [slug]);
  
  // Loading state
  if (!isClient) {
    return (
      <div className="bg-[#FAFAFA] text-gray-900 min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading shop...</p>
      </div>
    );
  }
  
  // Handle not found state
  if (notFound) {
    return (
      <div className="bg-[#FAFAFA] text-gray-900 min-h-screen overflow-y-auto">
        <Header />
        
        <div className="pt-24 pb-16 px-4 md:px-8 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="mb-8">
            <Link 
              href="/episodes" 
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                <FaArrowLeft className="mr-2" /> Back to Episodes
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-light mb-4 text-center">Episode Not Found</h1>
          <p className="text-gray-500 text-center max-w-md">
            Sorry, we couldn't find the episode you're looking for. 
            Please try browsing our other episodes.
          </p>
        </div>
      </div>
    );
  }
  
  // Filter items by type
  const coutureItems = shopItems.filter(item => item.type === 'couture');
  const premiumItems = shopItems.filter(item => item.type === 'premium');
  
  return (
    <div className="bg-[#FAFAFA] text-gray-900 min-h-screen overflow-y-auto">
      <Header />
      
      <div className="pt-28 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Back link and title */}
        <div className="mb-16">
          <Link 
            href={`/episodes/${slug}`}
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-8">
              <FaArrowLeft className="mr-2" /> 
              Back to {episode?.title || 'Episode'}
          </Link>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-light tracking-wider text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {episode?.title || 'Episode'} Collection
          </motion.h1>
        </div>
        
        {/* Couture Section */}
        <section className="mb-60">
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-3">COUTURE</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Handcrafted pieces of wearable art, each representing a unique expression of Katharina Wigger's artistic vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 auto-rows-[120px]">
            {coutureItems.map(item => (
              <ShopItem key={item.id} item={item} />
            ))}
          </div>
        </section>
        
        {/* Premium Section */}
        <section className="mb-60">
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-3">PREMIUM</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Accessible luxury with the same artistic sensibility, carefully designed for those who appreciate fine craftsmanship.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 auto-rows-[100px]">
            {premiumItems.map(item => (
              <ShopItem key={item.id} item={item} />
            ))}
          </div>
        </section>
        
        {/* Collector Link */}
        <motion.div 
          className="text-center py-32 border-t border-gray-200 mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="/become-collector" 
            className="text-[#800000] text-base md:text-lg font-light hover:opacity-70 transition-opacity inline-block relative overflow-hidden group"
          >
            <span>Become a collector to unlock availability</span>
            <span className="block h-[1px] w-full bg-gray-300 mt-1 relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-[#800000] group-hover:w-full transition-all duration-700"></span>
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 