import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ name, link, id, redirect }) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          id={id}
          target="_blank"
          rel="noreferrer"
          className="link__con"
        >
          <h3 className="name__text">{name}</h3>
        </a>
      ) : (
        <Link to={redirect} id={id} className="link__con">
          <h3 className="name__text">{name}</h3>
        </Link>
      )}
    </>
  );
};

export default Links;
