
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
  // Added Clock import to resolve the error on line 133
  Clock
} from 'lucide-react';
import { BonusCard } from './components/BonusCard';
import { FAQItem } from './components/FAQItem';
import { CatalogCard } from './components/CatalogCard';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1199); // ~20 minutes

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
      title: "Mega-Almacén Canva (40,000 Recursos)",
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

  const faqs = [
    {
      q: "¿Por qué no cobro más?",
      a: "Nuestra misión es democratizar el acceso a herramientas de alta calidad. Queremos que el precio no sea una barrera para tu libertad financiera, sino un trampolín. Preferimos volumen y testimonios que una barrera de entrada alta."
    },
    {
      q: "¿Puedo vender o revender los PLR?",
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
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#4a044e]/30 via-[#000000]/80 to-[#000000] pointer-events-none"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF00FF]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00FF00] bg-[#00FF00]/5 text-[#00FF00] font-bold text-xs mb-8 animate-pulse shadow-[0_0_20px_rgba(0,255,0,0.1)]">
            <Zap className="w-4 h-4" />
            <span>SISTEMA DE INGRESOS PASIVOS PLR ACTIVADO</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-montserrat font-black leading-[0.9] mb-8 uppercase tracking-tighter">
            EL ARSENAL DIGITAL DE <br />
            <span className="line-through text-red-600 opacity-40">$1,780 USD</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] via-white to-[#00FF00]">
              ESTÁ A PUNTO DE MORIR.
            </span>
          </h1>
          
          <p className="text-lg md:text-3xl text-gray-400 max-w-4xl mx-auto mb-12 font-medium leading-tight">
            Consigue el Workshop <span className="text-white">'Volar en Libertad'</span>, más de <span className="text-white">20,000 Plantillas Web</span> y los <span className="text-white">16 Embudos Maestros</span> que han facturado miles.
          </p>
          
          <div className="flex flex-col items-center gap-6 mb-16">
            <button className="group relative w-full max-w-3xl bg-[#FF00FF] hover:bg-[#e600e6] text-white font-montserrat font-black py-8 px-6 md:px-12 rounded-none transition-all duration-300 btn-pulse shadow-[0_20px_60px_rgba(255,0,255,0.4)]">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl md:text-4xl uppercase tracking-tighter flex items-center gap-3">
                  ¡SÍ, ASEGURAR MI KIT DE <span className="line-through opacity-70">$1,780</span> POR SOLO $20!
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </span>
                <span className="text-xs md:text-sm font-normal opacity-90 tracking-widest uppercase">Oferta válida solo hasta agotar las 100 licencias</span>
              </div>
            </button>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 w-full max-w-4xl mt-6">
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
        </div>
      </section>

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
              <p className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <span>Basta de tener una gran idea pero no tener las herramientas para ejecutarla.</span>
              </p>
            </div>
            <div className="mt-12 p-8 bg-black border-l-4 border-[#00FF00]">
              <p className="text-2xl font-montserrat font-bold text-white italic">
                "Este pack no es para aprender. Es para INSTALAR un negocio que ya funciona."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/20 to-[#00FF00]/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
              alt="Dashboard de Ventas" 
              className="relative z-10 border border-white/10 shadow-2xl reflection-effect"
            />
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO 1 */}
      <section className="py-12 bg-[#FF00FF]/5 border-y border-[#FF00FF]/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl md:text-4xl font-montserrat font-black uppercase text-center md:text-left">
            ¿LISTO PARA ESCALAR TU <span className="text-[#00FF00]">FACTURACIÓN?</span>
          </h3>
          <button className="bg-[#00FF00] text-black font-montserrat font-black px-10 py-5 hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_30px_rgba(0,255,0,0.3)]">
            OBTENER EL PACK POR $20 <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Template Catalog Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#00FF00] font-black tracking-widest text-sm uppercase mb-2 block">VISTA PREVIA DEL ARSENAL</span>
            <h2 className="text-4xl md:text-6xl font-montserrat font-black mb-6 uppercase">Explora el <span className="text-[#FF00FF]">Catálogo Maestro</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Más de 20,000 plantillas organizadas por categorías listas para descargar y usar en segundos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogCategories.map((cat, i) => (
              <CatalogCard key={i} {...cat} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-12 py-5 border-2 border-[#FF00FF] text-[#FF00FF] font-montserrat font-black uppercase hover:bg-[#FF00FF] hover:text-white transition-all flex items-center gap-3 mx-auto group">
              VER TODAS LAS CATEGORÍAS <MousePointer2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* The 3-Step Process */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-center mb-20 uppercase">TU CAMINO A LA <span className="text-[#00FF00]">LIBERTAD</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#FF00FF] to-[#00FF00] hidden md:block opacity-20 -translate-y-1/2"></div>
            
            {[
              { icon: <Download />, title: "DESCARGA", desc: "Accede instantáneamente a todo el almacén de recursos en la nube." },
              { icon: <Layout />, title: "PERSONALIZA", desc: "Pon tu marca, cambia colores o textos en Canva en menos de 5 minutos." },
              { icon: <DollarSign />, title: "VENDE", desc: "Lanza tu producto y quédate con el 100% de las ganancias para siempre." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-black border border-white/10 p-10 text-center hover:border-[#FF00FF] transition-all group">
                <div className="w-20 h-20 bg-[#111] border border-[#FF00FF]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF00FF] group-hover:scale-110 transition-transform">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 40 })}
                </div>
                <h4 className="text-3xl font-montserrat font-black mb-4 uppercase">{step.title}</h4>
                <p className="text-gray-400">{step.desc}</p>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF00FF] text-white flex items-center justify-center font-black text-xl italic">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sección de Bonos Individuales */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-montserrat font-black uppercase mb-4 tracking-tighter">EL BOTÍN DE <span className="text-[#FF00FF]">GUERRA</span></h2>
            <p className="text-gray-400 text-xl font-medium">Cada bono individual vale más que la inversión total de hoy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {bonuses.map((bonus) => (
              <BonusCard key={bonus.id} {...bonus} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 bg-[#00FF00]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-black text-center">
            <div>
              <div className="text-4xl md:text-6xl font-montserrat font-black mb-2">12k+</div>
              <div className="text-sm font-bold uppercase tracking-widest">ALUMNOS ACTIVOS</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-montserrat font-black mb-2">40k+</div>
              <div className="text-sm font-bold uppercase tracking-widest">RECURSOS EDITABLES</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-montserrat font-black mb-2">$0</div>
              <div className="text-sm font-bold uppercase tracking-widest">COSTOS OCULTOS</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-montserrat font-black mb-2">100%</div>
              <div className="text-sm font-bold uppercase tracking-widest">GARANTIZADO</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sección de Precio Final */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#4a044e]/20 to-black"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-montserrat font-black uppercase mb-4 leading-none tracking-tighter">
            VALOR TOTAL DEL <br /> <span className="text-[#00FF00]">ARSENAL: $1,780 USD</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-16 font-medium italic">"Esto no es una compra, es el robo del siglo a tu favor."</p>
          
          <div className="bg-black/80 backdrop-blur-xl p-8 md:p-20 border-2 border-white/10 shadow-[0_0_100px_rgba(255,0,255,0.15)] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 bg-[#FF00FF] text-white font-black text-xl rotate-12 translate-x-6 -translate-y-6 shadow-2xl">
                OFERTA LOCA
             </div>
             
             <h3 className="text-4xl font-montserrat font-black text-[#00FF00] mb-8 uppercase tracking-widest">ACCESO VITALICIO MAESTRO</h3>
             <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                <span className="text-3xl text-gray-500 line-through font-bold decoration-red-600 decoration-4">$1,780 USD</span>
                <span className="text-8xl md:text-[12rem] font-montserrat font-black text-[#FF00FF] leading-none">$20</span>
             </div>

             <div className="space-y-4 mb-12 text-left max-w-lg mx-auto">
                <div className="flex items-center gap-3 text-lg">
                   <CheckCircle2 className="text-[#00FF00] shrink-0" />
                   <span>Acceso a los 6 Bonos VIP</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                   <CheckCircle2 className="text-[#00FF00] shrink-0" />
                   <span>20,000+ Plantillas Premium</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                   <CheckCircle2 className="text-[#00FF00] shrink-0" />
                   <span>Licencia PLR (Vende y Gana)</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                   <CheckCircle2 className="text-[#00FF00] shrink-0" />
                   <span>Actualizaciones de por vida gratis</span>
                </div>
             </div>
             
             <div className="bg-[#FF00FF]/10 p-8 rounded-none mb-12 text-left border-l-8 border-[#FF00FF]">
               <p className="text-sm md:text-lg text-gray-200 font-medium leading-relaxed italic">
                 "Atención: Este precio de $20 es estrictamente para las primeras 100 personas. Una vez alcanzado el cupo, el sistema automáticamente subirá el precio a $197 sin previo aviso. No dejes pasar tu libertad por el precio de una pizza."
               </p>
             </div>

             <button className="group relative w-full bg-[#00FF00] hover:bg-white text-black font-montserrat font-black py-10 rounded-none transition-all duration-500 btn-pulse shadow-[0_0_50px_rgba(0,255,0,0.4)] overflow-hidden">
               <div className="relative z-10 flex items-center justify-center gap-6">
                 <span className="text-2xl md:text-5xl uppercase tracking-tighter">¡SÍ, LO QUIERO TODO POR $20!</span>
                 <Rocket className="w-10 h-10 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
               </div>
               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             </button>

             <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2">
                   <Lock className="w-5 h-5" />
                   <span className="text-[10px] font-black uppercase">Seguridad SSL 256-bit</span>
                </div>
                <div className="flex items-center gap-2 border-x border-white/20 px-8">
                   <Globe className="w-5 h-5" />
                   <span className="text-[10px] font-black uppercase">Soporte Mundial 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                   <Star className="w-5 h-5 text-yellow-500" />
                   <span className="text-[10px] font-black uppercase">4.9/5 Calificación</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Access Catalog Again CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black mb-10 uppercase">¿AÚN CON DUDAS? MIRA EL POTENCIAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button className="p-8 border-2 border-white/20 hover:border-[#00FF00] transition-colors group flex flex-col items-center gap-4 bg-zinc-900/40">
              <Layout className="w-12 h-12 text-[#00FF00]" />
              <span className="font-montserrat font-black text-xl uppercase">Explorar Catálogo de Diseño</span>
              <span className="text-gray-500 text-sm">Ver las 20,000+ plantillas</span>
            </button>
            <button className="p-8 border-2 border-white/20 hover:border-[#FF00FF] transition-colors group flex flex-col items-center gap-4 bg-zinc-900/40">
              <Download className="w-12 h-12 text-[#FF00FF]" />
              <span className="font-montserrat font-black text-xl uppercase">Ver Lista de 16 Embudos</span>
              <span className="text-gray-500 text-sm">Estructuras probadas de ventas</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. Garantía */}
      <section className="py-24 bg-white text-black relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-10 inline-block p-6 rounded-full bg-black text-[#00FF00] shadow-2xl scale-110">
            <ShieldCheck className="w-24 h-24" />
          </div>
          <h2 className="text-4xl md:text-7xl font-montserrat font-black mb-8 uppercase tracking-tighter leading-none">TU ÉXITO ESTÁ <br /> <span className="text-[#FF00FF]">BLINDADO</span></h2>
          <p className="text-xl md:text-2xl leading-relaxed font-bold max-w-3xl mx-auto italic mb-12">
            "Tienes 7 días completos para devorar el material. Si no sientes que esto ha cambiado las reglas del juego para ti, envíame un email y te devuelvo el 100% de tu dinero. Te quedas con el acceso como regalo por haberme dado tu tiempo. Así de seguro estoy de lo que tengo aquí."
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-32 h-1 bg-black"></div>
            <div className="w-32 h-1 bg-[#FF00FF]"></div>
            <div className="w-32 h-1 bg-black"></div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-montserrat font-black text-center mb-20 uppercase tracking-tighter leading-none">
            OBJECIONES <br /> <span className="text-[#00FF00]">ANIQUILADAS</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL FINAL CTA */}
      <section className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,0,255,0.05)_0%,_transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-montserrat font-black mb-12 uppercase tracking-tighter">
            ¿LIBERTAD O <br /> <span className="text-gray-600">EXCUSAS?</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto font-medium">
            Mañana seguirás en el mismo lugar si no tomas una decisión diferente hoy. Haz clic debajo y únete al 1% que actúa.
          </p>
          <button className="group relative bg-[#FF00FF] text-white font-montserrat font-black py-10 px-12 md:px-24 rounded-none transition-all duration-500 btn-pulse shadow-[0_30px_80px_rgba(255,0,255,0.5)] transform hover:scale-105">
            <span className="text-3xl md:text-6xl uppercase tracking-tighter block mb-2">¡SÍ, QUIERO ACCESO TOTAL!</span>
            <span className="text-sm md:text-xl font-normal opacity-80 uppercase tracking-[0.3em]">ÚLTIMAS LICENCIAS DISPONIBLES</span>
          </button>
          
          <div className="mt-16 flex items-center justify-center gap-8">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <img src="https://img.icons8.com/color/48/stripe.png" alt="Stripe" className="h-8 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-20 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center mb-16">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-montserrat font-black text-white mb-4 uppercase">PLR MASTER PACK</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empoderando a emprendedores digitales con herramientas de conversión masiva y libertad de marca.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-500 text-[10px] font-black uppercase tracking-widest text-center">
              <a href="#" className="hover:text-[#FF00FF] transition-colors">Términos</a>
              <a href="#" className="hover:text-[#FF00FF] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#FF00FF] transition-colors">Cookies</a>
              <a href="#" className="hover:text-[#FF00FF] transition-colors">Contacto</a>
            </div>
            <div className="flex justify-center md:justify-end gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"><Globe size={20} /></div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"><Infinity size={20} /></div>
            </div>
          </div>
          <div className="text-center text-gray-700 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Mega Pack PLR Master. Todos los derechos reservados. <br />
            No estamos afiliados con Facebook, Meta, Google ni ninguna red social de forma directa.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
