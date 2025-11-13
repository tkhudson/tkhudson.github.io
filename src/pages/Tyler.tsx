import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import GlitchText from '../components/GlitchText';

const Tyler = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Machine learning dashboard for real-time data visualization and predictive analytics.',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      github: 'https://github.com/tkhudson/ai-analytics',
      demo: 'https://ai-analytics-demo.com',
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform using smart contracts and zero-knowledge proofs.',
      tech: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      github: 'https://github.com/tkhudson/blockchain-voting',
      demo: 'https://voting-demo.com',
    },
    {
      title: 'IoT Home Automation',
      description: 'Smart home control system with voice integration and energy optimization.',
      tech: ['Arduino', 'Raspberry Pi', 'MQTT', 'React Native'],
      github: 'https://github.com/tkhudson/iot-home',
      demo: 'https://iot-home-app.com',
    },
    {
      title: 'Quantum Computing Simulator',
      description: 'Educational tool for simulating quantum algorithms and circuits.',
      tech: ['Python', 'Qiskit', 'React', 'Three.js'],
      github: 'https://github.com/tkhudson/quantum-sim',
      demo: 'https://quantum-simulator.com',
    },
  ];

  const articles = [
    {
      title: 'The Future of Web Development: 2025 Trends',
      date: '2025-01-15',
      excerpt: 'Exploring the latest technologies shaping modern web development...',
      readTime: '5 min read',
    },
    {
      title: 'Building Scalable React Applications',
      date: '2024-12-20',
      excerpt: 'Best practices for architecting large-scale React projects...',
      readTime: '8 min read',
    },
    {
      title: 'Machine Learning in JavaScript',
      date: '2024-11-10',
      excerpt: 'How to integrate ML models into web applications using TensorFlow.js...',
      readTime: '12 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-tech-bg text-white">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-accent/20 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FF41' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="text-5xl md:text-7xl font-tech mb-6"
            >
              <GlitchText
                text="Tyler Hudson:"
                className="text-tech-accent block"
              />
              <span className="text-white">Building the Future</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Full-stack engineer specializing in AI, blockchain, and scalable web architectures.
              Passionate about pushing the boundaries of technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#projects"
                className="bg-tech-accent text-black px-8 py-3 rounded font-semibold hover:bg-tech-accent/80 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/assets/tyler_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-tech-accent text-tech-accent px-8 py-3 rounded font-semibold hover:bg-tech-accent hover:text-black transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-tech-accent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 rounded-lg border border-tech-accent/30 hover:border-tech-accent transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3 text-tech-accent">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-tech-accent/20 text-tech-accent px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-accent hover:text-white transition-colors"
                    >
                      GitHub →
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-accent hover:text-white transition-colors"
                    >
                      Demo →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Articles Section */}
        <AnimatedSection className="px-4 bg-surface/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-tech-accent">
              Latest Articles
            </h2>
            <div className="space-y-6">
              {articles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-tech-accent pl-6 py-4"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white hover:text-tech-accent transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{article.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span>{article.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/articles"
                className="text-tech-accent hover:text-white transition-colors"
              >
                View All Articles →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Resume Section */}
        <AnimatedSection className="px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-tech-accent">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              8+ years of experience in software engineering, specializing in full-stack development,
              AI/ML integration, and scalable system architecture.
            </p>
            <div className="bg-surface p-8 rounded-lg border border-tech-accent/30">
              <h3 className="text-2xl font-semibold mb-4 text-tech-accent">
                Download Full Resume
              </h3>
              <p className="text-gray-300 mb-6">
                Get the complete details of my experience, skills, and achievements.
              </p>
              <a
                href="/assets/tyler_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-tech-accent text-black px-8 py-3 rounded font-semibold hover:bg-tech-accent/80 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Tyler;
