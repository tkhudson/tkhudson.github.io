import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TorchFlames: React.FC = () => {
  const [flames, setFlames] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const torchFlames = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setFlames(torchFlames);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flames.map((flame) => (
        <motion.div
          key={flame.id}
          className="absolute w-2 h-8 bg-gradient-to-t from-crusader-gold via-crusader-crimson to-transparent rounded-full opacity-60"
          style={{
            left: `${flame.x}%`,
            bottom: '0',
          }}
          animate={{
            scaleY: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.6, 0.9, 0.4, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            delay: flame.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const BannerWave: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={`${className} ${isWaving ? 'animate-banner' : ''}`}
      animate={isWaving ? { rotateX: [0, 5, 0] } : {}}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      {text}
    </motion.span>
  );
};

const Serviam: React.FC = () => {
  const navigate = useNavigate();

  const teachings = [
    {
      title: 'Biblical Manhood',
      description: 'Understanding God\'s design for masculine strength and leadership',
      icon: '⚔️',
      scripture: 'Ephesians 5:25',
    },
    {
      title: 'Spiritual Warfare',
      description: 'Equipping men for battle in the spiritual realm',
      icon: '🛡️',
      scripture: 'Ephesians 6:12',
    },
    {
      title: 'Family Leadership',
      description: 'Leading your household with Christ-like love and authority',
      icon: '👑',
      scripture: '1 Timothy 3:4-5',
    },
  ];

  const events = [
    {
      title: 'Men\'s Prayer Meeting',
      date: 'Every Wednesday',
      time: '7:00 PM',
      location: 'Virtual',
      description: 'Weekly gathering for prayer and fellowship',
    },
    {
      title: 'Leadership Conference',
      date: 'March 15, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Community Center',
      description: 'Annual conference on biblical manhood',
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-crusader-stone via-gray-800 to-black text-crusader-parchment font-ministry relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Torch Flames Background */}
      <TorchFlames />

      {/* Navigation */}
      <motion.nav
        className="relative z-10 p-6 border-b border-crusader-gold border-opacity-30"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            onClick={() => navigate('/')}
            className="text-crusader-gold hover:text-crusader-crimson transition-colors duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>←</span>
            <span>PORTAL</span>
          </motion.button>
          <div className="flex space-x-6">
            <a href="#teachings" className="hover:text-crusader-crimson transition-colors">Teachings</a>
            <a href="#events" className="hover:text-crusader-crimson transition-colors">Events</a>
            <a href="#contact" className="hover:text-crusader-crimson transition-colors">Contact</a>
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
            <BannerWave
              text="SERVIAM"
              className="text-6xl md:text-8xl font-bold mb-6 text-crusader-gold"
            />
            <motion.p
              className="text-xl md:text-2xl text-crusader-stone mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Christian Men's Ministry & Biblical Masculinity
            </motion.p>
            <motion.p
              className="text-lg text-crusader-parchment opacity-90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              "I will serve" - Equipping men to lead with Christ-like strength,
              courage, and wisdom in their families, communities, and spiritual battles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Teachings Section */}
      <section id="teachings" className="relative z-10 px-6 py-20 bg-crusader-stone bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-crusader-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BannerWave text="BIBLICAL TEACHINGS" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachings.map((teaching, index) => (
              <motion.div
                key={index}
                className="bg-crusader-stone border border-crusader-gold border-opacity-30 rounded-lg p-8 hover:border-opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4 text-center">{teaching.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-crusader-gold text-center">{teaching.title}</h3>
                <p className="text-crusader-parchment opacity-80 mb-4 text-center">{teaching.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-crusader-gold bg-opacity-20 text-crusader-gold px-4 py-2 rounded text-sm font-semibold">
                    {teaching.scripture}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-crusader-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BannerWave text="UPCOMING EVENTS" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-crusader-stone border-2 border-crusader-gold rounded-lg p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crusader-gold via-crusader-crimson to-crusader-gold" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-crusader-gold">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-crusader-parchment opacity-80">
                    <span>📅 {event.date}</span>
                    <span>🕐 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <p className="text-crusader-parchment mb-6">{event.description}</p>

                  <motion.button
                    className="w-full bg-crusader-gold text-crusader-stone py-3 px-6 rounded hover:bg-opacity-80 transition-colors font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 px-6 py-20 bg-crusader-stone bg-opacity-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-crusader-gold">
              Our Mission
            </h2>
            <blockquote className="text-xl md:text-2xl text-crusader-parchment italic mb-8 leading-relaxed">
              "To raise up godly men who will serve their families, churches, and communities
              with the strength, wisdom, and love of Jesus Christ."
            </blockquote>
            <div className="flex justify-center">
              <div className="bg-crusader-gold bg-opacity-20 border border-crusader-gold rounded-lg p-6 max-w-2xl">
                <p className="text-crusader-parchment text-lg">
                  We believe that God has called men to be warriors in the spiritual realm,
                  protectors of their families, and leaders in their communities.
                  Through biblical teaching, prayer, and fellowship, we equip men to fulfill
                  their God-given roles with courage and conviction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-crusader-gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BannerWave text="JOIN THE FELLOWSHIP" />
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://youtube.com/@serviamJesus"
              className="flex flex-col items-center p-6 bg-crusader-stone border border-crusader-gold border-opacity-30 rounded-lg hover:border-crusader-crimson transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">📺</div>
              <span className="text-crusader-gold font-semibold">YouTube</span>
              <span className="text-sm text-crusader-parchment opacity-80">@serviamJesus</span>
            </motion.a>

            <motion.a
              href="mailto:contact@serviam.org"
              className="flex flex-col items-center p-6 bg-crusader-stone border border-crusader-gold border-opacity-30 rounded-lg hover:border-crusader-crimson transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">📧</div>
              <span className="text-crusader-gold font-semibold">Email</span>
              <span className="text-sm text-crusader-parchment opacity-80">Get in Touch</span>
            </motion.a>

            <motion.a
              href="https://discord.gg/serviam"
              className="flex flex-col items-center p-6 bg-crusader-stone border border-crusader-gold border-opacity-30 rounded-lg hover:border-crusader-crimson transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">⚔️</div>
              <span className="text-crusader-gold font-semibold">Community</span>
              <span className="text-sm text-crusader-parchment opacity-80">Join Brothers</span>
            </motion.a>
          </motion.div>

          <motion.p
            className="text-crusader-parchment opacity-80 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Ready to step into your calling as a godly man?
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default Serviam;
