import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface BladeData {
  id: string;
  title: string;
  description: string;
  theme: string;
  path: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const blades: BladeData[] = [
  {
    id: 'tyler-hudson',
    title: 'Tyler Hudson',
    description: 'Tech Professional & Developer',
    theme: 'Matrix Digital Rain',
    path: '/tyler-hudson',
    colors: {
      primary: '#00ff41',
      secondary: '#0a0a0a',
      accent: '#1a1a1a',
    },
  },
  {
    id: 'persevus',
    title: 'Persevus',
    description: 'Gaming Content Creator',
    theme: 'Post-Apocalyptic Wasteland',
    path: '/persevus',
    colors: {
      primary: '#d2b48c',
      secondary: '#8b4513',
      accent: '#dc143c',
    },
  },
  {
    id: 'serviam',
    title: 'Serviam',
    description: 'Christian Men\'s Ministry',
    theme: 'Medieval Crusader',
    path: '/serviam',
    colors: {
      primary: '#ffd700',
      secondary: '#708090',
      accent: '#dc143c',
    },
  },
];

const LandingPortal: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const bladeVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    hover: {
      scale: 1.05,
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-8xl font-tech font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PORTAL
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light">
          Choose Your Path Through the Digital Realms
        </p>
      </motion.div>

      {/* Blades Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blades.map((blade) => (
          <motion.div
            key={blade.id}
            className="relative group cursor-pointer"
            variants={bladeVariants}
            whileHover="hover"
            onClick={() => navigate(blade.path)}
          >
            {/* Blade Card */}
            <div
              className="relative h-96 rounded-2xl p-8 flex flex-col justify-between overflow-hidden border-2 border-opacity-30 transition-all duration-300 group-hover:border-opacity-100"
              style={{
                background: `linear-gradient(135deg, ${blade.colors.secondary} 0%, ${blade.colors.primary}15 100%)`,
                borderColor: blade.colors.primary,
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {blade.id === 'tyler-hudson' && (
                  <div className="matrix-rain absolute inset-0" />
                )}
                {blade.id === 'persevus' && (
                  <div className="dust absolute inset-0" />
                )}
                {blade.id === 'serviam' && (
                  <div className="torch absolute inset-0" />
                )}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: blade.colors.primary }}
                  whileHover={{ scale: 1.05 }}
                >
                  {blade.title}
                </motion.h2>
                <p className="text-lg text-gray-300 mb-2">
                  {blade.description}
                </p>
                <p className="text-sm text-gray-400 italic">
                  {blade.theme}
                </p>
              </div>

              {/* Enter Button */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-300"
                  style={{
                    backgroundColor: blade.colors.primary,
                    boxShadow: `0 0 20px ${blade.colors.primary}50`,
                  }}
                >
                  Enter Realm
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${blade.colors.primary} 0%, transparent 70%)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-16 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <p className="text-sm">
          Navigate through the digital manifestations of identity
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LandingPortal;
