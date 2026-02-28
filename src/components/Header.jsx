import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    language,
    toggleLanguage,
    t
  } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: t.header.about,
    href: '#about'
  }, {
    name: t.header.skills,
    href: '#skills'
  }, {
    name: t.header.chatbot,
    href: '#chatbot'
  }, {
    name: t.header.projects,
    href: '#projects'
  }, {
    name: t.header.contact,
    href: '#contact'
  }];
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.a href="#" onClick={e => handleNavClick(e, '#hero')} className="text-2xl font-bold gradient-text-animated hover-scale cursor-pointer" whileHover={{
          scale: 1.05
        }}>&#123; Gabriel Benedicto &#125;</motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => <motion.a key={index} href={link.href} onClick={e => handleNavClick(e, link.href)} className="text-gray-300 hover:text-purple-400 transition-smooth relative group font-medium" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 group-hover:w-full transition-all duration-300" />
              </motion.a>)}
            
            {/* Language Toggle Button (Desktop) */}
            <motion.button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300 group" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.6
          }}>
              <Globe size={16} className="text-purple-400 group-hover:text-purple-300" />
              <span className="text-sm font-medium text-gray-300 w-6 text-center">
                {language.toUpperCase()}
              </span>
            </motion.button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
             {/* Language Toggle Button (Mobile) */}
             <button onClick={toggleLanguage} className="flex items-center gap-2 px-2 py-1 rounded-full border border-purple-500/30">
              <Globe size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-gray-300">
                {language.toUpperCase()}
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button className="text-white hover:text-purple-400 transition-smooth" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden mt-4 space-y-4 bg-[#0F0F0F]/95 backdrop-blur-md rounded-lg p-6 border border-purple-500/20">
              {navLinks.map((link, index) => <motion.a key={index} href={link.href} onClick={e => handleNavClick(e, link.href)} className="block text-gray-300 hover:text-purple-400 transition-smooth font-medium py-2" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  {link.name}
                </motion.a>)}
            </motion.div>}
        </AnimatePresence>
      </nav>
    </motion.header>;
};
export default Header;