"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ShopButton: React.FC = () => {
  const pathname = usePathname();
  
  // Extract the episode slug from the path
  // Current path format: /episodes/[slug]
  const pathParts = pathname.split('/');
  const episodeSlug = pathParts.length >= 3 ? pathParts[2] : '';
  
  // Generate the shop link for the current episode
  const shopLink = episodeSlug ? `/episodes/${episodeSlug}/shop` : '/episodes';
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Link href={shopLink}>
        <button className="bg-white text-black font-medium py-3 px-10 rounded-full shadow-xl hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl text-lg">
          Shop
        </button>
      </Link>
    </div>
  );
};

export default ShopButton; 