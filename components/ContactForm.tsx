import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    businessType: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblegrqk";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', businessType: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
       console.error("Form submission error:", error);
       setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif text-slate-900">Let's Build Your Strategy</h2>
            <p className="text-slate-500">
              Select a service below to get started. All leads are reviewed personally by me.
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Message Sent!</h3>
              <p className="text-slate-600">Thank you for reaching out. I will be in touch shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-marc-primary hover:text-blue-700 transition-colors underline font-semibold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-marc-primary focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-marc-primary focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">Business Type / Industry</label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    value={formState.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-marc-primary focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all"
                    placeholder="e.g. Interior Design, Local Service, eCommerce..."
                  />
                </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">Interested Service</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-marc-primary focus:border-transparent text-slate-900 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service...</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-marc-primary focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all resize-none"
                  placeholder="Tell me a bit about your business goals..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Something went wrong. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all uppercase tracking-wider ${
                  status === 'submitting' 
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                    : 'bg-marc-primary text-white hover:bg-blue-700 hover:shadow-lg shadow-blue-500/30'
                }`}
              >
                {status === 'submitting' ? (
                  'Processing...'
                ) : (
                  <>
                    Request Consultation <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;