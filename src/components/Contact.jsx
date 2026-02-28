import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gabrielpbenedicto@gmail.com',
      link: 'mailto:gabrielpbenedicto@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 (11) 9.8662-9946',
      link: 'https://wa.me/5511986629946'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'São Paulo / Brazil',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/BicaBenedicto',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gabrielbenedicto/',
      color: 'hover:text-blue-400'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black via-[#0F0F0F] to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.h2 
              key={t.contact.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text-animated">{t.contact.title}</span>
            </motion.h2>
          </AnimatePresence>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.p
              key={t.contact.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              {t.contact.subtitle}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-6">{t.contact.connectTitle}</h3>
              <div className="flex gap-4 mb-3">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg ${social.color} transition-all duration-300 hover:border-purple-500/50`}
                    aria-label={social.label}
                  >
                    {social.link ? (
                      <a
                        href={social.link}
                        target="_blank"
                        className="flex items-center gap-4"
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ) : (
                      <social.icon className="w-6 h-6" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
            
             {/* Additional Info */}
            <div className="dark-card p-6">
              <h4 className="text-lg font-bold mb-3 text-white">{t.contact.availableTitle}</h4>
              <ul className="space-y-2 text-gray-400">
                {t.contact.availableList.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text mb-6">{t.contact.infoTitle}</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="dark-card p-4 group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-smooth">
                        <info.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;