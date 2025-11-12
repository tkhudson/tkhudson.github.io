import { Link } from 'react-router-dom';
import '../styles/Serviam.css';

const Serviam = () => {
  return (
    <div className="serviam">
      <header className="header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Serviam</h1>
        <p>Christian Mens Ministry</p>
      </header>
      <main className="content">
        <section className="about">
          <h2>About</h2>
          <p>Serviam is dedicated to biblical masculinity and Christian men's ministry. Join us in embracing our calling to serve God and lead with purpose.</p>
        </section>
        <section className="platforms">
          <h2>Follow Us</h2>
          <div className="platform-links">
            <a href="https://youtube.com/@serviamJesus" target="_blank" rel="noopener noreferrer" className="platform-link">YouTube</a>
          </div>
        </section>
        <section className="ministry">
          <h2>Ministry Content</h2>
          <div className="content-grid">
            {/* Add ministry content here */}
            <div className="content-item">
              <h3>Message Title</h3>
              <p>Inspiring biblical teachings for men</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Serviam;
