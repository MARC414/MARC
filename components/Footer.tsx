import React from 'react';
import { Linkedin, Twitter, Mail, Facebook, Globe, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <span className="text-3xl font-black tracking-tighter text-slate-900 font-serif">MARC</span>
             </div>
             <p className="text-slate-500 leading-relaxed max-w-sm">
               Empowering businesses with 15 years of content mastery blended with advanced AI marketing strategies.
             </p>
             <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/farhan-contentwriter/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-full border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/farhan.momen/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-full border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/Ahmedur35734023" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-full border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 inline-block">Contact Details</h3>
            <div className="space-y-4">
              <div>
                 <p className="text-xs font-bold text-marc-primary uppercase tracking-wide mb-1">M.A.R.C</p>
                 <p className="text-slate-700 font-medium">Momen Ahmedur Rahman Chowdhury</p>
              </div>
              
              <div className="flex items-start group">
                 <Mail className="w-5 h-5 text-slate-400 group-hover:text-marc-primary mt-0.5 mr-3 transition-colors" />
                 <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Email</p>
                    <a href="mailto:marcwriter2025@gmail.com?subject=Inquiry%20from%20Portfolio" className="text-slate-700 hover:text-marc-primary font-medium transition-colors break-all">
                      marcwriter2025@gmail.com
                    </a>
                 </div>
              </div>

              <div className="flex items-start group">
                 <Phone className="w-5 h-5 text-slate-400 group-hover:text-green-500 mt-0.5 mr-3 transition-colors" />
                 <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">WhatsApp</p>
                    <a href="https://wa.me/8801784385335?text=Hi%20MARC,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-green-600 font-medium transition-colors">
                      +880 1784 385 335
                    </a>
                 </div>
              </div>

              <div className="flex items-start group">
                 <Globe className="w-5 h-5 text-slate-400 group-hover:text-marc-primary mt-0.5 mr-3 transition-colors" />
                 <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Company Website</p>
                    <a href="https://webworm.com.au" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-marc-primary font-medium transition-colors">
                      webworm.com.au
                    </a>
                 </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
               <li><a href="#projects" className="text-slate-500 hover:text-marc-primary transition-colors hover:translate-x-1 inline-block">Projects</a></li>
               <li><a href="#services" className="text-slate-500 hover:text-marc-primary transition-colors hover:translate-x-1 inline-block">Services</a></li>
               <li><a href="#ai-strategy" className="text-slate-500 hover:text-marc-primary transition-colors hover:translate-x-1 inline-block">AI Strategy</a></li>
               <li><a href="#credentials" className="text-slate-500 hover:text-marc-primary transition-colors hover:translate-x-1 inline-block">Credentials</a></li>
               <li><a href="#faq" className="text-slate-500 hover:text-marc-primary transition-colors hover:translate-x-1 inline-block">FAQ</a></li>
               <li><a href="#contact" className="text-marc-primary font-bold hover:text-blue-700 transition-colors">Book a Consultation</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Momen Ahmedur Rahman Chowdhury. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Open for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;