import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechnicalStack from '@/components/TechnicalStack';
import ChatbotSpecialization from '@/components/ChatbotSpecialization';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

function PortfolioPage() {
  return (
    <LanguageProvider>
      <Helmet>
        <title>Gabriel Benedicto | Full Stack Developer & Chatbot Specialist</title>
        <meta
          name="description"
          content="Professional portfolio of Gabriel Benedicto a Full Stack Developer and Chatbot Specialist with 4 years of experience. Expert in React, Node.js, TypeScript, and Blip platform integrations."
        />
      </Helmet>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <TechnicalStack />
          <ChatbotSpecialization />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default PortfolioPage;
