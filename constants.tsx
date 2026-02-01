
import React from 'react';
import { 
  Sun, 
  Leaf, 
  Maximize, 
  Layers,
  ShoppingBag,
  ShoppingCart,
  Store,
  MapPin,
  Hospital
} from 'lucide-react';
import { Benefit, TechnicalDetail, HouseImage, DocumentInfo, LocationHighlight } from './types';

/**
 * 💡 DICA: Para editar as informações da casa, basta alterar os textos entre aspas abaixo.
 */

export const CORE_INFO = {
  title: "Casa Copenhague",
  subtitle: "Onde o Design encontra o Propósito",
  location: "Rua Augusto Severo, Santo Antônio de Pádua, Tubarão - SC",
  googleMapsUrl: "https://maps.app.goo.gl/5an1Fq7HBRbtgBgg6",
  whatsapp: "+55 (48) 99800-7730",
  tourUrl: "https://tour360.meupasseiovirtual.com/075432/309450/tourvirtual/",
  // Imagem de capa (Hero)
  heroImage: "https://lh3.googleusercontent.com/d/1fHuR5VfCJD11BZ4F9BRn_uLedn5Csyh3",
  // Imagem da seção técnica (Detalhes Construtivos)
  technicalImage: "https://lh3.googleusercontent.com/d/1Fh92tzLVvQXJWdyj8zBpL_1cJn0z-eb_",
  // Imagem que mostra a amplitude e pé direito
  amplitudeImage: "https://lh3.googleusercontent.com/d/1Z5rQw3i07pDBx_XsV81LJhZ9zmCaUHBU",
  // Imagem de fundo para o mapa/localização (Mapa minimalista limpo)
  mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
};

export const BENEFITS: Benefit[] = [
  {
    title: "Economia Inteligente & Sustentável",
    description: "Energia solar fotovoltaica e reaproveitamento de água que reduzem drasticamente seus custos fixos enquanto cuidam do planeta.",
    icon: <Sun className="w-6 h-6 text-amber-600" />
  },
  {
    title: "Bem-estar em Luz Natural",
    description: "O projeto prioriza iluminação natural em todos os cômodos, criando ambientes vibrantes que economizam energia e melhoram seu humor.",
    icon: <Leaf className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Ambientes Sem Fronteiras",
    description: "Integração total entre interno e externo, ideal para receber amigos ou desfrutar de momentos em família com fluidez e liberdade.",
    icon: <Maximize className="w-6 h-6 text-stone-600" />
  },
  {
    title: "Conforto Térmico & Acústico",
    description: "Uso de gesso com EPS e materiais nobres que garantem a temperatura ideal e o silêncio que sua família merece.",
    icon: <Layers className="w-6 h-6 text-blue-600" />
  }
];

export const TECHNICAL_DETAILS: TechnicalDetail[] = [
  {
    feature: "Esquadrias de Bronze de Alta Performance",
    benefit: "Durabilidade eterna e isolamento superior sem necessidade de manutenção constante ou preocupação com oxidação."
  },
  {
    feature: "Pisos em Vinílico e Detalhes em Madeira",
    benefit: "Toque quente e acolhedor sob os pés, além de facilidade extrema na limpeza e alta resistência ao desgaste."
  },
  {
    feature: "Gesso com Isopor (EPS) e Proteção",
    benefit: "Previne fissuras e garante um isolamento térmico impecável, além de precaução total contra infiltrações."
  },
  {
    feature: "Fire Place Integrado à Churrasqueira",
    benefit: "O cenário perfeito para noites de vinho no inverno ou churrascos memoráveis no verão, unindo calor e sofisticação."
  }
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  { label: "Atacadista Komprão", time: "500 metros", icon: <ShoppingCart className="w-5 h-5" /> },
  { label: "Mercado Menegaz", time: "3 minutos", icon: <Store className="w-5 h-5" /> },
  { label: "Hosp. N. Sra. da Conceição", time: "8 minutos", icon: <Hospital className="w-5 h-5" /> },
  { label: "Farol Shopping", time: "10 minutos", icon: <ShoppingBag className="w-5 h-5" /> },
];

/**
 * 📸 GALERIA DE IMAGENS REAIS
 */
export const IMAGES: HouseImage[] = [
  { 
    url: "https://lh3.googleusercontent.com/d/16ooZ1It9bXq4heOhXhkT9of_jTla6Zkn", 
    caption: "Arquitetura Moderna e Detalhes Nobres" 
  },
  { 
    url: "https://lh3.googleusercontent.com/d/1umhs7q-JnGxkAnplOMh1wCZOkqc-qJk1", 
    caption: "Conforto e Design em cada Ambiente" 
  }
];

/**
 * 📂 DOCUMENTOS
 */
export const DOCUMENTS: DocumentInfo[] = [
  { 
    name: "Planta Baixa Humanizada", 
    type: "IMAGE", 
    url: "https://drive.google.com/file/d/12S9mG2Jv3I1gdAL2eYckVsS3JCcuw8zO/view?usp=sharing" 
  },
  { 
    name: "Memorial Descritivo", 
    type: "PDF", 
    url: "https://drive.google.com/file/d/1Ew20aDvaXyYAMAsqLVL-n-5g-u386sLG/view?usp=sharing" 
  },
  { 
    name: "Tour Virtual 360°", 
    type: "360", 
    url: CORE_INFO.tourUrl 
  },
  { 
    name: "Projeto Estrutural", 
    type: "PDF", 
    url: "https://drive.google.com/file/d/1vQC275HhfzxPt4NGmh9UbSU40w0HqHtG/view?usp=sharing" 
  }
];
