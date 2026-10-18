import React, { useState } from 'react';
import { Sparkles, LayoutGrid, CheckCircle, Download, ShieldCheck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) {
      return;
    }

    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[42rem] h-[42rem] rounded-full bg-blue-100/40 blur-[110px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[38rem] h-[38rem] rounded-full bg-cyan-100/30 blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 transform hover:scale-105 transition-transform duration-300 cursor-default">
              <Sparkles className="w-4 h-4 mr-2 text-marc-primary fill-marc-primary" />
              <span className="uppercase tracking-widest text-[11px] font-bold text-slate-600">AI Digital Marketing Solutions</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6 font-serif">
              15 Years of <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-marc-primary via-blue-600 to-cyan-600">Content Mastery.</span>
            </h1>
            
            {/* Subcopy */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light mb-8">
              I blend classic storytelling expertise with <span className="text-slate-900 font-semibold">cutting-edge AI strategy</span> to build scalable, high-growth revenue engines for your business.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-700 font-medium mb-10">
              <span className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle className="w-4 h-4 mr-1.5 text-marc-primary flex-shrink-0" />
                SEO Optimization
              </span>
              <span className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle className="w-4 h-4 mr-1.5 text-marc-primary flex-shrink-0" />
                Content Strategy
              </span>
              <span className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <CheckCircle className="w-4 h-4 mr-1.5 text-marc-primary flex-shrink-0" />
                AI Automation
              </span>
            </div>
            
            {/* High-Converting CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5">
              <a 
                href="https://drive.google.com/file/d/1AQlDiVLeqTtLN3mrk2815tf1xl-Luwr0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-7 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-marc-primary hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 uppercase tracking-wide group"
              >
                Download CV
                <Download className="ml-2 -mr-1 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')}
                className="inline-flex justify-center items-center px-7 py-3.5 border border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all hover:border-blue-300 uppercase tracking-wide hover:text-marc-primary shadow-sm hover:shadow"
              >
                <LayoutGrid className="mr-2 h-5 w-5 text-slate-400 group-hover:text-marc-primary transition-colors" />
                Explore Services
              </a>
            </div>

            {/* Credibility Footnote */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified track record with US, Australian & Bangladeshi enterprises</span>
            </div>

          </div>

          {/* Right Column: Executive Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Backlight decorative halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-400/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

              {/* Main Portrait Card */}
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-slate-200/90 overflow-hidden group">
                
                {/* Photo Viewport */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                  <img 
                    src="/profile.png"
                    alt="Momen Ahmedur Rahman Chowdhury (MARC) - Digital Marketing Director"
                    loading="eager"
                    decoding="async"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-90'
                    }`}
                  />

                  {/* Fallback avatar overlay if image fails */}
                  {imageError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-3xl font-serif font-black mb-3">
                        M
                      </div>
                      <p className="font-serif font-bold text-lg">Momen A. R. Chowdhury</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Digital Marketing Director</p>
                    </div>
                  )}

                  {/* Top-Right Badge: Years of Mastery */}
                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-md flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-marc-primary" />
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">15+ Yrs Exp</span>
                  </div>

                  {/* Bottom Gradient Overlay for High Contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>

                  {/* Bottom Profile Information Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">Open for Strategic Roles</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl leading-snug text-white">Momen A. R. Chowdhury</h3>
                    <p className="text-xs text-slate-300 font-light mt-0.5">Digital Marketing Director · AI Strategist</p>
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

export default Hero;