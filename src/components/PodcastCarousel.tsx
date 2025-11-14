import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { containerVariants, itemVariants, swordDrawVariants } from '../utils/animationVariants';

interface Episode {
  title: string;
  description: string;
  videoId: string;
  duration: string;
}

const PodcastCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const episodes: Episode[] = [
    {
      title: "Navigating Modern Culture: Sexuality & Faith",
      description: "Breaking down the cultural battles surrounding sexuality through a biblical worldview. How to stand firm in truth while showing Christ's love.",
      videoId: "placeholder_podcast1",
      duration: "45:23"
    },
    {
      title: "Three Pillars of Biblical Fatherhood",
      description: "The essential foundations of godly fatherhood: Leadership, provision, and spiritual guidance. Practical wisdom for raising the next generation.",
      videoId: "placeholder_podcast2",
      duration: "52:41"
    },
    {
      title: "Empowering Men: Abstinence & Strength",
      description: "The power of sexual purity in building true masculine strength. Biblical motivation for maintaining holiness in a corrupt world.",
      videoId: "placeholder_podcast3",
      duration: "38:17"
    },
    {
      title: "Spiritual Warfare in the Workplace",
      description: "Fighting the good fight in professional environments. Maintaining integrity and faith amidst worldly pressures.",
      videoId: "placeholder_podcast4",
      duration: "41:52"
    },
    {
      title: "The Call to Radical Discipleship",
      description: "What it truly means to follow Christ radically in today's culture. The cost and the reward of authentic discipleship.",
      videoId: "placeholder_podcast5",
      duration: "49:33"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % episodes.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, episodes.length]);

  const nextEpisode = () => {
    setCurrentIndex((prev) => (prev + 1) % episodes.length);
  };

  const prevEpisode = () => {
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

  const goToEpisode = (index: number) => {
    setCurrentIndex(index);
  };

  const currentEpisode = episodes[currentIndex];

  return (
    <AnimatedSection className="px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-ministry text-ministry-accent mb-4">
            Podcast Bastion
          </h2>
          <p className="text-xl text-body text-parchment max-w-3xl mx-auto">
            Deep dives into current events and biblical wisdom. Live streams and recorded episodes for spiritual growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Episode Display */}
          <motion.div
            className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg overflow-hidden border-2 border-ministry-accent/50 shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video Thumbnail */}
              <div className="relative aspect-video md:aspect-square bg-gradient-to-br from-stone-800 to-stone-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-24 h-24 bg-ministry-secondary rounded-full flex items-center justify-center mb-4 mx-auto"
                      variants={swordDrawVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <span className="text-4xl">⚔️</span>
                    </motion.div>
                    <p className="text-ministry-accent font-semibold">Live Stream</p>
                    <p className="text-sm text-gray-300">Coming Soon</p>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 left-4 bg-ministry-secondary text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentEpisode.duration}
                </div>
              </div>

              {/* Episode Info */}
              <div className="p-8 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-ministry text-ministry-accent mb-4">
                      {currentEpisode.title}
                    </h3>
                    <p className="text-body text-parchment mb-6 leading-relaxed">
                      {currentEpisode.description}
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-ministry-accent text-black px-6 py-3 rounded font-semibold hover:bg-ministry-accent/80 transition-colors">
                        Watch Now
                      </button>
                      <button className="border border-ministry-accent text-ministry-accent px-6 py-3 rounded font-semibold hover:bg-ministry-accent hover:text-black transition-colors">
                        Add to Playlist
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-6">
            <button
              onClick={prevEpisode}
              className="w-12 h-12 bg-ministry-accent/20 hover:bg-ministry-accent/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous episode"
            >
              <span className="text-2xl">‹</span>
            </button>

            {/* Episode Indicators */}
            <div className="flex gap-2">
              {episodes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToEpisode(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-ministry-accent'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to episode ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextEpisode}
              className="w-12 h-12 bg-ministry-accent/20 hover:bg-ministry-accent/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next episode"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-400 hover:text-ministry-accent transition-colors"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PodcastCarousel;
