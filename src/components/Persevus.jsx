import { Link } from 'react-router-dom';
import '../styles/Persevus.css';

const Persevus = () => {
  return (
    <div className="persevus">
      <header className="header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Persevus</h1>
        <p>Gaming Content Creator</p>
      </header>
      <main className="content">
        <section className="about">
          <h2>About</h2>
          <p>Persevus is my gaming persona. Follow my content on YouTube and Rumble for gaming reviews, streams, and more.</p>
        </section>
        <section className="platforms">
          <h2>Platforms</h2>
          <div className="platform-links">
            <a href="https://youtube.com/@persevus" target="_blank" rel="noopener noreferrer" className="platform-link">YouTube</a>
            <a href="https://rumble.com/persevus" target="_blank" rel="noopener noreferrer" className="platform-link">Rumble</a>
          </div>
        </section>
        <section className="content-section">
          <h2>Latest Content</h2>
          <div className="content-grid">
            {/* Add content items here */}
            <div className="content-item">
              <h3>Video Title</h3>
              <p>Description of the video</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Persevus;
