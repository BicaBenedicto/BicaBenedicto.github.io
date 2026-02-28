import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/BicaBenedicto' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/gabrielbenedicto/' },
    { icon: Mail, label: 'Email', link: 'mailto:gabrielpbenedicto@gmail.com' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t border-purple-500/20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] to-black" />

      <div className="relative z-10 container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text-animated">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col space-y-2">
              {[t.header.about, t.header.skills, t.header.chatbot, t.header.projects, t.header.contact].map((link, idx) => (
                <a
                  key={idx}
                  href={`#${['about', 'skills', 'chatbot', 'projects', 'contact'][idx]}`}
                  onClick={(e) => handleNavClick(e, `#${['about', 'skills', 'chatbot', 'projects', 'contact'][idx]}`)}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">{t.footer.connect}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  {social.link ? (
                    <a
                      href={social.link}
                      target="_blank"
                      className="flex items-center gap-4"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </a>
                  ) : (
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  )}
                </button>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              {t.footer.availability}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Portfolio. {t.footer.rights}
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>{t.footer.madeWith}</span>
            <Heart className="w-4 h-4 text-purple-500 fill-purple-500 animate-pulse" />
            <span>{t.footer.and}</span>
            <span className="text-purple-400 font-medium">React</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-purple-500 hover:bg-purple-600 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group z-50"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;