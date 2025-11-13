import React from 'react';
import { motion } from 'framer-motion';
import { screenShakeVariants } from '../utils/animationVariants';

interface ShakeMotionProps {
  children: React.ReactNode;
  className?: string;
  trigger?: boolean;
}

const ShakeMotion = ({ children, className = '', trigger = false }: ShakeMotionProps) => {
  return (
    <motion.div
      className={className}
      variants={screenShakeVariants}
      animate={trigger ? 'shake' : {}}
    >
      {children}
    </motion.div>
  );
};

export default ShakeMotion;
