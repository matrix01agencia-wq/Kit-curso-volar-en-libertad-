
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Sparkles } from 'lucide-react';

interface BonusCardProps {
  id: number;
  title: string;
  description: string;
  value: number;
  images: string[];
}

export const BonusCard: React.FC<BonusCardProps> = ({ title, description, value, images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="group bg-[#080808] border border-white/5 p-8 md:p-12 hover:border-[#FF00FF]/40 transition-all duration-700 relative flex flex-col h-full overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF00FF]/5 blur-3xl group-hover:bg-[#FF00FF]/15 transition-all"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-[#FF00FF] text-[10px] font-black uppercase tracking-widest mb-2">
            <Sparkles className="w-3 h-3" />
            <span>BONO EXCLUSIVO VIP</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-montserrat font-black text-white uppercase leading-none">{title}</h3>
        </div>
        <span className="text-lg font-black text-[#00FF00] whitespace-nowrap bg-black border-2 border-[#00FF00]/40 px-4 py-2 shadow-[0_0_20px_rgba(0,255,0,0.15)]">
          VALOR: ${value} USD
        </span>
      </div>
      
      <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">{description}</p>

      {/* Custom Carousel with improved visuals */}
      <div className="relative mb-10 bg-black/80 overflow-hidden aspect-video border border-white/5 shadow-2xl group/carousel">
        <div 
          className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full h-full flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]">
              <img 
                src={img} 
                alt={`${title} mockup ${idx + 1}`} 
                className="max-h-full max-w-full reflection-effect object-contain shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/90 text-white rounded-full hover:bg-[#FF00FF] transition-all z-10 opacity-0 group-hover/carousel:opacity-100 scale-90 group-hover/carousel:scale-100 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/90 text-white rounded-full hover:bg-[#FF00FF] transition-all z-10 opacity-0 group-hover/carousel:opacity-100 scale-90 group-hover/carousel:scale-100 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#FF00FF] w-8' : 'bg-white/20 hover:bg-white/40 cursor-pointer'}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-auto relative z-10">
        <button className="w-full bg-white hover:bg-[#00FF00] text-black font-montserrat font-black py-6 px-6 transition-all duration-500 uppercase text-sm tracking-tight flex items-center justify-center gap-3 group-hover:shadow-[0_0_40px_rgba(0,255,0,0.2)]">
          ¡AÑADIR ESTE BONO A MI PACK!
          <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
};
