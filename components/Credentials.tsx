import React from 'react';
import { Award, GraduationCap, LayoutTemplate } from 'lucide-react';
import { CREDENTIALS, CERTIFICATIONS } from '../constants';

const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-marc-dark mb-4 font-serif">Education & Qualifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             A strong academic foundation in Arts and Linguistics, fortified by technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Formal Education */}
          <div>
            <h3 className="text-xl font-bold text-marc-dark mb-8 flex items-center border-b border-slate-100 pb-4">
              <GraduationCap className="w-6 h-6 text-marc-primary mr-3" />
              Academic Background
            </h3>
            <div className="space-y-8">
              {CREDENTIALS.map((cred, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100 hover:border-marc-primary transition-colors group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-marc-primary transition-colors"></div>
                  <h4 className="font-bold text-gray-900 text-lg leading-none mb-2">{cred.title}</h4>
                  <div className="flex justify-between items-center text-sm text-marc-primary font-semibold mb-2">
                    <span>{cred.institution}</span>
                    <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-xs">{cred.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{cred.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Tech Skills */}
          <div>
             <h3 className="text-xl font-bold text-marc-dark mb-8 flex items-center border-b border-slate-100 pb-4">
              <Award className="w-6 h-6 text-marc-accent mr-3" />
              Certifications & Skills
            </h3>
            
            <div className="space-y-6 mb-10">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-gray-900">{cert.title}</h4>
                  <p className="text-sm text-marc-primary mb-1">{cert.institution}</p>
                  <p className="text-xs text-gray-500">{cert.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <h4 className="font-bold text-gray-800 mb-6 flex items-center">
                 <LayoutTemplate className="w-5 h-5 mr-2 text-slate-400" />
                 Technical Proficiency
              </h4>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium text-gray-700">WordPress & CMS</span>
                    <span className="text-gray-400">Expert</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-marc-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium text-gray-700">SEO & Analytics</span>
                    <span className="text-gray-400">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium text-gray-700">HTML/CSS/JS</span>
                    <span className="text-gray-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '80%' }}></div>
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

export default Credentials;
