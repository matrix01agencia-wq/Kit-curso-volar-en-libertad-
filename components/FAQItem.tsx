
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  q: string;
  a: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 bg-zinc-900/50 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
      >
        <span className="font-montserrat font-bold text-lg md:text-xl text-white uppercase">{q}</span>
        {isOpen ? <ChevronUp className="text-[#00FF00]" /> : <ChevronDown className="text-gray-500" />}
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-6 border-t border-white/5' : 'max-h-0'}`}>
        <p className="text-gray-400 text-lg leading-relaxed">{a}</p>
      </div>
    </div>
  );
};
