
import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Lookbook Real</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Cada ângulo, uma nova perspectiva de luxo.</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              Explore os acabamentos premium e a harmonia entre os materiais nobres. Fotografias reais capturadas para transmitir a alma da residência.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <div className="flex items-center gap-4 text-stone-400">
              <span className="text-sm font-medium">Fotos reais do imóvel</span>
              <div className="w-20 h-[1px] bg-stone-200"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              
              {/* Overlay de Legenda */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
