
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
  Quote
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
      description: "La guía definitiva para desvincularte del sistema tradicional y construir un imperio digital desde cero. 250 páginas de pura estrategia.",
      value: 97,
      images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"]
    },
    {
      id: 2,
      title: "Guía Dinero con Identidad",
      description: "Aprende a monetizar tu esencia. No vendas productos, vende una transformación con tu sello personal y genera autoridad.",
      value: 47,
      images: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600"]
    },
    {
      id: 3,
      title: "Masterclass 'La Oferta Irresistible'",
      description: "El arte de crear ofertas que el cerebro de tu cliente no pueda ignorar. Video HD de 2 horas con material descargable.",
      value: 147,
      images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"]
    },
    {
      id: 4,
      title: "WhatsApp Sales Scripts Pro",
      description: "Scripts listos para copiar y pegar. Convierte conversaciones frías en ventas cerradas usando gatillos mentales de escasez.",
      value: 27,
      images: ["https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=600"]
    },
    {
      id: 5,
      title: "Mega-Almacén Canva (10,000 Recursos editables)",
      description: "Ahorra años de diseño. Plantillas para feeds, stories, anuncios y presentaciones de nivel profesional para cualquier nicho.",
      value: 197,
      images: ["https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600"]
    },
    {
      id: 6,
      title: "Guía Tráfico Viral en Redes",
      description: "El algoritmo ya no será un misterio. Métodos comprobados para obtener millones de impresiones orgánicas sin gastar en Ads.",
      value: 67,
      images: ["https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=600"]
    }
  ];

  const testimonials = [
    { name: "Carlos Méndez", role: "Emprendedor Digital", text: "Increíble. Los embudos de venta me ahorraron meses de trabajo. Por $20 esto es prácticamente un regalo.", rating: 5 },
    { name: "Laura Sofía", role: "Diseñadora Freelance", text: "El pack de Canva es masivo. No he tenido que diseñar nada desde cero en semanas. Mis clientes están felices.", rating: 5 },
    { name: "Ricardo J.", role: "Dueño de Agencia", text: "Lo compré por la licencia PLR. Ya recuperé mi inversión vendiendo solo uno de los bonos a mi propia audiencia.", rating: 5 },
    { name: "Elena Ramos", role: "Coach de Negocios", text: "La Masterclass de ofertas irresistibles cambió mi forma de vender. No puedo creer el valor que hay aquí.", rating: 5 },
    { name: "Martín G.", role: "Afiliado", text: "Tráfico viral puro. Apliqué los consejos de la guía y mi primer reel llegó a 50k vistas en dos días.", rating: 5 },
    { name: "Sonia V.", role: "Creadora de Contenido", text: "Estaba dudando por el precio tan bajo, pero el material es de altísima calidad. Totalmente recomendado.", rating: 5 }
  ];

  const catalogCategories = [
    { title: "Bienes Raíces", count: "1,200+ Plantillas", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" },
    { title: "Salud y Fitness", count: "850+ Plantillas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
    { title: "E-commerce / Ventas", count: "2,500+ Recursos", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=400" },
    { title: "Marketing Digital", count: "3,100+ Diseños", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
  ];

  const faqs = [
    { q: "¿Por qué no cobro más?", a: "Nuestra misión es democratizar el acceso a herramientas de alta calidad. Queremos que el precio no sea una barrera." },
    { q: "¿Puedo revender los embudos?", a: "¡Absolutamente! Tienes derechos de marca privada (PLR). Quédate con el 100% de las ganancias." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Todo está diseñado para descargar y usar con un clic." },
    { q: "¿El pago es único?", a: "Sí, un pago único de $20 para acceso vitalicio." }
  ];

  return (
    <div className="min-h-screen hex-bg text-white selection:bg-[#FF00FF] selection:text-white">
      {/* 1. Urgency Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#FF0000] text-white z-50 py-2 px-4 shadow-xl border-b border-black/20 text-center">
        <p className="font-montserrat font-black text-[10px] md:text-sm tracking-tighter uppercase inline-flex items-center gap-2">
          <Clock className="w-4 h-4 animate-bounce" />
          ACCESO LIMITADO: SOLO 100 LICENCIAS / ¡QUEDAN {formatTime(timeLeft)} MINUTOS!
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#4a044e]/30 via-[#000000]/80 to-[#000000] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00FF00] bg-[#00FF00]/5 text-[#00FF00] font-bold text-xs mb-8 animate-pulse">
            <Zap className="w-4 h-4" />
            <span>SISTEMA DE INGRESOS PASIVOS ACTIVADO</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-montserrat font-black leading-[0.9] mb-8 uppercase tracking-tighter">
            EL ARSENAL DIGITAL DEFINITIVO DE <br />
            <span className="line-through text-red-500">$1,780 USD</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] via-white to-[#00FF00]">
              PARA MONTAR UN IMPERIO SIN SER UN EXPERTO 
            </span>
          </h1>
          
          <div className="flex flex-col items-center gap-6 mb-16">
            <a href={PAYMENT_LINK} className="group relative w-full max-w-3xl bg-[#FF00FF] hover:bg-[#e600e6] text-white font-montserrat font-black py-8 px-6 md:px-12 rounded-none transition-all duration-300 btn-pulse shadow-[0_20px_60px_rgba(255,0,255,0.4)] text-center no-underline inline-block">
              <span className="text-xl md:text-4xl uppercase tracking-tighter">¡SÍ, ASEGURAR MI KIT POR SOLO $20!</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Sección de Bonos Individuales EDITADA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-montserrat font-black uppercase mb-4 tracking-tighter">EL BOTÍN DE <span className="text-[#FF00FF]">GUERRA</span></h2>
            <p className="text-gray-400 text-xl font-medium italic">Cada bono vale más que la inversión total de hoy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {bonuses.map((bonus) => (
              <div key={bonus.id} className="flex flex-col bg-zinc-950/50 border border-white/5 p-4 md:p-8">
                <BonusCard {...bonus} />
                <a 
                  href={PAYMENT_LINK} 
                  className="mt-6 w-full bg-[#00FF00] text-black font-montserrat font-black py-4 px-6 hover:scale-105 transition-transform flex flex-col items-center justify-center gap-0 shadow-[0_0_30px_rgba(0,255,0,0.2)] no-underline group"
                >
                  <span className="text-lg md:text-2xl uppercase leading-none">ASEGURAR MI LICENCIA</span>
                  <span className="text-[10px] md:text-xs font-bold opacity-80 uppercase mt-1 tracking-widest">
                    Antes <span className="line-through">$1,780</span> — 20 USD AHORA
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TESTIMONIOS AÑADIDA */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-center mb-16 uppercase tracking-tighter">
            RESULTADOS <span className="text-[#00FF00]">REALES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-black border border-white/10 rounded-lg relative">
                <Quote className="absolute top-4 right-4 text-white/10 w-12 h-12" />
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <span className="text-xs text-[#FF00FF] font-black uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA CORTO INTERMEDIO TESTIMONIOS */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl font-montserrat font-black mb-8 italic">¿Vas a ser el próximo testimonio de éxito?</p>
            <a href={PAYMENT_LINK} className="bg-white text-black font-montserrat font-black px-12 py-5 hover:bg-[#00FF00] transition-colors inline-flex items-center gap-3 no-underline uppercase text-xl">
              ¡QUIERO EMPEZAR AHORA! <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Template Catalog Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-6 uppercase">Explora el <span className="text-[#FF00FF]">Catálogo Maestro</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogCategories.map((cat, i) => <CatalogCard key={i} {...cat} />)}
          </div>
          <div className="mt-16 text-center">
            <a href={CATALOG_LINK} className="px-12 py-5 border-2 border-[#FF00FF] text-[#FF00FF] font-montserrat font-black uppercase hover:bg-[#FF00FF] hover:text-white transition-all inline-flex items-center gap-3 no-underline">
              VER TODAS LAS CATEGORÍAS <MousePointer2 size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Sección de Precio Final */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-montserrat font-black uppercase mb-4 tracking-tighter">
            VALOR TOTAL: <span className="text-[#00FF00]">$1,780 USD</span>
          </h2>
          <div className="bg-zinc-900/50 p-8 md:p-20 border-2 border-white/10 shadow-2xl">
             <h3 className="text-4xl font-montserrat font-black text-[#00FF00] mb-8">ACCESO VITALICIO</h3>
             <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                <span className="text-3xl text-gray-500 line-through font-bold">$1,780 USD</span>
                <span className="text-8xl md:text-9xl font-montserrat font-black text-[#FF00FF] leading-none">$20</span>
             </div>
             <a href={PAYMENT_LINK} className="group relative w-full bg-[#00FF00] text-black font-montserrat font-black py-10 no-underline flex items-center justify-center gap-4 hover:scale-105 transition-transform">
                <span className="text-2xl md:text-5xl uppercase">¡LO QUIERO TODO POR $20!</span>
                <Rocket className="w-10 h-10" />
             </a>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-montserrat font-black text-center mb-20 uppercase tracking-tighter">PREGUNTAS</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => <FAQItem key={idx} {...faq} />)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black text-center">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-montserrat font-black text-white mb-4 uppercase text-center">PLR MASTER PACK</h4>
          <div className="text-center text-gray-700 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Mega Pack PLR Master. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

