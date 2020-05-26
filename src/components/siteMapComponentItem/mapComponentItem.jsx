import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ContextPath } from "../../context";

export const MapComponentItem = ({ title, content, url }) => {
  const { pathname } = useContext(ContextPath);
  if (pathname === url) {
    content += " (вы тут)";
  }
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
