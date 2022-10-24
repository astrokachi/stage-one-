import React from 'react';

const Link = ({ name, link, id }) => {
  return (
      <a href={link} id={id} target="_blank" rel="noreferrer" className="link__con">
        <h3 className="name__text">{name}</h3>
      </a>

  );
};

export default Link;
