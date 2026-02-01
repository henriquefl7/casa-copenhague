
import React from 'react';
import { CORE_INFO, LOCATION_HIGHLIGHTS } from '../constants';
import { MapPin, TrendingUp as TrendingIcon, ShieldCheck as ShieldIcon, ExternalLink as LinkIcon } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Texto e Destaques */}
          <div className="flex flex-col justify-center">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">Onde a Vida Acontece</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
              Santo Antônio de Pádua: <span className="text-stone-400 font-normal italic">Estratégia e prestígio em Tubarão/SC.</span>
            </h2>
            
            <p className="text-stone-600 text-lg mb-10 font-light leading-relaxed">
              Posicionada em um dos eixos de maior desenvolvimento da cidade, esta residência oferece a conveniência de estar cercada pelos principais serviços.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {LOCATION_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm leading-none mb-1">{item.label}</p>
                    <p className="text-xs text-stone-400 uppercase tracking-tighter">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-white border-l-4 border-amber-600 shadow-md">
                <TrendingIcon className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900">Valorização Patrimonial</h4>
                  <p className="text-stone-600 text-sm font-light">
                    Vetor de crescimento de alto padrão em Tubarão, garantindo liquidez e valorização acima da média de mercado.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-white border-l-4 border-stone-900 shadow-md">
                <ShieldIcon className="w-6 h-6 text-stone-900 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900">Segurança & Privacidade</h4>
                  <p className="text-stone-600 text-sm font-light">
                    Localização reservada em bairro consolidado, oferecendo máxima privacidade, silêncio e segurança para sua família.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual do Mapa - Estilo UI Profissional e Intuitivo */}
          <div className="relative group min-h-[500px] lg:min-h-full">
            <a 
              href={CORE_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full w-full cursor-pointer"
            >
              <div className="absolute -inset-4 bg-stone-200 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-stone-100">
                {/* Imagem de Fundo Estilizada */}
                <img 
                  src={CORE_INFO.mapImage} 
                  alt="Interface de Localização" 
                  className="w-full h-full object-cover grayscale opacity-30 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-50"
                />
                
                {/* Malha de Interface por cima */}
                <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-20"></div>
                
                {/* Overlay de Hover - Guia Intuitivo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/10 backdrop-blur-[2px]">
                   <div className="bg-white px-10 py-5 rounded-full flex items-center gap-4 shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                     <span className="font-bold text-stone-900 tracking-tight">Visualizar no Google Maps</span>
                     <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        <LinkIcon className="w-5 h-5" />
                     </div>
                   </div>
                </div>

                {/* Badge Central - Foco na Experiência */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-white/95 backdrop-blur-xl px-12 py-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-stone-200/50 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="flex flex-col items-center gap-4">
                       <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-100 shadow-inner">
                          <MapPin className="w-8 h-8 text-amber-600 animate-bounce" />
                       </div>
                       <div className="text-center">
                          <p className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.3em] mb-2 leading-none">Posição Estratégica</p>
                          <p className="text-lg font-bold text-stone-900 tracking-tight whitespace-nowrap">Localização Exclusiva</p>
                          <p className="text-xs text-stone-400 mt-3 font-medium flex items-center justify-center gap-2">
                             Clique para explorar o entorno
                          </p>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Rodapé de Instrução Sutil */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-3 text-[10px] font-bold text-stone-500 uppercase tracking-widest bg-stone-100/80 backdrop-blur px-4 py-2 rounded-full border border-stone-200/50">
                      <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                      Mapa Interativo Disponível
                   </div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
