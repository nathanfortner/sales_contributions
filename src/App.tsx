import React from 'react';
import './App.css';
import SalesDashboard from './components/SalesDashboard';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>SalesContributions</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">Features</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">SalesContributions</span>
            </h1>
            <p className="hero-subtitle">
              Your comprehensive platform for tracking and analyzing sales contributions
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              📊
            </div>
          </div>
        </div>
      </section>

      {/* Sales Dashboard Section */}
      <section className="dashboard-section">
        <div className="container">
          <SalesDashboard />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Sales Analytics</h3>
              <p>Comprehensive analytics and insights to track your sales performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Team Management</h3>
              <p>Manage your sales team and track individual contributions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Reports</h3>
              <p>Generate detailed reports and visualizations in real-time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Goal Tracking</h3>
              <p>Set and monitor sales goals with automated progress tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About SalesContributions</h2>
              <p>
                We help businesses track, analyze, and optimize their sales performance. 
                Our platform provides comprehensive tools for managing sales teams, 
                tracking contributions, and generating insightful reports.
              </p>
              <p>
                Whether you're a small business or a large enterprise, our solution 
                scales with your needs and helps you make data-driven decisions.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>1000+</h3>
                <p>Active Users</p>
              </div>
              <div className="stat">
                <h3>50M+</h3>
                <p>Sales Tracked</p>
              </div>
              <div className="stat">
                <h3>99.9%</h3>
                <p>Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to get started?</h3>
              <p>Contact us today to learn how SalesContributions can help your business grow.</p>
              <div className="contact-details">
                <p>📧 info@salescontributions.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Business St, Suite 100</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Your Message" className="form-textarea"></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SalesContributions</h3>
              <p>Empowering businesses with data-driven sales insights.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SalesContributions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
