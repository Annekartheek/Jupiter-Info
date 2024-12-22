import React from 'react';
import { Globe, Rocket, Thermometer, Mountain } from 'lucide-react';

export function Overview() {
  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Exploring Jupiter</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Globe />}
            title="Overview"
            description="Jupiter is the largest planet in our solar system, with a mass more than two and a half times that of all the other planets combined."
          />
          <FeatureCard 
            icon={<Rocket />}
            title="Missions"
            description="Multiple spacecraft have visited Jupiter, including Pioneer, Voyager, Galileo, and Juno, revealing its complex atmosphere and moons."
          />
          <FeatureCard 
            icon={<Mountain />}
            title="Geography"
            description="Jupiter has no solid surface, but features the Great Red Spot, a giant storm that has been raging for hundreds of years."
          />
          <FeatureCard 
            icon={<Thermometer />}
            title="Climate"
            description="The planet's atmosphere is mostly hydrogen and helium, with temperatures ranging from -145°C to 24,000°C at its core."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
      <div className="text-orange-500 w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}