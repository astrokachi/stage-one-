import React from 'react';
import zuri from '../assets/zuri.svg';
import I4G from '../assets/I4G.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer__con">
        <img src={zuri} alt="zuri" />
        <h3 className="footer__text">HNG Internship 9 Frontend Task</h3>
        <img src={I4G} alt="I4G" />
      </div>
    </footer>
  );
};

export default Footer;
