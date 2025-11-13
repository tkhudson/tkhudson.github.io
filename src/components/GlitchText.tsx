import { motion } from 'framer-motion';
import { glitchVariants } from '../utils/animationVariants';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
}

const GlitchText = ({ text, className = '', glitchOnHover = true }: GlitchTextProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={glitchVariants}
      whileHover={glitchOnHover ? 'glitch' : undefined}
      initial="initial"
    >
      {text}
    </motion.span>
  );
};

export default GlitchText;
