
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="pt-12 pb-16 md:py-24 bg-stone-900 relative overflow-hidden">
      {/* Luz ambiente de fundo para profundidade */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.03),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 md:mb-4 block">Diferenciais Exclusivos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">A Experiência de Viver Bem</h2>
          <p className="text-stone-400 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Não vendemos apenas metros quadrados. Vendemos liberdade, economia e a tranquilidade de um lar tecnicamente perfeito.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="group flex flex-col items-start transition-all duration-500">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 md:mb-8 border border-white/10 bg-white/5 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500 shadow-inner text-white group-hover:text-amber-500">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 tracking-tight group-hover:text-amber-500 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-stone-400 leading-relaxed font-light text-sm md:text-base">
                {benefit.description}
              </p>
              <div className="mt-4 md:mt-6 w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-amber-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
