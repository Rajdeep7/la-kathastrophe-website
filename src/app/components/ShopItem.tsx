"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type ShopItemType = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: 'small' | 'medium' | 'large';
  shape: 'square' | 'portrait' | 'landscape';
  type: 'couture' | 'premium';
};

interface ShopItemProps {
  item: ShopItemType;
}

const getGridClasses = (shape: ShopItemType['shape'], size: ShopItemType['size']) => {
  const baseClasses = "relative overflow-hidden transition-all duration-500 group";
  
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

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
  return (
    <motion.div 
      className={getGridClasses(item.shape, item.size)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-full bg-gray-100">
        {/* Placeholder or actual image */}
        <div className="relative w-full h-full">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
              {item.name}
            </div>
          )}
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        
        {/* Item details - positioned absolutely at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/90">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-light text-gray-900 tracking-wide truncate mr-2">{item.name}</h3>
            <p className="text-xs font-light text-gray-700 whitespace-nowrap">${item.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopItem; 