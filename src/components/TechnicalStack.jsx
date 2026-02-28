import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layers, Server, Cloud, Terminal, Braces, Layout } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const TechnicalStack = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      id: 'frontend',
      title: t.techStack.categories.frontend,
      icon: Layout,
      skills: [
        { id: 'react', name: 'React', percentage: 89, level: 'advanced', icon: Code2, descKey: 'react' },
        { id: 'svelte', name: 'Svelte', percentage: 80, level: 'advanced', icon: Code2, descKey: 'svelte' },
        { id: 'typescript', name: 'TypeScript', percentage: 88, level: 'advanced', icon: Braces, descKey: 'typescript' },
      ]
    },
    {
      id: 'backend',
      title: t.techStack.categories.backend,
      icon: Server,
      skills: [
        { id: 'nodejs', name: 'Node.js', percentage: 87, level: 'advanced', icon: Server, descKey: 'nodejs' },
        { id: 'typescript', name: 'TypeScript', percentage: 88, level: 'advanced', icon: Braces, descKey: 'typescript' },
        { id: 'java', name: 'Java', percentage: 50, level: 'intermediate', icon: Code2, descKey: 'java' },
        { id: 'python', name: 'Python', percentage: 50, level: 'intermediate', icon: Terminal, descKey: 'python' },
      ]
    },
    {
      id: 'database',
      title: t.techStack.categories.database,
      icon: Database,
      skills: [
        { id: 'mysql', name: 'MySQL', percentage: 85, level: 'advanced', icon: Database, descKey: 'mysql' },
        { id: 'firebase', name: 'Firebase', percentage: 88, level: 'advanced', icon: Database, descKey: 'firebase' },
        { id: 'bigquery', name: 'BigQuery', percentage: 78, level: 'advanced', icon: Database, descKey: 'bigquery' },
      ]
    },
    {
      id: 'cloud',
      title: t.techStack.categories.cloud,
      icon: Cloud,
      skills: [
        { id: 'firebase', name: 'Firebase', percentage: 88, level: 'advanced', icon: Cloud, descKey: 'firebase' },
        { id: 'bigquery', name: 'BigQuery', percentage: 78, level: 'advanced', icon: Cloud, descKey: 'bigquery' },
      ]
    },
    {
      id: 'languages',
      title: t.techStack.categories.languages,
      icon: Code2,
      skills: [
        { id: 'typescript', name: 'TypeScript', percentage: 88, level: 'advanced', icon: Braces, descKey: 'typescript' },
        { id: 'java', name: 'Java', percentage: 50, level: 'intermediate', icon: Code2, descKey: 'java' },
        { id: 'python', name: 'Python', percentage: 50, level: 'intermediate', icon: Terminal, descKey: 'python' },
      ]
    }
  ];

  const getLevelLabel = (level) => {
    return t.techStack.levels[level] || level;
  };

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
    <section id="skills" className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
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
              key={t.techStack.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text-animated">{t.techStack.title}</span>
            </motion.h2>
          </AnimatePresence>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.p
              key={t.techStack.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              {t.techStack.subtitle}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex items-center gap-3 border-b border-purple-500/20 pb-2 mb-6"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={`${category.id}-${skill.id}-${index}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                            <skill.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-xs font-medium text-purple-400/80 uppercase tracking-wider">
                              {getLevelLabel(skill.level)}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-white bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                          {skill.percentage}%
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 min-h-[40px] leading-relaxed">
                        {t.techStack.skills[skill.descKey]}
                      </p>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Additional Tech Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <AnimatePresence mode="wait">
            <motion.p 
              key={t.techStack.note.part1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 text-sm max-w-2xl mx-auto"
            >
              {t.techStack.note.part1} <span className="text-purple-400 font-medium">{t.techStack.note.highlight}</span> {t.techStack.note.part2}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalStack;