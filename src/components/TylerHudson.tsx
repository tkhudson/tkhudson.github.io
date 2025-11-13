import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MatrixRain: React.FC = () => {
  const [raindrops, setRaindrops] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const drops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setRaindrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute text-matrix-green font-tech text-sm opacity-60"
          style={{ left: `${drop.x}%` }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: 3,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}
    </div>
  );
};

const GlitchText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={`${className} ${isGlitching ? 'animate-glitch' : ''}`}
      animate={isGlitching ? { x: [0, -2, 2, 0] } : {}}
      transition={{ duration: 0.1 }}
    >
      {text}
    </motion.span>
  );
};

const TylerHudson: React.FC = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated deployment pipelines using Terraform and AWS',
      tech: ['Terraform', 'AWS', 'Docker', 'CI/CD'],
      link: '#',
    },
    {
      title: 'Real-time Data Processing',
      description: 'High-performance data streaming with Kafka and Redis',
      tech: ['Kafka', 'Redis', 'Node.js', 'WebSockets'],
      link: '#',
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning models for predictive analytics',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Jupyter'],
      link: '#',
    },
  ];

  const articles = [
    {
      title: 'Building Scalable Microservices',
      date: '2024-12-01',
      excerpt: 'Best practices for designing and deploying microservice architectures...',
    },
    {
      title: 'DevOps Pipeline Optimization',
      date: '2024-11-15',
      excerpt: 'Streamlining CI/CD processes for faster deployment cycles...',
    },
    {
      title: 'Cloud Security Fundamentals',
      date: '2024-10-28',
      excerpt: 'Essential security practices for cloud-native applications...',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <motion.div
      className="min-h-screen bg-matrix-dark text-matrix-green font-tech relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Navigation */}
      <motion.nav
        className="relative z-10 p-6 border-b border-matrix-green border-opacity-30"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            onClick={() => navigate('/')}
            className="text-matrix-green hover:text-white transition-colors duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>←</span>
            <span>PORTAL</span>
          </motion.button>
          <div className="flex space-x-6">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#articles" className="hover:text-white transition-colors">Articles</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlitchText
              text="TYLER HUDSON"
              className="text-6xl md:text-8xl font-bold mb-6 text-matrix-green"
            />
            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Full-Stack Developer & Cloud Architect
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting digital solutions with cutting-edge technologies.
              Specializing in scalable architectures, cloud infrastructure, and AI-driven applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20 bg-matrix-gray bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-matrix-green"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlitchText text="FEATURED PROJECTS" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-matrix-dark border border-matrix-green border-opacity-30 rounded-lg p-6 hover:border-opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-3 text-matrix-green">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-matrix-green bg-opacity-20 text-matrix-green text-sm rounded border border-matrix-green border-opacity-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-matrix-green hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-matrix-green"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlitchText text="LATEST ARTICLES" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-matrix-gray bg-opacity-10 border border-matrix-green border-opacity-20 rounded-lg p-6 hover:border-opacity-60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <time className="text-sm text-gray-500 mb-2 block">{article.date}</time>
                <h3 className="text-xl font-bold mb-3 text-matrix-green">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <motion.a
                  href="#"
                  className="text-matrix-green hover:text-white transition-colors inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Read More →
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20 bg-matrix-gray bg-opacity-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-matrix-green"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlitchText text="GET IN TOUCH" />
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://github.com"
              className="flex flex-col items-center p-6 bg-matrix-dark border border-matrix-green border-opacity-30 rounded-lg hover:border-opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">⚡</div>
              <span className="text-matrix-green font-semibold">GitHub</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              className="flex flex-col items-center p-6 bg-matrix-dark border border-matrix-green border-opacity-30 rounded-lg hover:border-opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">🔗</div>
              <span className="text-matrix-green font-semibold">LinkedIn</span>
            </motion.a>

            <motion.a
              href="/assets/thudson_resume_2025.pdf"
              className="flex flex-col items-center p-6 bg-matrix-dark border border-matrix-green border-opacity-30 rounded-lg hover:border-opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">📄</div>
              <span className="text-matrix-green font-semibold">Resume</span>
            </motion.a>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Ready to build something extraordinary together?
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default TylerHudson;
