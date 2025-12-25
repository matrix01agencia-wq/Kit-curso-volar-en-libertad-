
import React from 'react';
import { Eye } from 'lucide-react';

interface CatalogCardProps {
  title: string;
  count: string;
  image: string;
}

export const CatalogCard: React.FC<CatalogCardProps> = ({ title, count, image }) => {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#FF00FF]/50 transition-all cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
        <h4 className="text-xl font-montserrat font-black text-white uppercase mb-1 tracking-tighter">{title}</h4>
        <p className="text-[#00FF00] text-[10px] font-black uppercase mb-4">{count}</p>
        
        <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          VER MUESTRAS <Eye className="w-4 h-4" />
        </button>
      </div>
      
      <div className="absolute top-4 left-4 p-2 bg-black/60 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black text-white">READY TO USE</span>
      </div>
    </div>
  );
};
