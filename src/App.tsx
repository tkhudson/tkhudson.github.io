import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Tyler from './pages/Tyler';
import Persevus from './pages/Persevus';
import Serviam from './pages/Serviam';
import NotFound from './pages/NotFound';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tyler" element={<Tyler />} />
            <Route path="/persevus" element={<Persevus />} />
            <Route path="/serviam" element={<Serviam />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
