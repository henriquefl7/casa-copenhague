
import React from 'react';
import { TECHNICAL_DETAILS, CORE_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const TechnicalShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <div className="flex flex-col justify-center">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Qualidade Construtiva</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">O que você não vê é o que mais importa.</h2>
            <p className="text-stone-400 text-base md:text-lg mb-10 md:text-12 font-light max-w-lg leading-relaxed">
              Diferente de projetos genéricos, cada detalhe estrutural foi escolhido para prevenir problemas futuros e garantir conforto imediato.
            </p>
            
            <div className="space-y-8 md:space-y-10">
              {TECHNICAL_DETAILS.map((detail, index) => (
                <div key={index} className="flex gap-5 md:gap-6 group">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-6 h-6 rounded-full border border-emerald-500/50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-stone-900 transition-all duration-500">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg md:text-xl mb-1.5 md:mb-2 tracking-tight group-hover:text-amber-500 transition-colors">
                      {detail.feature}
                    </h4>
                    <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed max-w-md italic">
                      {detail.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition-opacity opacity-50"></div>
            
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/5">
              <img 
                src={CORE_INFO.technicalImage} 
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Detalhes Construtivos Casa Copenhague"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              
              <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md p-3 md:p-8 rounded-xl md:rounded-3xl text-stone-900 shadow-2xl border border-white/20 transform group-hover:-translate-y-2 transition-transform duration-700">
                <div className="text-left md:text-center">
                  <p className="text-xl md:text-4xl font-black text-amber-600 leading-none">100%</p>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-stone-500 mt-1 md:mt-2 whitespace-nowrap">Pronta para Morar</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalShowcase;
