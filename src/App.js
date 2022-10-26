import React, { useEffect, useState } from 'react';
import './App.css';
import profilePic from './assets/profilePic.png';
import dots from './assets/dots.svg';
import shareIcon from './assets/Icon.svg';
import Link from './components/Link';
import links from './data';
import slack from './assets/slack.png';
import github from './assets/github.png';
import Footer from './components/Footer';

function App() {
  const [isHover, setIsHover] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="app">
      <div className="shareImg__con" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <svg viewBox="0 0 120 120">
          <circle cx="55" cy="55" r="50" className={`dashed ${isHover && 'fill'}`} />
          <foreignObject x="35" y="35" height="40px" width="40px">
            <img src={windowSize.innerWidth > 985 ? shareIcon : dots} alt="share" className="share__img" />
          </foreignObject>
        </svg>

        <div className={`tooltip ${isHover ? 'show' : 'hide'} ${windowSize.innerWidth < 985 && 'hide'}`}>
          <h4 className="tooltip__text">Share Link</h4>
          <div className="angle" />
        </div>
      </div>

      <section className="container">
        <div className="img__con">
          <img src={profilePic} alt="profile" id="profile__img" />
          <h3 id="twitter">Kachi_oz</h3>
          <h2 id="slack">astro</h2>
        </div>
      </section>

      <main>
        {links.map((link) => (
          <Link key={link.id} name={link.name} link={link.link} id={link?.id} />
        ))}

        <div className="icons">
          <img src={slack} alt="slack" className="slack" />
          <a href="https://github.com/astrokachi" target={'_blank'} rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
