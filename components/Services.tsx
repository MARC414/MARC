import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-marc-dark mb-4 font-serif">My Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light">
            Comprehensive digital solutions tailored for home service businesses and small enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-marc-primary group-hover:text-white transition-colors border border-slate-200">
                  <Icon className="w-6 h-6 text-marc-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
             <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center text-marc-primary font-bold hover:text-marc-dark transition-colors border-b-2 border-marc-primary hover:border-marc-dark pb-0.5"
            >
              Discuss a custom package for your business &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;