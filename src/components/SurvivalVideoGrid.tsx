import React from 'react';
import { motion } from 'framer-motion';
import BattlefieldCard from './BattlefieldCard';
import { containerVariants, itemVariants } from '../utils/animationVariants';

interface VideoData {
  title: string;
  videoId: string;
  views: string;
  date: string;
}

interface SurvivalVideoGridProps {
  videos: VideoData[];
}

const SurvivalVideoGrid = ({ videos }: SurvivalVideoGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {videos.map((video, index) => (
        <motion.div key={video.videoId} variants={itemVariants}>
          <BattlefieldCard
            title={video.title}
            videoId={video.videoId}
            views={video.views}
            date={video.date}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SurvivalVideoGrid;
