
import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import TechnicalShowcase from './components/TechnicalShowcase';
import MaterialsSection from './components/MaterialsSection';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import LocationSection from './components/LocationSection';
import { Home, Image as ImageIcon, FileText, Phone, Sparkles, MapPin } from 'lucide-react';
import { CORE_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Overlay - Compact on Mobile, Full on Web */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900/80 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10 shadow-2xl flex items-center gap-3 md:gap-8 text-white/70 w-[92vw] sm:w-auto justify-between sm:justify-center">
        <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5 text-[10px] md:text-sm font-medium">
          <Home className="w-3.5 h-3.5 md:w-4 h-4" /> 
          <span className="hidden xs:inline">Início</span>
        </a>
        <a href="#beneficios" className="hover:text-white transition-colors flex items-center gap-1.5 text-[10px] md:text-sm font-medium">
          <Sparkles className="w-3.5 h-3.5 md:w-4 h-4" /> 
          <span className="hidden xs:inline">Benefícios</span>
        </a>
        <a href="#localizacao" className="hover:text-white transition-colors flex items-center gap-1.5 text-[10px] md:text-sm font-medium">
          <MapPin className="w-3.5 h-3.5 md:w-4 h-4" /> 
          <span className="hidden xs:inline">Localização</span>
        </a>
        <a href="#galeria" className="hover:text-white transition-colors flex items-center gap-1.5 text-[10px] md:text-sm font-medium">
          <ImageIcon className="w-3.5 h-3.5 md:w-4 h-4" /> 
          <span className="hidden xs:inline">Galeria</span>
        </a>
        <a href="#materiais" className="hover:text-white transition-colors flex items-center gap-1.5 text-[10px] md:text-sm font-medium">
          <FileText className="w-3.5 h-3.5 md:w-4 h-4" /> 
          <span className="hidden xs:inline">Materiais</span>
        </a>
        <a href="#contato" className="bg-white text-stone-900 px-3 py-1 md:px-4 md:py-1.5 rounded-full hover:bg-amber-600 hover:text-white transition-all text-[10px] md:text-sm font-bold flex items-center gap-1.5 whitespace-nowrap">
          <Phone className="w-3 h-3 md:w-4 h-4" /> 
          <span>Contato</span>
        </a>
      </nav>

      <main>
        <Hero />
        
        {/* Intro Quote - Ajuste de margens negativas sutis para mobile */}
        <section className="py-8 md:py-20 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-5xl font-light italic text-stone-500 leading-relaxed serif">
              "Um projeto onde a iluminação natural dita o ritmo do dia, as áreas fluidas abraçam a convivência e a sustentabilidade garante o futuro."
            </h3>
            <div className="mt-4 md:mt-6 w-12 md:w-24 h-1 bg-amber-600 mx-auto opacity-30"></div>
          </div>
        </section>

        <Benefits />
        <LocationSection />
        <TechnicalShowcase />

        {/* Interior Highlight */}
        <section className="h-[350px] md:h-[700px] relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={CORE_INFO.amplitudeImage} 
              alt="Amplitude do Pé Direito Casa Copenhague" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600607687940-47a000df3d48?auto=format&fit=crop&q=80&w=1600";
              }}
            />
            <div className="absolute inset-0 bg-stone-900/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center p-6">
            <div className="max-w-3xl text-center text-white">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-[9px] md:text-sm mb-2 md:mb-4 block">Amplitude & Luz Real</span>
              <h2 className="text-2xl md:text-6xl font-bold mb-3 md:mb-6 serif italic">Pé Direito Alto. Inspiração sem Limites.</h2>
              <p className="text-sm md:text-xl font-light leading-relaxed text-stone-100 drop-shadow-lg max-w-2xl mx-auto">
                Sinta a verdadeira amplitude e o ar fresco circulando livremente por cada m².
              </p>
            </div>
          </div>
        </section>

        <Gallery />
        <MaterialsSection />
        <ContactForm />
      </main>

      <footer className="py-10 bg-stone-900 text-stone-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-xl mb-2 serif">Casa Copenhague</p>
            <p className="text-sm italic">Onde cada detalhe conta uma história de inovação.</p>
          </div>
          <div className="flex gap-6 md:gap-8 text-[10px] md:text-sm font-semibold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#contato" className="hover:text-white transition-colors">Agendar Visita</a>
          </div>
          <p className="text-[10px]">&copy; 2026 Projeto Exclusivo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
