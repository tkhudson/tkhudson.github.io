import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { screenShakeVariants } from '../utils/animationVariants';

interface BattlefieldCardProps {
  title: string;
  videoId: string;
  views: string;
  date: string;
  thumbnail?: string;
}

const BattlefieldCard = ({ title, videoId, views, date, thumbnail }: BattlefieldCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <motion.div
        className="bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-red-600 transition-all duration-300 cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        variants={screenShakeVariants}
        animate={isHovered ? 'shake' : {}}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-800 overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              className="bg-red-600 rounded-full p-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-orbitron">
            YT
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-gaming text-lg mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
            {title}
          </h3>
          <div className="flex justify-between text-sm text-gray-400 font-orbitron">
            <span>{views} views</span>
            <span>{date}</span>
          </div>
        </div>

        {/* Bullet Casings Effect */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animation-delay-100"></div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close video modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video Player */}
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-gaming text-xl mt-4 text-center">
                {title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BattlefieldCard;
