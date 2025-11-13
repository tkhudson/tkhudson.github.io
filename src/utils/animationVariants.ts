import { Variants } from 'framer-motion';

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(10px)',
  },
  in: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(5px)',
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Stagger animations for lists
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

// Glitch effect
export const glitchVariants: Variants = {
  initial: { x: 0 },
  glitch: {
    x: [-2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      times: [0, 0.2, 0.4, 0.6, 1],
    },
  },
};

// Typing effect
export const typingVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

// Floating particles
export const particleVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Hover effects
export const hoverVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

// Flame flicker
export const flameVariants: Variants = {
  flicker: {
    opacity: [1, 0.8, 1, 0.9, 1],
    scale: [1, 1.02, 1, 0.98, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Post-apocalyptic effects
export const dustCloudVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: [0, 0.6, 0.3, 0],
    scale: [0.8, 1.2, 1.5, 2],
    transition: {
      duration: 2,
      ease: 'easeOut',
    },
  },
};

export const shrapnelVariants: Variants = {
  animate: {
    x: [0, 100, -50, 200],
    y: [0, -80, 60, -120],
    rotate: [0, 180, 360],
    opacity: [1, 0.8, 0.6, 0],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

export const screenShakeVariants: Variants = {
  shake: {
    x: [0, -5, 5, -3, 3, 0],
    y: [0, 2, -2, 1, -1, 0],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const holographicVariants: Variants = {
  flicker: {
    opacity: [1, 0.7, 1, 0.8, 1, 0.9, 1],
    filter: [
      'brightness(1) hue-rotate(0deg)',
      'brightness(1.2) hue-rotate(90deg)',
      'brightness(1) hue-rotate(0deg)',
      'brightness(0.9) hue-rotate(180deg)',
      'brightness(1) hue-rotate(0deg)',
      'brightness(1.1) hue-rotate(270deg)',
      'brightness(1) hue-rotate(0deg)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const ammoCounterVariants: Variants = {
  count: {
    opacity: [0, 1],
    y: [10, 0],
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
};
