import React from 'react';

export function Hero() {
  return (
    <div 
      className="h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1630839437035-dac17da580d0?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Jupiter</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          The Giant of Our Solar System
        </p>
      </div>
    </div>
  );
}