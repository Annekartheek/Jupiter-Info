import React from 'react';

export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?auto=format&fit=crop&q=80",
      title: "Jupiter's Atmosphere",
      description: "The swirling clouds and storms in Jupiter's dynamic atmosphere"
    },
    {
      url: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?auto=format&fit=crop&q=80",
      title: "The Great Red Spot",
      description: "Jupiter's iconic storm that has been raging for centuries"
    },
    {
      url: "https://www.shutterstock.com/image-photo/colorful-picture-represents-jupiter-moons-elements-317082491",
      title: "Jupiter and Its Moons",
      description: "The gas giant and some of its largest Galilean moons"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Jupiter Gallery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
