
import React from 'react';
import { CORE_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={CORE_INFO.heroImage} 
          alt="Fachada Contemporânea Real"
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]"
          onError={(e) => {
            // Fallback caso a imagem local não seja encontrada durante o desenvolvimento
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        {/* Overlay escuro com tom bronzeado para destacar o texto */}
        <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest text-white uppercase bg-amber-800/80 backdrop-blur-md rounded-full shadow-lg">
          Exclusividade em cada detalhe
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
          Arquitetura <span className="italic font-normal">Contemporânea</span> e Atemporal.
        </h1>
        <p className="text-xl md:text-2xl text-stone-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Luz natural, integração total e tecnologia sustentável na residência que redefine o conceito de morar bem.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contato" className="w-full sm:w-auto px-10 py-5 bg-white text-stone-900 font-bold rounded-xl hover:bg-stone-100 transition-all transform hover:scale-105 shadow-2xl">
            Agendar Visita
          </a>
          <a 
            href={CORE_INFO.tourUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-xl border border-white/30 backdrop-blur-md hover:bg-white/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Ver Tour Virtual 360°
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
