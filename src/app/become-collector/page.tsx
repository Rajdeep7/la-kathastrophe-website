"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function BecomeCollectorPage() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Join the Exclusive Circle",
      description: "Become part of an exclusive community dedicated to avant-garde fashion. Our collectors gain access to limited edition pieces, private events, and personalized consultations with Katharina Wigger.",
      image: "/images/collector1.jpg"
    },
    {
      title: "Curated Collections",
      description: "Each piece in our collection tells a story, represents a concept, and challenges conventional fashion. As a collector, you'll have first access to new releases and exclusive pieces not available to the general public.",
      image: "/images/collector2.jpg"
    },
    {
      title: "Investment in Artistry",
      description: "La Kathastrophe pieces are not just garments; they are wearable art. Our collectors understand the value of investing in unique, handcrafted pieces that appreciate in value over time.",
      image: "/images/collector3.jpg"
    }
  ];

  return (
    <div className="bg-[#800000] text-white min-h-screen">
      <Header />
      
      <div className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">BECOME A COLLECTOR</h1>
            <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[50vh] md:h-[60vh] w-full mb-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000] via-transparent to-transparent z-10"></div>
            <div className="relative h-full w-full">
              {/* Placeholder for an image - replace with actual content */}
              <div className="absolute inset-0 bg-[#600000]"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-4">Elevate Your Personal Collection</h2>
                <p className="text-white/80 text-lg">
                  A curated experience of avant-garde fashion for the discerning collector.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Steps */}
          <div className="mb-24">
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeStep === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-light tracking-wider mb-6">
                  {steps[activeStep].title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>
                <div className="flex">
                  <button 
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                    className="p-2 mr-4 border border-white/50 hover:border-white transition-colors"
                    aria-label="Previous step"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                    className="p-2 border border-white/50 hover:border-white transition-colors"
                    aria-label="Next step"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative h-[400px] bg-[#600000]">
                {/* Placeholder for step images - replace with actual content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/50 text-center px-4">
                    {steps[activeStep].title} Visual
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-8 text-center">
              Apply for Collector Status
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2 text-sm">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border border-white/30 py-3 px-4 text-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border border-white/30 py-3 px-4 text-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-white/30 py-3 px-4 text-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-white/80 mb-2 text-sm">Your Interest in Fashion Art</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border border-white/30 py-3 px-4 text-white focus:border-white focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-white/80 mb-2 text-sm">How did you hear about us?</label>
                <select className="w-full bg-[#800000] border border-white/30 py-3 px-4 text-white focus:border-white focus:outline-none transition-colors">
                  <option value="">Please select</option>
                  <option value="social">Social Media</option>
                  <option value="event">Fashion Event</option>
                  <option value="referral">Personal Referral</option>
                  <option value="press">Press/Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 border border-white bg-white text-[#800000] hover:bg-transparent hover:text-white transition-colors font-light tracking-wider"
                >
                  SUBMIT APPLICATION
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Right Button */}
      <div className="fixed bottom-4 right-4">
        <Link href="/disturbance">
          <button className="text-white font-normal py-2 px-4 rounded border border-white font-button hover:bg-white hover:text-[#800000] transition-colors">
            Disturbance
          </button>
        </Link>
      </div>
    </div>
  );
} 