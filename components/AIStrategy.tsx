import React from 'react';
import { Cpu, Globe, BarChart3, Bot, ExternalLink, Zap } from 'lucide-react';
import { AI_TOOLS } from '../constants';

const AIStrategy: React.FC = () => {
  return (
    <section id="ai-strategy" className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-marc-primary text-xs font-bold uppercase tracking-widest mb-4 border border-slate-200">
            AI Marketing Specialization
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif text-slate-900">Transitioning to AI-First Strategy</h2>
          <p className="text-slate-600 text-lg mb-4 font-light">
            I have fully transitioned my workflow to leverage the world's most advanced AI models. 
            My philosophy is simple: stay lean and efficient. 
          </p>
          <p className="text-slate-500 text-sm italic">
            *I actively utilize free plans of these robust tools to maximize efficiency and keep overhead low for my small business clients.
          </p>
        </div>

        {/* AI Tool Stack */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4">
            {AI_TOOLS.map((tool) => (
              <div key={tool.name} className="flex items-center px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-marc-primary hover:shadow-md transition-all cursor-default">
                <Bot className="w-4 h-4 mr-2 text-marc-primary" />
                <span className="text-sm font-medium text-slate-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Spotlight - Sunlit */}
        <div id="sunlit-spotlight" className="bg-white rounded-2xl p-1 border border-slate-200 shadow-2xl overflow-hidden">
          <div className="bg-slate-50/50 p-8 md:p-12 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="bg-marc-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Current Role & Case Study</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-slate-900 font-serif">Digital Marketing Lead at Sunlit</h3>
                <p className="text-slate-500 mb-6 text-sm font-sans uppercase tracking-wide">Premier Bangladeshi Interior & Home-Service Company</p>
                
                <p className="text-slate-600 mb-6 font-light leading-relaxed">
                    Responsible for full-stack client acquisition and digital presence. I built their digital infrastructure from the ground up using WordPress and Elementor.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Globe className="w-6 h-6 text-marc-primary mr-3 mt-0.5" />
                    <span className="text-slate-600">
                        <strong className="text-slate-900">Web Development:</strong> Designed & deployed <span className="text-marc-primary border-b border-blue-200">sunlitbd.com</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-6 h-6 text-marc-primary mr-3 mt-0.5" />
                    <span className="text-slate-600">
                        <strong className="text-slate-900">Strategy:</strong> AI-driven lead generation & market positioning.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="w-6 h-6 text-marc-primary mr-3 mt-0.5" />
                    <span className="text-slate-600">
                        <strong className="text-slate-900">Execution:</strong> Managing SMM, SEO, and client acquisition funnels.
                    </span>
                  </li>
                </ul>
                <a 
                  href="https://sunlitbd.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-marc-primary font-bold hover:text-blue-800 transition-colors border-b-2 border-marc-primary hover:border-blue-800 pb-1"
                >
                  Visit Live Site <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                {/* Simulated Screen */}
                <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white aspect-video flex items-center justify-center relative transform group-hover:scale-[1.02] transition-transform duration-500">
                   <img 
                    src="https://s0.wp.com/mshots/v1/https://sunlitbd.com?w=800&h=450" 
                    alt="Sunlit Website Preview" 
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                   />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="bg-white/90 backdrop-blur-md text-slate-900 px-6 py-4 rounded-xl border border-slate-200 text-center shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                         <span className="block text-xl font-bold font-serif">sunlitbd.com</span>
                         <span className="text-xs text-slate-500 uppercase tracking-wide">WordPress + Elementor</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIStrategy;