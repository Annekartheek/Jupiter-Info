import React from 'react';

export function AtGlance() {
  return (
    <section id="at-glance" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Jupiter at a Glance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Stat label="Diameter" value="142,984 km" />
            <Stat label="Mass" value="1.90 × 10^27 kg" />
            <Stat label="Gravity" value="24.79 m/s²" />
            <Stat label="Day Length" value="9.93 Earth hours" />
          </div>
          <div className="space-y-6">
            <Stat label="Year Length" value="11.86 Earth years" />
            <Stat label="Moons" value="79 known moons" />
            <Stat label="Temperature" value="-110°C (cloud top)" />
            <Stat label="Distance from Sun" value="778.5 million km" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
      <div className="text-gray-400 text-sm">{label}</div>
      <div className="text-2xl font-bold text-orange-500">{value}</div>
    </div>
  );
}