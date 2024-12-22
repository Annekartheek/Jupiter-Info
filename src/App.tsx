import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Gallery } from './components/Gallery';
import { AtGlance } from './components/AtGlance';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Overview />
      <AtGlance />
      <Gallery />
    </div>
  );
}

export default App;