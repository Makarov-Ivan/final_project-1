import React from "react";
import { Link } from "react-router-dom";
export const MapComponentItem = ({ title, content, url }) => {
  return (
    <li className='siteMap__item'>
      <Link to={url} className='siteMap__link'>
        {title}
      </Link>
      <br />
      {content}
    </li>
  );
};
