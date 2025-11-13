import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Tyler Hudson', path: '/tyler', theme: 'tech' },
    { name: 'Persevus', path: '/persevus', theme: 'gaming' },
    { name: 'Serviam', path: '/serviam', theme: 'ministry' },
  ];

  const getThemeClass = (path: string) => {
    if (location.pathname === path) {
      const item = navItems.find(item => item.path === path);
      return `text-${item?.theme}-accent`;
    }
    return 'text-white hover:text-gray-300';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
            aria-label="Tyler Hudson Portfolio Home"
          >
            Tyler Hudson Portfolio
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors font-medium ${getThemeClass(item.path)}`}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
