import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { containerVariants, itemVariants } from '../utils/animationVariants';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={`py-16 ${className}`}
      transition={{ delay }}
    >
      <motion.div variants={itemVariants}>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default AnimatedSection;
