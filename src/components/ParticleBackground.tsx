import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { particleVariants } from '../utils/animationVariants';

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

const ParticleBackground = ({ particleCount = 50, className = '' }: ParticleBackgroundProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          variants={particleVariants}
          animate="animate"
          transition={{
            delay: particle.delay,
            duration: 3 + Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
