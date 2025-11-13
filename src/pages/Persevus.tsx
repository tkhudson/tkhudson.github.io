import { useEffect } from 'react';
import { motion } from 'framer-motion';
import DustParticles from '../components/DustParticles';
import SurvivalVideoGrid from '../components/SurvivalVideoGrid';
import ShooterCarousel from '../components/ShooterCarousel';
import GearLoadout from '../components/GearLoadout';
import AnimatedSection from '../components/AnimatedSection';
import { dustCloudVariants, shrapnelVariants, holographicVariants } from '../utils/animationVariants';

const Persevus = () => {

  useEffect(() => {
    // Apply theme class to body
    document.body.classList.add('theme-persevus');
    return () => {
      document.body.classList.remove('theme-persevus');
    };
  }, []);

  // Video data - using real YouTube videos
  const survivalVideos = [
    {
      title: "CAL RIPLEY's FATE... | A Project Zomboid story",
      videoId: "BJK6Tz5Ubk8",
      views: "15K",
      date: "2 days ago"
    },
    {
      title: "Zombie Killin Business | Project Zomboid",
      videoId: "3RpaaeDjHK0",
      views: "8.2K",
      date: "1 week ago"
    }
  ];

  const shooterVideos = [
    {
      title: "Can a level 5 survive IMPOSSIBLE DIFFICULTY?! | Helldivers 2",
      videoId: "umFmPVLifOw",
      views: "45K",
      date: "1 day ago"
    }
  ];

  // Gear data
  const gearItems = [
    {
      name: "RTX 4090 Gaming Rig",
      description: "Battle-hardened workstation for rendering cinematic zombie apocalypses and high-fidelity Battlefield simulations.",
      specs: "RTX 4090 • AMD Ryzen 9 7950X • 64GB DDR5 • Custom Liquid Cooling"
    },
    {
      name: "Rode NT1-A Microphone",
      description: "Crystal-clear audio capture for survival commentary and multiplayer coordination.",
      specs: "Large-diaphragm condenser • Cardioid pattern • USB-C • Pop filter included"
    },
    {
      name: "Logitech G915 TKL Keyboard",
      description: "Tactical input device with mechanical switches for precise gaming controls.",
      specs: "Low-profile mechanical • Lightspeed wireless • 30-hour battery • RGB lighting"
    },
    {
      name: "Razer Viper Ultimate Mouse",
      description: "Precision aiming tool for headshot accuracy in zombie hordes and battlefield engagements.",
      specs: "20K DPI sensor • 100g weight • 70-hour battery • Focus+ 20K scroll wheel"
    },
    {
      name: "Samsung Odyssey G9 Monitor",
      description: "Ultra-wide battlefield display for immersive survival gaming experiences.",
      specs: "49\" 32:9 • 240Hz • 1ms • QLED • 1440p resolution"
    },
    {
      name: "SteelSeries Arctis Pro Headset",
      description: "Military-grade communication system for squad coordination and enemy detection.",
      specs: "Hi-Res audio • Active noise canceling • DTS Headphone:X • 2.4GHz wireless"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <DustParticles />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-gray-900/30"></div>

          {/* Animated Wreckage */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gray-700 rounded opacity-20"
            animate={{
              rotate: [0, 360],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-24 h-24 bg-red-800 rounded opacity-15"
            animate={{
              rotate: [360, 0],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Explosive Entrance Animation */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={dustCloudVariants}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="w-full h-full bg-red-600/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Shrapnel Scatter */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              variants={shrapnelVariants}
              animate="animate"
              transition={{ delay: i * 0.1 }}
            />
          ))}

          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-gaming font-bold mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              PERSEVUS
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-gaming mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Survive. Conquer. Create.
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Indie Game Dev | Survival Games | Battlefield Mayhem | YouTube @Persevus
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="https://youtube.com/@persevus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-gaming text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
            >
              Watch Now
            </a>
            <a
              href="#survival-strikes"
              className="border-2 border-red-600 hover:bg-red-600 px-8 py-4 rounded-lg font-gaming text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Content
            </a>
          </motion.div>

          {/* HUD Elements */}
          <motion.div
            className="absolute top-20 left-20 opacity-30"
            variants={holographicVariants}
            animate="flicker"
          >
            <div className="bg-green-500/20 border border-green-500/50 px-3 py-1 rounded font-orbitron text-xs">
              HEALTH: 100%
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-20 opacity-30"
            variants={holographicVariants}
            animate="flicker"
          >
            <div className="bg-blue-500/20 border border-blue-500/50 px-3 py-1 rounded font-orbitron text-xs">
              AMMO: 30/30
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Latest Survival Strikes Section */}
      <AnimatedSection id="survival-strikes" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-gaming font-bold mb-6 text-shadow-lg">
              Latest Survival Strikes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Epic battles against the undead in Project Zomboid and other survival horrors
            </p>
          </motion.div>

          <SurvivalVideoGrid videos={survivalVideos} />
        </div>
      </AnimatedSection>

      {/* Battlefield Breaches Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-gaming font-bold mb-6 text-shadow-lg">
              Battlefield Breaches
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Intense multiplayer combat and tactical gameplay in modern shooters
            </p>
          </motion.div>

          <ShooterCarousel videos={shooterVideos} />
        </div>
      </AnimatedSection>

      {/* Indie Dev Arsenal Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-gaming font-bold mb-6 text-shadow-lg">
              Indie Dev Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tutorials and insights for building your own survival and battlefield games
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Add Background Music to your Game",
                description: "Learn how to implement dynamic audio systems that respond to gameplay intensity.",
                category: "Audio"
              },
              {
                title: "What we discussed to start our Game Dev Studio",
                description: "Business insights and technical decisions that shaped our indie development journey.",
                category: "Business"
              },
              {
                title: "Procedural World Generation",
                description: "Create infinite, believable worlds for your survival games using noise algorithms.",
                category: "Technical"
              }
            ].map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-red-600 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-orbitron">
                    {tutorial.category}
                  </span>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-gaming mb-3 group-hover:text-red-400 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tutorial.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stream Outpost Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-gaming font-bold mb-6 text-shadow-lg">
              Stream Outpost
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Live gameplay sessions and community highlights from Persevus
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Live Status */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-gaming">Live Status</h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-red-400 font-orbitron text-sm">OFFLINE</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Last Stream</span>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <p className="text-white font-medium">Project Zomboid: Multiplayer Survival</p>
                  <p className="text-gray-400 text-sm">4.2 hours • 127 viewers peak</p>
                </div>

                <div className="bg-gray-900/50 rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Next Stream</span>
                    <span className="text-gray-500 text-sm">Tomorrow 8PM EST</span>
                  </div>
                  <p className="text-white font-medium">Helldivers 2: Elite Difficulty</p>
                  <p className="text-gray-400 text-sm">Scheduled stream</p>
                </div>
              </div>

              <a
                href="https://twitch.tv/persevus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-600 hover:bg-purple-700 mt-6 py-3 rounded-lg font-gaming text-center transition-all duration-300 hover:scale-105 block"
              >
                Follow on Twitch
              </a>
            </motion.div>

            {/* Recent Highlights */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-gaming mb-6">Recent Highlights</h3>

              {[
                { title: "Insane Comeback in Helldivers 2", views: "8.5K", duration: "15:32" },
                { title: "Base Defense Gone Wrong", views: "12K", duration: "22:18" },
                { title: "Community Game Night", views: "6.2K", duration: "1:45:23" }
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 hover:border-purple-600 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">
                        {highlight.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{highlight.views} views</span>
                        <span className="mx-2">•</span>
                        <span>{highlight.duration}</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Gear Loadout Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-gaming font-bold mb-6 text-shadow-lg">
              Gear Loadout
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Military-grade equipment for maximum gaming performance and content creation
            </p>
          </motion.div>

          <GearLoadout gear={gearItems} />
        </div>
      </AnimatedSection>

      {/* Enlist CTA Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-gaming font-bold mb-6 text-shadow-lg">
              Join the Fight
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Enlist in the survival community. Follow for the latest content, join live streams, and connect with fellow survivors.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://youtube.com/@persevus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-gaming text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 flex items-center"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>



              <a
                href="https://rumble.com/c/Persevus"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-gaming text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 flex items-center"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.392 7.022l-1.453.965c-.792.525-1.845.525-2.637 0l-1.453-.965c-.792-.525-1.845-.525-2.637 0L3.762 7.987c-.792.525-1.253 1.453-.99 2.382l.566 1.718c.263.792-.066 1.65-.792 2.117l-1.518.99c-.792.525-.99 1.584-.396 2.382l1.518.99c.726.525 1.518.792 2.382.396l1.518-.99c.792-.525 1.32-1.32 1.32-2.182V12.85c0-.792.66-1.453 1.453-1.453s1.453.66 1.453 1.453v.99c0 .792.528 1.584 1.32 2.117l1.518.99c.792.462 1.782.198 2.31-.594l1.518-.99c.726-.462 1.124-1.32.99-2.117l-.566-1.718c-.198-.792.066-1.65.792-2.117l1.453-.965c.792-.525 1.253-1.453.99-2.382l-.566-1.718c-.263-.792.066-1.65.792-2.117l1.518-.99c.792-.525.99-1.584.396-2.382L20.238 1.71c-.726-.525-1.518-.792-2.382-.396l-1.518.99c-.792.525-1.32 1.32-1.32 2.182V4.27c0 .792-.66 1.453-1.453 1.453s-1.453-.66-1.453-1.453v-.99c0-.792-.528-1.584-1.32-2.117L13.392.99c-.792-.462-1.782-.198-2.31.594z"/>
                </svg>
                Rumble Channel
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-500 text-sm">
                Ready to survive the apocalypse? Join our Discord community for discussions, giveaways, and exclusive content.
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-gaming text-sm transition-all duration-300 hover:scale-105"
              >
                Join Discord Server
              </a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Persevus;
