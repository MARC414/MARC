import React from 'react';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';

const VerifiedExperience: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center space-x-2 text-marc-primary font-bold uppercase tracking-wider text-xs mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <CheckCircle className="w-4 h-4" />
              <span>Officially Verified</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">Global Internship Highlights</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Practical experience with US-based GaoTek Inc., demonstrating proficiency in digital marketing and web development.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certificate 1: Web Development */}
          <a 
            href="https://drive.google.com/file/d/1lai1TXUF5n2yzjBEuk76_9__DCt0K1sJ/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
          >
            <div className="md:w-2/5 h-48 md:h-auto bg-slate-200 relative overflow-hidden">
               {/* Transformed Google Drive link to direct image for rendering */}
               <img 
                 src="https://lh3.googleusercontent.com/d/1lai1TXUF5n2yzjBEuk76_9__DCt0K1sJ" 
                 alt="Web Development Certificate" 
                 width="600"
                 height="400"
                 loading="lazy"
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 onError={(e) => {
                   // Fallback if image load fails
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-blue-100');
                 }}
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Award className="w-12 h-12 text-slate-400 opacity-50" />
               </div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-marc-primary transition-colors">Web Development</h3>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-marc-primary" />
              </div>
              <p className="text-sm font-semibold text-slate-500 mb-4">GaoTek Inc. (USA)</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Specialized training and practical application of WordPress, PHP, and modern web technologies in a global remote environment.
              </p>
              <span className="text-xs font-bold text-marc-primary uppercase tracking-wide">View Certificate &rarr;</span>
            </div>
          </a>

          {/* Certificate 2: Digital Marketing */}
          <a 
            href="https://drive.google.com/file/d/1npX6rLzWH4uBBj1Ul6yGj46O1JBq_Uyq/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
          >
            <div className="md:w-2/5 h-48 md:h-auto bg-slate-200 relative overflow-hidden">
               {/* Transformed Google Drive link to direct image for rendering */}
               <img 
                 src="https://lh3.googleusercontent.com/d/1npX6rLzWH4uBBj1Ul6yGj46O1JBq_Uyq" 
                 alt="Digital Marketing Certificate" 
                 width="600"
                 height="400"
                 loading="lazy"
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-purple-100');
                 }}
               />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Award className="w-12 h-12 text-slate-400 opacity-50" />
               </div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-marc-primary transition-colors">Digital Marketing</h3>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-marc-primary" />
              </div>
              <p className="text-sm font-semibold text-slate-500 mb-4">GaoTek Inc. (USA)</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Comprehensive internship covering SEO strategies, content marketing, and global campaign management.
              </p>
              <span className="text-xs font-bold text-marc-primary uppercase tracking-wide">View Certificate &rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VerifiedExperience;