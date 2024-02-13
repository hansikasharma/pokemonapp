// AboutUsPage.js
import React from 'react';
import './../styles/about-us.css'; 
import logo from './../assets/react.svg'

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header>
        <h1>About Our Pokémon Team Maker</h1>
      </header>
      <main>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>Welcome to our Pokémon Team Maker! Our mission is to provide trainers like you with a platform to create, share, and discuss Pokémon teams for battles, tournaments, and adventures.</p>
        </section>
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src= {logo} alt="John Doe" />
              <p>Hansika Sharma</p>
            </div>
            
            
          </div>
        </section>
        <section className="benefits-section">
          <h2>Benefits of Using Pokémon Team Maker</h2>
          <ul>
            <li>Create custom Pokémon teams for battles and competitions.</li>
            <li>Share your teams with the community and get feedback.</li>
            <li>Explore and discover new strategies and team compositions.</li>
            <li>Connect with fellow trainers and join discussions about Pokémon team building.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Pokémon Team Maker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
