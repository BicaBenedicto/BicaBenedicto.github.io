import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590085327097-cf67e44baab3"
          alt="Modern workspace with laptop and coding environment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            key={t.hero.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Main Heading with Animated Gradient */}
          <div className="min-h-[200px] md:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={t.hero.role1} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="block text-white mb-2">{t.hero.greeting}</span>
                <span className="block gradient-text-animated neon-glow">
                  {t.hero.role1}
                </span>
                <span className="block text-white">&</span>
                <span className="block gradient-text-animated neon-glow">
                  {t.hero.role2}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subheading */}
          <AnimatePresence mode="wait">
            <motion.p
              key={t.hero.subheading.part1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {t.hero.subheading.part1} <span className="text-purple-400 font-semibold">{t.hero.subheading.highlight1}</span> {t.hero.subheading.part2} <span className="text-purple-400 font-semibold">{t.hero.subheading.highlight2}</span>{t.hero.subheading.part3}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={handleCTAClick}
              className="btn-glow group flex items-center gap-2 text-lg px-8 py-4"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={t.hero.ctaPrimary}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {t.hero.ctaPrimary}
                </motion.span>
              </AnimatePresence>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#projects');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="group flex items-center gap-2 text-lg px-8 py-4 bg-transparent border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500 rounded-lg transition-smooth font-semibold"
            >
              <Code2 size={20} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={t.hero.ctaSecondary}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {t.hero.ctaSecondary}
                </motion.span>
              </AnimatePresence>
            </a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-12"
          >
            {['React', 'Node.js', 'TypeScript', 'Blip Platform'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full text-gray-300 text-sm font-medium hover:border-purple-500/50 transition-smooth"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;