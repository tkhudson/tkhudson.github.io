import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero">
        <h1 className="title">Tyler Hudson</h1>
        <p className="subtitle">Portfolio of My Life</p>
      </div>
      <div className="sections">
        <Link to="/tyler-hudson" className="section-card tyler-card">
          <div className="card-content">
            <h2>Tyler Hudson</h2>
            <p>Tech Background & Projects</p>
          </div>
        </Link>
        <Link to="/persevus" className="section-card persevus-card">
          <div className="card-content">
            <h2>Persevus</h2>
            <p>Gaming Content Creator</p>
          </div>
        </Link>
        <Link to="/serviam" className="section-card serviam-card">
          <div className="card-content">
            <h2>Serviam</h2>
            <p>Christian Mens Ministry</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
