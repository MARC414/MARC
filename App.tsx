import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VerifiedExperience from './components/VerifiedExperience';
import Experience from './components/Experience';
import Services from './components/Services';
import AIStrategy from './components/AIStrategy';
import Credentials from './components/Credentials';
import CreativeCorner from './components/CreativeCorner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VerifiedExperience />
        <Experience />
        <Services />
        <AIStrategy />
        <Credentials />
        <CreativeCorner />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;