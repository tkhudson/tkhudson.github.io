import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      <ParticleBackground particleCount={150} className="opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-gray-400 mb-4">404</h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Lost in the Void
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl text-gray-300 max-w-2xl mb-8"
        >
          The portal you seek does not exist in this dimension.
          Return to the main hub to explore the realms of Tyler Hudson.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/"
            className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
          >
            Return to Portal Hub
          </Link>
          <Link
            to="/tyler"
            className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Explore Tyler's World
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-gray-400 text-sm"
        >
          <p>Available Realms:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/tyler" className="hover:text-tech-accent transition-colors">Tyler Hudson (Tech)</Link>
            <Link to="/persevus" className="hover:text-gaming-accent transition-colors">Persevus (Gaming)</Link>
            <Link to="/serviam" className="hover:text-ministry-accent transition-colors">Serviam (Ministry)</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
