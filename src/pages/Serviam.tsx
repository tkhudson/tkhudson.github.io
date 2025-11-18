import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MotivationGrid from '../components/MotivationGrid';
import { bannerUnfurlVariants, torchIgniteVariants, itemVariants, stoneParallaxVariants } from '../utils/animationVariants';

const Serviam = () => {
  const location = useLocation();

  useEffect(() => {
    // Apply theme class to body for global styling
    document.body.classList.add('theme-serviam');
    return () => {
      document.body.classList.remove('theme-serviam');
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden">
      {/* Parallax Castle Background */}
      <div className="fixed inset-0">
        {/* Stone texture background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B6914' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Torch-lit stone walls */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900"
          variants={stoneParallaxVariants}
          animate="parallax"
        />

        {/* Glowing scripture overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 text-6xl font-ministry text-accent transform -rotate-12">
            SERVIAM
          </div>
          <div className="absolute bottom-1/4 right-1/4 text-4xl font-ministry text-accent transform rotate-12">
            FERRO
          </div>
        </div>
      </div>

      {/* Back to Portal Button */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 bg-accent text-black px-4 py-2 rounded font-bold hover:bg-accent/80 transition-colors backdrop-blur-sm"
        aria-label="Back to Portal"
      >
        ← Back to Portal
      </Link>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          {/* Torch particles */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full"
            variants={torchIgniteVariants}
            animate="ignite"
          />
          <motion.div
            className="absolute top-32 right-32 w-3 h-3 bg-accent rounded-full"
            variants={torchIgniteVariants}
            animate="ignite"
            style={{ animationDelay: '0.5s' }}
          />

          <div className="text-center max-w-6xl mx-auto">
            {/* Banner unfurl animation */}
            <motion.div
              className="mb-8 relative"
              variants={bannerUnfurlVariants}
              initial="initial"
              animate="animate"
            >
              <div className="text-6xl md:text-8xl mb-4">⚔️</div>
              <div className="absolute -top-4 -left-4 text-4xl opacity-50">🏴</div>
              <div className="absolute -top-4 -right-4 text-4xl opacity-50 scale-x-[-1]">🏴</div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-ministry mb-6 text-accent"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              SERVIAM:
              <br />
              <span className="text-white text-shadow-etched">Forge Biblical Masculinity</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-parchment max-w-4xl mx-auto mb-8 leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Stand Firm as Men of God | Christian Podcast & Guidance | @serviamJesus
            </motion.p>

            {/* CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://youtube.com/@serviamJesus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🔥 Join the Brotherhood
              </a>
              <div className="text-parchment text-sm opacity-75">
                "Serviam Ferro" - I serve with iron
              </div>
            </motion.div>

            {/* Cross HUD overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="text-9xl text-accent">✠</div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Sections */}
        <MotivationGrid />
        {/* Podcast Bastion */}
        <section className="px-4 py-20 bg-gradient-to-b from-stone-800/30 to-stone-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-ministry text-accent mb-4">
                Podcast Bastion
              </h2>
              <p className="text-xl text-parchment max-w-3xl mx-auto mb-8">
                Latest podcast episodes from Serviam. Biblical motivation and guidance for men of faith.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=GtAMk8XukFmEeoj3&list=PLRFUyLVp9C5ynd_nUbUbwwWrEMsnvI5IH"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-lg border-2 border-accent/30"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Biblical Motivation Podcast Section */}
        <section className="px-4 py-20 bg-gradient-to-b from-stone-800/30 to-stone-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-ministry text-accent mb-4">
                Biblical Motivation Podcast
              </h2>
              <p className="text-xl text-parchment max-w-3xl mx-auto mb-8">
                Scripture-based motivation and inspiration for men of faith. A dedicated series focusing on biblical principles for daily living.
              </p>
              <a
                href="https://www.youtube.com/playlist?list=PLRFUyLVp9C5yVF35TxQdPmh-FZzt6JafZ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-black px-8 py-4 rounded font-bold text-lg hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                🎧 Listen to Biblical Motivation Series
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-lg border-2 border-accent/30 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-ministry text-accent mb-3">Scripture Focus</h3>
                <p className="text-parchment text-sm">
                  Each episode centers on key biblical passages that speak to God's design for masculinity.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-lg border-2 border-accent/30 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-xl font-ministry text-accent mb-3">Practical Application</h3>
                <p className="text-parchment text-sm">
                  Biblical principles applied to modern challenges and daily Christian living.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-lg border-2 border-accent/30 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-ministry text-accent mb-3">Spiritual Fire</h3>
                <p className="text-parchment text-sm">
                  Ignite your faith and strengthen your resolve to live as Christ commanded.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reflections Ramparts Section */}
        <section className="px-4 py-20 bg-gradient-to-b from-stone-900/50 to-stone-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-ministry text-accent mb-4">
                Reflections Ramparts
              </h2>
              <p className="text-xl text-parchment max-w-3xl mx-auto">
                Scripture-based posts on masculinity, leadership, and spiritual warfare.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.article
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-lg border-2 border-accent/30 hover:border-accent transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-ministry text-accent mb-4">
                  Iron Sharpening Iron: Brotherhood in Chaos
                </h3>
                <p className="text-parchment mb-6 leading-relaxed">
                  In a world that isolates men and turns them against each other, biblical brotherhood
                  becomes our fortress. Discover how true friendship in Christ creates unbreakable bonds.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-accent font-semibold">Proverbs 27:17</span>
                  <span className="text-parchment/70">Read More →</span>
                </div>
              </motion.article>

              <motion.article
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-lg border-2 border-accent/30 hover:border-accent transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-ministry text-accent mb-4">
                  From The Iron Legion to Serviam: My Journey
                </h3>
                <p className="text-parchment mb-6 leading-relaxed">
                  From military service to serving Christ with iron resolve. A testimony of transformation
                  through faith, discipline, and the call to biblical masculinity.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-accent font-semibold">Romans 12:1-2</span>
                  <span className="text-parchment/70">Read More →</span>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Media Keep Section */}
        <section className="px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-ministry text-accent mb-4">
                Media Keep
              </h2>
              <p className="text-xl text-parchment max-w-3xl mx-auto">
                YouTube channel, podcast episodes, and community resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-lg border-2 border-accent/30 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">📺</div>
                <h3 className="text-2xl font-ministry text-accent mb-4">YouTube Channel</h3>
                <p className="text-parchment mb-6">
                  Weekly teachings on biblical masculinity, current events analysis, and spiritual guidance.
                </p>
                <a
                  href="https://youtube.com/@serviamJesus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-black px-6 py-3 rounded font-bold hover:bg-accent/80 transition-colors inline-block"
                >
                  Subscribe Now
                </a>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-lg border-2 border-accent/30 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">🎧</div>
                <h3 className="text-2xl font-ministry text-accent mb-4">Podcast Episodes</h3>
                <p className="text-parchment mb-6">
                  In-depth discussions on faith, leadership, and standing firm in a challenging world.
                </p>
                <a
                  href="https://serviam.podbean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-black px-6 py-3 rounded font-bold hover:bg-accent/80 transition-colors inline-block"
                >
                  Listen Now
                </a>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-lg border-2 border-accent/30 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-2xl font-ministry text-accent mb-4">Biblical Motivation</h3>
                <p className="text-parchment mb-6">
                  Scripture-based motivation and inspiration for men of faith.
                </p>
                <a
                  href="https://www.youtube.com/playlist?list=PLRFUyLVp9C5yVF35TxQdPmh-FZzt6JafZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-black px-6 py-3 rounded font-bold hover:bg-accent/80 transition-colors inline-block"
                >
                  Watch Playlist
                </a>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-lg border-2 border-accent/30 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-ministry text-accent mb-4">Community</h3>
                <p className="text-parchment mb-6">
                  Join the brotherhood. Connect with like-minded men pursuing biblical masculinity.
                </p>
                <a
                  href="https://discord.gg/serviamjesus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-black px-6 py-3 rounded font-bold hover:bg-accent/80 transition-colors inline-block"
                >
                  Join Community
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enlist CTA Section */}
        <section className="px-4 py-20 bg-gradient-to-r from-crimson/20 via-accent/10 to-crimson/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-ministry text-accent mb-6">
                Serve with Iron
              </h2>
              <p className="text-xl text-parchment mb-8">
                Join thousands of men forging biblical masculinity. Subscribe, share, and stand firm.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
              variants={itemVariants}
            >
              <a
                href="https://youtube.com/@serviamJesus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-black px-8 py-4 rounded font-bold text-lg hover:bg-accent/80 transition-all duration-300 shadow-lg"
              >
                📺 YouTube Subscribe
              </a>
              <a
                href="https://serviam.podbean.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-black px-8 py-4 rounded font-bold text-lg hover:bg-accent/80 transition-all duration-300 shadow-lg"
              >
                🎧 Podcast Subscribe
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-parchment/80"
            >
              <p className="mb-4">Thank you for your support and prayers.</p>
              <p className="text-accent font-ministry text-lg">
                "Be strong and courageous. Do not be afraid; do not be discouraged,
                for the Lord your God will be with you wherever you go."
              </p>
              <p className="text-parchment mt-2">— Joshua 1:9</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Serviam;
