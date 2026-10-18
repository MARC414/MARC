import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ShoppingBag, Server, Compass, Building2, CheckCircle2, Clock } from 'lucide-react';
import { FEATURED_PROJECTS } from '../constants';
import { FeaturedProject } from '../types';

type CategoryFilter = 'all' | 'client' | 'next' | 'affiliate';

const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = activeCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  const filterTabs: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: FEATURED_PROJECTS.length },
    { id: 'client', label: 'Client Work', count: FEATURED_PROJECTS.filter(p => p.category === 'client').length },
    { id: 'next', label: 'Next Projects', count: FEATURED_PROJECTS.filter(p => p.category === 'next').length },
    { id: 'affiliate', label: 'Affiliate & Ventures', count: FEATURED_PROJECTS.filter(p => p.category === 'affiliate').length },
  ];

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)', backgroundSize: '36px 36px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 text-marc-primary text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
            <Layers className="w-3.5 h-3.5 mr-1.5" />
            Live Client Work & Digital Ventures
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-5 font-serif tracking-tight">
            Featured Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-marc-primary via-blue-600 to-cyan-600">Digital Ecosystem</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Explore live client storefronts, scalable tourism engines, and high-performance hosting platforms designed, deployed, and managed under my strategic direction.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 max-w-full overflow-x-auto shadow-inner">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-md shadow-slate-200 border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/50'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-blue-50 text-marc-primary'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: FeaturedProject) => {
            const hasError = imageErrors[project.id];
            const currentImg = hasError && project.fallbackImageUrl ? project.fallbackImageUrl : project.imageUrl;

            // Determine status styling
            const isDev = project.statusType === 'development';
            const isUpcoming = project.statusType === 'upcoming';
            const isLive = project.statusType === 'live';

            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Visual Snapshot Container */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-100">
                  <img
                    src={currentImg}
                    alt={`${project.title} live preview`}
                    loading="lazy"
                    decoding="async"
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Gradient Backdrop for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Top Floating Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-md backdrop-blur-md border ${
                        isDev
                          ? 'bg-amber-500/90 text-white border-amber-400/50'
                          : isUpcoming
                          ? 'bg-cyan-600/90 text-white border-cyan-400/50'
                          : 'bg-emerald-600/90 text-white border-emerald-400/50'
                      }`}
                    >
                      {isDev && <span className="w-2 h-2 rounded-full bg-white mr-2 animate-ping"></span>}
                      {isLive && <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />}
                      {isUpcoming && <Clock className="w-3.5 h-3.5 mr-1.5" />}
                      {project.status}
                    </span>
                  </div>

                  {/* Top Right Category Pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-slate-800 shadow-sm border border-slate-200/80 backdrop-blur-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Overlay Title on Hover/Resting */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <div>
                      <span className="text-xs text-slate-300 font-mono tracking-wide uppercase">
                        {project.url.replace('https://', '')}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 font-serif">
                      {project.headline}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Tech & Strategy Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 rounded-lg border border-slate-200/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      {project.metrics || 'Cloudflare & Modern Stack'}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-marc-primary hover:text-blue-800 transition-colors group/link"
                    >
                      Visit Live Project
                      <ExternalLink className="ml-1.5 w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
