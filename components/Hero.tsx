import React from 'react';
import { ArrowRight, Sparkles, LayoutGrid, CheckCircle, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an external link (http/https), let it behave natively
    if (href.startsWith('http')) {
        return;
    }

    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Approximate height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-slate-50">
      {/* Abstract Animated Background - Subtler Grey/Blue tones */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[45rem] h-[45rem] rounded-full bg-slate-200/50 blur-[100px] opacity-60 mix-blend-multiply animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[40rem] h-[40rem] rounded-full bg-blue-100/40 blur-[100px] opacity-60 mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Modern Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-10 transform hover:scale-105 transition-transform duration-300 cursor-default ring-4 ring-slate-50/50">
            <Sparkles className="w-4 h-4 mr-2 text-marc-primary fill-marc-primary" />
            <span className="uppercase tracking-widest text-[11px] font-bold text-slate-500">AI Digital Marketing Solutions</span>
          </div>
          
          {/* High-Impact Typography */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8 font-serif">
            15 Years of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marc-primary via-blue-600 to-cyan-600">Content Mastery.</span>
          </h1>
          
          {/* Persuasive Subcopy */}
          <div className="mb-12 flex flex-col items-center">
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-6">
              I blend classic storytelling expertise with <span className="text-slate-900 font-semibold">cutting-edge AI strategy</span> to build high-growth engines for your business.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-600 font-medium bg-white/80 backdrop-blur-sm py-2 px-6 rounded-full border border-slate-200 shadow-sm">
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1.5 text-marc-primary"/> SEO Optimization</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1.5 text-marc-primary"/> Content Strategy</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1.5 text-marc-primary"/> AI Automation</span>
            </div>
          </div>
          
          {/* High-Converting CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="https://drive.google.com/file/d/1AQlDiVLeqTtLN3mrk2815tf1xl-Luwr0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-marc-primary hover:bg-blue-700 md:text-lg transition-all shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 hover:shadow-blue-500/40 uppercase tracking-wide group"
            >
              Download CV
              <Download className="ml-2 -mr-1 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all hover:border-blue-300 uppercase tracking-wide hover:text-marc-primary hover:shadow-lg shadow-sm group"
            >
              <LayoutGrid className="mr-2 h-5 w-5 text-slate-400 group-hover:text-marc-primary transition-colors" />
              Explore Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;