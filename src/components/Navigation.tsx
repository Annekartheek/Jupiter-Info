import React from 'react';
import { Globe } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">Jupiter Explorer</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#overview" className="hover:text-orange-500 transition">Overview</a>
            <a href="#at-glance" className="hover:text-orange-500 transition">At a Glance</a>
            <a href="#gallery" className="hover:text-orange-500 transition">Gallery</a>
          </div>
        </div>
      </div>
    </nav>
  );
}