import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'YouTube - @Persevus',
      url: 'https://youtube.com/@Persevus',
      icon: '📺',
    },
    {
      name: 'YouTube - @serviamJesus',
      url: 'https://youtube.com/@serviamJesus',
      icon: '⛪',
    },
    {
      name: 'Rumble - Persevus',
      url: 'https://rumble.com/c/Persevus',
      icon: '🎥',
    },
    {
      name: 'GitHub - TylerHudson',
      url: 'https://github.com/tkhudson',
      icon: '💻',
    },
  ];

  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
      className="bg-surface border-t border-gray-700 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                aria-label={`Visit ${link.name}`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm">{link.name.split(' - ')[1]}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 Tyler Hudson. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
