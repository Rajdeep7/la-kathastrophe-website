"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import ShopItem, { ShopItemType } from '../../../components/ShopItem';
import { episodes } from '../../../components/EpisodeGrid';
import { FaArrowLeft } from 'react-icons/fa';

// Custom themed shop items for "Analog girl in the digital world"
const analogDigitalItems: ShopItemType[] = [
  // Couture Items
  {
    id: 'couture-holographic-gown',
    name: 'Holographic Circuit Gown',
    price: 6800,
    image: '', // Placeholder
    shape: 'portrait',
    size: 'large',
    type: 'couture'
  },
  {
    id: 'couture-binary-dress',
    name: 'Binary Code Silk Dress',
    price: 5200,
    image: '', // Placeholder
    shape: 'square',
    size: 'medium',
    type: 'couture'
  },
  {
    id: 'couture-vinyl-coat',
    name: 'Vinyl Record Coat',
    price: 7500,
    image: '', // Placeholder
    shape: 'landscape',
    size: 'medium',
    type: 'couture'
  },
  {
    id: 'couture-film-ensemble',
    name: 'Film Negative Ensemble',
    price: 8900,
    image: '', // Placeholder
    shape: 'portrait',
    size: 'medium',
    type: 'couture'
  },
  {
    id: 'couture-pixelated-gown',
    name: 'Pixelated Luxury Gown',
    price: 12500,
    image: '', // Placeholder
    shape: 'landscape',
    size: 'large',
    type: 'couture'
  },
  
  // Premium Items
  {
    id: 'premium-cassette-blouse',
    name: 'Cassette Tape Blouse',
    price: 980,
    image: '', // Placeholder
    shape: 'square',
    size: 'small',
    type: 'premium'
  },
  {
    id: 'premium-vhs-pants',
    name: 'VHS Patterned Pants',
    price: 780,
    image: '', // Placeholder
    shape: 'portrait',
    size: 'medium',
    type: 'premium'
  },
  {
    id: 'premium-pixel-skirt',
    name: 'Pixel Art Skirt',
    price: 650,
    image: '', // Placeholder
    shape: 'square',
    size: 'small',
    type: 'premium'
  },
  {
    id: 'premium-glitch-tshirt',
    name: 'Glitch Effect T-Shirt',
    price: 450,
    image: '', // Placeholder
    shape: 'landscape',
    size: 'small',
    type: 'premium'
  },
  {
    id: 'premium-digital-scarf',
    name: 'Digital Noise Scarf',
    price: 380,
    image: '', // Placeholder
    shape: 'landscape',
    size: 'medium',
    type: 'premium'
  },
  {
    id: 'premium-cdrom-jacket',
    name: 'CD-ROM Reflective Jacket',
    price: 1200,
    image: '', // Placeholder
    shape: 'portrait',
    size: 'medium',
    type: 'premium'
  },
  {
    id: 'premium-floppy-hat',
    name: 'Floppy Disk Hat',
    price: 320,
    image: '', // Placeholder
    shape: 'square',
    size: 'small',
    type: 'premium'
  },
  {
    id: 'premium-retro-bag',
    name: 'Retro Gaming Handbag',
    price: 860,
    image: '', // Placeholder
    shape: 'square',
    size: 'medium',
    type: 'premium'
  }
];

export default function AnalogDigitalShopPage() {
  // Client-side state
  const [isClient, setIsClient] = useState(false);
  const [episode, setEpisode] = useState<typeof episodes[0] | null>(null);
  
  useEffect(() => {
    // Find the episode
    const foundEpisode = episodes.find(ep => ep.slug === 'analog-girl-digital-world');
    
    if (foundEpisode) {
      setEpisode(foundEpisode);
    }
    
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
  const coutureItems = analogDigitalItems.filter(item => item.type === 'couture');
  const premiumItems = analogDigitalItems.filter(item => item.type === 'premium');
  
  return (
    <div className="bg-[#FAFAFA] text-gray-900 min-h-screen overflow-y-auto">
      <Header />
      
      <div className="pt-28 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Back link and title */}
        <div className="mb-16">
          <Link 
            href="/episodes/analog-girl-digital-world"
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-8">
              <FaArrowLeft className="mr-2" /> 
              Back to Analog girl in the digital world
          </Link>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-light tracking-wider text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Analog girl in the digital world Collection
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
              Exquisite garments merging analog nostalgia with digital innovation. Each piece represents the delicate balance between past and future.
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
              Wearable art that captures the essence of analog technology in a digital age. Nostalgic elements reimagined for contemporary fashion.
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