import React from 'react';
import { Palette, Leaf, Heart, Video, PenTool, ExternalLink, Bot } from 'lucide-react';
import { CREATIVE_WORKS } from '../constants';

const CreativeCorner: React.FC = () => {
  return (
    <section id="creative" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-marc-dark mb-4 font-serif">The Creative & Conscious Corner</h2>
            <p className="text-gray-600">
              Marketing requires soul. My artistic background and personal values in organic living, yoga, and spirituality inform the authenticity I bring to every project.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
             <div className="flex items-center text-marc-organic text-xs md:text-sm font-medium bg-green-50 px-3 py-1 rounded-full border border-green-100">
               <Leaf className="w-4 h-4 mr-2" /> Organic Living & Eco-Style
             </div>
             <div className="flex items-center text-rose-500 text-xs md:text-sm font-medium bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
               <Heart className="w-4 h-4 mr-2" /> Yoga & Spirituality
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CREATIVE_WORKS.map((work, idx) => (
            <a 
              key={idx} 
              href={work.link || '#'}
              target={work.link && work.link !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/5] cursor-pointer block border border-slate-200 bg-slate-900"
            >
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Optional Badges (e.g. AI Generated) */}
              {work.tags && work.tags.includes('Generated with Nano Banana') && (
                 <div className="absolute top-4 right-4 z-20">
                    <span className="flex items-center gap-1.5 bg-yellow-400 text-slate-900 text-[10px] font-black uppercase px-2 py-1 rounded shadow-md">
                        <Bot className="w-3 h-3" /> Nano Banana
                    </span>
                 </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-marc-primary text-xs font-bold uppercase tracking-wider mb-2 block">{work.type}</span>
                    <h3 className="text-white text-xl font-bold mb-1 font-serif">{work.title}</h3>
                    {idx === 1 && <p className="text-slate-300 text-xs flex items-center mt-1"><Video className="w-3 h-3 mr-1"/> Broadcasted on Masranga TV</p>}
                    {idx === 2 && <p className="text-slate-300 text-xs mt-1">Documenting the Tanchangya Tribe</p>}
                    
                    {work.link && work.link !== '#' && (
                        <div className="mt-4 flex items-center text-xs font-bold text-white/80 group-hover:text-white uppercase tracking-wider">
                            View Project <ExternalLink className="w-3 h-3 ml-1" />
                        </div>
                    )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="italic text-gray-500 text-lg font-serif">
                "Creativity is the thread that connects my sketches to my strategies."
            </p>
        </div>

      </div>
    </section>
  );
};

export default CreativeCorner;