import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Experience from './Experience';
import VerifiedExperience from './VerifiedExperience';
import Services from './Services';
import AIStrategy from './AIStrategy';
import Credentials from './Credentials';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import CreativeCorner from './CreativeCorner';
import Testimonials from './Testimonials';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow DOM to settle
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
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
    </>
  );
};

export default Home;