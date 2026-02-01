
import React, { useState } from 'react';
import { Send, Phone, MapPin, Loader2 } from 'lucide-react';
import { CORE_INFO } from '../constants';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // URL do seu Google Apps Script configurada
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwTI6kqepn3wdwfpUeumoZ2etFs4ZxzSB0T-O4ysDYqlm5SoRue7okLAW-pHQ47Z6mi/exec"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      whatsapp: formData.get('whatsapp'),
      role: formData.get('role'),
      message: formData.get('message'),
    };

    try {
      // Usamos no-cors para evitar problemas de redirecionamento do Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Em modo no-cors, o navegador não permite ler a resposta, 
      // mas se a promise não falhou, o envio foi bem sucedido.
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setIsSubmitting(false);
      setError(true);
    }
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50 hidden lg:block -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">Vamos conversar sobre seu novo lar?</h2>
            <p className="text-stone-600 text-lg mb-12 font-light">
              Preencha o formulário para receber as fotos exclusivas em alta resolução e agendar uma visita privativa. Estamos prontos para apresentar cada diferencial de perto.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefone / WhatsApp</h4>
                  <p className="text-stone-600">{CORE_INFO.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Localização Privilegiada</h4>
                  <p className="text-stone-600">{CORE_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Mensagem Enviada!</h3>
                <p className="text-stone-600">Seus dados foram salvos na nossa base. Entraremos em contato o mais breve possível para agendar sua visita.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-amber-600 font-bold text-sm uppercase tracking-widest hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Seu Nome</label>
                    <input name="name" required type="text" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="Ex: João Silva" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Seu WhatsApp</label>
                    <input name="whatsapp" required type="tel" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="(48) 99999-9999" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Eu sou...</label>
                  <select name="role" className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option value="Comprador">Interessado / Comprador</option>
                    <option value="Corretor">Corretor de Imóveis</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Mensagem (Opcional)</label>
                  <textarea name="message" rows={4} className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Desejo mais informações sobre..."></textarea>
                </div>
                
                {error && (
                  <p className="text-red-500 text-sm font-medium">Ocorreu um erro ao enviar. Por favor, tente novamente.</p>
                )}

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full py-5 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Enviando... <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Enviar Mensagem <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
