import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Persevus = () => {
  const videos = [
    {
      title: 'Epic Boss Fight Compilation',
      description: 'Intense gaming moments from the latest releases',
      thumbnail: '/assets/persevus/video1.jpg', // Placeholder
      url: 'https://youtube.com/watch?v=example1',
      duration: '12:34',
    },
    {
      title: 'Gaming Setup Tour 2025',
      description: 'Complete walkthrough of my battle station',
      thumbnail: '/assets/persevus/video2.jpg', // Placeholder
      url: 'https://youtube.com/watch?v=example2',
      duration: '8:45',
    },
    {
      title: 'Top 10 Games of 2024',
      description: 'My personal rankings and reviews',
      thumbnail: '/assets/persevus/video3.jpg', // Placeholder
      url: 'https://youtube.com/watch?v=example3',
      duration: '15:22',
    },
    {
      title: 'Live Stream Highlights',
      description: 'Best moments from recent streams',
      thumbnail: '/assets/persevus/video4.jpg', // Placeholder
      url: 'https://youtube.com/watch?v=example4',
      duration: '10:18',
    },
    {
      title: 'Gaming Tips & Tricks',
      description: 'Advanced strategies for competitive play',
      thumbnail: '/assets/persevus/video5.jpg', // Placeholder
      url: 'https://youtube.com/watch?v=example5',
      duration: '6:57',
    },
    {
      title: 'Community Q&A Session',
      description: 'Answering viewer questions about gaming',
      thumbnail: '/assets/persevus/video6.jpg', // Placeholder
      url: 'https://youtube.com/watch?v=example6',
      duration: '22:41',
    },
  ];

  const gear = [
    {
      name: 'Gaming PC (Custom Build)',
      specs: 'RTX 4090, i9-13900K, 64GB DDR5, 2TB NVMe',
      image: '/assets/persevus/pc.jpg', // Placeholder
    },
    {
      name: 'Mechanical Keyboard',
      specs: 'Cherry MX Red switches, RGB lighting, macro keys',
      image: '/assets/persevus/keyboard.jpg', // Placeholder
    },
    {
      name: 'Gaming Monitor',
      specs: '49" Ultra-wide 1440p 144Hz, HDR1000',
      image: '/assets/persevus/monitor.jpg', // Placeholder
    },
    {
      name: 'Streaming Microphone',
      specs: 'Condenser mic with noise cancellation',
      image: '/assets/persevus/mic.jpg', // Placeholder
    },
  ];

  return (
    <div className="min-h-screen bg-gaming-bg text-white">
      {/* Post-apocalyptic background texture */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gaming-accent/30 via-transparent to-gaming-secondary/20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='%23D4A574'/%3E%3Ccircle cx='20' cy='20' r='1' fill='%23B8471A' opacity='0.3'/%3E%3Ccircle cx='80' cy='60' r='1.5' fill='%23B8471A' opacity='0.2'/%3E%3Ccircle cx='50' cy='80' r='0.8' fill='%23B8471A' opacity='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grain)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 50 }}
              className="text-5xl md:text-7xl font-gaming mb-6 text-gaming-accent"
            >
              Persevus:
              <br />
              <span className="text-white">Survive the Apocalypse</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Hardcore gaming content creator. Pushing limits, breaking records,
              and surviving the digital wasteland one boss at a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#videos"
                className="bg-gaming-accent text-white px-8 py-3 rounded font-semibold hover:bg-gaming-accent/80 transition-colors"
              >
                Watch Videos
              </a>
              <a
                href="https://youtube.com/@Persevus"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gaming-accent text-gaming-accent px-8 py-3 rounded font-semibold hover:bg-gaming-accent hover:text-white transition-colors"
              >
                Subscribe on YouTube
              </a>
            </motion.div>
          </div>
        </section>

        {/* Videos Section */}
        <AnimatedSection id="videos" className="px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gaming-accent">
              Latest Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface rounded-lg overflow-hidden border border-gaming-accent/30 hover:border-gaming-accent transition-colors group"
                >
                  <div className="relative aspect-video bg-gray-800">
                    {/* Placeholder for video thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center text-gaming-accent/50">
                      <span className="text-4xl">🎮</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-3xl text-white">▶️</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-gaming-accent transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{video.description}</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gaming-accent hover:text-white transition-colors text-sm"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="https://youtube.com/@Persevus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gaming-accent text-white px-8 py-3 rounded font-semibold hover:bg-gaming-accent/80 transition-colors inline-block"
              >
                View All Videos
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Streams Section */}
        <AnimatedSection className="px-4 bg-surface/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gaming-accent">
              Live Streams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-lg border border-gaming-accent/30"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gaming-accent">
                  Upcoming Stream
                </h3>
                <p className="text-gray-300 mb-4">
                  Join me for intense gaming sessions and community interaction.
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <p>📅 Next: Friday 8PM EST</p>
                  <p>🎮 Game: Latest AAA Title</p>
                </div>
                <a
                  href="https://twitch.tv/persevus" // Placeholder
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gaming-accent text-white px-6 py-2 rounded font-semibold hover:bg-gaming-accent/80 transition-colors inline-block"
                >
                  Set Reminder
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface p-8 rounded-lg border border-gaming-accent/30"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gaming-accent">
                  Stream Highlights
                </h3>
                <p className="text-gray-300 mb-4">
                  Best moments from recent live sessions.
                </p>
                <div className="space-y-2 text-sm">
                  <p>🏆 New World Record Attempt</p>
                  <p>💬 Community Q&A</p>
                  <p>🎯 Skill Challenges</p>
                </div>
                <a
                  href="https://youtube.com/@Persevus" // Placeholder
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gaming-accent hover:text-white transition-colors mt-4 inline-block"
                >
                  View Highlights →
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gear Section */}
        <AnimatedSection className="px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gaming-accent">
              Battle Station
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gear.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 rounded-lg border border-gaming-accent/30 hover:border-gaming-accent transition-colors"
                >
                  <div className="aspect-video bg-gray-800 rounded mb-4 flex items-center justify-center">
                    <span className="text-4xl text-gaming-accent/50">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gaming-accent">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.specs}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">
                Want to see the full setup? Check out my detailed gear list.
              </p>
              <a
                href="https://kit.co/Persevus" // Placeholder
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gaming-accent text-white px-8 py-3 rounded font-semibold hover:bg-gaming-accent/80 transition-colors inline-block"
              >
                View Full Gear List
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Persevus;
