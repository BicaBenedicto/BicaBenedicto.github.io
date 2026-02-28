import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

const Projects = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.list[0].title,
      description: t.projects.list[0].description,
      tech: ['Blip', 'Node.js', 'TypeScript', 'RD Station', 'Zendesk'],
      category: t.projects.list[0].category,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: t.projects.list[1].title,
      description: t.projects.list[1].description,
      tech: ['React', 'TypeScript', 'BigQuery', 'Firebase', 'TailwindCSS'],
      category: t.projects.list[1].category,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: t.projects.list[2].title,
      description: t.projects.list[2].description,
      tech: ['Node.js', 'Python', 'MySQL', 'Hubspot', 'Braze'],
      category: t.projects.list[2].category,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: t.projects.list[3].title,
      description: t.projects.list[3].description,
      tech: ['React', 'Svelte', 'Firebase', 'Clevertap', 'Braze'],
      category: t.projects.list[3].category,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: t.projects.list[4].title,
      description: t.projects.list[4].description,
      tech: ['Blip', 'Node.js', 'Zendesk', 'Bitrix', 'Tray'],
      category: t.projects.list[4].category,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: t.projects.list[5].title,
      description: t.projects.list[5].description,
      tech: ['TypeScript', 'React', 'Java', 'RD Station', 'Hubspot'],
      category: t.projects.list[5].category,
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const handleProjectClick = (projectTitle) => {
    toast({
      title: "🚧 Project Details",
      description: "🚧 This feature isn't implemented yet—but don't worry! Be implemented in next update! 🚀",
    });
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
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
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
            key={t.projects.badge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span>{t.projects.badge}</span>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.h2 
              key={t.projects.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text-animated">{t.projects.title}</span>
            </motion.h2>
          </AnimatePresence>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
          
          <AnimatePresence mode="wait">
            <motion.p
              key={t.projects.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              {t.projects.subtitle}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="dark-card p-6 group cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300`}>
                  {project.category}
                </span>
                <Code2 className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>

              {/* Project Title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-purple-500/10">
                <button
                  className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.title);
                  }}
                >
                  <ExternalLink size={16} />
                  <span>{t.projects.buttons.details}</span>
                </button>
                <button
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.title);
                  }}
                >
                  <Github size={16} />
                  <span>{t.projects.buttons.code}</span>
                </button>
              </div>

              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-purple-500/10 group-hover:to-purple-500/20 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={t.projects.ctaText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-gray-400 mb-6">
                {t.projects.ctaText}
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="btn-glow"
              >
                {t.projects.ctaButton}
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;