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

// --- NUEVOS COMPONENTES AGREGADOS ---

const HeroSection = ({ PAYMENT_LINK }: { PAYMENT_LINK: string }) => (
  <section className="relative bg-white pt-16 pb-20 px-4 text-center">
    <div className="max-w-4xl mx-auto text-center">
      <span className="bg-[#00FF00]/10 text-[#4a044e] px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block">
        🔥 OFERTA DE LANZAMIENTO DISPONIBLE HOY
      </span>
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
        Acceso vitalicio a <span className="text-[#FF00FF]">embudos y recursos</span> listos para vender.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Más de 20,000 recursos premium + Workshop paso a paso para lanzar tu primer producto digital sin ser experto.
      </p>
      <div className="flex flex-col items-center gap-4">
        <a href={PAYMENT_LINK} className="bg-[#FF00FF] text-white px-8 py-4 rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-lg no-underline inline-block">
          Acceder ahora por $20 USD
        </a>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <span>✅ Pago seguro</span> • <span>✅ Acceso inmediato</span>
        </p>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-gray-50 border-y border-gray-200 py-8">
    <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
      <div className="text-center text-black">
        <p className="text-2xl font-bold text-[#FF00FF]">+20,000</p>
        <p className="text-xs uppercase tracking-widest font-black">Recursos Digitales</p>
      </div>
      <div className="text-center text-black">
        <p className="text-2xl font-bold text-[#FF00FF]">LATAM</p>
        <p className="text-xs uppercase tracking-widest font-black">Enfoque Regional</p>
      </div>
      <div className="text-center text-black">
        <p className="text-2xl font-bold text-[#FF00FF]">100%</p>
        <p className="text-xs uppercase tracking-widest font-black">Licencia Comercial</p>
      </div>
    </div>
  </div>
);

const AntiObjections = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-serif text-center mb-12 uppercase font-black">Por qué esto es diferente</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="flex items-center gap-3 text-red-400 font-bold">
            <span>❌</span> No es un curso de teoría infinita.
          </p>
          <p className="flex items-center gap-3 text-red-400 font-bold">
            <span>❌</span> No necesitas ser diseñador ni programador.
          </p>
          <p className="flex items-center gap-3 text-red-400 font-bold">
            <span>❌</span> No necesitas mostrar tu cara en cámaras.
          </p>
        </div>
        <div className="space-y-4">
          <p className="flex items-center gap-3 text-[#00FF00] font-bold">
            <span>✅</span> Acceso inmediato a la base de datos.
          </p>
          <p className="flex items-center gap-3 text-[#00FF00] font-bold">
            <span>✅</span> Recursos listos para descargar y vender.
          </p>
          <p className="flex items-center gap-3 text-[#00FF00] font-bold">
            <span>✅</span> Licencia comercial (el 100% de la venta es tuyo).
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-8 italic text-black uppercase font-black">"El arsenal que toda agencia digital necesitaba en 2026"</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl shadow-sm italic text-gray-600">
          "Recuperé los $20 USD vendiendo mi primer embudo a un cliente local en 3 días."
          <p className="mt-4 font-bold text-black text-sm">— Carlos R., Colombia</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm italic text-gray-600">
          "Las plantillas de ChatAssistant me ahorraron semanas de trabajo técnico."
          <p className="mt-4 font-bold text-black text-sm">— Elena M., México</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm italic text-gray-600">
          "Es la inversión con mejor retorno que he hecho este año."
          <p className="mt-4 font-bold text-black text-sm">— Jorge V., Chile</p>
        </div>
      </div>
    </div>
  </section>
);

const Guarantee = ({ PAYMENT_LINK }: { PAYMENT_LINK: string }) => (
  <section className="py-12 border-t bg-gray-50">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
        <span className="text-4xl text-black">🛡️</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-black uppercase font-black">Garantía Incondicional de 7 Días</h2>
      <p className="text-gray-600 mb-8 font-medium">
        Si accedes al contenido y sientes que no vale al menos 10 veces lo que pagaste, envíanos un correo y te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
      </p>
      <a href={PAYMENT_LINK} className="bg-[#FF00FF] text-white px-10 py-5 rounded-full text-2xl font-black hover:scale-105 transition-all animate-pulse shadow-2xl no-underline inline-block">
        ¡ACCEDER POR $20 USD AHORA!
      </a>
    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL ---

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1199); // ~20 minutes

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
      images: [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=600"
      ]
    },
    {
      id: 2,
      title: "Guía Dinero con Identidad",
      description: "Aprende a monetizar tu esencia. No vendas productos, vende una transformación con tu sello personal y genera autoridad.",
      value: 47,
      images: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
      ]
    },
    {
      id: 3,
      title: "Masterclass 'La Oferta Irresistible'",
      description: "El arte de crear ofertas que el cerebro de tu cliente no pueda ignorar. Video HD de 2 horas con material descargable.",
      value: 147,
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
      ]
    },
    {
      id: 4,
      title: "WhatsApp Sales Scripts Pro",
      description: "Scripts listos para copiar y pegar. Convierte conversaciones frías en ventas cerradas usando gatillos mentales de escasez.",
      value: 27,
      images: [
        "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=600"
      ]
    },
    {
      id: 5,
      title: "Mega-Almacén Canva (10,000 Recursos editables)",
      description: "Ahorra años de diseño. Plantillas para feeds, stories, anuncios y presentaciones de nivel profesional para cualquier nicho.",
      value: 197,
      images: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
      ]
    },
    {
      id: 6,
      title: "Guía Tráfico Viral en Redes",
      description: "El algoritmo ya no será un misterio. Métodos comprobados para obtener millones de impresiones orgánicas sin gastar en Ads.",
      value: 67,
      images: [
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=600"
      ]
    }
  ];

  const catalogCategories = [
    { title: "Bienes Raíces", count: "1,200+ Plantillas", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" },
    { title: "Salud y Fitness", count: "850+ Plantillas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
    { title: "E-commerce / Ventas", count: "2,500+ Recursos", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=400" },
    { title: "Marketing Digital", count: "3,100+ Diseños", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
  ];

  const testimonials = [
    { name: "Carlos D.", role: "Emprendedor", text: "Increíble. Los embudos me ahorraron meses de trabajo. Ya recuperé la inversión en el primer día." },
    { name: "Lucía M.", role: "Diseñadora Freelance", text: "Las plantillas de Canva son de otro nivel. Mis clientes piensan que paso horas diseñando." },
    { name: "Roberto G.", role: "Agencia Digital", text: "Por $20 esto es un regalo. Los scripts de WhatsApp cierran ventas en automático." },
    { name: "Elena R.", role: "Coach de Salud", text: "Volar en Libertad me cambió la mentalidad. Las estrategias PLR son oro puro." },
    { name: "Mateo S.", role: "E-commerce", text: "El catálogo es inmenso. No he visto nada igual en el mercado hispano." },
    { name: "Sara V.", role: "Creadora de Contenido", text: "La masterclass de ofertas es la pieza que me faltaba para empezar a facturar de verdad." }
  ];

  const faqs = [
    {
      q: "¿Por qué no cobro más?",
      a: "Nuestra misión es democratizar el acceso a herramientas de alta calidad. Queremos que el precio no sea una barrera para tu libertad financiera, sino un trampolín. Preferimos volumen y testimonios que una barrera de entrada alta."
    },
    {
      q: "¿Puedo vender o revender los embudos?",
      a: "¡Absolutamente! Tienes derechos de marca privada (PLR). Puedes editarlos, ponerles tu nombre, cambiar el diseño y quedarte con el 100% de las ganancias en cada venta."
    },
    {
      q: "¿Necesito conocimientos técnicos?",
      a: "No. Todo está diseñado para que lo descargues y lo uses. Las plantillas de Canva se editan con un clic, y los libros están listos en PDF o formato editable Word/Docx."
    },
    {
      q: "¿El pago es único o mensual?",
      a: "Es un pago único de solo $20. Sin suscripciones ocultas, sin cargos sorpresa. Acceso vitalicio garantizado a todo el pack actual y futuras actualizaciones del mismo."
    }
  ];

  return (
    <div className="min-h-screen hex-bg text-white selection:bg-[#FF00FF] selection:text-white">
      {/* 1. Urgency Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#FF0000] text-white z-50 py-2 px-4 shadow-xl border-b border-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-montserrat font-black text-[10px] md:text-sm tracking-tighter uppercase text-center flex items-center gap-2">
            <Clock className="w-4 h-4 animate-bounce" />
            ACCESO LIMITADO: SOLO 100 LICENCIAS / ¡QUEDAN {formatTime(timeLeft)} MINUTOS!
          </p>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-[10px] md:text-xs font-bold whitespace-nowrap">27% VENDIDO</span>
            <div className="w-full md:w-48 h-2 bg-black/30 rounded-full overflow-hidden border border-white/20">
              <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: '27%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection PAYMENT_LINK={PAYMENT_LINK} />

      {/* Trust Bar */}
      <TrustBar />

      {/* Hero Section (Original - Manteniendo para estructura visual) */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#4a044e]/30 via-[#000000]/80 to-[#000000] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00FF00] bg-[#00FF00]/5 text-[#00FF00] font-bold text-xs mb-8 animate-pulse shadow-[0_0_20px_rgba(0,255,0,0.1)]">
            <Zap className="w-4 h-4" />
            <span>SISTEMA DE INGRESOS PASIVOS ACTIVADO</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-montserrat font-black leading-[0.9] mb-8 uppercase tracking-tighter">
            EL ARSENAL DIGITAL DEFINITIVO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] via-white to-[#00FF00]">
              PARA MONTAR UN IMPERIO
            </span>
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 w-full max-w-4xl mx-auto mt-6">
              <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10">
                <Package className="w-8 h-8 text-[#00FF00]" />
                <span className="text-[10px] font-black uppercase text-gray-300">20k+ RECURSOS PREMIUM</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10">
                <Layers className="w-8 h-8 text-[#00FF00]" />
                <span className="text-[10px] font-black uppercase text-gray-300">16 EMBUDOS MAESTROS</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10">
                <ShieldCheck className="w-8 h-8 text-[#00FF00]" />
                <span className="text-[10px] font-black uppercase text-gray-300">LIBERTAD TOTAL PLR</span>
              </div>
          </div>
        </div>
      </section>

      {/* Anti Objections Section */}
      <AntiObjections />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Problem / Solution Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-8 leading-none">
              ¿ESTÁS CANSADO DE <span className="text-[#FF00FF]">CREAR</span> Y NUNCA <span className="text-[#00FF00]">VENDER?</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg">
              <p className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <span>Basta de pasar semanas diseñando un producto desde cero que nadie compra.</span>
              </p>
              <p className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <span>Basta de pagar miles de dólares a diseñadores y copywriters mediocres.</span>
              </p>
            </div>
            <div className="mt-12 p-8 bg-black border-l-4 border-[#00FF00]">
              <p className="text-2xl font-montserrat font-bold text-white italic">
                "Este pack no es para aprender. Es para INSTALAR un negocio que ya funciona."
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Dashboard" className="relative z-10 border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Template Catalog Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-12 uppercase">Explora el <span className="text-[#FF00FF]">Catálogo Maestro</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogCategories.map((cat, i) => (
              <CatalogCard key={i} {...cat} />
            ))}
          </div>
          <div className="mt-16">
            <a href={CATALOG_LINK} className="px-12 py-5 border-2 border-[#FF00FF] text-[#FF00FF] font-montserrat font-black uppercase hover:bg-[#FF00FF] hover:text-white transition-all flex items-center gap-3 mx-auto group w-fit no-underline">
              VER TODAS LAS CATEGORÍAS <MousePointer2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* The 3-Step Process */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-center mb-20 uppercase tracking-tighter">TU CAMINO A LA <span className="text-[#00FF00]">LIBERTAD</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative text-center">
            {[
              { icon: <Download />, title: "DESCARGA", desc: "Accede instantáneamente a todo el almacén." },
              { icon: <Layout />, title: "PERSONALIZA", desc: "Pon tu marca en menos de 5 minutos." },
              { icon: <DollarSign />, title: "VENDE", desc: "Quédate con el 100% de las ganancias." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-black border border-white/10 p-10 group">
                <div className="w-20 h-20 bg-[#111] border border-[#FF00FF]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF00FF]">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 40 })}
                </div>
                <h4 className="text-3xl font-montserrat font-black mb-4 uppercase">{step.title}</h4>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Bonos Individuales */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-montserrat font-black uppercase mb-4 tracking-tighter">EL BOTÍN DE <span className="text-[#FF00FF]">GUERRA</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {bonuses.map((bonus) => (
              <div key={bonus.id} className="flex flex-col gap-4">
                <BonusCard {...bonus} />
                <a href={PAYMENT_LINK} className="w-full bg-[#00FF00] text-black font-montserrat font-black py-4 flex flex-col items-center no-underline">
                   <span className="uppercase text-sm">ASEGURAR MI LICENCIA</span>
                   <span className="text-[10px] line-through opacity-70">VALOR ${bonus.value} USD INCLUIDO</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Casos de Éxito Originales */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-16 uppercase">CASOS DE <span className="text-[#00FF00]">ÉXITO</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-black border border-white/10 text-left">
                <Quote className="text-[#FF00FF]/20 w-10 h-10 mb-4" />
                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                <div className="font-black uppercase text-white tracking-tighter">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precio Final Section */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-7xl font-montserrat font-black uppercase mb-4 tracking-tighter">VALOR TOTAL: <span className="text-[#00FF00]">$1,780 USD</span></h2>
          <div className="bg-black/80 backdrop-blur-xl p-8 md:p-20 border-2 border-white/10 shadow-2xl relative">
             <div className="text-8xl md:text-[12rem] font-montserrat font-black text-[#FF00FF] leading-none mb-10">$20</div>
             <a href={PAYMENT_LINK} className="group w-full bg-[#00FF00] text-black font-montserrat font-black py-10 rounded-none no-underline flex flex-col items-center justify-center">
                <span className="text-2xl md:text-5xl uppercase tracking-tighter">ASEGURAR MI LICENCIA</span>
                <span className="text-xs md:text-lg font-bold line-through opacity-60">$1,780 USD TACHADO / SÓLO $20 AHORA</span>
             </a>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <Guarantee PAYMENT_LINK={PAYMENT_LINK} />

      {/* FAQ Section */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-montserrat font-black text-center mb-20 uppercase tracking-tighter leading-none">OBJECIONES <br /> <span className="text-[#00FF00]">ANIQUILADAS</span></h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black text-center">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-montserrat font-black text-white mb-4 uppercase tracking-widest">PLR MASTER PACK</h4>
          <div className="text-gray-700 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Mega Pack PLR Master. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

