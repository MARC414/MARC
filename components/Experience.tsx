import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { WORK_EXPERIENCE, NICHE_EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-slate-900 rounded-full">
            The Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-serif">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-marc-primary to-cyan-500">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
            My career is a blend of <span className="font-semibold text-slate-900">educational leadership</span> and <span className="font-semibold text-slate-900">digital innovation</span>. 
            From translating for Microsoft to leading SEO strategies for US firms, I bring 15+ years of diverse experience.
          </p>
        </div>

        {/* Niche Bar */}
        <div className="mb-20 overflow-hidden">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Industries & Niches</p>
          <div className="flex flex-wrap justify-center gap-3">
             {NICHE_EXPERIENCE.map((niche, index) => (
                <span key={index} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-600 shadow-sm hover:border-marc-primary hover:text-marc-primary transition-colors cursor-default">
                  {niche}
                </span>
             ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-marc-primary via-slate-300 to-slate-100 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {WORK_EXPERIENCE.map((job, index) => {
              const Icon = job.icon || Briefcase;
              const isEven = index % 2 === 0;

              return (
                <div key={job.id} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot (Mobile: Left, Desktop: Center) */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-marc-primary shadow-lg transform -translate-x-1/2 z-10"></div>
                  
                  {/* Icon Badge */}
                  <div className={`hidden md:flex absolute left-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-100 shadow-md text-marc-primary transform -translate-x-1/2 ${isEven ? '-translate-y-16' : '-translate-y-16'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-5/12"></div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-5/12 w-full">
                    <div className={`group relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isEven ? 'text-left' : 'md:text-left'} overflow-hidden`}>
                      
                      {/* Decorative Background Blob */}
                      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex flex-col mb-4">
                          <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-marc-primary bg-blue-50 rounded w-fit border border-blue-100">
                            {job.period}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-marc-primary transition-colors font-serif">{job.title}</h3>
                          <div className="flex items-center text-sm text-slate-500 font-medium mt-1">
                            <span>{job.company}</span>
                            <span className="mx-2 text-slate-300">•</span>
                            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" />{job.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {job.description.map((desc, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-600 leading-relaxed">
                                <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 bg-marc-primary/60 rounded-full flex-shrink-0"></span>
                                {desc}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold text-slate-400 bg-slate-50 rounded border border-slate-100">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
