import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hoverVariants } from '../utils/animationVariants';

interface PortalBladeProps {
  title: string;
  subtitle: string;
  path: string;
  theme: string;
  icon: string;
  delay?: number;
}

const PortalBlade = ({ title, subtitle, path, theme, icon, delay = 0 }: PortalBladeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      whileHover="hover"
      variants={hoverVariants}
      className="group"
    >
      <Link
        to={path}
        className={`block w-full max-w-sm mx-auto bg-surface border-2 border-${theme}-accent/30 rounded-lg p-8 text-center hover:border-${theme}-accent transition-all duration-300 hover:shadow-2xl hover:shadow-${theme}-accent/20`}
        aria-label={`Navigate to ${title} - ${subtitle}`}
      >
        <motion.div
          className="text-6xl mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {icon}
        </motion.div>
        <h2 className={`text-2xl font-bold mb-2 text-${theme}-accent`}>
          {title}
        </h2>
        <p className="text-gray-300 text-lg">
          {subtitle}
        </p>
        <motion.div
          className="mt-4 text-sm text-gray-400 group-hover:text-white transition-colors"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          Enter Portal →
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default PortalBlade;
