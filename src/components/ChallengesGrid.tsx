import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { containerVariants, itemVariants, crimsonGlowVariants } from '../utils/animationVariants';

interface Challenge {
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
  color: string;
}

const ChallengesGrid = () => {
  const challenges: Challenge[] = [
    {
      title: "Weekly Abstinence Challenge",
      description: "Commit to purity for 7 days. Strengthen your discipline and honor God with your body.",
      duration: "7 Days",
      difficulty: "Intermediate",
      icon: "🛡️",
      color: "from-red-900 to-red-800"
    },
    {
      title: "Fatherhood Forge",
      description: "Daily scripture reading focused on godly fatherhood. Lead your family with biblical wisdom.",
      duration: "30 Days",
      difficulty: "Beginner",
      icon: "👑",
      color: "from-amber-900 to-amber-800"
    },
    {
      title: "Prayer Warrior Training",
      description: "Develop a consistent prayer life. Battle in the spiritual realm with persistence and faith.",
      duration: "21 Days",
      difficulty: "Intermediate",
      icon: "⚔️",
      color: "from-stone-900 to-stone-800"
    },
    {
      title: "Scripture Memory Citadel",
      description: "Memorize key verses for spiritual warfare. Arm yourself with God's Word.",
      duration: "14 Days",
      difficulty: "Advanced",
      icon: "📜",
      color: "from-yellow-900 to-yellow-800"
    },
    {
      title: "Fasting for Breakthrough",
      description: "Intermittent fasting combined with prayer. Seek God's guidance and strength.",
      duration: "3 Days",
      difficulty: "Advanced",
      icon: "🔥",
      color: "from-orange-900 to-orange-800"
    },
    {
      title: "Brotherhood Accountability",
      description: "Connect with other men for mutual encouragement. Iron sharpens iron in community.",
      duration: "Ongoing",
      difficulty: "Beginner",
      icon: "🤝",
      color: "from-blue-900 to-blue-800"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <AnimatedSection className="px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-ministry text-ministry-accent mb-4">
            Challenges Citadel
          </h2>
          <p className="text-xl text-body text-parchment max-w-3xl mx-auto">
            Forge your character through biblical disciplines. Transform weakness into strength through Christ.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              variants={itemVariants}
              className={`bg-gradient-to-br ${challenge.color} rounded-lg p-6 border-2 border-ministry-accent/30 hover:border-ministry-accent transition-all duration-300 group cursor-pointer`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{challenge.icon}</div>
                <h3 className="text-xl font-ministry text-ministry-accent mb-2">
                  {challenge.title}
                </h3>
              </div>

              <p className="text-body text-parchment text-sm mb-4 leading-relaxed">
                {challenge.description}
              </p>

              <div className="flex justify-between items-center text-xs">
                <span className="bg-ministry-secondary text-black px-2 py-1 rounded-full font-semibold">
                  {challenge.duration}
                </span>
                <span className={`font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>

              <div className="mt-4 text-center">
                <button className="bg-ministry-accent text-black px-4 py-2 rounded font-semibold hover:bg-ministry-accent/80 transition-colors text-sm">
                  Accept Challenge
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <p className="text-parchment text-lg mb-4">
            "For God gave us a spirit not of fear but of power and love and self-control."
          </p>
          <p className="text-ministry-accent font-ministry">
            — 2 Timothy 1:7
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ChallengesGrid;
