import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import TylerHudson from './components/TylerHudson';
import Persevus from './components/Persevus';
import Serviam from './components/Serviam';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tyler-hudson" element={<TylerHudson />} />
        <Route path="/persevus" element={<Persevus />} />
        <Route path="/serviam" element={<Serviam />} />
      </Routes>
    </Router>
  );
}

export default App;
