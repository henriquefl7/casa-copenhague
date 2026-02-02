
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-[#141210] border-y border-white/5 relative overflow-hidden">
      {/* Luz ambiente sutil de fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.02),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section: Aesthetic Split Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8 lg:gap-16">
          <div className="flex-1">
            <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block">Proposta de Valor</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight serif leading-[1.1]">
              Excelência <br />
              <span className="italic font-normal text-stone-300 relative">
                em cada detalhe.
                <span className="absolute -bottom-3 left-0 w-12 h-1.5 bg-amber-600 rounded-full"></span>
              </span>
            </h2>
          </div>
          
          <div className="flex-1 lg:max-w-xl lg:pl-12 border-l-0 lg:border-l border-stone-800 lg:pb-2 relative">
            {/* Small orange dash indicator from the image */}
            <div className="absolute -bottom-3 left-12 w-8 h-1.5 bg-amber-600 rounded-full hidden lg:block"></div>
            
            <p className="text-stone-300 text-base md:text-lg font-light leading-relaxed">
              Menos custos, mais liberdade e o silêncio que você merece. A harmonia perfeita entre a sofisticação e o prazer de estar em casa.
            </p>
          </div>
        </div>
        
        {/* Visual Benefit Cards (Clean Rectangles based on image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 bg-[#1c1a18] border border-white/5 rounded-[2rem] hover:bg-[#252220] transition-all duration-500 flex flex-col items-start h-full"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-stone-800/40 border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:border-amber-500/40 transition-all duration-500">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 serif leading-tight tracking-tight">
                {benefit.title}
              </h3>
              
              <p className="text-stone-400 leading-relaxed font-light text-sm md:text-base mb-10 flex-grow">
                {benefit.description}
              </p>
              
              {/* Subtle line from the image */}
              <div className="w-6 h-[1px] bg-stone-700 group-hover:bg-amber-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
