import React from 'react';
import { Quote, User } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-marc-primary text-xs font-bold uppercase tracking-widest mb-4 border border-slate-200">
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Client <span className="text-marc-primary">Stories</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Don't just take my word for it. Here is what partners and clients have to say about our collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full">
              <div className="absolute top-6 right-8 text-slate-200 group-hover:text-blue-100 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div className="relative z-10 flex-grow">
                 <p className="text-slate-600 italic leading-relaxed text-sm mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-slate-200 mt-auto">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-marc-primary">
                    <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">{testimonial.name}</h4>
                  <div className="flex flex-col sm:flex-row sm:gap-1 text-xs">
                    <span className="text-slate-500">{testimonial.role}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="text-marc-primary font-semibold">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;