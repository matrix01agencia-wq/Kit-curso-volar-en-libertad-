import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Package, 
  Lock, 
  ArrowRight,
  TrendingUp,
  Layout,
  MousePointer2,
  Rocket,
  Download,
  DollarSign,
  Globe,
  Star,
  Layers,
  CheckCircle2,
  Infinity,
  Clock,
  Quote,
  XCircle
} from 'lucide-react';
import { BonusCard } from './components/BonusCard';
import { FAQItem } from './components/FAQItem';
import { CatalogCard } from './components/CatalogCard';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1199); // ~20 minutes

  // ENLACES DE DESTINO
  const PAYMENT_LINK = "https://mrstanley0710.systeme.io/5f381cfa";
  const CATALOG_LINK = "https://catalogopremium-plantill-wkynpv8.gamma.site/";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const bonuses = [
    {
      id: 1,
      title: "Libro 'Volar en Libertad'",
      description: "La guía definitiva para desvincularte del sistema tradicional y construir un imperio digital desde cero.",
      value: 97,
      images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"]
    },
    {
      id: 2,
      title: "Guía Dinero con Identidad",
      description: "Aprende a monetizar tu esencia. No vendas productos, vende una transformación con tu sello personal.",
      value: 47,
      images: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600"]
    },
    {
      id: 3,
      title: "Masterclass 'La Oferta Irresistible'",
      description: "El arte de crear ofertas que el cerebro de tu cliente no pueda ignorar.",
      value: 147,
      images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"]
    }
  ];

  const catalogCategories = [
    { title: "Bienes Raíces", count: "1,200+ Plantillas", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" },
    { title: "Salud y Fitness", count: "850+ Plantillas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
    { title: "E-commerce / Ventas", count: "2,500+ Recursos", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=400" },
    { title: "Marketing Digital", count: "3,100+ Diseños", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
  ];

  const faqs = [
    { q: "¿El pago es único o mensual?", a: "Es un pago único de solo $20. Sin suscripciones ocultas ni cargos sorpresa." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Todo está diseñado para descargar y usar con un clic en Canva o PDF." }
  ];

  return (
    <div className="min-h-screen hex-bg text-white selection:bg-[#FF00FF] selection:text-white bg-black">
      
      {/* 1. URGENCY BAR (Optimized) */}
      <div className="fixed top-0 left-0 w-full bg-[#FF0000] text-white z-50 py-2 px-4 shadow-xl border-b border-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="font-montserrat font-black text-[10px] md:text-sm uppercase flex items-center gap-2">
            <Clock className="w-4 h-4 animate-pulse" />
            OFERTA DE LANZAMIENTO: QUEDAN {formatTime(timeLeft)} MINUTOS
          </p>
          <span className="text-[10px] md:text-xs font-bold">DISPONIBLE HOY</span>
        </div>
      </div>

      {/* 2. NEW HERO SECTION (Optimized for Cold Traffic) */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white text-black">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="bg-[#FF00FF]/10 text-[#FF00FF] px-4 py-1 rounded-full text-xs font-black mb-6 inline-block uppercase tracking-widest">
            🔥 Acceso Vitalicio Inmediato
          </span>
          
          <h1 className="text-4xl md:text-7xl font-montserrat font-black leading-tight mb-6 uppercase tracking-tighter text-zinc-900">
            Acceso vitalicio a <span className="text-[#FF00FF]">embudos y recursos</span> <br /> listos para vender.
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-10 font-medium">
            Más de 20,000 recursos premium + Workshop paso a paso para lanzar tu primer producto digital hoy mismo.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a href={PAYMENT_LINK} className="group relative w-full max-w-md bg-[#FF00FF] hover:bg-[#e600e6] text-white font-montserrat font-black py-6 px-8 rounded-xl transition-all shadow-[0_20px_40px_rgba(255,0,255,0.3)] text-center no-underline inline-block">
                <span className="text-xl md:text-2xl uppercase flex items-center justify-center gap-3">
                  Acceder ahora por $20 USD
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
            </a>
            <div className="flex gap-4 text-zinc-400 text-xs font-bold uppercase">
              <span className="flex items-center gap-1">✅ Pago seguro</span>
              <span className="flex items-center gap-1">✅ Acceso inmediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW TRUST BAR */}
      <div className="bg-zinc-50 border-y border-zinc-200 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20">
          {[
            { label: "Recursos Premium", val: "+20,000" },
            { label: "Emprendedores", val: "LATAM" },
            { label: "Licencia Comercial", val: "100% PLR" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-black text-zinc-900">{item.val}</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. NEW ANTI-OBJECTIONS SECTION (The "Difference") */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black text-center mb-16 uppercase italic">
            ¿Por qué esto es <span className="text-[#00FF00]">diferente?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 bg-black p-8 md:p-16 border border-white/5 rounded-3xl shadow-2xl">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                <p className="text-lg text-zinc-400 font-medium">No es un curso de teoría infinita que nunca terminas.</p>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                <p className="text-lg text-zinc-400 font-medium">No necesitas ser diseñador ni pagar expertos externos.</p>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                <p className="text-lg text-zinc-400 font-medium">No necesitas mostrar tu cara ni crear contenido diario.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#00FF00] shrink-0" />
                <p className="text-lg text-zinc-100 font-bold">Acceso inmediato a la base de datos de recursos.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#00FF00] shrink-0" />
                <p className="text-lg text-zinc-100 font-bold">Plantillas listas para descargar y vender hoy.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#00FF00] shrink-0" />
                <p className="text-lg text-zinc-100 font-bold">Licencia PLR: El 100% de la ganancia es para ti.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATALOG SECTION (Original) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-12 uppercase">Explora el <span className="text-[#FF00FF]">Catálogo Maestro</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {catalogCategories.map((cat, i) => (
                <CatalogCard key={i} {...cat} />
                ))}
            </div>
        </div>
      </section>

      {/* 6. BONUSES SECTION (Original) */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-7xl font-montserrat font-black uppercase mb-16 tracking-tighter text-[#FF00FF]">EL BOTÍN DE GUERRA</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {bonuses.map((bonus) => (
                <BonusCard key={bonus.id} {...bonus} />
                ))}
            </div>
        </div>
      </section>

      {/* 7. NEW SOCIAL PROOF (Cold Traffic Engine) */}
      <section className="py-24 bg-zinc-50 text-black">
        <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-montserrat font-black text-center mb-16 uppercase">Lo que dice nuestra comunidad</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { t: "Recuperé mis $20 USD vendiendo mi primer embudo a un cliente local en 3 días.", n: "Carlos R., Colombia" },
                    { t: "Las plantillas de Canva me ahorraron semanas de trabajo técnico. Es brutal.", n: "Elena M., México" },
                    { t: "Es la inversión con mejor retorno que he hecho este año. Sin duda.", n: "Jorge V., Chile" }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 italic relative">
                        <Quote className="text-zinc-100 absolute top-4 right-4 w-12 h-12" />
                        <p className="text-zinc-600 mb-6 relative z-10 font-medium">"{item.t}"</p>
                        <p className="font-black text-zinc-900 not-italic">— {item.n}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. NEW GUARANTEE & FINAL CTA (High Conversion) */}
      <section className="py-24 bg-white text-black border-t border-zinc-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-10 inline-block p-6 rounded-full bg-zinc-900 text-[#00FF00] shadow-2xl">
            <ShieldCheck className="w-16 h-16" />
          </div>
          <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-6 uppercase tracking-tighter">Garantía Incondicional de 7 Días</h2>
          <p className="text-xl text-zinc-600 mb-12 font-medium italic">
            "Accede al contenido y si sientes que no vale al menos 10 veces lo que pagaste, te devolvemos el 100% de tu dinero. Sin preguntas."
          </p>
          
          <div className="bg-zinc-950 p-10 md:p-16 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] text-white">
             <h3 className="text-3xl font-black text-[#00FF00] mb-4 uppercase">PRECIO FINAL HOY</h3>
             <div className="text-7xl md:text-9xl font-montserrat font-black text-[#FF00FF] mb-10">$20</div>
             
             <a href={PAYMENT_LINK} className="group w-full bg-[#00FF00] hover:bg-white text-black font-montserrat font-black py-8 rounded-2xl transition-all shadow-[0_20px_40px_rgba(0,255,0,0.2)] no-underline flex flex-col items-center justify-center gap-2">
                 <span className="text-2xl md:text-4xl uppercase tracking-tighter flex items-center gap-4">
                    ASEGURAR MI LICENCIA <Rocket className="w-8 h-8 group-hover:-translate-y-2 transition-transform" />
                 </span>
                 <span className="text-xs font-bold opacity-60 uppercase tracking-widest">SÓLO $20 AHORA • ACCESO DE POR VIDA</span>
             </a>
          </div>
        </div>
      </section>

      {/* 9. FAQ (Original) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-montserrat font-black text-center mb-12 uppercase">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;

