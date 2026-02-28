import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Network, Puzzle, MessageSquare, MessageCircle, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ChatbotSpecialization = () => {
  const { t } = useLanguage();

  const integrations = [
    {
      name: t.chatbot.integrationList[0].name,
      description: t.chatbot.integrationList[0].description,
      icon: Network,
      color: 'from-green-400 to-green-600'
    },
    {
      name: t.chatbot.integrationList[1].name,
      description: t.chatbot.integrationList[1].description,
      icon: MessageSquare,
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: t.chatbot.integrationList[2].name,
      description: t.chatbot.integrationList[2].description,
      icon: Network,
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: t.chatbot.integrationList[3].name,
      description: t.chatbot.integrationList[3].description,
      icon: Puzzle,
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: t.chatbot.integrationList[4].name,
      description: t.chatbot.integrationList[4].description,
      icon: Puzzle,
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: t.chatbot.integrationList[5].name,
      description: t.chatbot.integrationList[5].description,
      icon: Network,
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      name: t.chatbot.integrationList[6].name,
      description: t.chatbot.integrationList[6].description,
      icon: ShoppingCart,
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      name: t.chatbot.integrationList[7].name,
      description: t.chatbot.integrationList[7].description,
      icon: Network,
      color: 'from-indigo-400 to-green-600'
    },
    {
      name: t.chatbot.integrationList[8].name,
      description: t.chatbot.integrationList[8].description,
      icon: MessageCircle,
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      name: t.chatbot.integrationList[9].name,
      description: t.chatbot.integrationList[9].description,
      icon: Zap,
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      name: t.chatbot.integrationList[10].name,
      description: t.chatbot.integrationList[10].description,
      icon: Network,
      color: 'from-indigo-400 to-red-600'
    },
    {
      name: t.chatbot.integrationList[11].name,
      description: t.chatbot.integrationList[11].description,
      icon: Network,
      color: 'from-indigo-400 to-yellow-600'
    }
  ];

  const features = [
    {
      icon: Bot,
      title: t.chatbot.features[0].title,
      description: t.chatbot.features[0].description
    },
    {
      icon: Network,
      title: t.chatbot.features[1].title,
      description: t.chatbot.features[1].description
    },
    {
      icon: Puzzle,
      title: t.chatbot.features[2].title,
      description: t.chatbot.features[2].description
    },
    {
      icon: MessageSquare,
      title: t.chatbot.features[3].title,
      description: t.chatbot.features[3].description
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="chatbot" className="relative py-24 bg-gradient-to-b from-black via-[#0F0F0F] to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            key={t.chatbot.badge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
          >
            <Bot size={16} className="text-purple-400" />
            <span>{t.chatbot.badge}</span>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.h2 
              key={t.chatbot.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text-animated">{t.chatbot.title}</span>
            </motion.h2>
          </AnimatePresence>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
          
          <AnimatePresence mode="wait">
            <motion.p
              key={t.chatbot.subtitle.part1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 text-lg max-w-3xl mx-auto"
            >
              {t.chatbot.subtitle.part1} <span className="text-purple-400 font-semibold">{t.chatbot.subtitle.highlight}</span>{t.chatbot.subtitle.part2}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="dark-card p-6 text-center group"
            >
              <div className="inline-flex p-4 bg-purple-500/10 rounded-lg mb-4 group-hover:bg-purple-500/20 transition-smooth">
                <feature.icon className="w-8 h-8 text-purple-400" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrations Section */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={t.chatbot.integrationsTitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-3xl font-bold mb-4 gradient-text">{t.chatbot.integrationsTitle}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t.chatbot.integrationsSubtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Integration Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="dark-card p-6 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Integration Icon */}
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${integration.color} bg-opacity-10 group-hover:shadow-lg transition-all duration-300`}>
                    <integration.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>

                  {/* Integration Details */}
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {integration.name}
                    </h4>
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={integration.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-400 text-sm leading-relaxed"
                      >
                        {integration.description}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Status Badge */}
                  <div className="w-full pt-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Experienced
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="dark-card p-8 max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.chatbot.ctaTitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">{t.chatbot.ctaTitle}</h3>
                <p className="text-gray-400 mb-6">
                  {t.chatbot.ctaDesc}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="btn-glow inline-flex items-center gap-2"
                >
                  <MessageSquare size={20} />
                  <span>{t.chatbot.ctaButton}</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotSpecialization;