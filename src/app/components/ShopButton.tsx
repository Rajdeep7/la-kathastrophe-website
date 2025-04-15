"use client";
import React from 'react';
import Link from 'next/link';

const ShopButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Link href="/shop">
        <button className="bg-white text-black font-medium py-3 px-10 rounded-full shadow-xl hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-2xl text-lg">
          Shop
        </button>
      </Link>
    </div>
  );
};

export default ShopButton; 