import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Users,
      title: t.about.achievements[0].title,
      description: t.about.achievements[0].description
    },
    {
      icon: Award,
      title: t.about.achievements[1].title,
      description: t.about.achievements[1].description
    },
    {
      icon: Lightbulb,
      title: t.about.achievements[2].title,
      description: t.about.achievements[2].description
    },
    {
      icon: TrendingUp,
      title: t.about.achievements[3].title,
      description: t.about.achievements[3].description
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-[#0F0F0F] to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
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
              key={t.about.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text-animated">{t.about.title}</span>
            </motion.h2>
          </AnimatePresence>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="dark-card p-8">
              <AnimatePresence mode="wait">
                <motion.h3 
                  key={t.about.journeyTitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-2xl font-bold mb-4 gradient-text"
                >
                  {t.about.journeyTitle}
                </motion.h3>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.about.bio[0].part1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 text-gray-300 leading-relaxed"
                >
                  <p>
                    {t.about.bio[0].part1} <span className="text-purple-400 font-semibold">{t.about.bio[0].highlight1}</span> {t.about.bio[0].part2} <span className="text-purple-400 font-semibold">{t.about.bio[0].highlight2}</span>{t.about.bio[0].part3}
                  </p>
                  <p>
                    {t.about.bio[1].part1} <span className="text-purple-400 font-semibold">{t.about.bio[1].highlight1}</span> {t.about.bio[1].part2}
                  </p>
                  <p>
                    {t.about.bio[2].part1} <span className="text-purple-400 font-semibold">{t.about.bio[2].highlight1}</span> {t.about.bio[2].part2} <span className="text-purple-400 font-semibold">{t.about.bio[2].highlight2}</span>{t.about.bio[2].part3}
                  </p>
                  <p className="pt-2 text-purple-300 font-medium">
                    {t.about.bio[3].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="dark-card p-6 group"
              >
                <div className="mb-4 inline-flex p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-smooth">
                  <achievement.icon className="w-6 h-6 text-purple-400" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-smooth">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '4+', label: t.about.stats.experience },
            { number: '50+', label: t.about.stats.projects },
            { number: '10+', label: t.about.stats.stacks },
            { number: '100%', label: t.about.stats.satisfaction }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-purple-500/5 border border-purple-500/20 rounded-lg hover:border-purple-500/50 transition-smooth"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-animated mb-2">
                {stat.number}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-400 text-sm font-medium"
                >
                  {stat.label}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;