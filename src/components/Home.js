import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <h1>Welcome to My Personal Website</h1>
        <p>
          Hi, I'm Resham Bahadur Gurung.
        </p>
        <a href="#about" className="btn">Learn More About Me</a>
      </div>
    </section>
  );
};

export default Home;
