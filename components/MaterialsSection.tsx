
import React from 'react';
import { DOCUMENTS } from '../constants';
import { FileText, ExternalLink, Box, Image as ImageIcon } from 'lucide-react';

const MaterialsSection: React.FC = () => {
  return (
    <section id="materiais" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Transparência Total</h2>
            <p className="text-stone-600 text-sm md:text-base">Acesse toda a documentação técnica, tour 360 e plantas do imóvel. Tudo o que você precisa em um só lugar.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-stone-400">
              <span className="w-12 h-[1px] bg-stone-300"></span>
              <span className="text-sm font-semibold uppercase tracking-widest">Documentação Técnica</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {DOCUMENTS.map((doc, index) => (
            <a 
              key={index}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-between hover:border-amber-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-stone-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                  {doc.type === 'PDF' && <FileText className="w-5 h-5 md:w-6 md:h-6 text-stone-600 group-hover:text-amber-600" />}
                  {doc.type === '360' && <Box className="w-5 h-5 md:w-6 md:h-6 text-stone-600 group-hover:text-amber-600" />}
                  {doc.type === 'LINK' && <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-stone-600 group-hover:text-amber-600" />}
                  {doc.type === 'IMAGE' && <ImageIcon className="w-5 h-5 md:w-6 md:h-6 text-stone-600 group-hover:text-amber-600" />}
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-sm md:text-base">{doc.name}</p>
                  <p className="text-[9px] md:text-xs text-stone-400 uppercase tracking-wider">
                    {doc.type === 'IMAGE' ? 'IMAGEM' : doc.type}
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all">
                <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
