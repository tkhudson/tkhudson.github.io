import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageVariants, pageTransition } from './utils/animationVariants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SkeletonLoader from './components/SkeletonLoader';
import SEO from './components/SEO';
import './styles/global.css';

// Lazy load pages for better performance
const Landing = lazy(() => import('./pages/Landing'));
const Tyler = lazy(() => import('./pages/Tyler'));
const Persevus = lazy(() => import('./pages/Persevus'));
const Serviam = lazy(() => import('./pages/Serviam'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component with theme-aware skeleton
const PageLoader = ({ theme = 'landing' }: { theme?: 'landing' | 'tyler' | 'persevus' | 'serviam' }) => (
  <motion.div
    className="min-h-screen flex items-center justify-center"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <div className="text-center">
      <SkeletonLoader theme={theme} lines={5} className="max-w-md mx-auto" />
      <div className="mt-8">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    </div>
  </motion.div>
);

// Route wrapper with SEO and error boundary
const RouteWrapper = ({
  children,
  title,
  description,
  theme
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  theme: 'landing' | 'tyler' | 'persevus' | 'serviam';
}) => {
  const location = useLocation();

  // Structured data for each page
  const getStructuredData = (pageTheme: string) => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Tyler Hudson Portfolio',
      url: 'https://tkhudson.github.io',
      author: {
        '@type': 'Person',
        name: 'Tyler Hudson',
      },
    };

    switch (pageTheme) {
      case 'tyler':
        return {
          ...baseData,
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: 'Tyler Hudson',
            jobTitle: 'Software Engineer & Tech Professional',
            description: 'Tech-savvy engineer with expertise in cybersecurity, network administration, and software development.',
          },
        };
      case 'persevus':
        return {
          ...baseData,
          '@type': 'WebPage',
          name: 'Persevus - Gaming & Survival',
          description: 'Explore the gaming world of Tyler Hudson - FPS games, survival strategies, and tactical gaming content.',
        };
      case 'serviam':
        return {
          ...baseData,
          '@type': 'WebPage',
          name: 'Serviam - Christian Ministry',
          description: 'Christian ministry and podcast content by Tyler Hudson, focusing on biblical teachings and spiritual growth.',
        };
      default:
        return baseData;
    }
  };

  return (
    <ErrorBoundary theme={theme}>
      <SEO
        title={title}
        description={description}
        url={location.pathname}
        structuredData={getStructuredData(theme)}
      />
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="theme-transition"
      >
        <Suspense fallback={<PageLoader theme={theme} />}>
          {children}
        </Suspense>
      </motion.div>
    </ErrorBoundary>
  );
};

// Main app component
function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-white theme-transition">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <RouteWrapper
                theme="landing"
                title="Portal"
                description="Welcome to Tyler Hudson's digital realm. Explore my journey through technology, gaming, and Christian ministry."
              >
                <Landing />
              </RouteWrapper>
            }
          />
          <Route
            path="/tyler"
            element={
              <RouteWrapper
                theme="tyler"
                title="Tech Portfolio"
                description="Discover my expertise in software engineering, cybersecurity, network administration, and cloud technologies."
              >
                <Tyler />
              </RouteWrapper>
            }
          />
          <Route
            path="/persevus"
            element={
              <RouteWrapper
                theme="persevus"
                title="Gaming World"
                description="Dive into the gaming universe - FPS tactics, survival strategies, and competitive gaming insights."
              >
                <Persevus />
              </RouteWrapper>
            }
          />
          <Route
            path="/serviam"
            element={
              <RouteWrapper
                theme="serviam"
                title="Christian Ministry"
                description="Christian podcast, biblical teachings, and ministry content focused on faith, growth, and spiritual development."
              >
                <Serviam />
              </RouteWrapper>
            }
          />
          <Route
            path="*"
            element={
              <RouteWrapper
                theme="landing"
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Return to the portal to explore Tyler Hudson's digital realm."
              >
                <NotFound />
              </RouteWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
