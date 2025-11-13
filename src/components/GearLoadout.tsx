
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animationVariants';

interface GearItem {
  name: string;
  description: string;
  specs: string;
  image?: string;
}

interface GearLoadoutProps {
  gear: GearItem[];
}

const GearLoadout = ({ gear }: GearLoadoutProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {gear.map((item, index) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          className="group"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 hover:border-red-600 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-red-500/20">
            {/* Military Crate Header */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-3 border-b border-gray-600">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-gaming text-lg font-bold truncate">
                  {item.name}
                </h3>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Image/Visual Area */}
            <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black p-6 flex items-center justify-center">
              {/* Crate Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <pattern id={`crate-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="20" height="20" fill="none" stroke="#D4A574" strokeWidth="0.5"/>
                    <rect x="2" y="2" width="16" height="16" fill="none" stroke="#B8471A" strokeWidth="0.2"/>
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#crate-${index})`}/>
                </svg>
              </div>

              {/* Gear Icon/Image */}
              <div className="relative z-10 text-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}

                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </div>
            </div>

            {/* Specs Panel */}
            <div className="p-4 bg-gray-900/50">
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {item.description}
              </p>
              <div className="border-t border-gray-700 pt-3">
                <h4 className="text-red-400 font-orbitron text-xs uppercase tracking-wider mb-2">
                  Specifications
                </h4>
                <p className="text-gray-400 text-xs font-mono">
                  {item.specs}
                </p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-2">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-white text-xs font-orbitron uppercase tracking-wider">
                  Operational
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GearLoadout;
