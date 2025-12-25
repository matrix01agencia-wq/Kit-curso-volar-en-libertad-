
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
  Clock
} from 'lucide-react';
import { BonusCard } from './components/BonusCard';
import { FAQItem } from './components/FAQItem';
import { CatalogCard } from './components/CatalogCard';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1199);

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
    { id: 1, title: "Libro 'Volar en Libertad'", description: "Estrategia digital desde cero.", value: 97, images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"] },
    { id: 2, title: "Guía Dinero con Identidad", description: "Monetiza tu esencia.", value: 47, images: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600"] },
    { id: 3, title: "Masterclass 'La Oferta Irresistible'", description: "Crea ofertas imbatibles.", value: 147, images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"] },
    { id: 4, title: "WhatsApp Sales Scripts Pro", description: "Scripts para cerrar ventas.", value: 27, images: ["https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600"] },
    { id: 5, title: "Mega-Almacén Canva (40k Recursos)", description: "Plantillas profesionales.", value: 197, images: ["https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600"] },
    { id: 6, title: "Guía Tráfico Viral", description: "Domina el algoritmo.", value: 67, images: ["https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600"] }
  ];

  const catalogCategories = [
    { title: "Bienes Raíces", count: "1,200+ Plantillas", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" },
    { title: "Salud y Fitness", count: "850+ Plantillas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400" },
    { title: "E-commerce / Ventas", count: "2,500+ Recursos", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400" },
    { title: "Marketing Digital", count: "3,100+ Diseños", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" },
  ];

  const faqs = [
    { q: "¿Por qué no cobro más?", a: "Queremos democratizar el acceso a herramientas de alta calidad." },
    { q: "¿Puedo revender los PLR?", a: "¡Sí! Tienes derechos de marca privada para vender y ganar el 100%." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Todo está listo para descargar y usar." },
    { q: "¿El pago es único?", a: "Sí, un solo pago de $20 con acceso vitalicio." }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF00FF]">
      <div className="fixed top-0 left-0 w-full bg-[#FF0000] z-50 py-2 px-4 text-center">
        <p className="font-bold text-xs uppercase flex items-center justify-center gap-2">
          <Clock className="w-4 h-4" /> ACCESO LIMITADO: ¡QUEDAN {formatTime(timeLeft)} MINUTOS!
        </p>
      </div>

      <section className="pt-32 pb-24 text-center px-4">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00FF00] text-[#00FF00] font-bold text-xs mb-8">
          <Zap className="w-4 h-4" /> SISTEMA PLR ACTIVADO
        </div>
        <h1 className="text-4xl md:text-8xl font-black mb-8 uppercase leading-none">
          EL ARSENAL DIGITAL <br /> <span className="text-[#FF00FF]">ESTÁ POR MORIR</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-12">Workshop 'Volar en Libertad' + 20,000 Plantillas + 16 Embudos.</p>
        <a href={PAYMENT_LINK} className="inline-block bg-[#FF00FF] text-white font-black py-8 px-12 text-2xl uppercase no-underline hover:scale-105 transition-transform shadow-[0_20px_60px_rgba(255,0,255,0.4)]">
          ¡SÍ, ASEGURAR TODO POR $20!
        </a>
      </section>

      <section className="py-24 bg-zinc-950 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">¿CANSADO DE <span className="text-[#FF00FF]">CREAR</span> Y NO <span className="text-[#00FF00]">VENDER?</span></h2>
            <div className="space-y-4 text-gray-400">
              <p>✓ Deja de diseñar desde cero.</p>
              <p>✓ Deja de pagar a copywriters costosos.</p>
              <p>✓ Empieza a instalar un negocio que ya funciona.</p>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" alt="Ventas" className="rounded-lg shadow-2xl border border-white/10" />
        </div>
      </section>

      <section className="py-24 px-4 text-center bg-black">
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase">Catálogo <span className="text-[#FF00FF]">Maestro</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {catalogCategories.map((cat, i) => (
            <CatalogCard key={i} {...cat} />
          ))}
        </div>
        <a href={CATALOG_LINK} className="inline-block px-12 py-5 border-2 border-[#FF00FF] text-[#FF00FF] font-black uppercase no-underline hover:bg-[#FF00FF] hover:text-white transition-all">
          VER TODO EL CATÁLOGO
        </a>
      </section>

      <section className="py-24 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">OFERTA <span className="text-[#00FF00]">$20 USD</span></h2>
          <div className="bg-black p-10 border-2 border-[#FF00FF] mb-12 text-left">
            <h3 className="text-2xl font-black text-[#00FF00] mb-6">INCLUYE:</h3>
            <ul className="space-y-4 mb-10">
              <li>✓ 6 Bonos VIP Exclusivos</li>
              <li>✓ 20,000+ Plantillas Premium</li>
              <li>✓ Derechos de Reventa PLR</li>
            </ul>
            <a href={PAYMENT_LINK} className="block w-full bg-[#00FF00] text-black text-center font-black py-8 text-3xl uppercase no-underline hover:bg-white transition-colors">
              ¡LO QUIERO POR $20!
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} PLR MASTER PACK. NO AFILIADO A META/GOOGLE.
      </footer>
    </div>
  );
};

export default App;
