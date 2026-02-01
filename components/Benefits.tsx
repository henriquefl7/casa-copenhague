
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Luz ambiente de fundo para profundidade, consistente com a seção técnica */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.03),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Diferenciais Exclusivos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">A Experiência de Viver Bem</h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Não vendemos apenas metros quadrados. Vendemos liberdade, economia e a tranquilidade de um lar tecnicamente perfeito.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start transition-all duration-500"
            >
              {/* Ícone sem fundo claro, apenas com destaque sutil em hover */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/10 bg-white/5 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500 shadow-inner">
                <div className="text-white group-hover:text-amber-500 transition-colors">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-tight group-hover:text-amber-500 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-stone-400 leading-relaxed font-light text-base">
                {benefit.description}
              </p>

              {/* Detalhe de linha decorativa sutil abaixo do texto */}
              <div className="mt-6 w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-amber-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
