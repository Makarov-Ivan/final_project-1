import React from "react";
import { NavbarItem } from "./NavbarItem";
import { NavbarContent } from "./navbarContent";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar'>
        {NavbarContent.map((item, index) => {
          return <NavbarItem {...item} key={index} />;
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
