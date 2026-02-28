import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const links = [
  {
    label: 'WhatsApp',
    href: 'http://wa.me/5511968715499?text=Ol%C3%A1,%20gostaria%20de%20encomendar%20um%20bolo%20da%20Doceria%20Benedictos',
    icon: <FaWhatsapp size={22} />,
    bg: '#25D366',
    text: '#FFF0F0',
    shadow: 'rgba(37, 211, 102, 0.4)',
  },
  {
    label: 'iFood',
    href: 'https://www.ifood.com.br/delivery/sao-paulo-sp/doceria-benedictos-jardim-jua/d3419ca7-a173-4ea0-9c03-a7d5440845bb?UTM_Medium=Site',
    icon: <img src="/static/IFoodLogo.svg" alt="iFood" className="h-6 w-auto" />,
    bg: '#FFF0F0',
    text: '#EA1D2C',
    shadow: 'rgba(234, 29, 44, 0.35)',
  },
  {
    label: '99Food',
    href: 'https://oia.99app.com/dlp9/g6O3aI?share_media=Site',
    icon: <img src="/static/99foodLogo.svg" alt="99Food" className="h-6 w-auto" />,
    gradient: 'linear-gradient(135deg, #FF6B00 5%, #F7C500 100%)',
    text: '#FFF0F0',
    shadow: 'rgba(255, 107, 0, 0.45)',
  },
//   {
//     label: 'Keeta',
//     href: '',
//     icon: <img src="/static/keetaLogo.png" alt="Keeta" className="h-6 w-auto" />,
//     gradient: 'linear-gradient(135deg, #1FAD55 5%, #F7C500 100%)',
//     text: '#FFF0F0',
//     shadow: 'rgba(31, 173, 85, 0.45)',
//   },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/doceriabenedictos/',
    icon: <FaInstagram size={22} />,
    gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    text: '#FFF0F0',
    shadow: 'rgba(220, 39, 67, 0.4)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

function DoceriaPage() {
  return (
    <>
      <Helmet>
        <title>Doceria Benedictos</title>
        <meta
          name="description"
          content="Doceria Benedictos — doces artesanais. Peça pelo WhatsApp ou encontre-nos no iFood, 99Food e Keeta."
        />
      </Helmet>

      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/static/background.png"
            alt="Doceria Benedictos background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-5 py-12">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-6"
          >
            <img
              src="/static/logo.png"
              alt="Doceria Benedictos logo"
              className="w-40 h-40 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white text-center mb-1 drop-shadow-lg"
          >
            Doceria Benedictos
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-sm text-center mb-10"
          >
            20 anos de forno e o capricho que você sente em cada colherada.
            <br/>
            Escolha como quer se deliciar hoje: 👇
          </motion.p>

          {/* Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 w-full max-w-sm"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href || undefined}
                target={link.href ? '_blank' : undefined}
                rel={link.href ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: link.gradient || link.bg,
                  color: link.text,
                  boxShadow: link.href ? `0 4px 20px ${link.shadow}` : 'none',
                  cursor: link.href ? 'pointer' : 'default',
                  opacity: link.href ? 1 : 0.85,
                }}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold text-base transition-all duration-200 select-none"
              >
                <span className="flex-shrink-0 w-7 flex items-center justify-center">
                  {link.icon}
                </span>
                <span className="flex-1 text-center">{link.label}</span>
                <span className="w-7" />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 text-white/30 text-xs text-center"
          >
            © {new Date().getFullYear()} Doceria Benedictos
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default DoceriaPage;
