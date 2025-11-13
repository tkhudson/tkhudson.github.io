import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { flameVariants } from '../utils/animationVariants';

const Serviam = () => {
  const reflections = [
    {
      title: 'The Call to Biblical Masculinity',
      date: '2025-01-10',
      excerpt: 'Understanding our role as men in God\'s kingdom through scripture and tradition...',
      scripture: 'Ephesians 5:25',
    },
    {
      title: 'Spiritual Warfare in the Modern Age',
      date: '2024-12-28',
      excerpt: 'Equipping ourselves for battle against the forces of darkness in contemporary society...',
      scripture: 'Ephesians 6:12',
    },
    {
      title: 'The Power of Prayer and Fasting',
      date: '2024-12-15',
      excerpt: 'Rediscovering ancient spiritual disciplines for spiritual breakthrough...',
      scripture: 'Matthew 17:21',
    },
    {
      title: 'Leading with Servant Heart',
      date: '2024-12-01',
      excerpt: 'Christ\'s model of leadership through humility and service...',
      scripture: 'Mark 10:45',
    },
  ];

  const challenges = [
    {
      title: '30-Day Prayer Challenge',
      description: 'Commit to daily prayer and scripture reading for spiritual growth.',
      duration: '30 days',
      difficulty: 'Beginner',
    },
    {
      title: 'Fasting for Breakthrough',
      description: 'A guided fast focusing on spiritual renewal and clarity.',
      duration: '21 days',
      difficulty: 'Intermediate',
    },
    {
      title: 'Biblical Masculinity Study',
      description: 'Deep dive into scripture on godly manhood and leadership.',
      duration: '40 days',
      difficulty: 'Advanced',
    },
  ];

  const media = [
    {
      title: 'The Armor of God',
      type: 'Sermon',
      description: 'Understanding spiritual warfare and divine protection.',
      url: 'https://youtube.com/watch?v=armor',
      duration: '45:23',
    },
    {
      title: 'Walking in Purity',
      type: 'Teaching',
      description: 'Maintaining holiness in a corrupt world.',
      url: 'https://youtube.com/watch?v=purity',
      duration: '38:17',
    },
    {
      title: 'The Heart of a Warrior',
      type: 'Podcast',
      description: 'Discussion on courage, faith, and spiritual battle.',
      url: 'https://youtube.com/watch?v=warrior',
      duration: '52:41',
    },
  ];

  return (
    <div className="min-h-screen bg-ministry-bg text-white">
      {/* Crusader background texture */}
      <div className="fixed inset-0 opacity-15">
        <div
          className="absolute inset-0 bg-gradient-to-br from-ministry-accent/20 via-transparent to-ministry-secondary/30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='crosses' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Crect width='120' height='120' fill='%231A1A1A'/%3E%3Cg fill='%238B6914' opacity='0.3'%3E%3Crect x='55' y='50' width='10' height='20'/%3E%3Crect x='50' y='55' width='20' height='10'/%3E%3C/g%3E%3C/g%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23crosses)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: 'spring', stiffness: 50 }}
              className="mb-8"
            >
              <motion.div
                variants={flameVariants}
                animate="flicker"
                className="text-8xl mb-4"
              >
                🔥
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-ministry mb-6 text-ministry-accent"
            >
              Serviam:
              <br />
              <span className="text-white">I Will Serve</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Biblical masculinity, spiritual warfare, and the call to serve Christ
              in a world that desperately needs godly men.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#reflections"
                className="bg-ministry-accent text-white px-8 py-3 rounded font-semibold hover:bg-ministry-accent/80 transition-colors"
              >
                Read Reflections
              </a>
              <a
                href="https://youtube.com/@serviamJesus"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ministry-accent text-ministry-accent px-8 py-3 rounded font-semibold hover:bg-ministry-accent hover:text-white transition-colors"
              >
                Watch Teachings
              </a>
            </motion.div>
          </div>
        </section>

        {/* Reflections Section */}
        <AnimatedSection id="reflections" className="px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-ministry-accent">
              Spiritual Reflections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reflections.map((reflection, index) => (
                <motion.article
                  key={reflection.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 rounded-lg border border-ministry-accent/30 hover:border-ministry-accent transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white hover:text-ministry-accent transition-colors cursor-pointer">
                      {reflection.title}
                    </h3>
                    <span className="text-ministry-secondary text-sm font-bold">
                      {reflection.scripture}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{reflection.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{new Date(reflection.date).toLocaleDateString()}</span>
                    <span className="text-ministry-accent hover:text-white transition-colors cursor-pointer">
                      Read More →
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="/blog"
                className="text-ministry-accent hover:text-white transition-colors"
              >
                View All Reflections →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Challenges Section */}
        <AnimatedSection className="px-4 bg-surface/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-ministry-accent">
              Spiritual Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 rounded-lg border border-ministry-accent/30 hover:border-ministry-accent transition-colors text-center"
                >
                  <h3 className="text-xl font-semibold mb-3 text-ministry-accent">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{challenge.description}</p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <p>⏱️ {challenge.duration}</p>
                    <p>📊 {challenge.difficulty}</p>
                  </div>
                  <button className="bg-ministry-accent text-white px-6 py-2 rounded font-semibold hover:bg-ministry-accent/80 transition-colors">
                    Join Challenge
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Media Section */}
        <AnimatedSection className="px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-ministry-accent">
              Recent Teachings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {media.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface rounded-lg overflow-hidden border border-ministry-accent/30 hover:border-ministry-accent transition-colors group"
                >
                  <div className="relative aspect-video bg-gray-800">
                    {/* Placeholder for media thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center text-ministry-accent/50">
                      <span className="text-4xl">⚔️</span>
                    </div>
                    <div className="absolute top-2 left-2 bg-ministry-secondary text-black px-2 py-1 rounded text-xs font-bold">
                      {item.type}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-3xl text-white">▶️</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-ministry-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ministry-accent hover:text-white transition-colors text-sm"
                    >
                      Watch Now →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="https://youtube.com/@serviamJesus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ministry-accent text-white px-8 py-3 rounded font-semibold hover:bg-ministry-accent/80 transition-colors inline-block"
              >
                View All Teachings
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Serviam;
