import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import CrusaderCard from './CrusaderCard';
import { containerVariants, itemVariants } from '../utils/animationVariants';

const MotivationGrid = () => {
  const videos = [
    {
      title: "Defy the World's Drift | Biblical Motivation",
      videoId: "vZft9YxDLts",
      views: "2.1K views",
      date: "3 days ago",
      description: "Stand firm against cultural currents that pull you away from God's truth."
    },
    {
      title: "The Sacrifice of True Manhood",
      videoId: "placeholder1",
      views: "1.8K views",
      date: "1 week ago",
      description: "Embrace the cross-bearing life that defines authentic masculinity."
    },
    {
      title: "Mastering Anger as a Man of Faith",
      videoId: "placeholder2",
      views: "3.2K views",
      date: "2 weeks ago",
      description: "Transform destructive anger into righteous indignation through Christ."
    },
    {
      title: "The Strength of Silent Prayer",
      videoId: "placeholder3",
      views: "1.5K views",
      date: "3 weeks ago",
      description: "Discover the power of prayer in the quiet battles of life."
    },
    {
      title: "Fatherhood: Legacy of Faith",
      videoId: "placeholder4",
      views: "2.7K views",
      date: "1 month ago",
      description: "Raise warriors for Christ in an age of confusion."
    },
    {
      title: "Abstinence: The Warrior's Discipline",
      videoId: "placeholder5",
      views: "4.1K views",
      date: "6 weeks ago",
      description: "Master your body and mind through biblical purity."
    }
  ];

  return (
    <AnimatedSection className="px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-ministry text-ministry-accent mb-4">
            Motivational Forges
          </h2>
          <p className="text-xl text-body text-parchment max-w-3xl mx-auto">
            Short bursts of biblical inspiration to ignite your spirit and strengthen your resolve as a man of God.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {videos.map((video, index) => (
            <motion.div key={video.videoId} variants={itemVariants}>
              <CrusaderCard
                title={video.title}
                videoId={video.videoId}
                views={video.views}
                date={video.date}
                description={video.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default MotivationGrid;
