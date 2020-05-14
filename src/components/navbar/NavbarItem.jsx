import React from "react";
import { Link } from "react-router-dom";

export let NavbarItem = ({ link, content, style }) => {
  return (
    <li className={style ? style : "navbar__item"}>
      <Link to={link} className='navbar__link'>
        {content}
      </Link>
    </li>
  );
};
