import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  theme?: 'landing' | 'tyler' | 'persevus' | 'serviam';
  lines?: number;
  className?: string;
}

const SkeletonLoader = ({ theme = 'landing', lines = 3, className = '' }: SkeletonLoaderProps) => {
  const themeStyles = {
    landing: {
      bg: 'bg-gray-700/50',
      shimmer: 'bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50'
    },
    tyler: {
      bg: 'bg-gray-700/50',
      shimmer: 'bg-gradient-to-r from-gray-700/50 via-tech-accent/20 to-gray-700/50'
    },
    persevus: {
      bg: 'bg-gray-700/50',
      shimmer: 'bg-gradient-to-r from-gray-700/50 via-red-500/20 to-gray-700/50'
    },
    serviam: {
      bg: 'bg-gray-700/50',
      shimmer: 'bg-gradient-to-r from-gray-700/50 via-accent/20 to-gray-700/50'
    }
  };

  const styles = themeStyles[theme];

  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-4 ${styles.bg} rounded animate-pulse`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`h-full ${styles.shimmer} rounded animate-shimmer`} />
        </motion.div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
