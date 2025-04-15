"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <div className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">CONTACT</h1>
            <div className="w-20 h-[1px] bg-white/30 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-light mb-8 tracking-wider">GET IN TOUCH</h2>
              
              <div className="space-y-6 text-gray-300">
                <div className="flex items-start space-x-4">
                  <div className="w-6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-white font-light">Email</p>
                    <p className="text-sm font-light">info@lakathastrophe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-white font-light">Location</p>
                    <p className="text-sm font-light">Berlin, Germany</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-white font-light">Social</p>
                    <div className="flex space-x-3 text-sm font-light">
                      <a href="#" className="hover:text-white transition-colors">Instagram</a>
                      <span>•</span>
                      <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-light mb-2">Message sent</h3>
                    <p className="text-gray-400">We'll be in touch soon.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="w-full bg-transparent border-b border-gray-700 py-2 px-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full bg-transparent border-b border-gray-700 py-2 px-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-gray-700 py-2 px-2 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 border border-white hover:bg-white hover:text-black transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Right Button */}
      <div className="fixed bottom-4 right-4">
        <Link href="/disturbance">
          <button className="text-black font-normal py-2 px-4 rounded border border-red-500 bg-red-500 font-button hover:bg-red-600 transition-colors">
            Disturbance
          </button>
        </Link>
      </div>
    </div>
  );
} 