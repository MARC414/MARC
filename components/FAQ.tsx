import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <HelpCircle className="w-6 h-6 text-marc-primary" />
           </div>
          <h2 className="text-3xl font-bold text-marc-dark mb-4 font-serif">Frequently Asked Questions</h2>
          <p className="text-slate-500">
            Common questions about my process, pricing, and how AI integration works.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all duration-300 ${openIndex === index ? 'border-marc-primary shadow-md' : 'border-slate-200 shadow-sm hover:border-blue-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold text-lg text-left ${openIndex === index ? 'text-marc-primary' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <span className={`ml-4 p-1 rounded-full transition-colors ${openIndex === index ? 'bg-blue-50 text-marc-primary' : 'text-slate-400'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;