import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPortal from './components/LandingPortal';
import TylerHudson from './components/TylerHudson';
import Persevus from './components/Persevus';
import Serviam from './components/Serviam';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPortal />} />
            <Route path="/tyler-hudson" element={<TylerHudson />} />
            <Route path="/persevus" element={<Persevus />} />
            <Route path="/serviam" element={<Serviam />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
