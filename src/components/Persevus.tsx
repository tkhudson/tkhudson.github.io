import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DustParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const dust = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }));
    setParticles(dust);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-wasteland-smoke rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const GlitchText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={`${className} ${isGlitching ? 'animate-dust' : ''}`}
      animate={isGlitching ? { x: [0, -3, 3, 0] } : {}}
      transition={{ duration: 0.15 }}
    >
      {text}
    </motion.span>
  );
};

const Persevus: React.FC = () => {
  const navigate = useNavigate();

  const videos = [
    {
      title: 'Battlefield Tactics',
      description: 'Advanced strategies for competitive gaming',
      thumbnail: '🎮',
      views: '15K',
      duration: '12:34',
    },
    {
      title: 'Weapon Loadouts',
      description: 'Optimal gear configurations for victory',
      thumbnail: '🔫',
      views: '8.2K',
      duration: '8:45',
    },
    {
      title: 'Team Coordination',
      description: 'Communication and tactics for squad play',
      thumbnail: '👥',
      views: '22K',
      duration: '15:20',
    },
  ];

  const streams = [
    {
      title: 'Live Gaming Session',
      game: 'Post-Apocalyptic RPG',
      viewers: '1.2K',
      status: 'LIVE',
    },
    {
      title: 'Tournament Preparation',
      game: 'Battle Royale',
      viewers: '856',
      status: 'LIVE',
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-wasteland-metal via-wasteland-smoke to-black text-wasteland-tan font-gaming relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dust Particles Background */}
      <DustParticles />

      {/* Navigation */}
      <motion.nav
        className="relative z-10 p-6 border-b border-wasteland-tan border-opacity-30"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            onClick={() => navigate('/')}
            className="text-wasteland-tan hover:text-wasteland-blood transition-colors duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>←</span>
            <span>PORTAL</span>
          </motion.button>
          <div className="flex space-x-6">
            <a href="#videos" className="hover:text-wasteland-blood transition-colors">Videos</a>
            <a href="#streams" className="hover:text-wasteland-blood transition-colors">Streams</a>
            <a href="#contact" className="hover:text-wasteland-blood transition-colors">Contact</a>
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
              text="PERSEVUS"
              className="text-6xl md:text-8xl font-bold mb-6 text-wasteland-blood"
            />
            <motion.p
              className="text-xl md:text-2xl text-wasteland-smoke mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Gaming Content Creator & Battlefield Strategist
            </motion.p>
            <motion.p
              className="text-lg text-wasteland-tan opacity-80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Surviving in the digital wasteland. Mastering games, sharing tactics,
              and building communities in the most intense virtual battlegrounds.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative z-10 px-6 py-20 bg-wasteland-metal bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-wasteland-blood"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlitchText text="LATEST VIDEOS" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="bg-wasteland-metal border border-wasteland-tan border-opacity-30 rounded-lg overflow-hidden hover:border-opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-wasteland-smoke flex items-center justify-center text-6xl">
                  {video.thumbnail}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-wasteland-tan">{video.title}</h3>
                  <p className="text-wasteland-smoke mb-4">{video.description}</p>

                  <div className="flex justify-between items-center text-sm text-wasteland-tan opacity-60">
                    <span>{video.views} views</span>
                    <span>{video.duration}</span>
                  </div>

                  <motion.button
                    className="w-full mt-4 bg-wasteland-blood text-white py-2 px-4 rounded hover:bg-opacity-80 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Streams Section */}
      <section id="streams" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-wasteland-blood"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlitchText text="LIVE STREAMS" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {streams.map((stream, index) => (
              <motion.div
                key={index}
                className="bg-wasteland-metal border-2 border-wasteland-blood rounded-lg p-6 relative overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Live Indicator */}
                <div className="absolute top-4 right-4 bg-wasteland-blood text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  {stream.status}
                </div>

                {/* Pulsing Border Effect */}
                <div className="absolute inset-0 border-2 border-wasteland-blood rounded-lg animate-pulse opacity-50" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-wasteland-tan">{stream.title}</h3>
                  <p className="text-wasteland-smoke mb-4">{stream.game}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-wasteland-blood rounded-full animate-pulse" />
                      <span className="text-wasteland-tan">{stream.viewers} watching</span>
                    </div>

                    <motion.button
                      className="bg-wasteland-blood text-white px-6 py-2 rounded hover:bg-opacity-80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Stream
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20 bg-wasteland-metal bg-opacity-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-wasteland-blood"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlitchText text="JOIN THE SQUAD" />
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://youtube.com/@persevus"
              className="flex flex-col items-center p-6 bg-wasteland-metal border border-wasteland-tan border-opacity-30 rounded-lg hover:border-wasteland-blood transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">📺</div>
              <span className="text-wasteland-tan font-semibold">YouTube</span>
              <span className="text-sm text-wasteland-smoke">Persevus</span>
            </motion.a>

            <motion.a
              href="https://rumble.com/persevus"
              className="flex flex-col items-center p-6 bg-wasteland-metal border border-wasteland-tan border-opacity-30 rounded-lg hover:border-wasteland-blood transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">🎥</div>
              <span className="text-wasteland-tan font-semibold">Rumble</span>
              <span className="text-sm text-wasteland-smoke">Persevus</span>
            </motion.a>

            <motion.a
              href="https://discord.gg/persevus"
              className="flex flex-col items-center p-6 bg-wasteland-metal border border-wasteland-tan border-opacity-30 rounded-lg hover:border-wasteland-blood transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">💬</div>
              <span className="text-wasteland-tan font-semibold">Discord</span>
              <span className="text-sm text-wasteland-smoke">Join Community</span>
            </motion.a>
          </motion.div>

          <motion.p
            className="text-wasteland-tan opacity-80 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Ready to conquer the battlefield together?
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default Persevus;
