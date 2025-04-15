"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ShopItem, { ShopItemType } from '../components/ShopItem';
import { episodes } from '../components/EpisodeGrid';

// Generate shop items from all episodes (curated selection)
const generateAllShopItems = (): ShopItemType[] => {
  let allItems: ShopItemType[] = [];
  
  // Get a selection of items from each episode
  episodes.forEach((episode, index) => {
    // Select only a few episodes to keep the page manageable
    if (index % 5 === 0) {
      const episodeNumber = parseInt(episode.id.split('-')[1], 10);
      
      // Add 1 couture item per selected episode
      const shapes = ['portrait', 'square', 'landscape'] as const;
      const sizes = ['medium', 'large'] as const;
      
      allItems.push({
        id: `curated-couture-${episode.id}`,
        name: `${episode.title} Signature Piece`,
        price: 3500 + (episodeNumber * 150),
        image: '',  // Placeholder
        shape: shapes[index % shapes.length],
        size: sizes[index % sizes.length],
        type: 'couture'
      });
      
      // Add 2 premium items per selected episode
      for (let i = 0; i < 2; i++) {
        allItems.push({
          id: `curated-premium-${episode.id}-${i}`,
          name: `${episode.title} Premium ${i + 1}`,
          price: 650 + (i * 250) + (episodeNumber * 25),
          image: '',  // Placeholder
          shape: shapes[(index + i) % shapes.length],
          size: 'medium',
          type: 'premium'
        });
      }
    }
  });
  
  return allItems;
};

export default function ShopPage() {
  // Client-side state
  const [isClient, setIsClient] = useState(false);
  const [shopItems, setShopItems] = useState<ShopItemType[]>([]);
  
  useEffect(() => {
    setShopItems(generateAllShopItems());
    setIsClient(true);
  }, []);
  
  // Loading state
  if (!isClient) {
    return (
      <div className="bg-[#FAFAFA] text-gray-900 min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading shop...</p>
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
        {/* Page Title */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-light tracking-wider mb-4">LA KATHASTROPHE SHOP</h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Explore our curated selection of wearable art pieces from various episodes.
            For the complete episode collections, please visit individual episode pages.
          </p>
        </motion.div>
        
        {/* Episodes Navigation */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-center text-xl font-light mb-8">BROWSE BY EPISODE</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {episodes.slice(0, 10).map((episode) => (
              <Link 
                key={episode.id}
                href={`/episodes/${episode.slug}/shop`}
                className="py-3 px-4 border border-gray-200 text-center text-sm hover:border-gray-900 transition-colors"
              >
                {episode.title}
              </Link>
            ))}
            <Link 
              href="/episodes"
              className="py-3 px-4 border border-gray-200 text-center text-sm hover:border-gray-900 transition-colors bg-gray-50"
            >
              View All Episodes
            </Link>
          </div>
        </motion.div>
        
        {/* Couture Section */}
        <section className="mb-60">
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-3">COUTURE</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Handcrafted pieces of wearable art, each representing a unique expression of Katharina Wigger's artistic vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 auto-rows-[150px]">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 auto-rows-[150px]">
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
          transition={{ duration: 0.8, delay: 0.5 }}
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