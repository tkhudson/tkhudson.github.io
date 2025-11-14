import { useState } from 'react';
import { motion } from 'framer-motion';
import { armorClankVariants } from '../utils/animationVariants';

interface CrusaderCardProps {
  title: string;
  videoId: string;
  views?: string;
  date?: string;
  description?: string;
  thumbnailUrl?: string;
}

const CrusaderCard = ({
  title,
  videoId,
  views = '1.2K views',
  date = '2 days ago',
  description,
  thumbnailUrl
}: CrusaderCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <>
      <motion.div
        className="bg-surface rounded-lg overflow-hidden border-2 border-ministry-accent/30 hover:border-ministry-accent transition-all duration-300 group cursor-pointer"
        variants={armorClankVariants}
        whileHover="hover"
        onClick={() => setShowModal(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setShowModal(true);
          }
        }}
        aria-label={`Watch ${title}`}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-50">⚔️</div>
            </div>
          )}

          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-ministry-accent/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl text-black ml-1">▶</span>
            </motion.div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
            5:23
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-ministry-accent transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">{description}</p>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="bg-surface rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-ministry-accent/30 flex justify-between items-center">
              <h2 id="modal-title" className="text-xl font-ministry text-ministry-accent">
                {title}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                title={title}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CrusaderCard;
