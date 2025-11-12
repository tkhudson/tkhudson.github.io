import { Link } from 'react-router-dom';
import '../styles/TylerHudson.css';

const TylerHudson = () => {
  return (
    <div className="tyler-hudson">
      <header className="header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Tyler Hudson</h1>
        <p>Tech Professional & Developer</p>
      </header>
      <main className="content">
        <section className="about">
          <h2>About</h2>
          <p>Welcome to my tech portfolio. Here you'll find my projects, articles, and professional background.</p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {/* Add project cards here */}
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of project</p>
            </div>
          </div>
        </section>
        <section className="articles">
          <h2>Articles</h2>
          <div className="article-list">
            {/* Add articles here */}
            <div className="article-item">
              <h3>Article Title</h3>
              <p>Brief description</p>
            </div>
          </div>
        </section>
        <section className="resume">
          <h2>Resume</h2>
          <a href="/assets/thudson_resume_2025.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </section>
      </main>
    </div>
  );
};

export default TylerHudson;
