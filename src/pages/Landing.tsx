import { motion } from 'framer-motion';
import PortalBlade from '../components/PortalBlade';
import ParticleBackground from '../components/ParticleBackground';

const Landing = () => {
  const blades = [
    {
      title: 'Tyler Hudson',
      subtitle: 'Tech Innovator & Engineer',
      path: '/tyler',
      theme: 'tech',
      icon: '⚡',
      delay: 0.2,
    },
    {
      title: 'Persevus',
      subtitle: 'Gaming Creator & Streamer',
      path: '/persevus',
      theme: 'gaming',
      icon: '🔥',
      delay: 0.4,
    },
    {
      title: 'Serviam',
      subtitle: 'Biblical Masculinity & Ministry',
      path: '/serviam',
      theme: 'ministry',
      icon: '⚔️',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground particleCount={100} className="opacity-30" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-white"
        >
          Discover My Worlds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-gray-300 text-center mb-16 max-w-2xl"
        >
          Three distinct realms of creativity, technology, and faith.
          Choose your path and enter the portal.
        </motion.p>

        {/* Portal Blades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {blades.map((blade) => (
            <PortalBlade key={blade.path} {...blade} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
