import React from 'react';
import './App.css';
import profilePic from './assets/profile__img.png';
import shareIcon from './assets/Icon.svg';
import Link from './components/Link';
import links from './data';
import slack from './assets/slack.png';
import github from './assets/github.png';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="shareImg__con">
        <svg viewBox="0 0 120 120">
          <circle cx="55" cy="55" r="50" class="dashed" />
          <foreignObject x="35" y="35" height="40px" width="40px">
            <img src={shareIcon} alt="share" className="share__img" />
          </foreignObject>
        </svg>
      </div>

      <section className="container">
        <div className="img__con">
          <img src={profilePic} alt="profile" id="profile__img" />
          <h3 id="twitter">Annette Black</h3>
          <h2 id="slack">Ozoemena Kachi</h2>
        </div>
      </section>

      <main>
        {links.map((link) => (
          <Link key={link.id} name={link.name} link={link.link} />
        ))}

        <div className="icons">
          <img src={slack} alt="slack" />
          <img src={github} alt="github" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
